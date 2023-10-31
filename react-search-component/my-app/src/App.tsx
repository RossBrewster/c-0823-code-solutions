import { Search } from './Search';
import './App.css';

const quotes = [
  `"There's no place like home." - The Wizard of Oz, 1939`,
  `"To infinity and beyond!" - Toy Story, 1995`,
  `"You can't handle the truth!" - A Few Good Men, 1992`,
  `"I'll be back." - The Terminator, 1984`,
  `"May the Force be with you." - Star Wars, 1977`,
  `"Life is like a box of chocolates. You never know what you're gonna get." - Forrest Gump, 1994`,
  `"Here's looking at you, kid." - Casablanca, 1942`,
  `"I feel the need—the need for speed." - Top Gun, 1986`,
  `"You talking to me?" - Taxi Driver, 1976`,
  `"Just keep swimming." - Finding Nemo, 2003`,
  `"Toto, I've a feeling we're not in Kansas anymore." - The Wizard of Oz, 1939`,
  `"There's no crying in baseball!" - A League of Their Own, 1992`,
  `"You can't sit with us!" - Mean Girls, 2004`,
  `"It's so fluffy I'm gonna die!" - Despicable Me, 2010`,
  `"I am Groot." - Guardians of the Galaxy, 2014`,
  `"I'm king of the world!" - Titanic, 1997`,
  `"You either die a hero, or you live long enough to see yourself become the villain." - The Dark Knight, 2008`,
  `"The Dude abides." - The Big Lebowski, 1998`,
  `"I'm not bad. I'm just drawn that way." - Who Framed Roger Rabbit, 1988`,
];

function App() {
  return <Search quotes={quotes} />;
}

export default App;
