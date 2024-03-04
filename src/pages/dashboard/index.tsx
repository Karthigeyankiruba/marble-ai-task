import React, { useMemo, useState } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { ResponsiveBarChart } from "../../components/dashboard/ResponsiveBarChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";
import { Icon } from "@iconify/react";
import DashboardCards from "../../components/dashboard/components/DashboardCards";

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

export const Dashboard: React.FC = () => {
  const [collapseChart, setCollapseChart] = useState(true);

  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  const memoizedOrdersData = useMemoizedChartData(dailyOrders);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: (
        <ResponsiveAreaChart
          kpi="Daily revenue"
          data1={memoizedRevenueData}
          data2={memoizedOrdersData}
          colors={{
            stroke1: "#6EC1F3",
            fill1: "rgba(54, 162, 235, 0.2)",
            stroke2: "E1F3FC",
            fill2: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
  ];
// console.log("collapseChart", collapseChart);

  return (
    <>
      <Stats
        dailyRevenue={dailyRevenue}
        dailyOrders={dailyOrders}
        newCustomers={newCustomers}
      />

      <div className="card p-4 bg-white w-auto">

          <DashboardCards
            collapseChart={collapseChart}
            setCollapseChart={setCollapseChart}
          />


        {collapseChart && (
          <div>
            <TabView tabs={tabs} collapseChart={collapseChart} setCollapseChart={setCollapseChart}/>

            {/* {tabs?.map((tab: TTab, index: number) => (
              <div>{tab?.content}</div>
            ))} */}
          </div>
        )}
      </div>

      <RecentSales />
    </>
  );
};
