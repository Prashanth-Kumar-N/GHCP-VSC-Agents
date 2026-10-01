import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { MultiSelect } from "primereact/multiselect";
import { OverlayPanel } from "primereact/overlaypanel";
import Lookup from "../../components/lookup/Lookup";
import type { HomeDashboardData } from "./sample-data";
import React, { useRef, useState } from "react";
import { workCenterWildCardConfig } from "./constants";

export interface SearchState {
    ORG_ID: string;
    FACILITY_ID: string;
    WORK_CENTER:  string[];
}

export const SearchBar = ({ data, search, setSearch, onSearchClick }: { data: HomeDashboardData; search: SearchState; setSearch: React.Dispatch<React.SetStateAction<SearchState>>; onSearchClick: () => void }) => {
    const [lookupOpen, setLookupOpen] = useState<boolean>(false);
    const [workCenterOptions, setWorkCenterOptions] = useState<any[]>([]);
    const lookupRef = useRef<OverlayPanel>(null);

    /* const openLookup = (e: React.MouseEvent<HTMLButtonElement>) => {
        lookupRef.current?.toggle(e);
        setLookupOpen(!lookupOpen);
    }; */

    const closeLookup = () => {
        lookupRef.current?.hide();
        setLookupOpen(false);
    }

    const lookupRecordsSelected = (records: any[]) => {
        setWorkCenterOptions(records);
        setSearch(prev => ({ ...prev, WORK_CENTER: records.map(r => (r.WORK_CENTER_ID)) }));
        lookupRef.current?.hide();
        setLookupOpen(false);
    }

    return (
        <div className="px-4 py-8 w-5/6 sm:px-16 min-w-[300px]">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-center flex-wrap gap-4 shadow-sm border-t-amber-600 border-t-2">
                <FloatLabel className="flex-1 w-full min-w-[200px]">
                    <Dropdown
                        id="org_id_dd"
                        className="p-inputtext-sm rounded-full border-gray-200 bg-gray-50 w-full"
                        optionValue="ORG_ID"
                        optionLabel="ORG_ID"
                        options={data?.Segment ?? []}
                        value={search.ORG_ID}
                        onChange={(e) => setSearch(prev => ({ ...prev, ORG_ID: e.value }))}
                    ></Dropdown>
                    <label htmlFor="org_id_dd">Select Organization</label>
                </FloatLabel>
                <FloatLabel className="flex-1 w-full min-w-[200px]">
                    <Dropdown
                        id="facility_id_dd"
                        className="p-inputtext-sm rounded-full border-gray-200 bg-gray-50 w-full"
                        optionValue="FACILITY_ID"
                        optionLabel="FACILITY_ID"
                        options={data?.Warehouse ?? []}
                        value={search.FACILITY_ID}
                        onChange={(e) => setSearch(prev => ({ ...prev, FACILITY_ID: e.value }))}
                    ></Dropdown>
                    <label htmlFor="facility_id_dd">Select Facility</label>
                </FloatLabel>
                <div className="p-inputgroup flex-1 rounded-full">
                    <Button icon="pi pi-search" className="p-button-warning p-button-sm outline-none" size="small" onClick={e => lookupRef?.current?.toggle(e)} />
                    <FloatLabel className="flex-1 flex flex-row flex-nowrap">
                        <MultiSelect
                            value={search.WORK_CENTER}
                            onChange={(e) => setSearch(prev => ({ ...prev, WORK_CENTER: e.value }))}
                            optionValue="WORK_CENTER_ID"
                            optionLabel="WORK_CENTER_ID"
                            options={workCenterOptions}
                            className="p-inputtext-sm border-gray-200 bg-gray-50 w-11/12 outline-none rounded-r-full"
                            display="chip"
                            maxSelectedLabels={2}
                            disabled={lookupOpen}>
                        </MultiSelect>
                        <label htmlFor="work_center_input">Work Center</label>
                    </FloatLabel>
                    <OverlayPanel 
                        ref={lookupRef} 
                        showCloseIcon={true} 
                        dismissable={false} 
                        closeIcon="pi pi-times" 
                        id="lookup_panel" 
                        className="w-1/3"
                        pt={{ content: { className: '!p-0' } }}>
                        <div className="flex flex-col gap-0 items-center justify-center" >
                            <h4 className="w-full text-lg font-bold px-4 py-3 bg-gray-100 border-b border-gray-300 rounded-t-lg">Wildcard search</h4>
                            <div className="w-full p-4 ">
                                <Lookup {...workCenterWildCardConfig} onSelect = {lookupRecordsSelected} onHide={closeLookup} />
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
    )
}