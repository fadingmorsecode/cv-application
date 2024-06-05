import { useState } from 'react';

function EducationInput({ type, id }) {
  return <input type={type} id={id} />;
}

function CreateEducationComponent() {
  return (
    <form>
      <label htmlFor='school-name'>School Name:</label>
      <EducationInput type={'text'} id={'school-name'} />
      <label htmlFor='degree'>Degree:</label>
      <EducationInput type={'text'} id={'degree'} />
      <label htmlFor='school-start'>Start Date:</label>
      <EducationInput type={'date'} id={'school-start'} />
      <label htmlFor='school-end'>End Date:</label>
      <EducationInput type={'date'} id={'school-end'} />
    </form>
  );
}

function CreateEducationButton({ onClick }) {
  return <button onClick={onClick}>Add Education </button>;
}

export default function EducationalInfo() {
  const [components, setComponents] = useState([]);

  function handleCreateEducationButton(e) {
    e.preventDefault();
    setComponents([...components, { id: components.length + 1 }]);
  }

  const renderComponents = components.map((component) => (
    <CreateEducationComponent key={component.id} />
  ));

  return (
    <form>
      <legend>Educational Info</legend>
      {renderComponents}
      <CreateEducationButton onClick={handleCreateEducationButton} />
    </form>
  );
}
