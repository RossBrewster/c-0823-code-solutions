import './RegistrationForm.css';

type FormSubmitEvent = {
  preventDefault: () => void;
  currentTarget: HTMLFormElement;
};

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormSubmitEvent) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData.entries()));
  }
  return (
    <>
      <div>
        <h2>Uncontrolled</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username <input name="username" placeholder="Some initial value" />
          </label>
          <label>
            Password{' '}
            <input
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
