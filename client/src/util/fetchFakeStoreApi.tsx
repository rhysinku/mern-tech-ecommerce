import { useEffect, useState } from "react";

async function getApi(command?: string) {
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

function useFetchStoreApi(command?: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getApi(command);
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
