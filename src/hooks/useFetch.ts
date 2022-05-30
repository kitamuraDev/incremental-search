import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>();

  // fetcher
  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios.get<T>(url).then((res) => {
        setData(res.data);
      });
      setIsLoading(false);
    }, 3000);
  };

  // first render fetch data
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, isLoading };
};

export default useFetch;
