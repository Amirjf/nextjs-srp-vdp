import React, { createContext } from 'react';
import useToggle from '../../../hooks/useToggle';
export const ShowFiltersContext = createContext({});

export const ShowFiltersProvider: React.FC<any> = ({ children }: any) => {
  const [showFilters, setShowFilters] = useToggle(false);

  const value = {
    showFilters,
    setShowFilters,
  };
  return (
    <ShowFiltersContext.Provider value={value}>
      {children}
    </ShowFiltersContext.Provider>
  );
};
