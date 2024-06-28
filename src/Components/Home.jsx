import React, { useState } from "react";
import Personal from "./Personal";
import Steps from "./Steps";
import Buttons from "./Buttons";
import SelectPlan from "./SelectPlan";
import Adds from "./Adds";
import Summary from "./Summary";
import Finish from "./Finish";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [toggle, setToggle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [name, setName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  const validatePersonalInfo = () => {
    if (!name || !emailAdress || !phoneNumber) {
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Personal
            name={name}
            setName={setName}
            emailAdress={emailAdress}
            setEmailAdress={setEmailAdress}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            error={error}
          />
        );
      case 2:
        return (
          <SelectPlan
            handleToggle={handleToggle}
            toggle={toggle}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        );
      case 3:
        return (
          <Adds
            toggle={toggle}
            selectedAddOns={selectedAddOns}
            setSelectedAddOns={setSelectedAddOns}
          />
        );
      case 4:
        return (
          <Summary
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            toggle={toggle}
            selectedPlan={selectedPlan}
            selectedAddOns={selectedAddOns}
          />
        );
      default:
        return <Finish />;
    }
  };

  const handleToggle = () => {
    setToggle((prevCycle) => (prevCycle === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <main className="relative flex flex-col lg:flex-row gap-10 lg:gap-20 w-full lg:w-3/5 lg:border border-gray-200 rounded-2xl lg:p-4 lg:bg-white font-ubuntu mx-auto h-screen lg:h-auto shadow-md">
      <Steps currentStep={currentStep} />
      <div className=" w-full flex flex-col justify-between  lg:w-3/5 gap-10 lg:gap-20 flex-grow ">
        <div className="">{renderStep()}</div>
        <div className={` lg:bg-white bg-white  p-3`}>
          <Buttons
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            validatePersonalInfo={validatePersonalInfo}
          />
        </div>
      </div>
    </main>
  );
}
