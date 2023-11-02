import { Accordion } from './Accordion';
import { useState } from 'react';
import './App.css';

type Vis = { [key: string]: boolean };

const languages: { language: string; description: string }[] = [
  {
    language: 'Hypertext Markup Language',
    description:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  },
  {
    language: 'Cascading Style Sheets',
    description:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript',
  },
  {
    language: 'JavaScript',
    description:
      'Javascript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. Javascript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
];

const initialVis: Vis = {
  'Hypertext Markup Language': false,
  'Cascading Style Sheets': false,
  JavaScript: false,
};

function App() {
  const [visibility, setVisibility] = useState(initialVis);

  function handleVis(language: string) {
    setVisibility({
      [language]: !visibility[language],
    });
  }

  return (
    <>
      <Accordion
        content={languages}
        descriptionVis={visibility}
        toggleVis={handleVis}
      />
    </>
  );
}

export default App;
