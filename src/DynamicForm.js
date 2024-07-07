import React, { useState } from 'react';
import './DynamicForm.css'; 

const DynamicForm = ({ Values, onFormSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const newErrors = {};
    let valid = true;

    data.forEach((value, key) => {
      const fieldConfig = Values.find(field => {
        const fieldName = field.placeholder.toLowerCase().replace(/ /g, '_');
        return fieldName === key;
      });
      if (!fieldConfig) {
        console.error(`Field configuration not found for key: ${key}`);
        return;
      }
      if (fieldConfig.required && !value) {
        valid = false;
        newErrors[key] = `this field is required`;
      }
    });

    if (valid) {
      onFormSubmit(event);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      {Values.map((form, index) => {
        const label = form.placeholder.replace('Enter your ', '').replace('Confirm your ', 'Confirm ');
        const fieldName = form.placeholder.toLowerCase().replace(/ /g, '_');
        return (
          <div key={index} className="form-group">
            <label>
              {label}
              {form.required && <span className="required-asterisk">*</span>}
            </label>
            <input 
              name={fieldName} // Generate input name from placeholder
              type={form.type} 
              placeholder={form.placeholder} 
              className="form-control"
            />
            {errors[fieldName] && <span className="error-message">{errors[fieldName]}</span>}
          </div>
        );
      })}
      <button type="submit" className="submit-button">Sign Up</button>
    </form>
  );
};

export default DynamicForm;
