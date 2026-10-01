import { WeightsAndDimensionsTable } from "../../../metric-tables/weights-dimensions-table";
import { weightDimesnsionSample } from "../../../sample-data";
import { SearchBar } from "./search-bar";

export const WeightsDimensionTable = () => {
  return (
    <>
      <SearchBar
        search={{ SUPPLIER_NAME: "", ITEM_ID: [], ORG_ID: "", FACILITY_ID: "" }}
        setSearch={() => {}}
        onSearchClick={() => {}}
      />
      <div className="mx-8 mb-2 border border-blue-300 rounded-lg shadow-sm p-4">
        <WeightsAndDimensionsTable
          isConcise={false}
          data={weightDimesnsionSample()}
        />
      </div>
    </>
  );
};
