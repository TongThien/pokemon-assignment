import { TypeListResponse } from "@/types/Pokemon";
import { customFetcher } from "../fetch/customFetcher";

export const getPokemonTypes = async ({
  type = [],
}: {
  type?: string[];
}): Promise<string[]> => {
  const endpoint = type?.length > 0 ? `/type/${type}` : "/type";
  const res = await customFetcher<TypeListResponse>({
    endpoint,
  });

  if (res == null) {
    return [];
  }

  return res.results.map((type) => type.name) || [];
};
