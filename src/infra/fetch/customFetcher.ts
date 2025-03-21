import { FetchDataProps } from "@/types/Fetcher";
import { buildQueryString } from "@/utils/buildQueryString";

export const REQUEST_TIMEOUT = 5000;

export const customFetcher = async <T>({
  endpoint,
  method = "GET",
  body,
  params,
  timeout = REQUEST_TIMEOUT,
}: FetchDataProps): Promise<T | null> => {
  const queryString = params ? `?${buildQueryString(params)}` : "";
  const baseURL = "https://pokeapi.co/api/v2";

  try {
    const res = await fetch(baseURL + endpoint + queryString, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(timeout),
    });

    const resData = await res.json();

    if (!res.ok) {
      return null;
    }

    return resData;
  } catch (error) {
    console.error("Custom fetch error: ", error);
    return null;
  }
};
