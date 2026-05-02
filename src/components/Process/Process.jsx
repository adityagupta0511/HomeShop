import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlant, PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Process = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`flex-1 ${item.id % 2 === 0 ? "md:-mt-50" : ""}`}
      >
        <span className="flex justify-center items-center w-16 h-16 mx-auto rounded-full text-5xl md:text-7xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
          {item.number}
        </span>

        <div className="flex items-center gap-x-5 mt-6 md:mt-10">
          <span className="w-14 h-14 flex items-center justify-center border-2 border-teal-500 rounded-full text-2xl md:text-3xl bg-teal-500 text-white">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-xl md:text-2xl font-bold">
              {item.title}
            </h4>
            <p className="text-zinc-600 mt-2 text-sm md:text-base">
              {item.para}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-12 md:py-20">
        <div className="w-full flex justify-center">
          <Heading highlight="Our" heading="Process" />
        </div>

        {/* Mobile: column, Desktop: same row wala structure */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-y-12 md:gap-x-10 mt-12 md:mt-20 md:py-50">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Process;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "Fresh raw materials picked from trusted farms.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "Processed with modern techniques and care.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "Every product checked for purity and safety.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "Delivered quickly with safe, secure handling.",
    icon: <BsTruck />,
  },
];
