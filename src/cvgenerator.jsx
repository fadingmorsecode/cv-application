import EducationalInfo from './form-components/education';
import GeneralInfo from './form-components/general';
import PracticalInfo from './form-components/practical';
import RenderCV from './rendercv';
import { useState } from 'react';

export default function FormBuilder() {
  const [submitValue, setSubmitValue] = useState(false);

  const [generalData, setGeneralData] = useState([]);

  function handleGeneralData(data) {
    setGeneralData(data);
  }

  function handleSubmitClick() {
    setSubmitValue(true);
  }

  function getAllData() {
    return { generalData: generalData };
  }

  return !submitValue ? (
    <>
      <GeneralInfo handleGeneralData={handleGeneralData} />
      <EducationalInfo />
      <PracticalInfo />
      <button onClick={handleSubmitClick}>Submit</button>
    </>
  ) : (
    <RenderCV getAllData={getAllData} />
  );
}
