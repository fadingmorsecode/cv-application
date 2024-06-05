import EducationalInfo from './form-components/education';
import GeneralInfo from './form-components/general';

export default function FormBuilder() {
  return (
    <form>
      <GeneralInfo />
      <EducationalInfo />
    </form>
  );
}
