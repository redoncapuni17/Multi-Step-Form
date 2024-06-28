import React from "react";
import AddsCard from "./AddsCard";

export default function Adds({ toggle, selectedAddOns, setSelectedAddOns }) {
  const addOns = [
    {
      title: "Online Service",
      comment: "Access to multiplayer games",
      priceMonthly: "1/mo",
      priceYearly: "10/yr",
    },
    {
      title: "Larger storage",
      comment: "Extra 1TB of cloud save",
      priceMonthly: "2/mo",
      priceYearly: "20/yr",
    },
    {
      title: "Customizable Profile",
      comment: "Custom theme on your profile",
      priceMonthly: "2/mo",
      priceYearly: "20/yr",
    },
  ];

  const handleSelectAddOn = (addOn) => {
    if (selectedAddOns.some((selected) => selected.title === addOn.title)) {
      setSelectedAddOns(
        selectedAddOns.filter((selected) => selected.title !== addOn.title)
      );
    } else {
      setSelectedAddOns([...selectedAddOns, addOn]);
    }
  };

  return (
    <section className="lg:flex  lg:flex-col lg:mt-9 lg:gap-5 bg-white lg:p-0  lg:m-0 m-5 lg:static lg:shadow-none absolute flex flex-col p-5 top-20 rounded-lg gap-5 shadow-xl ">
      <div>
        <h1 className="text-3xl font-bold text-marineBlue">Pick add-ons</h1>
        <p className="text-coolGray">
          Add-ons help enhance your gaming experience
        </p>
      </div>
      {addOns.length === 0 ? (
        ""
      ) : (
        <div className="flex flex-col gap-3">
          {addOns.map((addOn) => (
            <AddsCard
              key={addOn.title}
              title={addOn.title}
              comment={addOn.comment}
              price={
                toggle === "monthly" ? addOn.priceMonthly : addOn.priceYearly
              }
              isSelected={selectedAddOns.some(
                (selected) => selected.title === addOn.title
              )}
              handleSelect={() => handleSelectAddOn(addOn)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
