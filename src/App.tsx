import React from 'react';
import './App.scss';

import HeaderImages from './components/HeaderImages/HeaderImages';
import FormStepper from './components/FormStepper/FormStepper';


function App() {
  const [step, setStep] = React.useState(1)

  const handleStep = (step: number) => {
    setStep(step)
  }

  return (
    <div>
      <div className='main-container'>
        <div className='content-container'>
        <div className='top-container'>
          <HeaderImages />
        </div>
        <div className='stepper-container'>
          <FormStepper onStepChange={handleStep} step={step}/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
