import React from 'react';
import './DynamicForm.css'; 

const DynamicForm = ({ Values }) => {
  return (
    <form className="dynamic-form">
      {Values.map((form, index) => {
        const label = form.placeholder.replace('Enter your ', '').replace('Confirm your ', 'Confirm ');
        return (
          <div key={index} className="form-group">
            <label>{label}</label>
            <input 
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
