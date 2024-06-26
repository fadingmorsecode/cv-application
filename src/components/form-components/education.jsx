import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import formatDate from './format';

function EducationInput({ type, id, value, onChange, checked }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  );
}

function EditButton({ onClick }) {
  return (
    <button onClick={onClick} className='btn'>
      Edit
    </button>
  );
}

function SaveButton({ onClick }) {
  return (
    <button onClick={onClick} className='btn'>
      Save
    </button>
  );
}

function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick} className='btn'>
      Delete
    </button>
  );
}

function CreateEducationComponent({ id, onClick, updateComponent }) {
  const [editStatus, setEditStatus] = useState(false);
  const [schoolValue, setSchoolValue] = useState('');
  const [degreeValue, setDegreeValue] = useState('');
  const [schoolDateStartValue, setSchoolDateStartValue] = useState('');
  const [schoolDateEndValue, setSchoolDateEndValue] = useState('');
  const [currentAttendance, setCurrentAttendance] = useState(false);

  function EditButtonHandler() {
    setEditStatus(true);
  }

  function SaveButtonHandler() {
    setEditStatus(false);
    updateComponent(
      id,
      schoolValue,
      degreeValue,
      schoolDateStartValue,
      schoolDateEndValue,
      currentAttendance
    );
  }

  function handleSchoolChange(e) {
    setSchoolValue(e.target.value);
  }

  function handleDegreeChange(e) {
    setDegreeValue(e.target.value);
  }

  function handleDateStartChange(e) {
    setSchoolDateStartValue(e.target.value);
  }

  function handleDateEndChange(e) {
    setSchoolDateEndValue(e.target.value);
  }

  function currentAttendanceHandler() {
    setCurrentAttendance(!currentAttendance);
    setSchoolDateEndValue('');
  }

  return (
    <form className='education-form'>
      <div className='form-groups'>
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
      </div>
      <div className='form-groups'>
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
      </div>
      <div className='form-groups'>
        <label htmlFor='school-start'>Start Date:</label>
        {editStatus ? (
          <EducationInput
            type={'date'}
            id={'school-start'}
            value={schoolDateStartValue}
            onChange={handleDateStartChange}
          />
        ) : (
          <p>{formatDate(schoolDateStartValue)}</p>
        )}
      </div>
      <div className='form-groups'>
        {!currentAttendance && <label htmlFor='school-end'>End Date:</label>}
        {currentAttendance && !editStatus ? <label>End Date:</label> : ''}
        {editStatus ? (
          <>
            {!currentAttendance && (
              <EducationInput
                type={'date'}
                id={'school-end'}
                value={schoolDateEndValue}
                onChange={handleDateEndChange}
              />
            )}
            <div className='current-groups'>
              <label htmlFor='current-education'>Currently Attend</label>
              <EducationInput
                type={'checkbox'}
                id={'current-education'}
                onChange={currentAttendanceHandler}
                checked={currentAttendance}
              />
            </div>
          </>
        ) : (
          <p>
            {currentAttendance ? 'Present' : formatDate(schoolDateEndValue)}
          </p>
        )}
      </div>
      <div className='btn-groups'>
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
      </div>
    </form>
  );
}

function CreateEducationButton({ onClick }) {
  return (
    <button onClick={onClick} className='btn' id='edu-add-btn'>
      Add Education
    </button>
  );
}

export default function EducationalInfo({ handleEducationalData }) {
  const [components, setComponents] = useState([]);

  function handleCreateEducationButton(e) {
    e.preventDefault();
    setComponents([
      ...components,
      { id: uuidv4(), school: '', degree: '', start: '', end: '', current: '' },
    ]);
  }

  function updateComponent(
    id,
    schoolVal,
    degreeVal,
    eduDateStartVal,
    eduDateEndVal,
    currentEducational
  ) {
    setComponents(
      components.map((component) => {
        if (component.id === id) {
          return {
            ...component,
            school: schoolVal,
            degree: degreeVal,
            start: eduDateStartVal,
            end: eduDateEndVal,
            current: currentEducational,
          };
        }
        return component;
      })
    );
  }

  useEffect(() => {
    handleEducationalData(components);
  }, [components, handleEducationalData]);

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
      updateComponent={updateComponent}
    />
  ));

  return (
    <div className='edu-container'>
      <h2 className='educational-h2'>Educational Information</h2>
      {renderComponents}
      <CreateEducationButton onClick={handleCreateEducationButton} />
    </div>
  );
}
