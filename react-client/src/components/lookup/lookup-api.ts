const sampleFiltersData = [
  {
    FIELD_NAME: "WORK_CENTER_ID",
    DISPLAY_NAME: "Work Center",
  },
  {
    FIELD_NAME: "FACILITY_ID",
    DISPLAY_NAME: "Branch",
  },
  {
    FIELD_NAME: "ORG_ID",
    DISPLAY_NAME: "Segment",
  },
];

export const sampleLookupInput = {
  serviceUrl: {
    dropdown: "WildcardSearch/GetFields?fieldName=WORK_CENTER_ID",
    table: "WildcardSearch/GetDropdownValuesWorkCenter",
  },
  tableFields: [
    { header: "ID", field: "WORK_CENTER_ID" },
    { header: "Description", field: "WORK_CENTER_DESC" },
  ],
  label: "Work Center (Parent or Child)",
  isMultiSelect: true,
  selectedData: [],
  options: [],
  modelName: "WORK_CENTER_ID",
  styleclass: "col-md-2",
  dependentData: {
    ORG_ID: "",
    FACILITY_ID: "",
  },
};

export const sampleLookupValues = {
  SearchRecords: [
    {
      WORK_CENTER_ID: "S7",
      WORK_CENTER_DESC: "Steering Gear",
    },
    {
      WORK_CENTER_ID: "S113",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.13",
    },
    {
      WORK_CENTER_ID: "S114",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.14",
    },
    {
      WORK_CENTER_ID: "S115",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.15",
    },
    {
      WORK_CENTER_ID: "S116",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.16",
    },
    {
      WORK_CENTER_ID: "S117",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.17",
    },
    {
      WORK_CENTER_ID: "S118",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.18",
    },
    {
      WORK_CENTER_ID: "S119",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.19",
    },
    {
      WORK_CENTER_ID: "S120",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.20",
    },
    {
      WORK_CENTER_ID: "S121",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.21",
    },
    {
      WORK_CENTER_ID: "S122",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.22",
    },
    {
      WORK_CENTER_ID: "S123",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.23",
    },
    {
      WORK_CENTER_ID: "S124",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.24",
    },
    {
      WORK_CENTER_ID: "S125",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.25",
    },
    {
      WORK_CENTER_ID: "S126",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.26",
    },
    {
      WORK_CENTER_ID: "S127",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.27",
    },
    {
      WORK_CENTER_ID: "S128",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.28",
    },
    {
      WORK_CENTER_ID: "S129",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.29",
    },
    {
      WORK_CENTER_ID: "S130",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.30",
    },
    {
      WORK_CENTER_ID: "S131",
      WORK_CENTER_DESC: "S.P. Final Assy Line St.31",
    },
  ],
  IS_SHOW_ALL: false,
  StatusType: "SUCCESS",
  Message: "Only 20 records of 295 shown",
};

export const sampleItemIdLookupValues = {
  SearchRecords: [
    { ITEM_ID: "2374A0Q", ITEM_DESC: "Pallet rack support beam" },
    { ITEM_ID: "4821B7X", ITEM_DESC: "Plastic storage bin large" },
    { ITEM_ID: "9156C2M", ITEM_DESC: "Forklift safety reflector" },
    { ITEM_ID: "3048D9Z", ITEM_DESC: "Barcode label roll pack" },
    { ITEM_ID: "7762E1K", ITEM_DESC: "Heavy duty crate lid" },
    { ITEM_ID: "1289F3R", ITEM_DESC: "Warehouse picking trolley" },
    { ITEM_ID: "6530G8N", ITEM_DESC: "Steel shelving bracket set" },
    { ITEM_ID: "4417H5T", ITEM_DESC: "Bulk storage pallet tray" },
    { ITEM_ID: "2093J6V", ITEM_DESC: "Aisle marking floor tape" },
    { ITEM_ID: "8675K2L", ITEM_DESC: "Loading dock rubber guard" },
    { ITEM_ID: "3901M9P", ITEM_DESC: "Stackable container divider" },
    { ITEM_ID: "7482N4Q", ITEM_DESC: "Inventory audit checklist pad" },
    { ITEM_ID: "5620P7S", ITEM_DESC: "Carton sealing tape roll" },
    { ITEM_ID: "9813Q3W", ITEM_DESC: "Warehouse bin locator tag" },
    { ITEM_ID: "1147R6X", ITEM_DESC: "Metal storage rack panel" },
    { ITEM_ID: "6358S1Z", ITEM_DESC: "Pallet corner protector set" },
    { ITEM_ID: "4720T8A", ITEM_DESC: "Conveyor roller assembly" },
    { ITEM_ID: "8294U2C", ITEM_DESC: "Pick path guide signage" },
    { ITEM_ID: "5136V5E", ITEM_DESC: "Inventory staging pallet" },
    { ITEM_ID: "7602W9H", ITEM_DESC: "Small parts picking bin" },
  ],
  IS_SHOW_ALL: false,
  StatusType: "SUCCESS",
  Message: "Only 20 records of 295 shown",
};

export const getFilters = async (
): Promise<typeof sampleFiltersData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sampleFiltersData);
    }, 1000);
  });
};

export const getLookupValues = async (
  modelName: string,
): Promise<typeof sampleLookupValues | typeof sampleItemIdLookupValues> => {
  // This function would call the API to get the lookup values based on the filter and value
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(modelName.includes("ITEM") ? sampleItemIdLookupValues : sampleLookupValues);
    }, 1000);
  });
};
