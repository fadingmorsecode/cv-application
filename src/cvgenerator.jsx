import EducationalInfo from './form-components/education';
import GeneralInfo from './form-components/general';
import PracticalInfo from './form-components/practical';

export default function FormBuilder() {
  return (
    <>
      <GeneralInfo />
      <EducationalInfo />
      <PracticalInfo />
    </>
  );
}
