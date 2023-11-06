async function logUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok === false) {
      throw new Error(response.status);
    }
    const result = await response.json();
    console.log(result);
  } catch (Error) {
    console.log(Error);
  }
}

logUsers();
