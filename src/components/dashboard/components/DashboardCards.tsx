import React from "react";

import { Icon } from "@iconify/react";
import { useState } from "react";
import Card from "./Card";
type DashboardProps = {
  collapseChart: boolean;
  setCollapseChart: React.Dispatch<React.SetStateAction<boolean>>;
};
const DashboardCards: React.FC<DashboardProps> = ({
  collapseChart,
  setCollapseChart,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const cardDetails = [
    {
      title: "Online store sessions",
      titleIcon: "bxs:pencil",
      rate: "255,581",
      percentage: "9",
      growthIcon: "iconamoon:arrow-down-2-fill",
      bgSecondary: true,
    },
    {
      title: "Net return value",
      titleIcon: "bxs:pencil",
      rate: "-$15,07.44",
      percentage: "14",
      growthIcon: "iconamoon:arrow-up-2-fill",
    },
    {
      title: "Total orders",
      titleIcon: "bxs:pencil",
      rate: "10,511",
      percentage: "2",
      growthIcon: "iconamoon:arrow-up-2-fill",
    },
    {
      title: "Conversion rate",
      titleIcon: "bxs:pencil",
      rate: "3.18",
      percentage: "7",
      growthIcon: "iconamoon:arrow-up-2-fill",
    },
  ];
  console.log("collapseChart dashboard", collapseChart);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex gap-20">
          {cardDetails?.map((card, index) => (
            <Card
              index={index}
              card={card}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        <div className="mr-5 rounded-full p-2 transition ease-in duration-300 hover:bg-zinc-200 " onClick={() => setCollapseChart((prev) => !prev)}>
          <Icon icon={collapseChart ? "iconamoon:arrow-up-2-bold" : "iconamoon:arrow-down-2-bold"} fontSize={30} />
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
