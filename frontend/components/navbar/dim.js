import { useEffect, useRef } from "react";

export const useDimensions = ref => {
  const dimensions = useRef({ width: null, height: null });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  console.log(dimensions.current);
  return dimensions.current;
};

