import { Icon } from "@iconify/react";
import React, { useState } from "react";

type CardProps = {
  card: {
    title: string;
    titleIcon: string;
    growthIcon?: string;
    percentage: string;
    rate: string;
  };
  index: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
};

const editMenus = [
  "Average order value",
  "Conversion rate",
  "Gross sales",
  "Net return value",
  "Stop search conversion",
  "Retun rate",
];
const Card: React.FC<CardProps> = ({ card, index }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div
      key={index}
      className={`card w-72 ${
        index === 0 ? "bg-[#f1f1f1]" : ""
      } hover:bg-[#f1f1f1]  text-black`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-body p-4">
        <div className="flex flex-row justify-between">
          <div className="dropdown dropdown-hover">
            <h6 tabIndex={0} className="card-title text-sm font-light">
              {card.title}
            </h6>
            <div className="border-b border-dashed border-zinc-300"></div>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] p-0 shadow bg-white rounded-box w-[450px] mt-5"
            >
              <div className="card p-4">
                <h5 className="card-title text-lg font-normal">
                  Online store sessions
                </h5>
                <p className="card-content text-base text-zinc-600 mt-2">
                  Your online store’s traffic volume, shown in sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-dashed border-zinc-300"></div>

          {hoveredIndex === index ? (
            <div
              tabIndex={0}
              role="button"
              className="dropdown dropdown-right dropdown-bottom p-2 rounded-md hover:bg-zinc-300"
            >
              <Icon icon={card.titleIcon} className="text-zinc-600" />

              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-0 shadow bg-base-100 rounded-md w-64 text-sm font-light"
              >
                {editMenus.map((menu, index) => (
                  <li className="group">
                    <a className="flex justify-between">
                      <span className="flex items-center gap-3">
                        <Icon icon="fa6-solid:chart-line" />
                        {menu}
                      </span>
                      <Icon
                        icon="pajamas:question-o"
                        className="hidden group-hover:inline-block"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="p-4 h-4"></div>
          )}
        </div>

        <div className="flex flex-row gap-1">
          <h1 className="card-content font-bold">{card.rate}</h1>

          <span className="flex flex-row items-center text-sm text-zinc-600">
            <Icon icon={card.growthIcon ? card.growthIcon : ""} />
            {card.percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
