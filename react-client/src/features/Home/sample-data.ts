export const sampleHomeDataPayload = {
  EFF_FROM_DATE: "2026-02-17",
  EFF_TO_DATE: "2026-04-14",
  FACILITY_ID: "STH001",
  ORG_ID: "DEF",
  WorkCenterList: [{ WORK_CENTER_ID: "S7" }],
  alert_preference_list: "4,2,6,5",
};

export type HomeDataPayload = typeof sampleHomeDataPayload & { Name?: string };

export const homeDashbaordData = {
  Segment: [
    {
      ORG_ID: "DEF",
      IsSelected: true,
    },
    {
      ORG_ID: "DLV",
      IsSelected: false,
    },
    {
      ORG_ID: "LEON",
      IsSelected: false,
    },
    {
      ORG_ID: "MTM",
      IsSelected: false,
    },
  ],
  Warehouse: [
    {
      FACILITY_ID: "611351",
      IsSelected: false,
    },
    {
      FACILITY_ID: "622726",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623112",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623164",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628278",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628734",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9708040",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749150",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749155",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9759252",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9781269",
      IsSelected: false,
    },
    {
      FACILITY_ID: "APL001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ARF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ATC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "AVE001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "CONCEPT",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ECT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "GPS001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "JEF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "MWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NPD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NTH001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OKD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OSK001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PLT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMI001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RET001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RSC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "SSP001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "STH001",
      IsSelected: true,
    },
    {
      FACILITY_ID: "TWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "WST001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "YPG001",
      IsSelected: false,
    },
  ],
  MOQAlertGraphs: [
    {
      Week_Start_Date: "2026-04-19T00:00:00",
      Total_Count: 181,
      series: [
        {
          name: "BP New",
          value: 136,
        },
        {
          name: "<2 Weeks",
          value: 33,
        },
        {
          name: "2-4 Weeks",
          value: 4,
        },
        {
          name: ">4 Weeks",
          value: 8,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-12T00:00:00",
      Total_Count: 45,
      series: [
        {
          name: "BP New",
          value: 24,
        },
        {
          name: "<2 Weeks",
          value: 10,
        },
        {
          name: "2-4 Weeks",
          value: 6,
        },
        {
          name: ">4 Weeks",
          value: 5,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-05T00:00:00",
      Total_Count: 21,
      series: [
        {
          name: "BP New",
          value: 9,
        },
        {
          name: "<2 Weeks",
          value: 4,
        },
        {
          name: "2-4 Weeks",
          value: 6,
        },
        {
          name: ">4 Weeks",
          value: 2,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-29T00:00:00",
      Total_Count: 12,
      series: [
        {
          name: "BP New",
          value: 1,
        },
        {
          name: "<2 Weeks",
          value: 6,
        },
        {
          name: "2-4 Weeks",
          value: 5,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-22T00:00:00",
      Total_Count: 11,
      series: [
        {
          name: "BP New",
          value: 3,
        },
        {
          name: "<2 Weeks",
          value: 6,
        },
        {
          name: "2-4 Weeks",
          value: 2,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-15T00:00:00",
      Total_Count: 8,
      series: [
        {
          name: "BP New",
          value: 3,
        },
        {
          name: "<2 Weeks",
          value: 5,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-08T00:00:00",
      Total_Count: 5,
      series: [
        {
          name: "BP New",
          value: 3,
        },
        {
          name: "<2 Weeks",
          value: 2,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-01T00:00:00",
      Total_Count: 2,
      series: [
        {
          name: "BP New",
          value: 2,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
  ],
  ShortageAlertGraphs: [
    {
      Week_Start_Date: "2026-04-19T00:00:00",
      Total_Count: 60,
      series: [
        {
          name: "BP New",
          value: 56,
        },
        {
          name: "<2 Weeks",
          value: 1,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 3,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-05T00:00:00",
      Total_Count: 4,
      series: [
        {
          name: "BP New",
          value: 1,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 3,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-01T00:00:00",
      Total_Count: 3,
      series: [
        {
          name: "BP New",
          value: 3,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
  ],
  RequiredAlertGraphs: [
    {
      Week_Start_Date: "2026-04-12T00:00:00",
      Total_Count: 44,
      series: [
        {
          name: "BP New",
          value: 27,
        },
        {
          name: "<2 Weeks",
          value: 1,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 16,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-05T00:00:00",
      Total_Count: 17,
      series: [
        {
          name: "BP New",
          value: 1,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 16,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-01T00:00:00",
      Total_Count: 16,
      series: [
        {
          name: "BP New",
          value: 16,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
  ],
  ERPAlertGraphs: [
    {
      Name: "POU CONTAINER",
      Total_Count: 26,
      series: [
        {
          name: "BP New",
          value: 26,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Name: "SUPPLIER CONTAINER",
      Total_Count: 9,
      series: [
        {
          name: "BP New",
          value: 9,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Name: "SUPPLIER CONTAINER QTY",
      Total_Count: 9,
      series: [
        {
          name: "BP New",
          value: 9,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Name: "KANBAN CARDS",
      Total_Count: 30,
      series: [
        {
          name: "BP New",
          value: 30,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
    {
      Name: "CONTAINER QTY",
      Total_Count: 14,
      series: [
        {
          name: "BP New",
          value: 14,
        },
        {
          name: "<2 Weeks",
          value: 0,
        },
        {
          name: "2-4 Weeks",
          value: 0,
        },
        {
          name: ">4 Weeks",
          value: 0,
        },
      ],
    },
  ],
  ApprovedMetrics: [
    {
      Week_Start_Date: "2026-03-01T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-08T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-15T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-22T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-29T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-05T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-12T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-19T00:00:00",
      series: [
        {
          name: "Approved_Percentage",
          value: 16.0,
        },
        {
          name: "Not_Approved_Percentage",
          value: 84.0,
        },
      ],
    },
  ],
  DisparateMetrics: [
    {
      Week_Start_Date: "2026-03-01T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-08T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-15T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-22T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-03-29T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-05T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-12T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
    {
      Week_Start_Date: "2026-04-19T00:00:00",
      series: [
        {
          name: "Disparate_Percentage",
          value: 3.0,
        },
        {
          name: "Not_Disparate_Percentage",
          value: 97.0,
        },
      ],
    },
  ],
  PackagingType: null,
  WeightDimension: 23607,
  PackagingDetail: 49,
  PastDueApprovals: 5,
  DemandGap: 45,
  WorkCenterList: [
    {
      WORK_CENTER_ID: "S7",
    },
  ],
  InventoryAvailabilityCount: 0,
  MultipleAssignmentCount: 13,
};

export type HomeDashboardData = typeof homeDashbaordData;

/* alert tables sampleDatastart */

export const demandGapsSampleData = {
  Segment: [
    {
      ORG_ID: "DEF",
      IsSelected: true,
    },
    {
      ORG_ID: "DLV",
      IsSelected: false,
    },
    {
      ORG_ID: "LEON",
      IsSelected: false,
    },
    {
      ORG_ID: "MTM",
      IsSelected: false,
    },
  ],
  Warehouse: [
    {
      FACILITY_ID: "611351",
      IsSelected: false,
    },
    {
      FACILITY_ID: "622726",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623112",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623164",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628278",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628734",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9708040",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749150",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749155",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9759252",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9781269",
      IsSelected: false,
    },
    {
      FACILITY_ID: "APL001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ARF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ATC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "AVE001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "CONCEPT",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ECT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "GPS001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "JEF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "MWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NPD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NTH001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OKD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OSK001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PLT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMI001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RET001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RSC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "SSP001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "STH001",
      IsSelected: true,
    },
    {
      FACILITY_ID: "TWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "WST001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "YPG001",
      IsSelected: false,
    },
  ],
  pfepDemandGaps: [
    {
      WORK_CENTER_SID: 2,
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "A000M269",
      ITEM_DESC: "SN PLATE,OSHKOSH HD,AL",
      DEMAND_GAP_START_DATE: "09/10/2024",
      DEMAND_GAP_LENGTH_IN_CLNDR_DAYS: 171,
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "05/16/2024",
    },
    {
      WORK_CENTER_SID: 2,
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12642008",
      ITEM_DESC: "TANK, HIGH PRESSURE GAS, 175 C",
      DEMAND_GAP_START_DATE: "09/12/2024",
      DEMAND_GAP_LENGTH_IN_CLNDR_DAYS: 173,
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "05/16/2024",
    },
    {
      WORK_CENTER_SID: 2,
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12645169",
      ITEM_DESC: "CLAMP, 110-118MM",
      DEMAND_GAP_START_DATE: "09/12/2024",
      DEMAND_GAP_LENGTH_IN_CLNDR_DAYS: 173,
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "05/16/2024",
    },
    {
      WORK_CENTER_SID: 2,
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "J1453-3 10-12-10 520428CN",
      ITEM_DESC: "FTG,T 10ORS-12ORG-10ORS MMM ST",
      DEMAND_GAP_START_DATE: "09/12/2024",
      DEMAND_GAP_LENGTH_IN_CLNDR_DAYS: 173,
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "05/16/2024",
    },
    {
      WORK_CENTER_SID: 2,
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "1717510",
      ITEM_DESC: "PITMAN ARM,POWER STEERING",
      DEMAND_GAP_START_DATE: "10/23/2024",
      DEMAND_GAP_LENGTH_IN_CLNDR_DAYS: 83,
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "05/16/2024",
    },
    {
      WORK_CENTER_SID: 2,
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "1723320W",
      ITEM_DESC: "BRKT ASSY,STRG",
      DEMAND_GAP_START_DATE: "10/23/2024",
      DEMAND_GAP_LENGTH_IN_CLNDR_DAYS: 83,
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "05/16/2024",
    },
    {
      WORK_CENTER_SID: 2,
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "1923370",
      ITEM_DESC: "STEERING GEAR,SLAVE,M110",
      DEMAND_GAP_START_DATE: "10/23/2024",
      DEMAND_GAP_LENGTH_IN_CLNDR_DAYS: 83,
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "05/16/2024",
    },
  ],
  pfepDemandGapSaveEntities: null,
  PageIndex: 1,
  PageSize: 10,
  TotalPageCount: 1,
  TotalCount: 7,
  type: "pfep_demand_gaps",
};

export const pfepShortageAlertsSampleData = {
  PFEPShortages: [
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S518",
      TGT_WORK_CENTER_SID: 154,
      ITEM_ID: "3641462",
      ITEM_DESC: "PLATE,THERMAL BYPASS,MTG",
      ITEM_PLAN_ID: 14900,
      EFFECTIVE_DATE: "02/05/2020",
      EXPIRE_DATE: "12/31/2030",
      PERCENT_OVER_TOLERANCE: null,
      PERCENT_UNDER_TOLERANCE: 67.2,
      FIRST_DATE_PAST_TOLERANCE: "05/16/2024",
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: false,
      SNOOZE_IND: true,
      SNOOZE_UNTIL_DATE: "2022-03-31T00:00:00",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S427",
      TGT_WORK_CENTER_SID: 1405,
      ITEM_ID: "4315709",
      ITEM_DESC: "PLATE,FRICTION 176X2.5",
      ITEM_PLAN_ID: 15431,
      EFFECTIVE_DATE: "12/26/2019",
      EXPIRE_DATE: "12/26/2030",
      PERCENT_OVER_TOLERANCE: null,
      PERCENT_UNDER_TOLERANCE: 42.0,
      FIRST_DATE_PAST_TOLERANCE: "05/16/2024",
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S4540",
      TGT_WORK_CENTER_SID: 422,
      ITEM_ID: "3007908",
      ITEM_DESC: "BUMPER,3.13 HYTREL",
      ITEM_PLAN_ID: 25271,
      EFFECTIVE_DATE: "08/19/2019",
      EXPIRE_DATE: "12/31/2031",
      PERCENT_OVER_TOLERANCE: null,
      PERCENT_UNDER_TOLERANCE: 50.4,
      FIRST_DATE_PAST_TOLERANCE: "05/03/2024",
      CALCULATED_DATE: "05/03/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S506",
      TGT_WORK_CENTER_SID: 148,
      ITEM_ID: "1318820",
      ITEM_DESC: "DIODE",
      ITEM_PLAN_ID: 14825,
      EFFECTIVE_DATE: "01/30/2020",
      EXPIRE_DATE: "12/31/2030",
      PERCENT_OVER_TOLERANCE: null,
      PERCENT_UNDER_TOLERANCE: 42.0,
      FIRST_DATE_PAST_TOLERANCE: "05/16/2024",
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S117",
      TGT_WORK_CENTER_SID: 108,
      ITEM_ID: "17BV417",
      ITEM_DESC: "CHECK VLV .25 NPT-.25 N",
      ITEM_PLAN_ID: 25601,
      EFFECTIVE_DATE: "08/19/2019",
      EXPIRE_DATE: "12/31/2030",
      PERCENT_OVER_TOLERANCE: null,
      PERCENT_UNDER_TOLERANCE: 168.0,
      FIRST_DATE_PAST_TOLERANCE: "05/16/2024",
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S149",
      TGT_WORK_CENTER_SID: 139,
      ITEM_ID: "3007908",
      ITEM_DESC: "BUMPER,3.13 HYTREL",
      ITEM_PLAN_ID: 25273,
      EFFECTIVE_DATE: "08/19/2019",
      EXPIRE_DATE: "12/31/2031",
      PERCENT_OVER_TOLERANCE: 46.8,
      PERCENT_UNDER_TOLERANCE: null,
      FIRST_DATE_PAST_TOLERANCE: "05/21/2024",
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
  ],
  segment: [
    {
      ORG_ID: "DEF",
      IsSelected: true,
    },
    {
      ORG_ID: "DLV",
      IsSelected: false,
    },
    {
      ORG_ID: "LEON",
      IsSelected: false,
    },
    {
      ORG_ID: "MTM",
      IsSelected: false,
    },
  ],
  warehouse: [
    {
      FACILITY_ID: "611351",
      IsSelected: false,
    },
    {
      FACILITY_ID: "622726",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623112",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623164",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628278",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628734",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9708040",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749150",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749155",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9759252",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9781269",
      IsSelected: false,
    },
    {
      FACILITY_ID: "APL001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ARF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ATC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "AVE001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "CONCEPT",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ECT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "GPS001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "JEF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "MWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NPD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NTH001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OKD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OSK001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PLT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMI001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RET001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RSC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "SSP001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "STH001",
      IsSelected: true,
    },
    {
      FACILITY_ID: "TWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "WST001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "YPG001",
      IsSelected: false,
    },
  ],
  PageIndex: 1,
  PageSize: 10,
  TotalPageCount: 1,
  TotalCount: 6,
  type: "pfep_shortage_alerts",
};

export const duplciateWorkcenterSampleData = {
  MultipleAssignments: [
    {
      ITEM_ID: "12414307-192",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S605A", "S7"],
      IsEligibleForMultipleWC: true,
    },
    {
      ITEM_ID: "12640501",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S624", "S7"],
      IsEligibleForMultipleWC: false,
    },
    {
      ITEM_ID: "12640503",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S624", "S7"],
      IsEligibleForMultipleWC: false,
    },
    {
      ITEM_ID: "12640507",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S624", "S7"],
      IsEligibleForMultipleWC: false,
    },
    {
      ITEM_ID: "12641223",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S624", "S7"],
      IsEligibleForMultipleWC: false,
    },
    {
      ITEM_ID: "12641597",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S4435", "S7"],
      IsEligibleForMultipleWC: true,
    },
    {
      ITEM_ID: "12641678",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S624", "S7"],
      IsEligibleForMultipleWC: false,
    },
    {
      ITEM_ID: "12641728",
      WORK_CENTER_COUNT: 2,
      WORK_CENTERS: ["S624", "S7"],
      IsEligibleForMultipleWC: false,
    },
    {
      ITEM_ID: "1781250",
      WORK_CENTER_COUNT: 4,
      WORK_CENTERS: ["S116", "S3115", "S7", "S115"],
      IsEligibleForMultipleWC: false,
    },
    {
      ITEM_ID: "1807070",
      WORK_CENTER_COUNT: 4,
      WORK_CENTERS: ["S455", "S5200", "S7", "S7405"],
      IsEligibleForMultipleWC: true,
    },
  ],
  segment: [
    {
      ORG_ID: "DEF",
      IsSelected: true,
    },
    {
      ORG_ID: "DLV",
      IsSelected: false,
    },
    {
      ORG_ID: "LEON",
      IsSelected: false,
    },
    {
      ORG_ID: "MTM",
      IsSelected: false,
    },
  ],
  warehouse: [
    {
      FACILITY_ID: "611351",
      IsSelected: false,
    },
    {
      FACILITY_ID: "622726",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623112",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623164",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628278",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628734",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9708040",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749150",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749155",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9759252",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9781269",
      IsSelected: false,
    },
    {
      FACILITY_ID: "APL001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ARF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ATC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "AVE001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "CONCEPT",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ECT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "GPS001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "JEF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "MWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NPD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NTH001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OKD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OSK001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PLT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMI001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RET001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RSC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "SSP001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "STH001",
      IsSelected: true,
    },
    {
      FACILITY_ID: "TWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "WST001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "YPG001",
      IsSelected: false,
    },
  ],
  PageIndex: 1,
  PageSize: 10,
  TotalPageCount: 2,
  TotalCount: 13,
  type: "pfep_duplicate_workcenter_assignment",
};

export const erpDiscrepancySampleData = {
  ERPAlert: [
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "A000N489",
      ITEM_DESC: "STEERING GEAR,RCS85",
      ITEM_PLAN_ID: 9529,
      PFEP_POU_CONTAINER: "E0007",
      ERP_POU_CONTAINER: "P",
      PFEP_SUPPLIER_CONTAINER: "E0007",
      ERP_SUPPLIER_CONTAINER: "E0006",
      PFEP_LINESIDE_QUEUE: 1,
      ERP_KANBAN_CARD: 3.0,
      PFEP_CONTAINER_QTY: 10,
      ERP_CONTAINER_QTY: 10.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 10.0,
      ERP_SUPPLIER_CONTAINER_QTY: 10,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "A000N488",
      ITEM_DESC: "STEERING GEAR,TAS85",
      ITEM_PLAN_ID: 9528,
      PFEP_POU_CONTAINER: "E0007",
      ERP_POU_CONTAINER: "P",
      PFEP_SUPPLIER_CONTAINER: "E0007",
      ERP_SUPPLIER_CONTAINER: "",
      PFEP_LINESIDE_QUEUE: 1,
      ERP_KANBAN_CARD: 3.0,
      PFEP_CONTAINER_QTY: 10,
      ERP_CONTAINER_QTY: 10.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 10.0,
      ERP_SUPPLIER_CONTAINER_QTY: 10,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "A000B931",
      ITEM_DESC: "FTG,ST 8JIC-8ORG FM ST SWVL",
      ITEM_PLAN_ID: 25397,
      PFEP_POU_CONTAINER: "C0001",
      ERP_POU_CONTAINER: "B",
      PFEP_SUPPLIER_CONTAINER: "C0001",
      ERP_SUPPLIER_CONTAINER: "C0001",
      PFEP_LINESIDE_QUEUE: null,
      ERP_KANBAN_CARD: 4.0,
      PFEP_CONTAINER_QTY: 20,
      ERP_CONTAINER_QTY: 10.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 20.0,
      ERP_SUPPLIER_CONTAINER_QTY: 20,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "3875754",
      ITEM_DESC: "FTG,T 8ORG-4ORG-8JIC MFM ST",
      ITEM_PLAN_ID: 9570,
      PFEP_POU_CONTAINER: "C0001",
      ERP_POU_CONTAINER: "B",
      PFEP_SUPPLIER_CONTAINER: "C0001",
      ERP_SUPPLIER_CONTAINER: "C0001",
      PFEP_LINESIDE_QUEUE: 3,
      ERP_KANBAN_CARD: 3.0,
      PFEP_CONTAINER_QTY: 10,
      ERP_CONTAINER_QTY: 6.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 10.0,
      ERP_SUPPLIER_CONTAINER_QTY: 10,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "1923370R",
      ITEM_DESC: "STRG GEAR,SLAVE,REMAN",
      ITEM_PLAN_ID: 9550,
      PFEP_POU_CONTAINER: "E0007",
      ERP_POU_CONTAINER: "P",
      PFEP_SUPPLIER_CONTAINER: null,
      ERP_SUPPLIER_CONTAINER: null,
      PFEP_LINESIDE_QUEUE: 1,
      ERP_KANBAN_CARD: 1.0,
      PFEP_CONTAINER_QTY: 4,
      ERP_CONTAINER_QTY: 8.0,
      CALCULATED_DATE: "04/12/2021",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: null,
      ERP_SUPPLIER_CONTAINER_QTY: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "1781250",
      ITEM_DESC: "FTG,45 8ORS-8ORG MM ST",
      ITEM_PLAN_ID: 9547,
      PFEP_POU_CONTAINER: "S",
      ERP_POU_CONTAINER: "B",
      PFEP_SUPPLIER_CONTAINER: "C0001",
      ERP_SUPPLIER_CONTAINER: "C0001",
      PFEP_LINESIDE_QUEUE: 3,
      ERP_KANBAN_CARD: 3.0,
      PFEP_CONTAINER_QTY: 8,
      ERP_CONTAINER_QTY: 12.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 30.0,
      ERP_SUPPLIER_CONTAINER_QTY: 30,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12680666",
      ITEM_DESC: "TUBING SUPPORT, WELDMENT",
      ITEM_PLAN_ID: 25390,
      PFEP_POU_CONTAINER: "C0001",
      ERP_POU_CONTAINER: "S",
      PFEP_SUPPLIER_CONTAINER: "C0001",
      ERP_SUPPLIER_CONTAINER: "C0003",
      PFEP_LINESIDE_QUEUE: null,
      ERP_KANBAN_CARD: 4.0,
      PFEP_CONTAINER_QTY: 4,
      ERP_CONTAINER_QTY: 7.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 4.0,
      ERP_SUPPLIER_CONTAINER_QTY: 40,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12675560-T01",
      ITEM_DESC: "BRACKET, TUBE SUPPORT, LOWER R",
      ITEM_PLAN_ID: 27504,
      PFEP_POU_CONTAINER: "C0001",
      ERP_POU_CONTAINER: "C01",
      PFEP_SUPPLIER_CONTAINER: "C0001",
      ERP_SUPPLIER_CONTAINER: "C0001",
      PFEP_LINESIDE_QUEUE: null,
      ERP_KANBAN_CARD: 4.0,
      PFEP_CONTAINER_QTY: 4,
      ERP_CONTAINER_QTY: 4.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 4.0,
      ERP_SUPPLIER_CONTAINER_QTY: 4,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12645811",
      ITEM_DESC: "WELDMENT, STEERING TRAY",
      ITEM_PLAN_ID: 27548,
      PFEP_POU_CONTAINER: "E0007",
      ERP_POU_CONTAINER: "P",
      PFEP_SUPPLIER_CONTAINER: "E0007",
      ERP_SUPPLIER_CONTAINER: "E0007",
      PFEP_LINESIDE_QUEUE: null,
      ERP_KANBAN_CARD: 2.0,
      PFEP_CONTAINER_QTY: 10,
      ERP_CONTAINER_QTY: 10.0,
      CALCULATED_DATE: "05/16/2024",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 10.0,
      ERP_SUPPLIER_CONTAINER_QTY: 10,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12641728",
      ITEM_DESC: "STRAP, GROUND, INSULATED",
      ITEM_PLAN_ID: 28571,
      PFEP_POU_CONTAINER: "C0001",
      ERP_POU_CONTAINER: "C01",
      PFEP_SUPPLIER_CONTAINER: "C0001",
      ERP_SUPPLIER_CONTAINER: "C0001",
      PFEP_LINESIDE_QUEUE: null,
      ERP_KANBAN_CARD: 4.0,
      PFEP_CONTAINER_QTY: 9,
      ERP_CONTAINER_QTY: 9.0,
      CALCULATED_DATE: "06/21/2023",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      PFEP_SUPPLIER_CONTAINER_QTY: 5.0,
      ERP_SUPPLIER_CONTAINER_QTY: 9,
    },
  ],
  Segment: [
    {
      ORG_ID: "DEF",
      IsSelected: true,
    },
    {
      ORG_ID: "DLV",
      IsSelected: false,
    },
    {
      ORG_ID: "LEON",
      IsSelected: false,
    },
    {
      ORG_ID: "MTM",
      IsSelected: false,
    },
  ],
  Warehouse: [
    {
      FACILITY_ID: "611351",
      IsSelected: false,
    },
    {
      FACILITY_ID: "622726",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623112",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623164",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628278",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628734",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9708040",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749150",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749155",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9759252",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9781269",
      IsSelected: false,
    },
    {
      FACILITY_ID: "APL001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ARF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ATC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "AVE001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "CONCEPT",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ECT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "GPS001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "JEF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "MWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NPD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NTH001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OKD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OSK001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PLT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMI001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RET001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RSC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "SSP001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "STH001",
      IsSelected: true,
    },
    {
      FACILITY_ID: "TWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "WST001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "YPG001",
      IsSelected: false,
    },
  ],
  PageIndex: 1,
  PageSize: 10,
  TotalPageCount: 2,
  TotalCount: 19,
  type: "pfep_erp_alerts",
};

export const pfepRequiredSampleData = {
  pfepRequired: [
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3450773",
      ITEM_DESC: "HOSE ASSY #8 CR 33.00 2877",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3799223",
      ITEM_DESC: "HOSE ASSY #8 CR 24.0 2275",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3807651",
      ITEM_DESC: "STEERING GEAR,MASTER,XD120",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3807652",
      ITEM_DESC: "STEERING GEAR,SLAVE,XD120",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "11/23/2020",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3809495",
      ITEM_DESC: "BRKT,CROSS BRACE,FRONT",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3815888",
      ITEM_DESC: "HOSE ASSY #8 CR 33.0 2878",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3815926",
      ITEM_DESC: "BRKT,STEERING,RH,WLDMT",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3815928",
      ITEM_DESC: "BRKT,STEERING,LH,WLDMT",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3829439",
      ITEM_DESC: "PITMAN ARM,PWR STRG",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/27/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_SID: 2,
      ITEM_ID: "3807653",
      ITEM_DESC: "STEERING GEAR,REAR,XD120",
      TGT_WORK_CENTER_ID: "S7",
      SRC_WORK_CENTER_ID: "APL001",
      DEMAND_DATE: "02/28/2025",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
      CALCULATED_DATE: "06/07/2021",
    },
  ],
  Segment: [
    {
      ORG_ID: "DEF",
      IsSelected: true,
    },
    {
      ORG_ID: "DLV",
      IsSelected: false,
    },
    {
      ORG_ID: "LEON",
      IsSelected: false,
    },
    {
      ORG_ID: "MTM",
      IsSelected: false,
    },
  ],
  Warehouse: [
    {
      FACILITY_ID: "611351",
      IsSelected: false,
    },
    {
      FACILITY_ID: "622726",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623112",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623164",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628278",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628734",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9708040",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749150",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749155",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9759252",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9781269",
      IsSelected: false,
    },
    {
      FACILITY_ID: "APL001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ARF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ATC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "AVE001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "CONCEPT",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ECT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "GPS001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "JEF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "MWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NPD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NTH001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OKD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OSK001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PLT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMI001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RET001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RSC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "SSP001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "STH001",
      IsSelected: true,
    },
    {
      FACILITY_ID: "TWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "WST001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "YPG001",
      IsSelected: false,
    },
  ],
  pfepRequiredSaveEntities: null,
  PageIndex: 1,
  PageSize: 10,
  TotalPageCount: 9,
  TotalCount: 81,
  type: "pfep_required_alerts",
};

export const moqCeilingSampleData = {
  moqCeilingAlert: [
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12604959",
      ITEM_DESC: "ARM, STEERING GEAR, MACHINED",
      ITEM_PLAN_ID: 9543,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "83",
      ADU: 16.0,
      INVENTORY_CEILING: 432,
      STANDARD_PACK_QUANTITY: 150,
      MULTIPLE_ORDER_QTY: 150,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 49.61,
      DELTA_COST: null,
      CALCULATED_DATE: "02/28/2022",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12601073",
      ITEM_DESC: "BEARING,ROLLER, TAPERED",
      ITEM_PLAN_ID: 9534,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "83",
      ADU: 32.0,
      INVENTORY_CEILING: 864,
      STANDARD_PACK_QUANTITY: 16,
      MULTIPLE_ORDER_QTY: 16,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 14.79,
      DELTA_COST: null,
      CALCULATED_DATE: "04/10/2022",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "4090142",
      ITEM_DESC: "BRG,SPLN 1.38X2.83X0.67 SLD",
      ITEM_PLAN_ID: 30748,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "83",
      ADU: null,
      INVENTORY_CEILING: null,
      STANDARD_PACK_QUANTITY: 20,
      MULTIPLE_ORDER_QTY: 20,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 5.62,
      DELTA_COST: null,
      CALCULATED_DATE: "05/16/2023",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12601086",
      ITEM_DESC: "CAP, GREASE",
      ITEM_PLAN_ID: 9540,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "83",
      ADU: 16.0,
      INVENTORY_CEILING: 432,
      STANDARD_PACK_QUANTITY: 22,
      MULTIPLE_ORDER_QTY: 22,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 35.09,
      DELTA_COST: null,
      CALCULATED_DATE: "04/10/2022",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12640499-T01",
      ITEM_DESC: "END YOKE,1310,HR 1.38-10X3.22",
      ITEM_PLAN_ID: 30297,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "45",
      ADU: null,
      INVENTORY_CEILING: null,
      STANDARD_PACK_QUANTITY: 1,
      MULTIPLE_ORDER_QTY: 0,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 49.1015,
      DELTA_COST: null,
      CALCULATED_DATE: "05/16/2023",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12641597",
      ITEM_DESC: "FITTING, STRAIGHT - #12 NPSM O",
      ITEM_PLAN_ID: 30590,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "83",
      ADU: null,
      INVENTORY_CEILING: null,
      STANDARD_PACK_QUANTITY: 1,
      MULTIPLE_ORDER_QTY: 500,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 9.32,
      DELTA_COST: null,
      CALCULATED_DATE: "05/16/2023",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12675454",
      ITEM_DESC: "FLANGE, DRIVESHAFT ADAPTER",
      ITEM_PLAN_ID: 30592,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "37",
      ADU: null,
      INVENTORY_CEILING: null,
      STANDARD_PACK_QUANTITY: 1,
      MULTIPLE_ORDER_QTY: 0,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 45.24,
      DELTA_COST: null,
      CALCULATED_DATE: "05/16/2023",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "3725476",
      ITEM_DESC: "FTG,T 8ORG-4ORG-10JIC MFM ST",
      ITEM_PLAN_ID: 9566,
      PFEP_ABC_CODE: "C",
      INVENTORY_QNTY: 83,
      VALUE_ORDER_POLICY: "300",
      ADU: 0.61,
      INVENTORY_CEILING: 51,
      STANDARD_PACK_QUANTITY: 24,
      MULTIPLE_ORDER_QTY: 24,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 15.88,
      DELTA_COST: null,
      CALCULATED_DATE: "01/23/2022",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "12601084",
      ITEM_DESC: "GEAR, STEERING, ASSY",
      ITEM_PLAN_ID: 9538,
      PFEP_ABC_CODE: "A",
      INVENTORY_QNTY: 6,
      VALUE_ORDER_POLICY: "7",
      ADU: 16.0,
      INVENTORY_CEILING: 96,
      STANDARD_PACK_QUANTITY: 18,
      MULTIPLE_ORDER_QTY: 18,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 880.66,
      DELTA_COST: null,
      CALCULATED_DATE: "04/10/2022",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
    {
      ORG_ID: "DEF",
      FACILITY_ID: "STH001",
      WORK_CENTER_ID: "S7",
      ITEM_ID: "4421432",
      ITEM_DESC: "GEAR,SPUR 9 25 25",
      ITEM_PLAN_ID: 30752,
      PFEP_ABC_CODE: "B",
      INVENTORY_QNTY: 27,
      VALUE_ORDER_POLICY: "41",
      ADU: null,
      INVENTORY_CEILING: null,
      STANDARD_PACK_QUANTITY: 26,
      MULTIPLE_ORDER_QTY: 26,
      MIN_ORDER_QTY: 0,
      STANDARD_COST: 70.61,
      DELTA_COST: null,
      CALCULATED_DATE: "05/16/2023",
      HOT_IND: null,
      SNOOZE_IND: null,
      SNOOZE_UNTIL_DATE: null,
    },
  ],
  segment: [
    {
      ORG_ID: "DEF",
      IsSelected: true,
    },
    {
      ORG_ID: "DLV",
      IsSelected: false,
    },
    {
      ORG_ID: "LEON",
      IsSelected: false,
    },
    {
      ORG_ID: "MTM",
      IsSelected: false,
    },
  ],
  warehouse: [
    {
      FACILITY_ID: "611351",
      IsSelected: false,
    },
    {
      FACILITY_ID: "622726",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623112",
      IsSelected: false,
    },
    {
      FACILITY_ID: "623164",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628278",
      IsSelected: false,
    },
    {
      FACILITY_ID: "628734",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9708040",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749150",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9749155",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9759252",
      IsSelected: false,
    },
    {
      FACILITY_ID: "9781269",
      IsSelected: false,
    },
    {
      FACILITY_ID: "APL001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ARF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ATC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "AVE001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "CONCEPT",
      IsSelected: false,
    },
    {
      FACILITY_ID: "ECT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "GPS001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "JEF001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "MWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NPD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "NTH001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OKD001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "OSK001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PLT001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "PMI001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RET001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "RSC001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "SSP001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "STH001",
      IsSelected: true,
    },
    {
      FACILITY_ID: "TWA001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "WST001",
      IsSelected: false,
    },
    {
      FACILITY_ID: "YPG001",
      IsSelected: false,
    },
  ],
  PageIndex: 1,
  PageSize: 10,
  TotalPageCount: 5,
  TotalCount: 44,
  type: "pfep_moq_ceiling_alerts",
};

export type AlertTableDataType =
  | typeof demandGapsSampleData
  | typeof pfepRequiredSampleData
  | typeof pfepShortageAlertsSampleData
  | typeof erpDiscrepancySampleData
  | typeof moqCeilingSampleData
  | typeof duplciateWorkcenterSampleData;
/* alert tables sample data end */

// -------------------------------------------------------------------------------------------------------------

const randomFrom = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export interface ItemRecord {
  // --- Base Columns ---
  ITEM_ID: string;
  ITEM_DESC: string;
  SUPPLIER_NAME: string;
  ERP: string;
  PFEP: string;

  // --- ERP Group ---
  SRC_LENGTH: number;
  SRC_WIDTH: number;
  SRC_HEIGHT: number;
  DIM_UOM: string;
  SRC_WEIGHT: number;
  WEIGHT_UOM: string;

  // --- PFEP Group ---
  ITEM_LENGTH: number;
  ITEM_WIDTH: number;
  ITEM_HEIGHT: number;
  ITEM_DIMENSION_UOM: string;
  ITEM_WEIGHT: number;
  ITEM_WEIGHT_UOM: string;
}

export const weightDimesnsionSample = (): Array<ItemRecord> => {
  return [
    ...Array.from({ length: 27 }, (_, i) => {
      const base = 1004 + i;
      return {
        ITEM_ID: `${base}${String.fromCharCode(65 + (i % 26))}`,
        ITEM_DESC: randomFrom([
          "Steel mounting bracket",
          "Plastic control housing",
          "Wiring harness assembly",
          "Aluminum support panel",
          "Rubber sealing gasket",
          "Fastener kit set",
          "Drive shaft component",
          "Electrical connector block",
          "Protective cover plate",
          "Molded spacer insert",
          "Sensor mounting frame",
          "Metal hinge assembly",
          "Insulated cable bundle",
          "Structural support arm",
          "Modular panel insert",
        ]),
        SUPPLIER_NAME: [
          "Apex Components",
          "Vector Manufacturing",
          "Summit Industrial",
          "Orion Engineering",
          "Pinnacle Systems",
          "Atlas Logistics",
          "Vertex Materials",
        ][i % 4],
        ERP: "ERP",
        PFEP: "PFEP",

        SRC_LENGTH: Number((12 + i * 1.3).toFixed(2)),
        SRC_WIDTH: Number((8 + i * 0.9).toFixed(2)),
        SRC_HEIGHT: Number((3 + i * 0.4).toFixed(2)),
        DIM_UOM: "IN",
        SRC_WEIGHT: Number((1.5 + i * 0.6).toFixed(2)),
        WEIGHT_UOM: "LB",

        ITEM_LENGTH: Number((11.8 + i * 1.2).toFixed(2)),
        ITEM_WIDTH: Number((7.8 + i * 0.85).toFixed(2)),
        ITEM_HEIGHT: Number((2.9 + i * 0.38).toFixed(2)),
        ITEM_DIMENSION_UOM: "IN",
        ITEM_WEIGHT: Number((1.6 + i * 0.65).toFixed(2)),
        ITEM_WEIGHT_UOM: "LB",
      };
    }),
  ];
};

export interface ContainerRecord {
  // --- Identifiers ---
  CONTAINER_SID: number;
  CONTAINER_CODE: string;
  CONTAINER_DESC: string;

  // --- Classification ---
  CONTAINER_CATEGORY: string;
  CONTAINER_SUPPLIER: string;

  CONTAINER_IN_LENGHT: number;
  CONTAINER_IN_WIDTH: number;
  CONTAINER_IN_HEIGHT: number;

  CONTAINER_OUT_LENGHT: number;
  CONTAINER_OUT_WIDTH: number;
  CONTAINER_OUT_HEIGHT: number;

  PRIMARY_ORIENTATION_LORW: "L" | "W";
}

export const packagingDetailsSample = (): Array<ContainerRecord> => {
  return [
    ...Array.from({ length: 20 }, (_, i) => {
      const sid = 6 + i;
      return {
        CONTAINER_SID: sid,
        CONTAINER_CODE: `CT-${1000 + sid}`,
        CONTAINER_DESC: randomFrom([
          "Stackable storage tote",
          "Open front bin",
          "Heavy duty crate",
          "Pallet mounted box",
          "Collapsible transport bin",
          "Small parts container",
          "Reinforced shipping crate",
          "Returnable plastic tote",
          "Bulk handling box",
          "Modular storage bin",
          "Warehouse picking tote",
          "Durable transit container",
          "High strength crate",
          "Space saver bin",
          "Industrial storage box",
        ]),
        CONTAINER_CATEGORY: ["Box", "Bin", "Crate", "Tote"][i % 4],
        CONTAINER_SUPPLIER: [
          "Zyntrix Labs",
          "Quorvia Works",
          "Axelonix",
          "Bravexis Co",
          "Nexlume",
          "Vortiq Systems",
          "Plenixa",
          "Kavion Corp",
          "Stravex",
          "Lumetra Forge",
        ][i % 10],
        CONTAINER_IN_LENGHT: Number((15 + i * 1.2).toFixed(2)),
        CONTAINER_IN_WIDTH: Number((10 + i * 0.9).toFixed(2)),
        CONTAINER_IN_HEIGHT: Number((6 + i * 0.6).toFixed(2)),
        CONTAINER_OUT_LENGHT: Number((16 + i * 1.2).toFixed(2)),
        CONTAINER_OUT_WIDTH: Number((11 + i * 0.9).toFixed(2)),
        CONTAINER_OUT_HEIGHT: Number((7 + i * 0.6).toFixed(2)),
        PRIMARY_ORIENTATION_LORW: i % 2 === 0 ? ("L" as const) : ("W" as const),
      };
    }),
  ];
};
