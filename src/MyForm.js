import React, { useState } from 'react';
import DynamicForm from './DynamicForm';

// Simplified JSON Configuration for Signup Form
const signupFormConfig = [
  { placeholder: 'Enter your username', type: 'text' },
  { placeholder: 'Enter your email address', type: 'email' },
  { placeholder: 'Enter your password', type: 'password' },
  { placeholder: 'Confirm your password', type: 'password' }
];

const MyForm = () => {
  const [FormValues, setFormValues] = useState(signupFormConfig);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formObject = {};
    data.forEach((value, key) => {
      formObject[key] = value;
    });
    setFormData(formObject);
    console.log(formObject); // To check the data in the console
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <DynamicForm Values={FormValues} onFormSubmit={handleFormSubmit} />
      <div>
        <h3>Submitted Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MyForm;
