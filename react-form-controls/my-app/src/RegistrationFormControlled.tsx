import './RegistrationForm.css';
import { useState } from 'react';

type FormSubmitEvent = {
  preventDefault: () => void;
  currentTarget: HTMLFormElement;
};

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormSubmitEvent) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <>
      <div>
        <h2>Controlled</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="Some initial value"
            />
          </label>
          <label>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Some initial value"
              type="password"
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
