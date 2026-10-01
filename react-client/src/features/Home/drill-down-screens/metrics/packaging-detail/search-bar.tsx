import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import { OverlayPanel } from "primereact/overlaypanel";
import Lookup from "../../../../../components/lookup/Lookup";
import React, { useContext, useRef, useState } from "react";
import HomeContext from "../../../homeContext";
import { weightsDimensionsWildCards } from "../../../constants";

export interface SearchState {
  CONTAINER_CODE: string;
  CONTAINER_CATEGORY: string;
  ORG_ID: string;
  FACILITY_ID: string;
  SUPPLIER_ID: string[];
}

export const SearchBar = ({
  search,
  setSearch,
  onSearchClick,
}: {
  search: SearchState;
  setSearch: React.Dispatch<React.SetStateAction<SearchState>>;
  onSearchClick: () => void;
}) => {
  const [lookupOpen, setLookupOpen] = useState<boolean>(false);
  const [supplierOptions, setSupplierOptions] = useState<any[]>([]);
  const lookupRef = useRef<OverlayPanel>(null);
  const { dropDownData } = useContext(HomeContext);

  /* const openLookup = (e: React.MouseEvent<HTMLButtonElement>) => {
    lookupRef.current?.toggle(e);
    setLookupOpen(!lookupOpen);
  }; */

  const closeLookup = () => {
    lookupRef.current?.hide();
    setLookupOpen(false);
  };

  const lookupRecordsSelected = (records: any[]) => {
    setSupplierOptions(records);
    setSearch((prev) => ({
      ...prev,
      SUPPLIER_ID: records.map((r) => r.SUPPLIER_ID),
    }));
    lookupRef.current?.hide();
    setLookupOpen(false);
  };

  return (
    <div className="px-4 py-6 w-5/6 sm:px-16 min-w-[300px]">
      <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 shadow-sm border-t-amber-600 border-t-2">
        <FloatLabel className="flex-1 w-full min-w-[200px]">
          <InputText
            id="container_code"
            className="w-full p-inputtext-sm flex-5 p-3 h-10"
            value={search.CONTAINER_CODE}
            onChange={(e) =>
              setSearch((prev) => ({ ...prev, CONTAINER_CODE: e.target.value }))
            }
          />
          <label htmlFor="container_code" className="text-sm">
            Container Code
          </label>
        </FloatLabel>
        <FloatLabel className="flex-1 w-full min-w-[200px]">
          <InputText
            id="container_category"
            className="w-full p-inputtext-sm flex-5 p-3 h-10"
            value={search.CONTAINER_CATEGORY}
            onChange={(e) =>
              setSearch((prev) => ({
                ...prev,
                CONTAINER_CATEGORY: e.target.value,
              }))
            }
          />
          <label htmlFor="container_category" className="text-sm">
            Container Category
          </label>
        </FloatLabel>
        <FloatLabel className="flex-1 w-full min-w-[200px]">
          <Dropdown
            id="org_id_dd"
            className="p-inputtext-sm rounded-full border-gray-200 bg-gray-50 w-full p-3 h-10"
            optionValue="ORG_ID"
            optionLabel="ORG_ID"
            options={dropDownData?.Segment ?? []}
            value={search.ORG_ID}
            onChange={(e) =>
              setSearch((prev) => ({ ...prev, ORG_ID: e.value }))
            }
          ></Dropdown>
          <label htmlFor="org_id_dd" className="text-sm">
            Select Organization
          </label>
        </FloatLabel>
        <FloatLabel className="flex-1 w-full min-w-[200px]">
          <Dropdown
            id="facility_id_dd"
            className="p-inputtext-sm rounded-full border-gray-200 bg-gray-50 w-full p-3 h-10"
            optionValue="FACILITY_ID"
            optionLabel="FACILITY_ID"
            options={dropDownData?.Warehouse ?? []}
            value={search.FACILITY_ID}
            onChange={(e) =>
              setSearch((prev) => ({ ...prev, FACILITY_ID: e.value }))
            }
          ></Dropdown>
          <label htmlFor="facility_id_dd" className="text-sm">
            Select Facility
          </label>
        </FloatLabel>
        <div className="p-inputgroup flex-1 rounded-full">
          <Button
            icon="pi pi-search"
            className="p-button-warning p-button-sm outline-none h-10"
            size="small"
            onClick={(e) => lookupRef?.current?.toggle(e)}
          />
          <FloatLabel className="flex-1 flex flex-row flex-nowrap">
            <MultiSelect
              id="supplier_id"
              value={search.SUPPLIER_ID}
              onChange={(e) => {
                console.log(supplierOptions, search, e);
                setSearch((prev) => ({ ...prev, SUPPLIER_ID: e.value }));
              }}
              optionValue="SUPPLIER_ID"
              optionLabel="SUPPLIER_ID"
              options={supplierOptions}
              className="p-inputtext-sm border-gray-200 bg-gray-50 w-11/12 outline-none rounded-r-full h-10"
              display="chip"
              maxSelectedLabels={2}
              disabled={lookupOpen}
            ></MultiSelect>
            <label htmlFor="supplier_id" className="text-sm">
              Supplier
            </label>
          </FloatLabel>
          <OverlayPanel
            ref={lookupRef}
            showCloseIcon={true}
            dismissable={false}
            closeIcon="pi pi-times"
            id="lookup_panel"
            className="w-1/3"
            pt={{ content: { className: "!p-0" } }}
          >
            <div className="flex flex-col gap-0 items-center justify-center">
              <h4 className="w-full text-lg font-bold px-4 py-3 bg-gray-100 border-b border-gray-300 rounded-t-lg">
                Wildcard search
              </h4>
              <div className="w-full p-4 ">
                <Lookup
                  {...weightsDimensionsWildCards[0].wildCardConfig}
                  options={supplierOptions}
                  onSelect={lookupRecordsSelected}
                  onHide={closeLookup}
                />
              </div>
            </div>
          </OverlayPanel>
        </div>
        <Button
          label="Search"
          className="p-button-rounded p-button-sm min-w-[100px]"
          onClick={onSearchClick}
        />
      </div>
    </div>
  );
};
