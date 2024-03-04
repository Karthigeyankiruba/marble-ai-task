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


          {/* <div className="card w-72 bg-[#f1f1f1] text-black">
            <div className="card-body p-4">
              <div className="flex flex-row justify-between">
                <div>
                  <h6 className="card-title text-sm font-light">
                    Online store sessions
                  </h6>
                  <div className="border-b border-dashed border-zinc-300"></div>
                </div>
                <button className="p-2 rounded-md hover:bg-zinc-300">
                  <Icon icon="bxs:pencil" className="text-zinc-600" />
                </button>
              </div>
              <div className="flex flex-row gap-1">
                <h1 className="card-content font-bold">255,581</h1>

                <span className="flex flex-row items-center text-sm text-zinc-600">
                  <Icon icon="iconamoon:arrow-down-2-fill" />
                  9%
                </span>
              </div>
            </div>
          </div> */}

          {cardDetails?.map((card, index) => (
            <Card
              index={index}
              card={card}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </div>

        <div className="mr-5" onClick={() => setCollapseChart((prev) => !prev)}>
          <Icon icon={collapseChart ? "iconamoon:arrow-up-2-bold" : "iconamoon:arrow-down-2-bold"} fontSize={30} />
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
