import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { type ItemRecord } from "../sample-data";
import { tableKey, valueKey, weightsDimensionsColumns } from "../constants";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";

const headerGroup = (
  <ColumnGroup>
    <Row>
      {[...weightsDimensionsColumns.columns.slice(0, -3)].map((col) => {
        return (
          <Column
            header={col[tableKey]}
            rowSpan={2}
            colSpan={1}
            headerStyle={{ backgroundColor: "#3e7fcb", color: "#ffffff" }}
            headerClassName="text-sm"
          />
        );
      })}
      <Column
        header="ERP"
        colSpan={6}
        align="center"
        headerStyle={{ backgroundColor: "#ff6f61", color: "#fff" }}
        headerClassName="text-sm"
      />
      <Column
        header="PFEP"
        colSpan={6}
        align="center"
        headerStyle={{ backgroundColor: "#ff9f58", color: "#fff" }}
        headerClassName="text-sm"
      />
    </Row>
    <Row>
      {[
        ...weightsDimensionsColumns.groupedColumns.ERP,
        ...weightsDimensionsColumns.groupedColumns.PFEP,
      ].map((col) => {
        return (
          <Column
            header={col[tableKey]}
            headerClassName="w-[150px] text-white text-sm"
            headerStyle={{ backgroundColor: "#3e7fcb", color: "#ffffff" }}
            bodyClassName="w-[150px] text-xs truncate font-semibold"
            align="center"
          />
        );
      })}
    </Row>
  </ColumnGroup>
);
export function WeightsAndDimensionsTable({
  data,
  isConcise,
}: {
  data: ItemRecord[];
  isConcise: boolean;
}) {
  return (
    <div className={`isConcise ? 'mt-4' : 'mt-0'`}>
      {/** Datatable with colored header according to the current theme. */}
      <DataTable
        value={data}
        paginator={isConcise ? false : true}
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        scrollHeight={isConcise ? "400px" : "750px"}
        scrollable
        size={isConcise ? "small" : "normal"}
        showGridlines
        headerColumnGroup={headerGroup}
        tableStyle={{ tableLayout: "fixed" }}
        resizableColumns
      >
        {[
          ...weightsDimensionsColumns.columns.slice(0, -3),
          ...weightsDimensionsColumns.groupedColumns.ERP,
          ...weightsDimensionsColumns.groupedColumns.PFEP,
        ].map((col) => (
          <Column
            key={col[valueKey]}
            field={col[valueKey]}
            header={col[tableKey]}
            bodyClassName="max-w-[100px] truncate text-xs font-semibold max-h-10" 
            headerClassName="text-sm"
            body={(row) => (
              <span
                className="max-w-[100px] truncate block text-xs font-semibold text-center"
                title={row[col[valueKey]]}
              >
                {row[col[valueKey]]}
              </span>
            )}
          />
        ))}
      </DataTable>
    </div>
  );
}
