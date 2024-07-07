import React, { useState } from 'react';
import DynamicForm from './DynamicForm';

// Updated JSON Configuration for Signup Form
const signupFormConfig = [
  { placeholder: 'Enter your username', type: 'text', required: true },
  { placeholder: 'Enter your email address', type: 'email', required: false },
  { placeholder: 'Enter your password', type: 'password', required: true },
  { placeholder: 'Confirm your password', type: 'password', required: true }
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
    console.log(formObject); // Log the submitted data to the console for debugging
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
