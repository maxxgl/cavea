import { useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:5000';
// const BASE_URL = 'https://cruceum.herokuapp.com';

type ClientFn = (url: string, params?: object) => [
  any, // fetch result
  {
    error: string | null,
    isLoading: boolean
  }
];

interface IClientResult {
  data: any;
  error: string | null;
}

/*
 * Base client and hooks wrapper
 */

export const client = async (endpoint: string): Promise<IClientResult> => {
  try {
    const url = `${BASE_URL}/${endpoint}/`;
    const options: RequestInit = { };
    const response = await fetch(url, options);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    
    const data = await response.json();

    return { data, error: null }
  } catch (error) {
    console.error(`SDK error: ${endpoint}`, error);

    return { data: null, error }
  }
};

const useClient: ClientFn = (endpoint, params) => {
  const [response, setResponse] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    client(endpoint)
      .then(({ data, error }) => {
        setResponse(data);
        setError(error);
      });
    setIsLoading(false)
  }, [endpoint]);

  return [response, { error, isLoading }];
};

/*
 * SDK Functions
 */

export default {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  getTournamentList: () => useClient('tournament'),
}
