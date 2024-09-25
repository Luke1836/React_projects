import { useState } from 'react';
import styled from 'styled-components'

/* --------- Styled Component ----------- */
const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({$invalid}) => $invalid ? '#f87171' : '#98a3ba'};
`;

export default function AuthInputs() 
{
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  // Placing Constraints
  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  
  return (
    <div id="auth-inputs">
      <div className="controls">
        <p>
          <Label $invalid={ emailNotValid }>Email</Label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={ (event) => handleInputChange('email', event.target.value) }
          />
        </p>
        <p>
          <Label $invalid={ passwordNotValid }>Password</Label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={ (event) => handleInputChange('password', event.target.value) }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}