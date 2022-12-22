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

const handleError = (res: Response) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};
