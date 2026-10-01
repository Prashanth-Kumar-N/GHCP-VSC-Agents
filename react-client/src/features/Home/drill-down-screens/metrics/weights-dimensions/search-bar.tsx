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
  SUPPLIER_NAME: string;
  ORG_ID: string;
  FACILITY_ID: string;
  ITEM_ID: string[];
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
  const [itemOptions, setItemOptions] = useState<any[]>([]);
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
    setItemOptions(records);
    setSearch((prev) => ({
      ...prev,
      ITEM_ID: records.map((r) => r.ITEM_ID),
    }));
    lookupRef.current?.hide();
    setLookupOpen(false);
  };

  return (
    <div className="px-4 py-5 w-5/6 sm:px-16 min-w-[300px]">
      <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 shadow-sm border-t-amber-600 border-t-2">
        <FloatLabel className="flex-1 w-full min-w-[200px]">
          <InputText
            className="w-full p-inputtext-sm flex-5 p-3 h-10"
            value={search.SUPPLIER_NAME}
            onChange={(e) =>
              setSearch((prev) => ({ ...prev, SUPPLIER_NAME: e.target.value }))
            }
          />
          <label htmlFor="org_id_dd" className="text-sm">Supplier Name</label>
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
          <label htmlFor="org_id_dd" className="text-sm">Select Organization</label>
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
          <label htmlFor="facility_id_dd" className="text-sm">Select Facility</label>
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
              value={search.ITEM_ID}
              onChange={(e) =>{
                console.log(itemOptions, search, e);
                setSearch((prev) => ({ ...prev, ITEM_ID: e.value }))
              }
              }
              optionValue="ITEM_ID"
              optionLabel="ITEM_ID"
              options={itemOptions}
              className="p-inputtext-sm border-gray-200 bg-gray-50 w-11/12 outline-none rounded-r-full h-10"
              display="chip"
              maxSelectedLabels={2}
              disabled={lookupOpen}
            ></MultiSelect>
            <label htmlFor="item_input" className="text-sm">Item</label>
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
                  options={itemOptions}
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
