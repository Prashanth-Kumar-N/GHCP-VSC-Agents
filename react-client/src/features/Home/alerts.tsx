import PfepShortageAlert from "./alerts/pfep-overplanned-alert";
import PfepRequiredAlert from "./alerts/pfep-required-alert";
import MOQCeilingAlert from "./alerts/moq-ceiling-alert";
import ERPAlert from "./alerts/erp-alert";
import DemandGapsAlert from "./alerts/demand-gaps-alert";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";
import { legendData, typesOfAlerts } from "./constants";
import React, { useEffect, useState, useMemo } from "react";
import { DemandGapsTable } from "./alert-tables/demand-gaps-table";
import { ERPDiscrepancyTable } from "./alert-tables/erp-alert-table";
import { ShortageALertTable } from "./alert-tables/pfep-overplanned-table";
import { MOQCeilingTable } from "./alert-tables/moq-ceiling-table";
import { PFEPRequiredTable } from "./alert-tables/pfep-required-table";
import { DuplicateWCAlertTable } from "./alert-tables/duplicate-WC-table";
import { getTableData } from "./api";
import type { AlertTableDataType, HomeDashboardData } from "./sample-data";
import DuplicateWCAlert from "./alerts/duplicate-WC-alert";
import { TableSkeleton } from "../../components/Skeletons/table";

