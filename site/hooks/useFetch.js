import { useState, useEffect } from 'react';

export const useFetch = (endpointUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!endpointUrl) return;

    const fetchData = async () => {
      const response = await fetch(endpointUrl);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [endpointUrl]);

  return { data, isLoading };
};
