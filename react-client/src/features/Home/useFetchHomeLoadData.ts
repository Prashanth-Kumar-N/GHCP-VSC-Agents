import { useContext, useEffect } from "react";
import HomeContext from "./homeContext";
import { getHomeData, getUserBasedOptions } from "./api";
import { useQuery, useMutation } from "@tanstack/react-query";
import type { HomeDashboardData, HomeDataPayload } from "./sample-data";
import { formatDate, setDate } from "../../utils/util-functions";
import type { SearchState } from "./search-bar";

export default function useFetchHomeLoadData(search: SearchState) {
    const { setUserBasedOptions, setDropDownData, setHomeDashboardData } = useContext(HomeContext);

    // fetch user based options
    const { data:userData, isLoading: isUserBasedOptionsLoading, error: userBasedOptionsError, } = useQuery<HomeDataPayload>({
        queryKey: ["userBasedOptions", search.ORG_ID, search.FACILITY_ID, search.WORK_CENTER],
        queryFn: getUserBasedOptions
    })

    // create mutation for fetching home dashboard data
    const { mutate: getHomeDashboardData, data: homeDashboardData, isPending: isHomeDashboardDataLoading, error: homeDashboardDataError } = useMutation<HomeDashboardData, unknown, HomeDataPayload>({
        mutationFn: getHomeData
    });

    // after fetching userbased options, fetch home dashboard data
    useEffect(() => {
        if (userData) {
            setUserBasedOptions(userData);
            const payload = {
                ...userData,
                EFF_FROM_DATE: formatDate(setDate(new Date(), -56)),
                EFF_TO_DATE: formatDate(new Date())
            };
            getHomeDashboardData(payload);
        }

    }, [userData]);

    useEffect(() => {
        if (homeDashboardDataError) {
            console.error("Error fetching home dashboard data:", homeDashboardDataError);
        }

        if(!isHomeDashboardDataLoading && !!homeDashboardData) {
            setHomeDashboardData(homeDashboardData);
            setDropDownData({Segment: homeDashboardData.Segment, Warehouse: homeDashboardData.Warehouse});
        }
    }, [isHomeDashboardDataLoading, homeDashboardData]);


    return { isDataFetched: !isUserBasedOptionsLoading && !isHomeDashboardDataLoading, isError: !!userBasedOptionsError || !!homeDashboardDataError };
}