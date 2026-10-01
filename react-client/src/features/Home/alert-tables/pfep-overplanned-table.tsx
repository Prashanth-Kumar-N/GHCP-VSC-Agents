import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  type AlertTableDataType,
} from "../sample-data";
import { pfepShortageColumns, tableKey, valueKey } from "../constants";

export function ShortageALertTable({
  data,
  isConcise,
}: {
  data: AlertTableDataType;
  isConcise: boolean;
}) {
  
  return (
    <div className="mt-4">
      {/** Datatable with colored header according to the current theme. */}
      <DataTable
        value={data.PFEPShortages}
        paginator={isConcise ? false : true}
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        scrollHeight="400px"
        scrollable
        className="p-datatable-sm"
        size="small"
        showGridlines
      >
        {pfepShortageColumns.map((col) => (
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
