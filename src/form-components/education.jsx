import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function EducationInput({ type, id, value, onChange }) {
  return <input type={type} id={id} value={value} onChange={onChange} />;
}

function EditButton({ onClick }) {
  return <button onClick={onClick}>Edit</button>;
}

function SaveButton({ onClick }) {
  return <button onClick={onClick}>Save</button>;
}

function DeleteButton({ onClick }) {
  return <button onClick={onClick}>Delete</button>;
}

function CreateEducationComponent({ id, onClick }) {
  const [editStatus, setEditStatus] = useState(false);
  const [schoolValue, setSchoolValue] = useState('');
  const [degreeValue, setDegreeValue] = useState('');
  const [dateStartValue, setDateStartValue] = useState('');
  const [dateEndValue, setDateEndValue] = useState('');

  function EditButtonHandler() {
    setEditStatus(true);
  }

  function SaveButtonHandler() {
    setEditStatus(false);
  }

  function handleSchoolChange(e) {
    setSchoolValue(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegreeValue(e.target.value);
  }

  function handleDateStartChange(e) {
    setDateStartValue(e.target.value);
  }

  function handleDateEndChange(e) {
    setDateEndValue(e.target.value);
  }

  return (
    <form>
      <label htmlFor='school-name'>School Name:</label>
      {editStatus ? (
        <EducationInput
          type={'text'}
          id={'school-name'}
          value={schoolValue}
          onChange={handleSchoolChange}
        />
      ) : (
        <p>{schoolValue}</p>
      )}
      <label htmlFor='degree'>Degree:</label>
      {editStatus ? (
        <EducationInput
          type={'text'}
          id={'degree'}
          value={degreeValue}
          onChange={handleDegreeChange}
        />
      ) : (
        <p>{degreeValue}</p>
      )}
      <label htmlFor='school-start'>Start Date:</label>
      {editStatus ? (
        <EducationInput
          type={'date'}
          id={'school-start'}
          value={dateStartValue}
          onChange={handleDateStartChange}
        />
      ) : (
        <p>{dateStartValue}</p>
      )}
      <label htmlFor='school-end'>End Date:</label>
      {editStatus ? (
        <EducationInput
          type={'date'}
          id={'school-end'}
          value={dateEndValue}
          onChange={handleDateEndChange}
        />
      ) : (
        <p>{dateEndValue}</p>
      )}
      {editStatus ? (
        <SaveButton onClick={SaveButtonHandler} />
      ) : (
        <EditButton onClick={EditButtonHandler} />
      )}
      <DeleteButton
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
      />
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
    setComponents([...components, { id: uuidv4() }]);
  }

  function handleDeleteButton(id) {
    console.log(id);
    const oldComponents = [...components];
    const newComponents = oldComponents.filter(
      (component) => component.id !== id
    );
    setComponents(newComponents);
  }

  const renderComponents = components.map((component) => (
    <CreateEducationComponent
      key={component.id}
      id={component.id}
      onClick={handleDeleteButton}
    />
  ));

  return (
    <>
      <p>Educational Info</p>
      {renderComponents}
      <CreateEducationButton onClick={handleCreateEducationButton} />
    </>
  );
}
