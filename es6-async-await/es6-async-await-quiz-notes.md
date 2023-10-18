# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  Adding async at the start of a function makes it async. You can use the await keyword to make the code "wait" until the promise is settled.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async and await suspends the execution of the function until the promise has been fulfilled while .then() specifies what should happen once the promise is fulfilled.

- When do you use `async`?
  to declare that a function is asynchronous.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  await is used to tell the function to pause execution until the promise is fulfilled.

- How do you handle errors with `await`?
  use catch

- What do `try`, `catch` and `throw` do? When do you use them?
  try - a block of code that 'tries' to execute. If an exception occurs, it jumps to the catch block.
  catch - a block of code that is executed when the try block cannot.
  throw - an explicit command to jump to the catch block in the try block

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the program will not "wait" and will execute the following code.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await. it's a simpler process. a little harder to conceptualize.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
