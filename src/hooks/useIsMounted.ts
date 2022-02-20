import {
  useEffect,
  useRef,
  MutableRefObject,
} from 'react';

export const useIsMounted = (): MutableRefObject<boolean> => {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};
