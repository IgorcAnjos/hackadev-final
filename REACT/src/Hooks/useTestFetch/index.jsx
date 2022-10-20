import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function useTestFetch(url, method, data = null) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState(null);

  const globalFetch = useCallback(async () => {
    const getFetchData = async () => {
      console.log("Global Fetch Render");
      setLoading(true);
      await axios
        .get(url)
        .then((response) => {
          setDataResponse(response.data);
        })
        .catch((err) => {
          setError({
            status: err.response.status,
            message: err.response.data,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const postFetchData = async () => {
      setLoading(true);
      await axios
        .post(url, data)
        .then((response) => {
          setDataResponse(response.data);
        })
        .catch((err) => {
          setError({
            status: err.response.status,
            message: err.response.data,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const putFetchData = async () => {
      setLoading(true);
      await axios
        .put(url, data)
        .then((response) => {
          setDataResponse(response.status);
        })
        .catch((err) => {
          setError({
            status: err.response.status,
            message: err.response.data,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const deleteFetchData = async () => {
      setLoading(true);
      await axios
        .delete(url)
        .then((response) => {
          setDataResponse(response.status);
        })
        .catch((err) => {
          setError({
            status: err.response.status,
            message: err.response.data,
          });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const fetchData = async () => {
      if (method === "get") {
        await getFetchData();
      } else if (method === "post") {
        await postFetchData();
      } else if (method === "put") {
        await putFetchData();
      } else if (method === "delete") {
        await deleteFetchData();
      }
    };

    fetchData();
  }, [data, method, url]);

  return { dataResponse, loading, error }, globalFetch;
}

export default useTestFetch;
