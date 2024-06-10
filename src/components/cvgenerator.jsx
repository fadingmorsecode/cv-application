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

  function verifyGeneral() {
    if (generalData.name === undefined) {
      return false;
    }
    return true;
  }

  function verifyEducational() {
    if (educationalData.length < 1) {
      return 'empty';
    }
    const isValid = educationalData.every((obj) => {
      return (
        obj.school !== '' &&
        obj.degree !== '' &&
        obj.start !== '' &&
        (obj.end !== '' || obj.current === true)
      );
    });
    if (isValid) {
      return true;
    }
    return false;
  }

  function showError(error) {
    alert(error);
  }

  function handleSubmitClick() {
    if (!verifyGeneral()) {
      return showError('Enter a name');
    }
    if (verifyEducational() === 'empty') {
      return showError('Must have at least one educational entry');
    } else if (!verifyEducational()) {
      return showError('Educational Information missing required fields');
    }
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
