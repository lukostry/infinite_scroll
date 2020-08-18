import { BASE_URL } from './consts';

type QueryParamsOptions = Record<string, boolean | number | string>;

export default function api<T>(endpointPath: string, queryParamsConfig: QueryParamsOptions): Promise<T> {
  const queryParams = Object.entries(queryParamsConfig)
    .map(([key, value]) => `${key}=${value}&`)
    .join('')
    // trim `&` at the end
    .slice(0, -1);

  const url = `${BASE_URL}/${endpointPath}?${queryParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
