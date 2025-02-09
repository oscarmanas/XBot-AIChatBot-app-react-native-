import React, { createContext, useState, useContext } from 'react';

interface ModelContextType {
  modelVersion: string;
  setModelVersion: (model: string) => void;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export const ModelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modelVersion, setModelVersion] = useState('deepseek/deepseek-r1:free');

  return (
    <ModelContext.Provider value={{ modelVersion, setModelVersion }}>
      {children}
    </ModelContext.Provider>
  );
};

export const useModel = () => {
  const context = useContext(ModelContext);
  if (!context) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
};