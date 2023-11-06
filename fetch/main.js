async function logUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    console.log(result);
    if (response.ok === false) {
      throw new Error('whoops');
    }
  } catch (Error) {
    console.log(Error);
  }
}

logUsers();
