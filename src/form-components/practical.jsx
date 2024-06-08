import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CreatePracticalInput({ type, id, value, onChange, checked }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
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

function CreatePracticalComponent({ id, componentDeletion }) {
  const [editState, setEditState] = useState(false);
  const [companyValue, setCompanyValue] = useState('');
  const [positionValue, setPositionValue] = useState('');
  const [dutiesValue, setDutiesValue] = useState('');
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [currentPractical, setCurrentPractical] = useState(false);

  function handleEditBtn() {
    setEditState(true);
  }

  function handleSaveBtn() {
    setEditState(false);
  }

  function handleCompanyChange(e) {
    setCompanyValue(e.target.value);
  }

  function handlePositionChange(e) {
    setPositionValue(e.target.value);
  }

  function handleDutiesChange(e) {
    setDutiesValue(e.target.value);
  }

  function handleStartChange(e) {
    setStartValue(e.target.value);
  }

  function handleEndChange(e) {
    setEndValue(e.target.value);
  }

  function handleMarkChange() {
    if (currentPractical) {
      setEndValue('');
    }
    setCurrentPractical(!currentPractical);
  }

  return (
    <form>
      <label>Company Title:</label>
      {!editState ? (
        <p>{companyValue}</p>
      ) : (
        <CreatePracticalInput
          type={'text'}
          id={'company-title'}
          value={companyValue}
          onChange={handleCompanyChange}
        />
      )}
      <label>Position Title:</label>
      {!editState ? (
        <p>{positionValue}</p>
      ) : (
        <CreatePracticalInput
          type={'text'}
          id={'position-title'}
          value={positionValue}
          onChange={handlePositionChange}
        />
      )}
      <label>Main Duties:</label>
      {!editState ? (
        <p>{dutiesValue}</p>
      ) : (
        <CreatePracticalInput
          type={'text'}
          id={'main-duties'}
          value={dutiesValue}
          onChange={handleDutiesChange}
        />
      )}
      <label>Start Date:</label>
      {!editState ? (
        <p>{startValue}</p>
      ) : (
        <CreatePracticalInput
          type={'date'}
          id={'start-date'}
          value={startValue}
          onChange={handleStartChange}
        />
      )}
      <label>End Date:</label>
      {!editState ? (
        <p>{currentPractical ? 'Present' : endValue}</p>
      ) : (
        <>
          {!currentPractical && (
            <CreatePracticalInput
              type={'date'}
              id={'end-date'}
              value={endValue}
              onChange={handleEndChange}
            />
          )}
          <label htmlFor='practical-checkbox'>Currently Work Here</label>
          <CreatePracticalInput
            type={'checkbox'}
            id={'practical-checkbox'}
            checked={currentPractical}
            onChange={handleMarkChange}
          />
        </>
      )}
      {!editState ? (
        <EditButton onClick={handleEditBtn} />
      ) : (
        <SaveButton onClick={handleSaveBtn} />
      )}
      <DeleteButton
        onClick={(e) => {
          e.preventDefault();
          componentDeletion(id);
        }}
      />
    </form>
  );
}

function CreatePracticalButton({ onClick }) {
  return <button onClick={onClick}>Add Experience</button>;
}

export default function PracticalInfo() {
  const [components, setComponents] = useState([]);

  function deleteComponent(id) {
    const oldComponents = [...components];
    const newComponents = oldComponents.filter(
      (component) => component.id !== id
    );
    setComponents(newComponents);
  }

  const renderComponents = components.map((component) => {
    return (
      <CreatePracticalComponent
        key={component.id}
        id={component.id}
        componentDeletion={deleteComponent}
      />
    );
  });

  return (
    <>
      <h3>Practical Information</h3>
      {renderComponents}
      <CreatePracticalButton
        onClick={(e) => {
          e.preventDefault();
          setComponents([...components, { id: uuidv4() }]);
        }}
      />
    </>
  );
}
