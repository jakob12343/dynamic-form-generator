import React from 'react';
import './DynamicForm.css'; // Assuming you have a CSS file for styling

const DynamicForm = ({ Values, onFormSubmit }) => {
  return (
    <form className="dynamic-form" onSubmit={onFormSubmit}>
      {Values.map((form, index) => {
        const label = form.placeholder.replace('Enter your ', '').replace('Confirm your ', 'Confirm ');
        return (
          <div key={index} className="form-group">
            <label>{label}</label>
            <input 
              name={label.toLowerCase().replace(/\s/g, '_')}
              type={form.type} 
              placeholder={form.placeholder} 
              className="form-control"
            />
          </div>
        );
      })}
      <button type="submit" className="submit-button">Sign Up</button>
    </form>
  );
};

export default DynamicForm;
