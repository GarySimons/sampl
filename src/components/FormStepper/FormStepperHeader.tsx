import React from "react";
import "./FormStepperHeaderStyles.scss";

type FormStepperHeaderProps = {
  step: number;
};

const FormStepperHeader: React.FC<FormStepperHeaderProps> = ({ step }) => {
  return (
    <div className="step-header-container">
      <div className={`step-header-step ${step >= 1 ? "completed" : ""}`}></div>
      <div className={`step-header-step ${step >= 2 ? "completed" : ""}`}></div>
      <div className={`step-header-step ${step >= 3 ? "completed" : ""}`}></div>
      <div className={`step-header-step ${step >= 4 ? "completed" : ""}`}></div>
      <div className={`step-header-step ${step >= 5 ? "completed" : ""}`}></div>
    </div>
  );
};

export default FormStepperHeader;
