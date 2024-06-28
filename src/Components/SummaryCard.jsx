import React from "react";

export default function SummaryCard({
  title,
  price,
  selectedAddOns,
  currentStep,
  setCurrentStep,
}) {
  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 2);
  };
  return (
    <article className="flex justify-between py-2  ">
      <div>
        <h1
          className={`${
            selectedAddOns ? "text-coolGray" : "font-bold text-marineBlue"
          }`}
        >
          {title}
        </h1>
        {!selectedAddOns && currentStep && (
          <a
            onClick={handleBackStep}
            className="text-gray-500 cursor-pointer underline hover:text-purplishBlue "
          >
            Change
          </a>
        )}
      </div>
      <p
        className={`${
          selectedAddOns ? "font-normal" : "font-bold text-marineBlue"
        }`}
      >
        ${price}
      </p>
    </article>
  );
}
