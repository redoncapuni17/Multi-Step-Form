import React from "react";

export default function Buttons({
  currentStep,
  setCurrentStep,
  validatePersonalInfo,
}) {
  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!validatePersonalInfo()) {
        return;
      }
    }
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div
      className={`flex justify-end items-end ${
        currentStep !== 1
          ? "justify-between items-center w-full"
          : "justify-end"
      }`}
    >
      {currentStep > 1 && currentStep < 5 && (
        <button onClick={handleBackStep} className="text-coolGray">
          Go Back
        </button>
      )}
      {currentStep <= 4 && (
        <button
          onClick={handleNextStep}
          className="border px-5 py-2 rounded-md bg-indigo-900 text-white hover:bg-indigo-700 duration-200"
        >
          {currentStep !== 4 ? "Next Step" : "Confirm"}
        </button>
      )}
    </div>
  );
}
