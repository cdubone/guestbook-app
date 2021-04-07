import { useState, useEffect } from "react";

export const useFetch = (path, ref, initialValue) => {

  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:3001/" + path;

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await fetch(url);
          const resJson = await res.json();
          setData(resJson);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [url, ref]);
  return { loading, data, error };
};