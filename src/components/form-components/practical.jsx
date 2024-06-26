import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import formatDate from './format';

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

function CreatePracticalComponent({ id, componentDeletion, updateComponent }) {
  const [editState, setEditState] = useState(false);
  const [companyValue, setCompanyValue] = useState('');
  const [positionValue, setPositionValue] = useState('');
  const [dutiesValue, setDutiesValue] = useState('');
  const [practicalStartValue, setPracticalStartValue] = useState('');
  const [practicalEndValue, setPracticalEndValue] = useState('');
  const [currentPractical, setCurrentPractical] = useState(false);

  function handleEditBtn() {
    setEditState(true);
  }

  function handleSaveBtn() {
    setEditState(false);
    updateComponent(
      id,
      companyValue,
      positionValue,
      dutiesValue,
      practicalStartValue,
      practicalEndValue,
      currentPractical
    );
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
    setPracticalStartValue(e.target.value);
  }

  function handleEndChange(e) {
    setPracticalEndValue(e.target.value);
  }

  function handleMarkChange() {
    if (currentPractical) {
      setPracticalEndValue('');
    }
    setCurrentPractical(!currentPractical);
  }

  return (
    <form className='practical-form'>
      <div className='form-groups'>
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
      </div>
      <div className='form-groups'>
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
      </div>
      <div className='form-groups'>
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
      </div>
      <div className='form-groups'>
        <label>Start Date:</label>
        {!editState ? (
          <p>{formatDate(practicalStartValue)}</p>
        ) : (
          <CreatePracticalInput
            type={'date'}
            id={'start-date'}
            value={practicalStartValue}
            onChange={handleStartChange}
          />
        )}
      </div>
      <div className='form-groups'>
        {!currentPractical && <label>End Date:</label>}
        {currentPractical && !editState ? <label>End Date:</label> : ''}
        {!editState ? (
          <p>{currentPractical ? 'Present' : formatDate(practicalEndValue)}</p>
        ) : (
          <>
            {!currentPractical && (
              <CreatePracticalInput
                type={'date'}
                id={'end-date'}
                value={practicalEndValue}
                onChange={handleEndChange}
              />
            )}
            <div className='current-groups'>
              <label htmlFor='practical-checkbox'>Currently Work Here</label>
              <CreatePracticalInput
                type={'checkbox'}
                id={'practical-checkbox'}
                checked={currentPractical}
                onChange={handleMarkChange}
              />
            </div>
          </>
        )}
      </div>
      <div className='btn-groups'>
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
      </div>
    </form>
  );
}

function CreatePracticalButton({ onClick }) {
  return (
    <button onClick={onClick} className='btn' id='practical-add-btn'>
      Add Experience
    </button>
  );
}

export default function PracticalInfo({ handlePracticalData }) {
  const [components, setComponents] = useState([]);

  function updateComponent(
    id,
    companyVal,
    positionVal,
    dutiesVal,
    pracDateStartVal,
    pracDateEndVal,
    currentPractical
  ) {
    setComponents(
      components.map((component) => {
        if (component.id === id) {
          return {
            ...component,
            company: companyVal,
            position: positionVal,
            duties: dutiesVal,
            start: pracDateStartVal,
            end: pracDateEndVal,
            current: currentPractical,
          };
        }
        return component;
      })
    );
  }

  useEffect(() => {
    handlePracticalData(components);
  }, [components, handlePracticalData]);

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
        updateComponent={updateComponent}
      />
    );
  });

  return (
    <div className='practical-container'>
      <h3 className='practical-h3'>Practical Information</h3>
      {renderComponents}
      <CreatePracticalButton
        onClick={(e) => {
          e.preventDefault();
          setComponents([
            ...components,
            {
              id: uuidv4(),
              company: '',
              position: '',
              duties: '',
              start: '',
              end: '',
              current: '',
            },
          ]);
        }}
      />
    </div>
  );
}
