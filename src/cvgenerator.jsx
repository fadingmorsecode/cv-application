import EducationalInfo from './form-components/education';
import GeneralInfo from './form-components/general';
import PracticalInfo from './form-components/practical';
import RenderCV from './rendercv';
import { useState } from 'react';

export default function FormBuilder() {
  const [submitValue, setSubmitValue] = useState(false);

  const [generalData, setGeneralData] = useState({});

  const [educationalData, setEducationalData] = useState([]);

  const [practicalData, setPracticalData] = useState([]);

  function handleGeneralData(data) {
    setGeneralData(data);
  }

  function handleEducationalData(data) {
    setEducationalData(data);
  }

  function handlePracticalData(data) {
    setPracticalData(data);
  }

  function handleSubmitClick() {
    setSubmitValue(true);
  }

  return !submitValue ? (
    <>
      <GeneralInfo handleGeneralData={handleGeneralData} />
      <EducationalInfo handleEducationalData={handleEducationalData} />
      <PracticalInfo handlePracticalData={handlePracticalData} />
      <button onClick={handleSubmitClick}>Submit</button>
    </>
  ) : (
    <RenderCV
      generalData={generalData}
      educationalData={educationalData}
      practicalData={practicalData}
    />
  );
}
