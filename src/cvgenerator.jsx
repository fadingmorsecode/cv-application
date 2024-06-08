import EducationalInfo from './form-components/education';
import GeneralInfo from './form-components/general';
import PracticalInfo from './form-components/practical';
import { useState } from 'react';

export default function FormBuilder() {
  const [submitValue, setSubmitValue] = useState(false);

  function handleSubmitClick() {
    setSubmitValue(true);
  }

  // function getAllValues() {
  //   return nameValue
  // }

  return !submitValue ? (
    <>
      <GeneralInfo />
      <EducationalInfo />
      <PracticalInfo />
      <button onClick={handleSubmitClick}>Submit</button>
    </>
  ) : (
    <p>Test</p>
  );
}
