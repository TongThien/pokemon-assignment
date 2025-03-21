import { customFetcher } from "../fetch/customFetcher";

export const getTotalPokemon = async (): Promise<number | 0> => {
  const res = await customFetcher<{ count: number }>({
    endpoint: `/pokemon`,
  });

  if (res == null) {
    return 0;
  }

  return res.count;
};
