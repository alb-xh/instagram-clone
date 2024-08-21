import { useEffect, useState } from "react";

export default function useOnResize (): number {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function setScreenWidth () {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);

    return () => {
      window.removeEventListener("resize", setScreenWidth);
    }
  }, []);

  return width;
};
