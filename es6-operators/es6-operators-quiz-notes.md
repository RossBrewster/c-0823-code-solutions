# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  You can use them to assign variables conditionally.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  short-circuit evaluation stops the rest of the expression from being evaluated if certain conditions are met. for the && operator, the first false expression will cause it to short circuit. the opposite is true for the || operator.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The nullish coalescing operator only moves to the second expression if the result of the expression on the left is null. Otherwise it short circuits

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  if the operand left of the ? is true, the expression to the right of the ? will execute. otherwise the expression to the right of the colon will execute.

- What is the `?.` (optional chaining) operator? When would you use it?
  If you want to check if a property value is defined in an object you can use this to assign the value to a new variable.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  spread is used to copy an array or object into a new array or object with new values.

- What data types can be spread into an array? Into an object?
  iterable values can be spread into arrays
  all primitives can be spread into objects
- How does spread syntax differ from rest syntax?
  the rest operator puts the rest of some specific user-supplied values into an array. Spread syntax expands iterables into individual elements.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
