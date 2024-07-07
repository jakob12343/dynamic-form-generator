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

  return (
    <div>
      <h2>Sign Up</h2>
      <DynamicForm Values={FormValues} />
    </div>
  );
};

export default MyForm;
