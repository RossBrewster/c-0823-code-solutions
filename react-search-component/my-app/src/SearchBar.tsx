type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export function SearchBar({ handleChange, value }: Props) {
  return <input onChange={handleChange} value={value}></input>;
}
