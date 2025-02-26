import { useState } from 'react';

export default function Login() 
{
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  });

  const [ isFocused, setIsFocused ] = useState({
    email: false,
    password: false
  });

  function handleValidation(event)
  {
    setIsFocused((prevData) => ({
      ...prevData,
      [event.target.name]: true
    }));
  }

  const isEmailInvalid = !isFocused.email && !formData.email.includes('@') && !formData.email.includes('.');

  function handleChange(event)
  {
    setFormData(prevData => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));

    setIsFocused((prevData) => ({
      ...prevData,
      [event.target.name]: false
    }));
  }


  function handleSubmit(event)
  {
    event.preventDefault();
    console.log(formData);
  }


  return (
    <form onSubmit={ handleSubmit }>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
              id="email" 
              type="email" 
              name="email"
              onBlur={ handleValidation }
              onChange={ handleChange }    
          />
          <div className='control-error'>
            { isEmailInvalid && <p>Please enter a valid email address!</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
              id="password" 
              type="password" 
              name="password" 
              onChange={ handleChange }    
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
