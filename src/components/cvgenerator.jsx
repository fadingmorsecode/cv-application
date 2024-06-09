import EducationalInfo from './form-components/education.jsx';
import GeneralInfo from './form-components/general.jsx';
import PracticalInfo from './form-components/practical.jsx';
import RenderCV from './rendercv.jsx';
import '../styles/cvgenerator.css';
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
    <div className='cv-gen-container'>
      <div className='cv-forms-container'>
        <GeneralInfo handleGeneralData={handleGeneralData} />
        <EducationalInfo handleEducationalData={handleEducationalData} />
        <PracticalInfo handlePracticalData={handlePracticalData} />
        <button onClick={handleSubmitClick} className='btn' id='submit-btn'>
          Create
        </button>
      </div>
    </div>
  ) : (
    <RenderCV
      generalData={generalData}
      educationalData={educationalData}
      practicalData={practicalData}
    />
  );
}
