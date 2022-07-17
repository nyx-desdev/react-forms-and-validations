import React, { useState } from "react";

const StepContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [formStepOne, setFormStepOne] = useState([
    {
        name: "email",
        type: "email",

    }
  ])


  const goToPrevious = () => {
    if (currentStep !== 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const SellerDetails = () => {
    return (
      <div>
        <h1>Seller Details</h1>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          readOnly={isReadOnly}
        />
        <span style={{ color: "red" }}>Required</span>
        <button onClick={() => setIsReadOnly(false)}>Edit</button>
      </div>
    );
  };

  return (
    <div>
      <div>
        {currentStep === 1 ? (
          <div>
            <p>Step {currentStep}</p>
            <div>{SellerDetails()}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>{currentStep === 2 ? <div>Step {currentStep}</div> : ""}</div>
      <div>{currentStep === 3 ? <div>Step {currentStep}</div> : ""}</div>
      <div>{currentStep === 4 ? <div>Step {currentStep}</div> : ""}</div>
      <button onClick={goToPrevious}>Prev</button>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default StepContainer;
