import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, method, data = null, cont = null) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    const getFetchData = () => {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          setDataResponse(response.data);
        })
        .catch((err) => {
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const postFetchData = () => {
      setLoading(true);
      axios
        .post(url, data)
        .then((response) => {
          setDataResponse(response.data);
        })
        .catch((err) => {
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const putFetchData = () => {
      setLoading(true);
      axios
        .put(url, data)
        .then((response) => {
          setDataResponse(response.status);
        })
        .catch((err) => {
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const deleteFetchData = () => {
      setLoading(true);
      axios
        .delete(url)
        .then((response) => {
          setDataResponse(response.status);
        })
        .catch((err) => {
          setError({ status: err.response.status, message: err.response.data });
        })
        .finally(() => {
          setLoading(false);
        });
    };

    const fetchData = async () => {
      if (method === "get") {
        getFetchData();
      } else if (method === "post") {
        postFetchData();
      } else if (method === "put") {
        putFetchData();
      } else if (method === "delete") {
        deleteFetchData();
      }
    };

    if (cont) {
      if (cont === 0) {
        fetchData();
      }
    } else {
      fetchData();
    }
  }, [url, data, method]);

  return { dataResponse, loading, error };
}

export default useFetch;
