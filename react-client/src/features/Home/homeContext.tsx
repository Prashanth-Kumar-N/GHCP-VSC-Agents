import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { HomeDashboardData, HomeDataPayload } from "./sample-data";

export interface HomeContextType {
  userBasedOptions: HomeDataPayload | null;
  dropDownData: { Segment: any[]; Warehouse: any[] } | null;
  homeDashboardData: HomeDashboardData | null;
  setUserBasedOptions: (options: HomeDataPayload) => void;
  setDropDownData: (data: { Segment: any[]; Warehouse: any[] }) => void;
  setHomeDashboardData: (data: HomeDashboardData) => void;
}

const HomeContext = createContext<HomeContextType>({
  userBasedOptions: null,
  dropDownData: null,
  homeDashboardData: null,
  setUserBasedOptions: (_options: HomeDataPayload) => {},
  setDropDownData: (_data: { Segment: any[]; Warehouse: any[] }) => {},
  setHomeDashboardData: (_data: HomeDashboardData) => {}
});

export const HomeContextProvider = ({ children }: { children: ReactNode }) => {
  const [userBasedOptions, setUserBasedOptions] = useState<HomeDataPayload | null>(null);
  const [dropDownData, setDropDownData] = useState<{ Segment: any[]; Warehouse: any[] } | null>(null);
  const [homeDashboardData, setHomeDashboardData] = useState<HomeDashboardData | null>(null);

  return (
    <HomeContext.Provider
      value={{
        userBasedOptions,
        dropDownData,
        homeDashboardData,
        setUserBasedOptions,
        setDropDownData,
        setHomeDashboardData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContext;