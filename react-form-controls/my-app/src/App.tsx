import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import './App.css';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}>
      <RegistrationFormControlled></RegistrationFormControlled>
      <RegistrationFormUncontrolled></RegistrationFormUncontrolled>
    </div>
  );
}

export default App;