import {
  DndContext,
  closestCenter,
  type DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { Button } from "primereact/button";

const expandingSectionId = "table-container";
const scrollToTable = () => {
  const tableElement = document.getElementById(expandingSectionId);
  if (tableElement) {
    setTimeout(() => tableElement.scrollIntoView({ behavior: "smooth" }), 1000);
  }
};

const allAlerts = [
  "pfepShortage",
  "pfepRequired",
  "moqCeiling",
  "erp",
  "demandGaps",
  "duplicateWorkcenter",
];

const getAlertConfig = (alert: string) => {
  const componentMap: Record<
    string,
    {
      component: React.ComponentType<any>;
      name: string;
      key?: keyof HomeDashboardData;
    }
  > = {
    pfepShortage: {
      component: PfepShortageAlert,
      name: "PFEP Over/Under Planned",
      key: "ShortageAlertGraphs",
    },
    pfepRequired: {
      component: PfepRequiredAlert,
      name: "PFEP Required",
      key: "RequiredAlertGraphs",
    },
    moqCeiling: {
      component: MOQCeilingAlert,
      name: "MOQ Ceiling",
      key: "MOQAlertGraphs",
    },
    erp: {
      component: ERPAlert,
      name: "ERP Discrepancy",
      key: "ERPAlertGraphs",
    },
    demandGaps: {
      component: DemandGapsAlert,
      name: "Demand Gaps",
      key: "DemandGap",
    },
    duplicateWorkcenter: {
      component: DuplicateWCAlert,
      name: "Duplicate Workcenter Assignment",
      key: "MultipleAssignmentCount",
    },
  };

  return componentMap[alert] ?? null;
};

export default function Alerts({
  isLoading = false,
  data,
}: {
  isLoading: boolean;
  data?: HomeDashboardData | null;
}) {
  const [alertType, setAlertType] = useState<
    (typeof typesOfAlerts)[number] | null
  >(null);
  const [conciseTable, setConciseTable] = useState<
    React.ReactNode | "loading" | null
  >(null);

  const [alerts, setAlerts] = useState<string[]>(
    AlertLocalStorageUtility.getAlerts() || [...allAlerts.slice()],
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  useEffect(() => {
    const fetchData = async () => {
      setConciseTable(<TableSkeleton />);
      scrollToTable();
      const getTableDataForAlert = async (
        alertType: (typeof typesOfAlerts)[number],
      ) => await getTableData(alertType);
      let component = null;
      const data: AlertTableDataType = await getTableDataForAlert(
        alertType as (typeof typesOfAlerts)[number],
      );
      if (
        alertType === "pfepRequired" &&
        data.type === "pfep_required_alerts"
      ) {
        component = (
          <>
            <PFEPRequiredTable data={data} isConcise={true} />
            <div className="w-full bg-slate-50 flex items-center justify-end p-6">
              <Button
                label="View All records"
                size="small"
                link
                text
                severity="warning"
                icon="pi pi-chevron-right"
                iconPos="right"
                className="h-9 w-45"
              />
            </div>
          </>
        );
      } else if (
        alertType === "duplicateWorkcenter" &&
        data.type === "pfep_duplicate_workcenter_assignment"
      ) {
        component = (
          <>
            <DuplicateWCAlertTable data={data} isConcise={true} />
            <div className="w-full bg-slate-50 flex items-center justify-end p-6">
              <Button
                label="View All records"
                size="small"
                link
                text
                severity="warning"
                icon="pi pi-chevron-right"
                iconPos="right"
                className="h-9 w-45"
              />
            </div>
          </>
        );
      } else if (
        alertType === "pfepShortage" &&
        data.type === "pfep_shortage_alerts"
      ) {
        component = (
          <>
            <ShortageALertTable data={data} isConcise={true} />
            <div className="w-full bg-slate-50 flex items-center justify-end p-6">
              <Button
                label="View All records"
                size="small"
                link
                text
                severity="warning"
                icon="pi pi-chevron-right"
                iconPos="right"
                className="h-9 w-45"
              />
            </div>
          </>
        );
      } else if (
        alertType === "moqCeiling" &&
        data.type === "pfep_moq_ceiling_alerts"
      ) {
        component = (
          <>
            <MOQCeilingTable data={data} isConcise={true} />
            <div className="w-full bg-slate-50 flex items-center justify-end p-6">
              <Button
                label="View All records"
                size="small"
                link
                text
                severity="warning"
                icon="pi pi-chevron-right"
                iconPos="right"
                className="h-9 w-45"
              />
            </div>
          </>
        );
      } else if (
        alertType === "erp" &&
        data.type === "pfep_erp_alerts"
      ) {
        component = (
          <>
            <ERPDiscrepancyTable data={data} isConcise={true} />
            <div className="w-full bg-slate-50 flex items-center justify-end p-6">
              <Button
                label="View All records"
                size="small"
                link
                text
                severity="warning"
                icon="pi pi-chevron-right"
                iconPos="right"
                className="h-9 w-45"
              />
            </div>
          </>
        );
      } else if (
        alertType === "demandGaps" &&
        data.type === "pfep_demand_gaps"
      ) {
        component = (
          <>
            <DemandGapsTable data={data} isConcise={true} />
            <div className="w-full bg-slate-50 flex items-center justify-end p-6">
              <Button
                label="View All records"
                size="small"
                link
                text
                severity="warning"
                icon="pi pi-chevron-right"
                iconPos="right"
                className="h-9 w-45"
              />
            </div>
          </>
        );
      } else {
        console.log("No alert selected");
      }

      setConciseTable(component);
    };
    if (alertType) {
      fetchData();
    }
  }, [alertType]);

  useEffect(() => {
    if (AlertLocalStorageUtility.getAlerts() === null) {
      AlertLocalStorageUtility.setAlerts(alerts);
    }
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (
      !over ||
      active.id === over.id ||
      typeof active.id !== "string" ||
      typeof over.id !== "string"
    )
      return;

    const oldIndex = alerts.indexOf(active.id);
    const newIndex = alerts.indexOf(over.id);

    setAlerts((alerts) => arrayMove(alerts, oldIndex, newIndex));
  };

  const getExcludedAlerts = () => {
    return allAlerts.filter((a) => alerts.indexOf(a) === -1);
  };

  const addAlertToView = (alert: string) => {
    const alerts = AlertLocalStorageUtility.addAlert(alert);
    setAlerts([...alerts]);
  };

  const removeFromView = (alert: string) => {
    const alerts = AlertLocalStorageUtility.removeAlert(alert);
    setAlerts([...alerts]);
  };

  return (
    <ExpandingSection
      title="Alerts"
      headerChildren={<CustomLegend payload={legendData} />}
      expandableContent={conciseTable}
      scrollToID={expandingSectionId}
    >
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
        <div className="flex flex-row justify-around flex-wrap gap-6 gap-y-12 mb-3">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={alerts} strategy={rectSortingStrategy}>
              <>
                {alerts.map((alert) => (
                  <SortableItem
                    key={alert}
                    alert={alert}
                    setAlertType={setAlertType}
                    isLoading={isLoading}
                    data={data}
                    removeFromView={removeFromView}
                  />
                ))}
              </>
            </SortableContext>
          </DndContext>
        </div>
      </div>
      {allAlerts.length === alerts.length ? null : (
        <div className="flex flex-col gap-2 justify-center items-center mt-10 ">
          <p className="font-medium">Excluded alerts:</p>
          <div className="flex flex-wrap gap-2 border-2 border-slate-200 p-3 rounded-lg w-full justify-center">
            {getExcludedAlerts().map((a) => (
              <button
                key={a}
                className="group h-8 min-w-28 relative py-2 px-3 text-xs border border-slate-200 rounded-lg bg-red-400 hover:bg-red-200 text-white font-medium"
                onClick={() => addAlertToView(a)}
              >
                {getAlertConfig(a).name}
                <span className="hidden py-2 px-3 group-hover:flex absolute h-8 w-full bg-green-400 top-0 left-0 rounded-lg cursor-pointer justify-center items-center text-xs font-medium">
                  <i
                    className="pi pi-plus pr-1.5"
                    style={{ fontSize: "10px", fontWeight: "bold" }}
                  ></i>
                  Add to View
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </ExpandingSection>
  );
}

export const CustomLegend = ({ payload }: any) => (
  <ul className="flex gap-3 text-sm sm:gap-4">
    {payload.map((item: any) => (
      <li key={item.dataKey} className="flex items-center gap-2">
        <span
          className="h-3 w-3 rounded"
          style={{ backgroundColor: item.color }}
        />
        {item.value}
      </li>
    ))}
  </ul>
);

const SortableItem = ({
  alert,
  setAlertType,
  isLoading,
  data,
  removeFromView,
}: {
  alert: string;
  setAlertType: (value: (typeof typesOfAlerts)[number]) => void;
  isLoading: boolean;
  data?: HomeDashboardData | null;
  removeFromView: (a: string) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: alert,
    animateLayoutChanges: ({ isDragging }) => !isDragging,
  });

  const style = {
    transform: transform ? CSS.Transform.toString(transform) : undefined,
    transition: isDragging ? undefined : transition,
    position: isDragging ? ("relative" as const) : undefined,
    zIndex: isDragging ? 999 : undefined,
    willChange: "transform",
    transformStyle: "preserve-3d" as const,
    backfaceVisibility: "hidden" as const,
  };

  const Alert = useMemo(() => getAlertConfig(alert), [alert]);

  if (!Alert) return null;

  return (
    <div
      className="group relative flex flex-col bg-white border border-blue-300 px-4 py-3 rounded-md shadow-sm hover:bg-slate-50 "
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Button
        style={{
          position: "absolute",
          top: "-0.75rem",
          right: "-0.75rem",
          width: "24px",
          height: "24px",
          minWidth: "24px",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        pt={{ icon: { style: { fontSize: "10px" } } }}
        size="small"
        icon="pi pi-times"
        rounded
        severity="danger"
        aria-label="Cancel"
        className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:pointer-events-none sm:group-hover:pointer-events-auto transition-opacity duration-200"
        onClick={() => removeFromView(alert)}
        title="Remove from View"
      />
      <Alert.component
        onClick={setAlertType}
        isLoading={isLoading}
        isDragging={isDragging}
        data={Alert.key ? data?.[Alert.key] || null : null}
      />
      {!isLoading && (
        <p
          className={`group h-10 text-slate-500 hover:text-slate-700 text-xs font-bold text-center pt-0.5 mt-4 select-none  hover:bg-slate-100 rounded transition-colors border border-transparent hover:border-slate-300 flex justify-between items-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          {...listeners}
        >
          <span className="text-slate-50 group-hover:text-slate-700 ml-1">
            ⋮⋮
          </span>
          <span>{Alert.name}</span>
          <span className="text-slate-50 group-hover:text-slate-700 mr-1">
            ⋮⋮
          </span>
        </p>
      )}
    </div>
  );
};

const AlertLocalStorageUtility = {
  localStorageKey: "dashboard_alerts",
  getAlerts: (): string[] | null => {
    const stored = localStorage.getItem(
      AlertLocalStorageUtility.localStorageKey,
    );
    return stored ? JSON.parse(stored) : null;
  },
  setAlerts: (alerts: string[]) => {
    localStorage.setItem(
      AlertLocalStorageUtility.localStorageKey,
      JSON.stringify(alerts),
    );
  },

  addAlert: (alert: string): string[] => {
    let alerts = AlertLocalStorageUtility.getAlerts();
    alerts = alerts ?? [];
    if (!alerts.includes(alert)) {
      alerts.push(alert);
    }
    AlertLocalStorageUtility.setAlerts(alerts);
    return [...alerts];
  },

  removeAlert: (alert: string): string[] => {
    let alerts = AlertLocalStorageUtility.getAlerts();
    alerts = alerts ?? [];
    alerts = alerts.filter((a) => a !== alert);
    AlertLocalStorageUtility.setAlerts(alerts);
    return [...alerts];
  },
};
