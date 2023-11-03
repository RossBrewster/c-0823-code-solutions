# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  after react has "rendered" the component.

- What is a React Effect?
  React Effects allow you to synchronize a component with an external system.

- When should you use an Effect and when should you not use an Effect?
  Use a React effect when using browser APIs, third-party widgets, network, and so on. If your Effect only adjusts some state based on other state, you might not need an Effect.

- When do Effects run?
  After the component has been mounted to the DOM.

- What function is used to declare an Effect?
  useEffect

- What are Effect dependencies and how do you declare them?
  if the dependency values are the same as the last time the component was rendered, it tells useEffect not to run.

- Why would you want to clean up from an Effect?
  You may have several instances of useEffect running at the same time if you navigate to a different page that contains another instance of that component.

- How do you clean up from an Effect?
  you return a callback function at the end of the effect

- When does the cleanup function run?
  when the component is unmounted or when dependencies of the effect change (if you’ve specified dependencies)

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
