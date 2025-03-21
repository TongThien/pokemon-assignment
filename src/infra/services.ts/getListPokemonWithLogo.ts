import { PokemonGif } from "@/types/Pokemon";
import { getListPokemon } from "../apis/getListPokemon";
import { getPokemonDetail } from "../apis/getPokemonDetail";

export const getListPokemonWithLogo = async ({
  page = 1,
  filterTypes = [],
}: {
  page: number;
  filterTypes: string[];
}) => {
  const list = await getListPokemon({ page });

  if (!list) return [];

  const pokemonList: PokemonGif[] = await Promise.all(
    list.map(async (pokemon) => {
      const details = await getPokemonDetail({ name: pokemon.name });
      const types = details?.types.map((t) => t.type.name) || [];
      return {
        name: pokemon.name,
        types,
        number: details?.order ?? 0,
        gifUrl:
          details?.sprites.versions["generation-v"]["black-white"].animated
            .front_default || "",
      };
    })
  );

  if (filterTypes.length > 0) {
    return pokemonList.filter((pokemon) =>
      filterTypes.every((type) => pokemon.types.includes(type))
    );
  }

  return pokemonList;
};
