export const buildQueryString = (
  params: Record<string, string | number | boolean | null | undefined>
): string => {
  return Object.entries(params)
    .filter(([, value]) => value != null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          value as string | number | boolean
        )}`
    )
    .join("&");
};
