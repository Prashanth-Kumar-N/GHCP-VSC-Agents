import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { MetricSkeleton } from "../../components/Skeletons/metric";
import { TableSkeleton } from "../../components/Skeletons/table";
import type {
  ContainerRecord,
  HomeDashboardData,
  ItemRecord,
} from "./sample-data";
import type { typesOfMetrics } from "./constants";
import { getMetricTableData } from "./api";
import { WeightsAndDimensionsTable } from "./metric-tables/weights-dimensions-table";
import { PackagingDetailTable } from "./metric-tables/packaging-detail";

const expandingSectionId = "metric-table-container";
const scrollToTable = () => {
  const tableElement = document.getElementById(expandingSectionId);
  if (tableElement) {
    setTimeout(() => tableElement.scrollIntoView({ behavior: "smooth" }), 1000);
  }
};

function isItemRecord(
  value: ItemRecord[] | ContainerRecord[],
): value is ItemRecord[] {
  return !!value && Array.isArray(value) && "ITEM_ID" in value[0];
}
function isContainerRecord(
  value: ItemRecord[] | ContainerRecord[],
): value is ContainerRecord[] {
  return !!value && Array.isArray(value) && "CONTAINER_SID" in value[0];
}

export default function Metrics({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: HomeDashboardData | null;
}) {
  const [conciseTable, setConciseTable] = useState<
    React.ReactNode | "loading" | null
  >(null);

  const [metricType, setMetricType] = useState<
    (typeof typesOfMetrics)[number] | null
  >(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setConciseTable(<TableSkeleton />);
      scrollToTable();
      const getTableDataForMetric = async (
        metricType: (typeof typesOfMetrics)[number],
      ): Promise<ItemRecord[] | ContainerRecord[]> =>
        await getMetricTableData(metricType);
      let component = null;
      if (metricType) {
        const data: Array<ItemRecord> | Array<ContainerRecord> =
          await getTableDataForMetric(
            metricType as (typeof typesOfMetrics)[number],
          );
        switch (true) {
          case metricType === "WeightDimension" && isItemRecord(data):
            component = (
              <>
              <WeightsAndDimensionsTable data={data} isConcise={true} />
              <div className="w-full bg-slate-50 flex items-center justify-end p-6">
                <Button label="View All records" size="small" link text severity="warning" icon="pi pi-chevron-right" iconPos="right" className="h-9 w-45" onClick={() => navigateToChildScreen("weights-dimensions")}/>
              </div>
              </>
            );
            break;
          case metricType === "PackagingDetail" && isContainerRecord(data):
            component = (
              <>
              <PackagingDetailTable data={data} isConcise={true} />
              <div className="w-full bg-slate-50 flex items-center justify-end p-6">
                <Button label="View All records" size="small" link text severity="warning" icon="pi pi-chevron-right" iconPos="right" className="h-9 w-45"  onClick={() => navigateToChildScreen("packaging-detail")}/>
              </div>
              </>
            );;
            break;
          default:
            console.log("No alert selected");
        }

        setConciseTable(component);
      }
    };
    if (metricType) {
      fetchData();
    } else {
      setConciseTable(null);
    }
  }, [metricType]);

  const metrics = [
    {
      title: "Weights & Dimensions",
      type: "WeightDimension",
      value: data?.WeightDimension || 0,
      icon: "pi pi-box",
      iconColor: "#4f8fd9",
    },
    {
      title: "Packaging Details",
      type: "PackagingDetail",
      value: data?.PackagingDetail || 0,
      icon: "pi pi-briefcase",
      iconColor: "#ff9f58",
    },
    {
      title: "Past Due Approvals",
      type: "PastDueApprovals",
      value: data?.PastDueApprovals || 0,
      icon: "pi pi-clock",
      iconColor: "#ff6f61",
    },
  ];

  const metricClicked = (metric: (typeof typesOfMetrics)[number]) => {
    let newMetric:(typeof typesOfMetrics)[number] |  null  = metric;
    if (metric === metricType) newMetric = null;
    setMetricType(newMetric);
  };

  const navigateToChildScreen = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(`/home/${path}`);
    }, 500);
  }

  return (
    <ExpandingSection expandableContent={conciseTable}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((metric, i) => {
          if (isLoading) return <MetricSkeleton key={i} />;
          return (
            <Card
              key={metric.title}
              className="
            bg-slate-100
            border
            border-blue-300
            cursor-pointer
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-lg
            shadow-none
            
          "
              onClick={() =>
                metricClicked(metric.type as (typeof typesOfMetrics)[number])
              }
            >
              <div className="flex items-center justify-between">
                {/* Left: Text */}
                <div>
                  <div className="text-sm font-semibold text-slate-600">
                    {metric.title}
                  </div>
                  <div className="mt-2 text-4xl font-bold text-slate-900">
                    {metric.value}
                  </div>
                </div>

                {/* Right: Icon */}
                <i
                  className={`pi ${metric.icon}`}
                  style={{
                    fontSize: "3rem",
                    color: metric.iconColor,
                    opacity: 0.85,
                  }}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </ExpandingSection>
  );
}
