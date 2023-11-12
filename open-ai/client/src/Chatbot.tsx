import './ChatBot.css';
import { useState } from 'react';

export function Chatbot() {
  const [value, setValue] = useState('');
  const [text, setText] = useState('placeholder');

  type FormSubmitEvent = {
    preventDefault: () => void;
    currentTarget: HTMLFormElement;
  };

  function handleSubmit(e: FormSubmitEvent) {
    e.preventDefault();
    async function chat() {
      try {
        const res = await fetch('/generate-text', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: value }),
        });
        if (res.ok) {
          const data = await res.json();
          setText(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (Error) {
        console.error(Error);
      }
    }
    chat();
  }

  return (
    <div className="wrapper">
      <div className="conversation">{text}</div>
      <div className="input">
        <form onSubmit={handleSubmit} className="form-input">
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="prompt"
          />
          <button type="submit" className="send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
