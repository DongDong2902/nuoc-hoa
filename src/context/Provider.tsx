import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ProductProps, StoreContextAPI } from './types';

const StoreContext = createContext<StoreContextAPI>({} as StoreContextAPI);

const Provider: React.FC<{ children: any }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch(`/assets/data/data.json?${Math.random() * 100 + 1}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const memoValue = useMemo(
    () => ({
      loading,
      setLoading,
      error,
      products,
      setProducts
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products, loading, error]
  );

  return <StoreContext.Provider value={memoValue}>{children}</StoreContext.Provider>;
};

export const useStore = (): StoreContextAPI => useContext(StoreContext);

export default Provider;
