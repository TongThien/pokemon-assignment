import { Service } from "./enum/Service";

export type FetchDataProps = {
  endpoint: RequestInfo | URL;
  method?: RequestInit["method"];
  body?: unknown;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  service?: Service;
};
