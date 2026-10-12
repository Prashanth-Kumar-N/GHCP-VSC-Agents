import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { type AlertTableDataType } from "../sample-data";
import { tableKey, valueKey, pfepDupWCAssignmentColumns } from "../constants";

export function DuplicateWCAlertTable({
  data,
  isConcise,
  recordsKey = "MultipleAssignments",
  columns = pfepDupWCAssignmentColumns,
}: {
  data: AlertTableDataType;
  isConcise: boolean;
  recordsKey?: "MultipleAssignments" | "UnplannedItems";
  columns?: Array<Record<string, any>>;
}) {
  const records = data[recordsKey] ?? [];

  return (
    <div className="mt-4">
      <DataTable
        value={records}
        paginator={isConcise ? false : true}
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        scrollHeight="400px"
        scrollable
        className="p-datatable-sm"
        size="small"
        showGridlines
      >
        {columns.map((col) => (
          <Column
            key={col[valueKey]}
            field={col[valueKey]}
            header={col[tableKey]}
            headerStyle={{ backgroundColor: "#3e7fcb", color: "#ffffff" }}
            headerClassName="text-sm"
            bodyClassName="text-xs font-semibold"
          />
        ))}
      </DataTable>
    </div>
  );
}
