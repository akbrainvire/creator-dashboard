import React, { useEffect, useState } from "react";

const useWindowDimension = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    setData(window.innerWidth);
  }, []);

  return { data };
};

export default useWindowDimension;
