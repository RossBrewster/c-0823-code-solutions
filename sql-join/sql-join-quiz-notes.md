# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  A foreign key references an unique identifier of another table.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \*
  from "products"
  join "suppliers" using ("supplierId");

  or

  join "suppliers" on "products"."supplierId" = "suppliers"."supplierId"

- How do you temporarily rename columns or tables in a SQL statement?
  select "products"."name" as "product"

- How do you create a one-to-many relationship between two tables?
  a foreign key in one table pointing to a primary key in another table

- How do you create a many-to-many relationship between two tables?
  introduce a 3rd "join table" that contains a foreign key to one of the tables and another foreign key to the other table.

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
