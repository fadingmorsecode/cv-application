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

  function verifyArray(array) {
    if (array.length < 1) {
      return 'empty';
    }
    const isValid = array.every((obj) => {
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
    const errorText = document.querySelector('.error-text');
    errorText.textContent = error;
    errorText.classList.add('error-visible');
    errorText.scrollIntoView();
  }

  function handleSubmitClick() {
    if (!verifyGeneral()) {
      return showError('Missing name');
    }
    if (verifyArray(educationalData) === 'empty') {
      return showError('Missing at least one educational entry');
    } else if (!verifyArray(educationalData)) {
      return showError('Educational Information missing required fields');
    }
    if (verifyArray(practicalData) === 'empty') {
      return showError('Missing at least one practical entry');
    } else if (!verifyArray(practicalData)) {
      return showError('Practical Information missing required fields');
    }
    setSubmitValue(true);
  }

  return !submitValue ? (
    <div className='cv-gen-container'>
      <header className='cv-main-heading'>CV GENERATOR</header>
      <p className='error-text'></p>
      <p className='optional-paragraph' tabIndex={-1}>
        <em>(All fields are required unless specified optional)</em>
      </p>
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
