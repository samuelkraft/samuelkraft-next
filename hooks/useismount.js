import { useEffect, useRef } from "react";

export default function useIsMount() {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
}
