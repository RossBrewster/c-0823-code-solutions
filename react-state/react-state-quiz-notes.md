# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  hooks provide a state variable to keep track of the data between renders. They also provide a state setter function to change the state and trigger a new render.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks can only be called inside the component using the hook.

- What is the purpose of state in React?
  The state keeps track of what should be rendered from the jsx. For a component to render someting new, the state must be changed, and a new render must be triggered.

- Why can't we just maintain state in a local variable?
  React doesnt consider any changes to local variables. It is not aware that changes need to be made to the rendered dom.
- What two actions happen when you call a `state setter` function?
  The state is set to a defined value, and a render is triggered.

- When does the local `state variable` get updated with the new value?
  The state variable changes after the render. If you logged the state variable in the same function after the state setter was called, it would reflect the value at the time the state setter function was called, not what it is to be set to.

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
