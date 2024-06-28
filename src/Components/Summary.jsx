import React from "react";
import SummaryCard from "./SummaryCard";

export default function Summary({
  selectedPlan,
  selectedAddOns,
  toggle,
  currentStep,
  setCurrentStep,
}) {
  const hasContent = selectedPlan || selectedAddOns.length > 0;

  const calculateTotal = () => {
    let total = 0;

    // Add selectedPlan price
    if (selectedPlan) {
      total +=
        toggle === "monthly"
          ? parseFloat(selectedPlan.priceMonthly)
          : parseFloat(selectedPlan.priceYearly);
    }

    // Add selectedAddOns prices
    selectedAddOns.forEach((addOn) => {
      total +=
        toggle === "monthly"
          ? parseFloat(addOn.priceMonthly)
          : parseFloat(addOn.priceYearly);
    });

    return total.toFixed(2); // Format total to two decimal places
  };

  return (
    <section className="lg:flex  lg:flex-col lg:mt-9 lg:gap-5 bg-white lg:p-0  lg:m-0 m-5 lg:static lg:shadow-none absolute flex flex-col p-5 top-20 rounded-lg gap-5 shadow-xl ">
      <div>
        <h1 className="text-3xl font-bold">Finishing up</h1>
        <p className="text-gray-400">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      {hasContent ? (
        <div className="border rounded-lg bg-gray-50 px-4 py-2">
          {selectedPlan && (
            <SummaryCard
              title={`${selectedPlan.title} (${
                toggle === "monthly" ? "Monthly" : "Yearly"
              })`}
              price={
                toggle === "monthly"
                  ? selectedPlan.priceMonthly
                  : selectedPlan.priceYearly
              }
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          <hr />
          {selectedAddOns.map((addOn) => (
            <SummaryCard
              selectedAddOns={selectedAddOns}
              key={addOn.title}
              title={addOn.title}
              price={
                toggle === "monthly" ? addOn.priceMonthly : addOn.priceYearly
              }
            />
          ))}
        </div>
      ) : (
        <p className="flex justify-center p-4 border rounded-lg bg-gray-50 text-gray-500 text-2xl">
          No content
        </p>
      )}
      <div className="flex justify-between text-coolGray lg:pl-5">
        <h4>
          {toggle === "monthly" ? "Total (per month)" : "Total (per year)"}
        </h4>
        <p className="text-lg font-bold text-purplishBlue">
          ${calculateTotal()} {toggle === "monthly" ? "/mo" : "/yr"}
        </p>
      </div>
    </section>
  );
}
