import React from 'react';

const isBrowser = (): boolean => {
  return Boolean(
    typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
  );
};

export type SSRState = {
  isBrowser: boolean;
  isServer: boolean;
};

const useSSR = (): SSRState => {
  const [browser, setBrowser] = React.useState<boolean>(false);

  React.useEffect(() => {
    setBrowser(isBrowser());
  }, []);

  return {
    isBrowser: browser,
    isServer: !browser
  };
};

export default useSSR;
