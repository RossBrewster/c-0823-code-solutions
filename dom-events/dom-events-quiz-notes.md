# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  In this case we can gain a lot of information about the selected elements after an event occurs.

- What is the purpose of events and event handling?
  events are triggered when a user interacts with a page in a given way. event handling is used to execute code blocks based off these events.

- Are all possible parameters required to use a JavaScript method or function?
  No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener

- What is a callback function?
  A function passed into another function as an argument.

- What object is passed into an event listener callback when the event fires?
  the event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it is the object of which the event object is targeting.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  When the addEventListener method is called, an event object is automatically passed through the event handler function. Therefore, you do not need to specify the argument.

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
