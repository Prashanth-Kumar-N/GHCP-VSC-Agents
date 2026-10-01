
import * as constants from "./constants.ts";
import type {
    AlertTableDataType,
    ContainerRecord,
    HomeDataPayload,
    HomeDashboardData,
    ItemRecord,
} from "./sample-data.js";

const getJson = async <T>(path: string): Promise<T> => {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }

    return response.json() as Promise<T>;
};

export const getUserBasedOptions = (): Promise<HomeDataPayload> =>
    getJson("/api/home/options");

export const getHomeData = (_payload?: HomeDataPayload): Promise<HomeDashboardData> =>
    getJson("/api/home");

export const getTableData = (
    alertType: typeof constants.typesOfAlerts[number],
): Promise<AlertTableDataType> =>
    getJson(`/api/home/alerts/${encodeURIComponent(alertType)}`);

export const getMetricTableData = (
    metricType: typeof constants.typesOfMetrics[number],
): Promise<ItemRecord[] | ContainerRecord[]> =>
    getJson(`/api/home/metrics/${encodeURIComponent(metricType)}`);
