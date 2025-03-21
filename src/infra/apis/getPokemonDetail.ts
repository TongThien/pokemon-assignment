import { PokemonDetails } from "@/types/Pokemon";
import { customFetcher } from "../fetch/customFetcher";

export const getPokemonDetail = async (request: {
  name: string;
}): Promise<PokemonDetails | null> => {
  const { name } = request;
  const res = await customFetcher<PokemonDetails>({
    endpoint: `/pokemon/${name}`,
  });

  if (res == null) {
    return null;
  }

  return res;
};
