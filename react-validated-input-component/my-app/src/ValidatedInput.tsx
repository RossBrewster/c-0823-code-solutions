import { useState } from 'react';
import { FcCheckmark, FcVlc } from 'react-icons/fc';
import './ValidatedInput.css';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  let style;
  let text;
  let check;
  let caution;

  if (password.length === 0) {
    style = 'empty';
    text = 'A password is required';
    check = 'hidden';
    caution = 'visible';
  } else if (password.length < 8) {
    style = 'short';
    text = 'Password must be 8 characters.';
    check = 'hidden';
    caution = 'visible';
  } else {
    style = 'valid';
    check = 'visible';
    caution = 'hidden';
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Password:', password);
        }}>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          Password
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <p
          className={style}
          style={{
            color: 'red',
            fontSize: '.7rem',
          }}>
          {text}
        </p>
      </form>
      <FcCheckmark className={check}></FcCheckmark>
      <FcVlc className={caution}></FcVlc>
    </div>
  );
}
