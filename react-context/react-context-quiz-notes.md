# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  It provides the ability to pass values to children no matter how distant without sending the values as a prop.

- What values can be stored in context?
  strings, objects, numbers, booleans, arrays

- How do you create context and make it available to the components?
  make a context file that defines the context. import that file to components that need the context and to the componetnt that provides the context. the provider will give the context a value. the children will then call useContext and assign the value to one or more variables to be used in the child component.

- How do you access the context values?
  Call useContext and assign the return value to a new variable.

- When would you use context? (in addition to the best answer: "rarely")
  theming, current account, routing, managing state

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
