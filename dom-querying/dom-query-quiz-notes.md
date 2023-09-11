# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  We can use it to test our javascript and get live feedback from the browser.

- What is a "model"?
  A model is a representation of something. In this case, the model is representing a markup document.

- Which "document" is being referred to in the phrase Document Object Model?
  The html document.

- What is the word "object" referring to in the phrase Document Object Model?
  a js object.
- What is a DOM Tree?
  the structure of the html document

- Give two examples of `document` methods that retrieve a single element from the DOM.
  .querySelector()
  .closest()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  .querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?
  you could use that variable later in the script.

- What `console` method allows you to inspect the properties of a DOM element object?
  .dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  It needs to parse all of the elements first so the js can access all of the elements.

- What does `document.querySelector()` take as its argument and what does it return?
  It takes a string containing a css selector. It returns the first element for the given selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  It takes a string containing a css selector. It returns all elements for the given selector.

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
