export type Pokemon = {
  name: string;
  number: string;
};

type Props = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{listItems}</ul>;
}
