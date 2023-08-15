import { useEffect, useState } from "react";

const useLoading = () => {
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [LoadingCounter, setLoadingCounter] = useState(1);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      800
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 1) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  return {
    isLoading: LoadingStatus,
    setLoading: setLoadingStatus,
  };
};

export default useLoading;
