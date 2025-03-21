import { PokemonGif, TypeResponse } from "@/types/Pokemon";
import { customFetcher } from "../fetch/customFetcher";
import { getPokemonDetail } from "./getPokemonDetail";

const PAGE_SIZE = 24;

export const getListPokemonByTypes = async (
  page: number,
  filterTypes: string[]
): Promise<PokemonGif[]> => {
  const typeData = await Promise.all(
    filterTypes.map((type) =>
      customFetcher<TypeResponse>({ endpoint: `/type/${type}` })
    )
  );

  if (!typeData.length) return [];

  const pokemonNameCounts: Record<string, number> = {};
  typeData.forEach((type) => {
    type?.pokemon.forEach(({ pokemon }) => {
      pokemonNameCounts[pokemon.name] =
        (pokemonNameCounts[pokemon.name] || 0) + 1;
    });
  });

  const filteredPokemonNames = Object.keys(pokemonNameCounts).filter(
    (name) => pokemonNameCounts[name] === filterTypes.length
  );
  const paginatedNames = filteredPokemonNames.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return await Promise.all(
    paginatedNames.map(async (name) => {
      const details = await getPokemonDetail({ name });
      const types = details?.types.map((t) => t.type.name) || [];
      const gifUrl =
        details?.sprites.versions["generation-v"]["black-white"].animated
          .front_default || "";
      const number = details?.order ?? 0;
      return { name, gifUrl, types, number };
    })
  );
};
