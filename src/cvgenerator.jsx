import EducationalInfo from './form-components/education';
import GeneralInfo from './form-components/general';
import PracticalInfo from './form-components/practical';
import { useState } from 'react';

export default function FormBuilder() {
  const [submitValue, setSubmitValue] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [schoolValue, setSchoolValue] = useState('');
  const [degreeValue, setDegreeValue] = useState('');
  const [schoolDateStartValue, setSchoolDateStartValue] = useState('');
  const [schoolDateEndValue, setSchoolDateEndValue] = useState('');
  const [currentAttendance, setCurrentAttendance] = useState(false);

  const [companyValue, setCompanyValue] = useState('');
  const [positionValue, setPositionValue] = useState('');
  const [dutiesValue, setDutiesValue] = useState('');
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [currentPractical, setCurrentPractical] = useState(false);

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
