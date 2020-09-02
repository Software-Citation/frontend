import React from 'react';
import StepWizard from 'react-step-wizard';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

function Wizard() {
  return (
    <StepWizard isHashEnabled={true}>
      <Step1 hashKey={'repo'}></Step1>
      <Step2 hashKey={'cff'}></Step2>
    </StepWizard>
  );
}

export default Wizard;
