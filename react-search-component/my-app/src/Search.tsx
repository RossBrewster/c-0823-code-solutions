import { useState } from 'react';
import { List } from './List';
import { SearchBar } from './SearchBar';

type Props = {
  quotes: string[];
};

export function Search({ quotes }: Props) {
  const [value, setValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  let filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(value.toLowerCase())
  );

  if (filteredQuotes.length === 0) {
    filteredQuotes = ['There are no quotes matching your search'];
  }

  return (
    <div>
      <SearchBar value={value} handleChange={handleChange} />
      <List list={filteredQuotes} />
    </div>
  );
}
