// context/DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // State for groupBy and orderBy
  const [groupByKey, setGroupByKey] = useState('status'); // Key used for grouping
  const [orderByKey, setOrderByKey] = useState('priority'); 

  // Update functions
  const updateGroupBy = (value) => setGroupByKey(value);
  const updateOrderBy = value=> setOrderByKey(value);

  // Context value
  const value = {
    groupByKey,
    orderByKey,
    updateGroupBy,
    updateOrderBy,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// Hook for consuming the context
export const useData = () => useContext(DataContext);