import React from "react";

interface StepNavigatorProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({ currentStep, totalSteps, onNext, onPrev }) => {
  return (
    <div>
      {currentStep > 0 && <button onClick={onPrev}>Previous</button>}
      {currentStep < totalSteps - 1 && <button onClick={onNext}>Next</button>}
    </div>
  );
};

export default StepNavigator;
