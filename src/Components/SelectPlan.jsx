import React from "react";
import SelectCard from "./SelectCard";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

export default function SelectPlan({
  handleToggle,
  toggle,
  selectedPlan,
  setSelectedPlan,
}) {
  const plans = [
    {
      icon: arcade,
      title: "Arcade",
      priceMonthly: "9/mo",
      priceYearly: "90/yr",
    },
    {
      icon: advanced,
      title: "Advanced",
      priceMonthly: "12/mo",
      priceYearly: "120/yr",
    },
    { icon: pro, title: "Pro", priceMonthly: "15/mo", priceYearly: "150/yr" },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section className="lg:flex  lg:flex-col lg:mt-9 lg:gap-6 bg-white lg:p-0  lg:m-0 m-5 lg:static lg:shadow-none absolute flex flex-col p-5 top-20 rounded-lg gap-5 shadow-xl ">
      <div>
        <h1 className="text-3xl font-bold text-marineBlue">Select Plan</h1>
        <p className="text-gray-400">
          You have the option of monthly or yearly billing
        </p>
      </div>

      <div className="lg:flex lg:flex-row  lg:justify-between flex flex-col gap-3">
        {plans.map((plan) => (
          <SelectCard
            key={plan.title}
            icon={plan.icon}
            title={plan.title}
            price={toggle === "monthly" ? plan.priceMonthly : plan.priceYearly}
            isSelected={selectedPlan && selectedPlan.title === plan.title}
            handleSelect={() => handleSelectPlan(plan)}
          />
        ))}
      </div>

      <article className="flex justify-center gap-6 rounded-md bg-gray-50 border p-2">
        <p
          className={`cursor-pointer  ${
            toggle === "monthly"
              ? "text-marineBlue font-medium"
              : "text-coolGray"
          }`}
        >
          Monthly
        </p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            onChange={handleToggle}
            checked={toggle === "yearly"}
          />
          <div
            className={`w-10 h-5 bg-gray-200 rounded-full ${
              toggle === "yearly" ? "bg-indigo-500" : ""
            } peer-checked:bg-blue-500 peer transition-all duration-300`}
          >
            <div
              className={`w-5 h-5 bg-white  rounded-full shadow-md transform transition-transform duration-300 ${
                toggle === "yearly" ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </div>
        </label>
        <p
          className={`cursor-pointer  ${
            toggle === "yearly" ? "text-marineBlue" : "text-coolGray"
          }`}
        >
          Yearly
        </p>
      </article>
    </section>
  );
}
