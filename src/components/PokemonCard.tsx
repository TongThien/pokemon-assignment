import { PokemonGif } from "@/types/Pokemon";
import PokemonImage from "./PokemonImage";

interface IProps {
  pokemon: PokemonGif;
}

const PokemonCard = ({ pokemon }: IProps) => {
  return (
    <div
      key={pokemon.name}
      className="flex flex-col items-center justify-between"
    >
      <h3>{pokemon.name}</h3>
      <PokemonImage src={pokemon.gifUrl} name={pokemon.name} />
      <p>Numbers: {pokemon.number}</p>
    </div>
  );
};

export default PokemonCard;
