import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function CreatePracticalInput({ type, id }) {
  return <input type={type} id={id} />;
}

function EditButton({ onClick }) {
  return <button onClick={onClick}>Edit</button>;
}

function SaveButton({ onClick }) {
  return <button onClick={onClick}>Save</button>;
}

function CreatePracticalComponent() {
  const [editState, setEditState] = useState(false);

  function handleEditBtn() {
    setEditState(true);
  }

  function handleSaveBtn() {
    setEditState(false);
  }

  return (
    <form>
      <label>Company Title:</label>
      {!editState ? (
        <p></p>
      ) : (
        <CreatePracticalInput type={'text'} id={'company-title'} />
      )}
      <label>Position Title:</label>
      {!editState ? (
        <p></p>
      ) : (
        <CreatePracticalInput type={'text'} id={'position-title'} />
      )}
      <label>Main Duties:</label>
      {!editState ? (
        <p></p>
      ) : (
        <CreatePracticalInput type={'text'} id={'main-duties'} />
      )}
      <label>Start Date:</label>
      {!editState ? (
        <p></p>
      ) : (
        <CreatePracticalInput type={'date'} id={'start-date'} />
      )}
      <label>End Date:</label>
      {!editState ? (
        <p></p>
      ) : (
        <CreatePracticalInput type={'date'} id={'end-date'} />
      )}
      {!editState ? (
        <EditButton onClick={handleEditBtn} />
      ) : (
        <SaveButton onClick={handleSaveBtn} />
      )}
    </form>
  );
}

function CreatePracticalButton({ onClick }) {
  return <button onClick={onClick}>Add Experience</button>;
}

export default function PracticalInfo() {
  const [components, setComponents] = useState([]);

  const renderComponents = components.map((component) => {
    return <CreatePracticalComponent key={component.id} id={component.id} />;
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
