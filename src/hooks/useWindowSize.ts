import React from 'react';

interface IDimensions {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize(): IDimensions {
  const [dimensions, setDimensions] = React.useState<IDimensions>({ width: undefined, height: undefined });

  React.useLayoutEffect(() => {
    const resizeFunc = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resizeFunc);
    resizeFunc();

    return () => window.removeEventListener('resize', resizeFunc);
  }, []);

  return dimensions;
}
