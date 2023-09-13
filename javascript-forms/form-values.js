const $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  const values = {};
  values.userName = $contactForm.elements.name.value;
  values.userEmail = $contactForm.elements.email.value;
  values.userMessage = $contactForm.elements.message.value;
  console.log(values);
  $contactForm.reset();
}
$contactForm.addEventListener('submit', handleSubmit);
