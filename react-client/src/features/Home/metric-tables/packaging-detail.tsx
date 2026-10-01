import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { tableKey, valueKey, packageDetailColumns } from "../constants";
import type { ContainerRecord } from "../sample-data";

export function PackagingDetailTable({
  data,
  isConcise,
}: {
  data: ContainerRecord[];
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
        resizableColumns
      >
        {packageDetailColumns.columns.map((col) => (
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
