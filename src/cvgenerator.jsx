import EducationalInfo from './form-components/education';
import GeneralInfo from './form-components/general';
import PracticalInfo from './form-components/practical';
import RenderCV from './rendercv';
import { useState } from 'react';

export default function FormBuilder() {
  const [submitValue, setSubmitValue] = useState(false);

  const [generalData, setGeneralData] = useState({});

  const [practicalData, setPracticalData] = useState([]);

  function handleGeneralData(data) {
    setGeneralData(data);
  }

  function handlePracticalData(data) {
    setPracticalData(data);
  }

  function handleSubmitClick() {
    setSubmitValue(true);
  }

  function getAllData() {
    return { generalData: generalData, practicalData: practicalData };
  }

  return !submitValue ? (
    <>
      <GeneralInfo handleGeneralData={handleGeneralData} />
      <EducationalInfo />
      <PracticalInfo handlePracticalData={handlePracticalData} />
      <button onClick={handleSubmitClick}>Submit</button>
    </>
  ) : (
    <RenderCV getAllData={getAllData} />
  );
}
