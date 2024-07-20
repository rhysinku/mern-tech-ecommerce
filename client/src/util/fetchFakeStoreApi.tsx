import { useEffect, useState } from "react";

async function getApi<T>(command?: string): Promise<T | null> {
  const isCommandTrue = command ? command : "";

  try {
    const response = await fetch(`https://fakestoreapi.com/${isCommandTrue}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching Error:", error);
    return null;
  }
}

function useFetchStoreApi<T>(command?: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getApi<T>(command);
      if (result === null) {
        setError("Error fetching data");
      } else {
        setData(result);
      }
      setLoading(false);
    };
    fetchData();
  }, [command]);

  return { data, loading, error };
}

export default useFetchStoreApi;
