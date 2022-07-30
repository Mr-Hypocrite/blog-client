import { useEffect, useState } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setPending(true);
      if (url) {
        try {
          const response = await fetch(url, {
            ...fetchOptions,
            signal: controller.signal,
          });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
  
          setPending(false);
          setData(data);
          setError(null);
        } catch (e) {
          if (e.name === "AbortError") {
            console.log(`The fetch was aborted`);
          } else {
            setPending(false);
            setError(`Could not fetch the data`);
          }
        }
      }
    };
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }
    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, pending, error, postData };
};

export default useFetch;
