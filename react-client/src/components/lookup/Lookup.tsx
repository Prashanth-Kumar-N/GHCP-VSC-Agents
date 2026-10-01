import { SelectButton } from "primereact/selectbutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useEffect, useState } from "react";
import {
  getFilters,
  sampleLookupInput,
  getLookupValues,
  sampleLookupValues,
  sampleItemIdLookupValues,
} from "./lookup-api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { Divider } from "primereact/divider";
import { Message } from "primereact/message";

type LookupProps = typeof sampleLookupInput & {
  onSelect: (records: any[]) => void;
  onHide: () => void;
};

export default function Lookup(props: LookupProps) {
  const [filterData, setFilterData] = useState<{
    options: any[];
    selectedFilter: string;
  }>({ options: [], selectedFilter: "" });
  const [inputValue, setInputValue] = useState<string>("");
  const [lookupRecords, setLookupRecords] = useState<typeof sampleLookupValues | typeof sampleItemIdLookupValues>(
    { SearchRecords: [], IS_SHOW_ALL: false, StatusType: "", Message: "" },
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedRecords, setSelectedRecords] = useState<any[]>([]);
  const [isTableLoading, setIsTableLoading] = useState<boolean>(false);
  const [inputTouched, setInputTouched] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const data: { FIELD_NAME: string; DISPLAY_NAME: string }[] =
        await getFilters(props.serviceUrl.dropdown);
      setFilterData({
        options: data,
        selectedFilter: data.length > 0 ? data[0].FIELD_NAME : "",
      });
      setIsLoading(false);
    };
    fetchData();
  }, [props.serviceUrl.dropdown]);

  const getLookupRecords = async () => {
    if (inputValue.trim().length < 2) {
      setInputTouched(true);
      return;
    }
    setIsTableLoading(true);
    const lookupRecords: typeof sampleLookupValues | typeof sampleItemIdLookupValues = await getLookupValues(
      props.serviceUrl.table,
      filterData.selectedFilter,
      inputValue,
      props.modelName,
    );
    setLookupRecords(lookupRecords);
    setIsTableLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-80">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 justify-center w-full items-center">
      <div className="flex flex-col gap-2 items-center">
        <SelectButton
          pt={{ button: { className: "!text-sm !px-10 !py-2 !p-button-lg" } }}
          value={filterData.selectedFilter}
          onChange={(e) =>
            setFilterData({ ...filterData, selectedFilter: e.value })
          }
          optionLabel="DISPLAY_NAME"
          optionValue="FIELD_NAME"
          options={filterData.options}
        />
        <Divider />
      </div>
      <div className="flex gap-2 mt-0 h-9">
        <InputText
          className="w-full p-inputtext-sm flex-5"
          placeholder={`Search by ${filterData.options.find((o) => o.FIELD_NAME === filterData.selectedFilter)?.DISPLAY_NAME}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setInputTouched(true)}
          onKeyDown={(e) => e.key === "Enter" && getLookupRecords()}
          invalid={inputTouched && inputValue.length < 2}
        />
        <Button
          icon="pi pi-search"
          aria-label="Search"
          onClick={getLookupRecords}
        />
      </div>
      {isTableLoading ? (
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="var(--surface-ground)"
          animationDuration=".5s"
        />
      ) : (
        <>
          <DataTable
            value={lookupRecords.SearchRecords}
            className="w-full"
            selectionMode="multiple"
            selection={selectedRecords}
            onSelectionChange={(e) =>setSelectedRecords(e.value)}
            dataKey={props.modelName}
            dragSelection
            scrollable
            scrollHeight="15vw"
            showGridlines
            tableStyle={{ minHeight: "200px" }}
          >
            {props.tableFields.map((field) => (
              <Column
                key={field.field}
                field={field.field}
                header={field.header}
              />
            ))}
          </DataTable>
          {lookupRecords.Message && (
            <Message severity="info" text={lookupRecords.Message} />
          )}
        </>
      )}

      <div className="w-full flex justify-end gap-4">
        <Button
          label="Done"
          className="p-button-sm p-button-rounded mt-2"
          disabled={selectedRecords.length === 0}
          onClick={() => {
            props.onSelect(selectedRecords);
          }}
        />
        <Button
          label="Cancel"
          className="p-button-sm p-button-rounded mt-2 ml-2"
          outlined
          severity="danger"
          onClick={props.onHide}
        />
      </div>
    </div>
  );
}
