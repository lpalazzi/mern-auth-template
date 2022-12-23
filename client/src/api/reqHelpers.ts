import { INetworkError } from './interfaces/NetworkError';

export const makeRequest = async (
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  body: any = undefined
) => {
  return fetch(url, {
    method: method,
    headers: ['POST', 'PUT'].includes(method)
      ? {
          'Content-Type': 'application/json',
        }
      : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
    .then(handleError)
    .then((res) => res.json());
};

const handleError = async (res: Response) => {
  if (!res.ok) {
    const error: INetworkError = await res.json();
    throw Error(error.message);
  }
  return res;
};
