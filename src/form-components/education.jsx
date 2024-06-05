import { useState } from 'react';

function EducationInput({ type, id }) {
  return <input type={type} id={id} />;
}

function EditButton({ onClick }) {
  return <button onClick={onClick}>Edit</button>;
}

function SaveButton({ onClick }) {
  return <button onClick={onClick}>Save</button>;
}

function CreateEducationComponent() {
  const [editStatus, setEditStatus] = useState(false);

  function EditButtonHandler() {
    setEditStatus(true);
  }

  function SaveButtonHandler() {
    setEditStatus(false);
  }

  return (
    <form>
      <label htmlFor='school-name'>School Name:</label>
      {editStatus ? (
        <EducationInput type={'text'} id={'school-name'} />
      ) : (
        <p></p>
      )}
      <label htmlFor='degree'>Degree:</label>
      {editStatus ? <EducationInput type={'text'} id={'degree'} /> : <p></p>}
      <label htmlFor='school-start'>Start Date:</label>
      {editStatus ? (
        <EducationInput type={'date'} id={'school-start'} />
      ) : (
        <p></p>
      )}
      <label htmlFor='school-end'>End Date:</label>
      {editStatus ? (
        <EducationInput type={'date'} id={'school-end'} />
      ) : (
        <p></p>
      )}
      {editStatus ? (
        <SaveButton onClick={SaveButtonHandler} />
      ) : (
        <EditButton onClick={EditButtonHandler} />
      )}
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
