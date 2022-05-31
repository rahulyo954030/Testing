import axios from "axios";
import { useEffect, useState } from "react";

type paramType = {
    q: string,
    per_page: number
}

export const useFetch = <T>(url: string, params: paramType) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setLoading(true);
    axios.get(url, {
      params: {
        ...params,
      },
    })
    .then(({data}) => {
        setLoading(false);
        setData(data.items);
    })
    .catch(() =>{
        setLoading(false);
        setErr(true)
    })
  }, [params.q]);

  return { loading, err, data };
};
