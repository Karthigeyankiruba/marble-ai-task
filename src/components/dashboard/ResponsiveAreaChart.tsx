import React, { useState } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
} from "recharts";
import { IChartDatum } from "../../interfaces";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import mockData from "../../../src/mockData.json";

type TResponsiveAreaChartProps = {
  kpi: string;
  data1: IChartDatum[];
  data2: IChartDatum[];
  colors: {
    stroke1: string;
    fill1: string;
    stroke2: string;
    fill2: string;
  };
};

const startDateMock: Date = new Date("Feb 2023");
const endDateMock: Date = new Date("Jul 2024");

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  console.log("payload", payload);

  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-md p-4 shadow-md">
        <div className="flex items-center  gap-2">
          <div className="border-b-2 border-dashed border-[#b2e1ff] w-4"></div>
          <p className="text-sm">{label}</p>
          <p className="text-sm">{payload[0].payload.price1}</p>
          <p className="flex gap-1 items-center text-sm text-zinc-400">
            <Icon icon="heroicons:arrow-trending-up-20-solid" />
            {payload[0].payload.percentage}%
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="border-b-1 border border-[#14a4ff] w-4"></div>
          <p className="text-sm">{label}</p>
          <p className="text-sm">{payload[1].payload.price2}</p>
        </div>
      </div>
    );
  }

  return null;
};
export const ResponsiveAreaChart = ({
  kpi,
  data1,
  data2,
  colors,
}: TResponsiveAreaChartProps) => {
  const [startDate, setStartDate] = useState<Date | null>(startDateMock);
  const [endDate, setEndDate] = useState<Date | null>(endDateMock);

  const filteredData = mockData.filter((entry) => {
    const entryDate = new Date(entry.date);

    return startDate && endDate
      ? entryDate >= startDate && entryDate <= endDate
      : true;
  });

  return (
    <>
      <ResponsiveContainer height={400}>
        <LineChart
          data={filteredData}
          height={400}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />

          <YAxis tick={{ fontSize: 12 }} />
          <CartesianGrid
            vertical={false}
            strokeDasharray="0"
            stroke={"#e4e4e4"}
            fillOpacity={0.6}
          />

          <Tooltip content={<CustomTooltip />} />
          {/* <Legend />  */}
          <Line
            dot={null}
            activeDot={{ r: 0 }}
            type="monotone"
            dataKey="value1"
            stroke="#14a4ff"
            strokeWidth={2}
          />
          <Line
            dot={null}
            activeDot={{ r: 0 }}
            type="monotone"
            dataKey="value2"
            stroke="#b2e1ff"
            strokeWidth={2}
            strokeDasharray={"7 7 7"}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex gap-10 justify-end mt-3">
        <div className="group flex gap-2 items-center rounded-sm bg-zinc-50 w-64 px-5">
            <div className="border-b-2 border-dashed border-[#b2e1ff] w-4"></div>
          <DatePicker
            dateFormat="MMM d, yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="group p-2 rounded-sm bg-zinc-50"
          />
        </div>
        <div className="group flex gap-2 items-center rounded-sm bg-zinc-50 w-64 px-5">
          <div className="border-b-1 border border-[#14a4ff] w-4"></div>

          <DatePicker
            dateFormat="MMM d, yyyy"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="group p-2 rounded-sm bg-zinc-50"
          />
        </div>
      </div>
    </>
  );
};
