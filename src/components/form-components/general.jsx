import { useState } from 'react';

function CreateInput({ type, id, value, onChange }) {
  return <input type={type} id={id} value={value} onChange={onChange} />;
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

export default function GeneralInfo({ handleGeneralData }) {
  const [editStatus, setEditStatus] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  function getData() {
    return {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
    };
  }

  function handleNameChange(e) {
    setNameValue(e.target.value);
  }

  function handleEmailChange(e) {
    setEmailValue(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhoneValue(e.target.value);
  }

  function EditButtonHandler() {
    setEditStatus(true);
  }

  function SaveButtonHandler() {
    setEditStatus(false);
    handleGeneralData(getData());
  }

  return (
    <>
      <h1 className='generator-h1'>General Information</h1>
      <form>
        <div className='name-container'>
          <label htmlFor='gen-name'>Name:</label>
          {editStatus ? (
            <CreateInput
              type={'text'}
              id={'gen-name'}
              value={nameValue}
              onChange={handleNameChange}
            />
          ) : (
            <p>{nameValue}</p>
          )}
        </div>
        <div className='email-container'>
          <label htmlFor='gen-email'>Email:</label>
          {editStatus ? (
            <CreateInput
              type={'email'}
              id={'gen-email'}
              value={emailValue}
              onChange={handleEmailChange}
            />
          ) : (
            <p>{emailValue}</p>
          )}
        </div>
        <div className='phone-container'>
          <label htmlFor='gen-phone'>Phone:</label>
          {editStatus ? (
            <CreateInput
              type={'phone'}
              id={'gen-phone'}
              value={phoneValue}
              onChange={handlePhoneChange}
            />
          ) : (
            <p>{phoneValue}</p>
          )}
        </div>
        {editStatus ? (
          <SaveButton onClick={SaveButtonHandler} />
        ) : (
          <EditButton onClick={EditButtonHandler} />
        )}
      </form>
    </>
  );
}
