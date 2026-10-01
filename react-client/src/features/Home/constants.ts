export const wildCardCollectionKeys = {
  WORK_CENTER_ID: "WorkCenterList",
};

export const workCenterWildCardConfig = {
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

export const barColors = ["#4f8fd9", "#ffdd57", "#ff9f58", "#ff6f61"]; // Brighter elegant blue, sunny yellow, coral orange, vivid red
export const legendData = [
  { dataKey: ">4 Weeks", value: ">4 Weeks", color: "#ff6f61" },
  { dataKey: "2-4 Weeks", value: "2-4 Weeks", color: "#ff9f58" },
  { dataKey: "<2 Weeks", value: "<2 Weeks", color: "#ffdd57" },
  { dataKey: "BP New", value: "BP New", color: "#4f8fd9" },
];

export const typesOfAlerts = [
  "pfepShortage",
  "pfepRequired",
  "moqCeiling",
  "erp",
  "demandGaps",
  "duplicateWorkcenter",
] as const;

// ------------------------------------------------------------------------------------------------------------
export const tableKey = "displayName";
export const valueKey = "value";
export const droDownAPIKey = "APIkey";

/* alert tables columns start*/

export const pfepShortageColumns = [
  { [tableKey]: "Consuming Location", [valueKey]: "WORK_CENTER_ID" },
  { [tableKey]: "Item Id", [valueKey]: "ITEM_ID" },
  { [tableKey]: "Item Description", [valueKey]: "ITEM_DESC" },
  { [tableKey]: "Item Plan ID", [valueKey]: "ITEM_PLAN_ID", type: "link" },
  {
    [tableKey]: "Effective From",
    [valueKey]: "EFFECTIVE_DATE",
    type: "date",
  },
  { [tableKey]: "Effective To", [valueKey]: "EXPIRE_DATE", type: "date" },
  {
    [tableKey]: "Percent Plan Over Demand",
    [valueKey]: "PERCENT_UNDER_TOLERANCE",
  },
  {
    [tableKey]: "Percent Demand Over Plan",
    [valueKey]: "PERCENT_OVER_TOLERANCE",
  },
  {
    [tableKey]: "First Date Past Tolerance",
    [valueKey]: "FIRST_DATE_PAST_TOLERANCE",
    type: "date",
  },
  {
    [tableKey]: "Alert Date",
    [valueKey]: "CALCULATED_DATE",
    sortable: true,
    type: "date",
  },
  { [tableKey]: "Hot", [valueKey]: "HOT_IND", type: "checkBox" },
  { [tableKey]: "Snooze", [valueKey]: "SNOOZE_IND", type: "checkBox" },
];

/* PFEP REQUIRED*/

export const pfepRequiredColumns = [
  { [tableKey]: "Segment", [valueKey]: "ORG_ID" },
  { [tableKey]: "Branch", [valueKey]: "FACILITY_ID" },
  { [tableKey]: "Item Id", [valueKey]: "ITEM_ID", type: "link" },
  { [tableKey]: "Item Description", [valueKey]: "ITEM_DESC" },
  { [tableKey]: "Consuming Location", [valueKey]: "TGT_WORK_CENTER_ID" },
  { [tableKey]: "Supplying Location", [valueKey]: "SRC_WORK_CENTER_ID" },
  {
    [tableKey]: "First Demand Date",
    [valueKey]: "DEMAND_DATE",
    type: "date",
  },
  {
    [tableKey]: "Alert Date",
    [valueKey]: "CALCULATED_DATE",
    sortable: true,
    type: "date",
  },
  { [tableKey]: "Hot", [valueKey]: "HOT_IND", type: "checkBox" },
  { [tableKey]: "Snooze", [valueKey]: "SNOOZE_IND", type: "checkBox" },
];

/* MOQ CEILING*/

export const pfepMOQColumns = [
  { [tableKey]: "Segment", [valueKey]: "ORG_ID" },
  { [tableKey]: "Branch", [valueKey]: "FACILITY_ID" },
  { [tableKey]: "Work Center", [valueKey]: "WORK_CENTER_ID" },
  { [tableKey]: "Item Id", [valueKey]: "ITEM_ID" },
  { [tableKey]: "Item Description", [valueKey]: "ITEM_DESC" },
  { [tableKey]: "Item Plan ID", [valueKey]: "ITEM_PLAN_ID" },
  { [tableKey]: "PFEP ABC Code", [valueKey]: "PFEP_ABC_CODE" },
  { [tableKey]: "Inventory Days", [valueKey]: "INVENTORY_QNTY" },
  {
    [tableKey]: "VOP",
    [valueKey]: "VALUE_ORDER_POLICY",
    fullForm: "Value Order Policy",
  },
  { [tableKey]: "ADU", [valueKey]: "ADU", fullForm: "Average Daily Usage" },
  { [tableKey]: "Inventory Ceiling", [valueKey]: "INVENTORY_CEILING" },
  {
    [tableKey]: "SPQ",
    [valueKey]: "STANDARD_PACK_QUANTITY",
    fullForm: "Standard Pack Quantity",
  },
  {
    [tableKey]: "MOQ",
    [valueKey]: "MULTIPLE_ORDER_QTY",
    fullForm: "Multiple Order Quantity",
  },
  {
    [tableKey]: "MMOQ",
    [valueKey]: "MIN_ORDER_QTY",
    fullForm: "Minimum Order Quantity",
  },
  { [tableKey]: "Standard Cost", [valueKey]: "STANDARD_COST" },
  { [tableKey]: "Delta Cost", [valueKey]: "DELTA_COST" },
  {
    [tableKey]: "Alert Date",
    [valueKey]: "CALCULATED_DATE",
    sortable: true,
    type: "date",
  },
  { [tableKey]: "Hot", [valueKey]: "HOT_IND", type: "checkBox" },
  { [tableKey]: "Snooze", [valueKey]: "SNOOZE_IND", type: "checkBox" },
];

/* DEMAND GAPS*/

export const pfepDemandGapColumns = [
  { [tableKey]: "Segment", [valueKey]: "ORG_ID" },
  { [tableKey]: "Branch", [valueKey]: "FACILITY_ID" },
  { [tableKey]: "Work Center", [valueKey]: "WORK_CENTER_ID" },
  { [tableKey]: "Item Id", [valueKey]: "ITEM_ID" },
  { [tableKey]: "Item Description", [valueKey]: "ITEM_DESC" },
  {
    [tableKey]: "Demand Gap Start",
    [valueKey]: "DEMAND_GAP_START_DATE",
    type: "date",
  },
  {
    [tableKey]: "Demand Gap Length",
    [valueKey]: "DEMAND_GAP_LENGTH_IN_CLNDR_DAYS",
  },
  {
    [tableKey]: "Alert Date",
    [valueKey]: "CALCULATED_DATE",
    sortable: true,
    type: "date",
  },
  { [tableKey]: "Hot", [valueKey]: "HOT_IND", type: "checkBox" },
  { [tableKey]: "Snooze", [valueKey]: "SNOOZE_IND", type: "checkBox" },
];

/* ERP Discrpeancy */

export const pfepErpAlertColumns = [
  { [tableKey]: "Segment", [valueKey]: "ORG_ID" },
  { [tableKey]: "Branch", [valueKey]: "FACILITY_ID" },
  { [tableKey]: "WorkCenter", [valueKey]: "WORK_CENTER_ID" },
  { [tableKey]: "Item ID", [valueKey]: "ITEM_ID" },
  { [tableKey]: "Item Description", [valueKey]: "ITEM_DESC" },
  { [tableKey]: "Item Plan ID", [valueKey]: "ITEM_PLAN_ID", type: "link" },
  {
    [tableKey]: "PFEP PoU Container",
    [valueKey]: "PFEP_POU_CONTAINER",
    className: "container-column",
    fullForm: "Point of Use",
  },
  {
    [tableKey]: "ERP PoU Container",
    [valueKey]: "ERP_POU_CONTAINER",
    className: "container-column",
    fullForm: "Point of Use",
  },
  {
    [tableKey]: "PFEP Supplier Container",
    [valueKey]: "PFEP_SUPPLIER_CONTAINER",
    className: "supplier-container-column",
  },
  {
    [tableKey]: "ERP Supplier Container",
    [valueKey]: "ERP_SUPPLIER_CONTAINER",
    className: "supplier-container-column",
  },
  {
    [tableKey]: "PFEP Supplier Container Quantity",
    [valueKey]: "PFEP_SUPPLIER_CONTAINER_QTY",
    className: "supplier-ctr-qty-column",
  },
  {
    [tableKey]: "ERP Supplier Container Quantity",
    [valueKey]: "ERP_SUPPLIER_CONTAINER_QTY",
    className: "supplier-ctr-qty-column",
  },
  {
    [tableKey]: "PFEP Kanban Cards",
    [valueKey]: "PFEP_LINESIDE_QUEUE",
    className: "lineside-column",
  },
  {
    [tableKey]: "ERP Kanban Cards",
    [valueKey]: "ERP_KANBAN_CARD",
    className: "lineside-column",
  },
  {
    [tableKey]: "PFEP POU Container Qty",
    [valueKey]: "PFEP_CONTAINER_QTY",
    className: "ctr-qty-column",
    fullForm: "Point of Use",
  },
  {
    [tableKey]: "ERP POU Container Qty",
    [valueKey]: "ERP_CONTAINER_QTY",
    className: "ctr-qty-column",
    fullForm: "Point of Use",
  },
  {
    [tableKey]: "Alert Date",
    [valueKey]: "CALCULATED_DATE",
    sortable: true,
    type: "date",
  },
  { [tableKey]: "Hot", [valueKey]: "HOT_IND", type: "checkBox" },
  { [tableKey]: "Snooze", [valueKey]: "SNOOZE_IND", type: "checkBox" },
];

/* Duplicate Workcenter assignment */
export const pfepDupWCAssignmentColumns = [
  { [tableKey]: "Item Number", [valueKey]: "ITEM_ID" },
  {
    [tableKey]: "Workcenter assignment count",
    [valueKey]: "WORK_CENTER_COUNT",
  },
  { [tableKey]: "Work centers list", [valueKey]: "WORK_CENTERS" },
  {
    [tableKey]: "Multiple Workcenters",
    [valueKey]: "IsEligibleForMultipleWC",
    type: "checkBox",
  },
];

/* alert tables columns end*/

//Metrics

export const typesOfMetrics = [
  "WeightDimension",
  "PastDueApprovals",
  "PackagingDetail",
] as const;

export const weightsDimensionsColumns = {
  columns: [
    {
      [tableKey]: "Part Number",
      [valueKey]: "ITEM_ID",
      type: "text",
      editable: false,
    },
    {
      [tableKey]: "Description",
      [valueKey]: "ITEM_DESC",
      type: "text",
      editable: false,
    },
    {
      [tableKey]: "Supplier Name",
      [valueKey]: "SUPPLIER_NAME",
      type: "text",
      editable: false,
    },
    {
      [tableKey]: "ERP",
      [valueKey]: "ERP",
      className: "erp-group",
      editable: false,
    },
    {
      [tableKey]: "PFEP",
      [valueKey]: "PFEP",
      className: "pfep-group",
      editable: false,
    },
  ],

  groupedColumns: {
    ERP: [
      {
        [tableKey]: "Length",
        [valueKey]: "SRC_LENGTH",
        className: "erp-group",
        type: "decimal",
        group: "ERP",
        editable: false,
      },
      {
        [tableKey]: "Width",
        [valueKey]: "SRC_WIDTH",
        className: "erp-group",
        type: "decimal",
        group: "ERP",
        editable: false,
      },
      {
        [tableKey]: "Height",
        [valueKey]: "SRC_HEIGHT",
        className: "erp-group",
        type: "decimal",
        group: "ERP",
        editable: false,
      },
      {
        [tableKey]: "UoM",
        [valueKey]: "DIM_UOM",
        className: "erp-group",
        type: "text",
        group: "ERP",
        editable: false,
        fullForm: "Unit of Measure",
      },
      {
        [tableKey]: "Weight",
        [valueKey]: "SRC_WEIGHT",
        className: "erp-group",
        type: "decimal",
        group: "ERP",
        editable: false,
      },
      {
        [tableKey]: "Weight UoM",
        [valueKey]: "WEIGHT_UOM",
        className: "erp-group",
        type: "text",
        group: "ERP",
        editable: false,
        fullForm: "Unit of Measure",
      },
    ],
    PFEP: [
      {
        [tableKey]: "Length",
        [valueKey]: "ITEM_LENGTH",
        className: "pfep-group",
        type: "decimal",
        group: "PFEP",
        editable: true,
      },
      {
        [tableKey]: "Width",
        [valueKey]: "ITEM_WIDTH",
        className: "pfep-group",
        type: "decimal",
        group: "PFEP",
        editable: true,
      },
      {
        [tableKey]: "Height",
        [valueKey]: "ITEM_HEIGHT",
        className: "pfep-group",
        type: "decimal",
        group: "PFEP",
        editable: true,
      },
      {
        [tableKey]: "UoM",
        [valueKey]: "ITEM_DIMENSION_UOM",
        className: "pfep-group",
        type: "text",
        group: "PFEP",
        editable: true,
        fullForm: "Unit of Measure",
      },
      {
        [tableKey]: "Weight",
        [valueKey]: "ITEM_WEIGHT",
        className: "pfep-group",
        type: "decimal",
        group: "PFEP",
        editable: true,
      },
      {
        [tableKey]: "Weight UoM",
        [valueKey]: "ITEM_WEIGHT_UOM",
        className: "pfep-group",
        type: "text",
        group: "PFEP",
        editable: true,
        fullForm: "Unit of Measure",
      },
    ],
  },
};

export const packageDetailColumns = {
  columns: [
    {
      [tableKey]: "Container SID",
      [valueKey]: "CONTAINER_SID",
      type: "integer",
      editable: false,
    },
    {
      [tableKey]: "Container code",
      [valueKey]: "CONTAINER_CODE",
      type: "text",
      editable: true,
    },
    {
      [tableKey]: "Description",
      [valueKey]: "CONTAINER_DESC",
      type: "text",
      editable: true,
    },
    {
      [tableKey]: "Container Category",
      [valueKey]: "CONTAINER_CATEGORY",
      type: "dropDown",
      editable: true,
      [droDownAPIKey]: "CategoryName",
    },
    {
      [tableKey]: "Supplier",
      [valueKey]: "CONTAINER_SUPPLIER",
      type: "searchField",
      editable: true,
    },
    {
      [tableKey]: "Inner Length",
      [valueKey]: "CONTAINER_IN_LENGHT",
      type: "decimal",
      editable: true,
    },
    {
      [tableKey]: "Inner Width",
      [valueKey]: "CONTAINER_IN_WIDTH",
      type: "decimal",
      editable: true,
    },
    {
      [tableKey]: "Inner Height",
      [valueKey]: "CONTAINER_IN_HEIGHT",
      type: "decimal",
      editable: true,
    },
    {
      [tableKey]: "Outer Length",
      [valueKey]: "CONTAINER_OUT_LENGHT",
      type: "decimal",
      editable: true,
    },
    {
      [tableKey]: "Outer Width",
      [valueKey]: "CONTAINER_OUT_WIDTH",
      type: "decimal",
      editable: true,
    },
    {
      [tableKey]: "Outer Height",
      [valueKey]: "CONTAINER_OUT_HEIGHT",
      type: "decimal",
      editable: true,
    },
    {
      [tableKey]: "Primary Orientaion",
      [valueKey]: "PRIMARY_ORIENTATION_LORW",
      type: "dropDown",
      editable: true,
      [droDownAPIKey]: "Primary_Orientation",
    },
  ],
};

export const weightsDimensionsInputs = [
  {
    name: "SUPPLIER_NAME",
    className: "weights-dimensions-supplier-name-input",
    placeHolder: "Supplier Name",
    type: "text",
    order: 4,
  },
];

export const weightsDimensionsDropDowns = [
  {
    name: "ORG_ID",
    className: "weight-dimensions-segment-dropdown",
    defaultOption: "Segment",
    displayValueKey: "ORG_ID",
    valueKey: "ORG_ID",
    required: true,
    APIMap: "Segment",
    order: 1,
  },
  {
    name: "FACILITY_ID",
    className: "weight-dimensions-warehouse-dropdown",
    defaultOption: "Branch",
    displayValueKey: "FACILITY_ID",
    valueKey: "FACILITY_ID",
    required: true,
    APIMap: "Warehouse",
    order: 2,
    dependentChange: ["ORG_ID"],
  },
];

export const weightsDimensionsWildCards = [
  {
    name: "ITEM_ID",
    className: "weights-dimensions-part-number-wildCard",
    placeHolder: "Part Number",
    type: "text",
    order: 3,
    defaultselecteddropDownValue: {},
    wildCardConfig: {
      serviceUrl: {
        dropdown: "WildcardSearch/GetFields?fieldName=ITEM_ID",
        table: "WildcardSearch/GetDropdownValues",
      },
      tableFields: [
        { header: "ID", field: "ITEM_ID" },
        { header: "Description", field: "ITEM_DESC" },
      ],
      label: "Part Number",
      isMultiSelect: false,
      selectedData: [],
      modelName: "ITEM_ID",
      styleclass: "col-md-2",
      dependentData: {
        ORG_ID: "",
      },
    },
  },
];

export const packageDetailInputs = [
  {
    name: "CONTAINER_CODE",
    class: "package-detail-container-code-input",
    placeHolder: "Container Code",
    type: "text",
    order: 3,
  },
  {
    name: "CONTAINER_CATEGORY",
    class: "package-detail-container-category-input",
    placeHolder: "Container Category",
    type: "text",
    order: 5,
  },
];

export const packageDetailDropDowns = [
  {
    name: "ORG_ID",
    className: "package-detail-segment-dropdown",
    defaultOption: "Segment",
    displayValueKey: "ORG_ID",
    valueKey: "ORG_ID",
    required: true,
    APIMap: "Segment",
    order: 1,
  },

  {
    name: "FACILITY_ID",
    className: "package-detail-warehouse-dropdown",
    defaultOption: "Branch",
    displayValueKey: "FACILITY_ID",
    valueKey: "FACILITY_ID",
    required: true,
    APIMap: "Warehouse",
    order: 2,
    dependentChange: ["ORG_ID"],
  },
];

export const packageDetailWildCards = [
  {
    name: "SUPPLIER_ID",
    className: "package-detail-supplier-wildCard",
    placeHolder: "Supplier",
    type: "text",
    order: 4,
    defaultselecteddropDownValue: {},
    wildCardConfig: {
      serviceUrl: {
        dropdown: "WildcardSearch/GetFields?fieldName=SUPPLIER_ID",
        table: "WildcardSearch/GetSupplierDropdownValues",
      },
      label: "Supplier",
      isMultiSelect: false,
      selectedData: [],
      modelName: "SUPPLIER_ID",
      styleclass: "col-md-2",
      dependentData: {
        ORG_ID: "",
      },
    },
  },
];

export const inputsMap = {
  weightsDimensions: {
    inputs: weightsDimensionsInputs,
    dropDowns: weightsDimensionsDropDowns,
    wildCards: weightsDimensionsWildCards,
  },

  packageDetail: {
    inputs: packageDetailInputs,
    dropDowns: packageDetailDropDowns,
    wildCards: packageDetailWildCards,
  },
};
