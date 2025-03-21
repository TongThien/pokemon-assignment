import { Pokemon, PokemonListResponse } from "@/types/Pokemon";
import { customFetcher } from "../fetch/customFetcher";

const PAGE_SIZE = 24;

export const getListPokemon = async (request: {
  page?: number;
}): Promise<Pokemon[]> => {
  const { page = 1 } = request;
  const offset = (page - 1) * PAGE_SIZE;
  const res = await customFetcher<PokemonListResponse>({
    endpoint: `/pokemon?limit=${PAGE_SIZE}&offset=${offset}`,
  });

  if (res == null) {
    return [];
  }

  return res.results;
};
