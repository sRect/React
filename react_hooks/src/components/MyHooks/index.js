import { useEffect, useState } from 'react';

// 自定义hooks
const useWindowSize = () => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const { clientWidth, clientHeight } = document.documentElement;
    setWidth(clientWidth);
    setHeight(clientHeight);
  }, []);

  useEffect(() => {
    const handleWindowSize = () => {
      const { clientWidth, clientHeight } = document.documentElement;
      setWidth(clientWidth);
      setHeight(clientHeight);
    };

    window.addEventListener('resize', handleWindowSize, false);

    return () => {
      window.removeEventListener('resize', handleWindowSize, false);
    }
  })

  return [width, height];
}

export default useWindowSize;