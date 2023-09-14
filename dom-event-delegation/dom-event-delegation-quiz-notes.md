# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  event.target is the element the event occurred on.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  The parent element has will have that data stored in it's reference data.

- What DOM element property tells you what type of element it is?
  tag name

- What does the `element.closest()` method take as its argument and what does it return?
  any valid css selector

- How can you remove an element from the DOM?
  Use the remove method of an element

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  Add it to the parent element and use the target property of the event object to listen for an event on that object.

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
