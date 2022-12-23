import { UserApi } from 'api';
import { User } from 'models';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

type GlobalContextType =
  | {
      // states
      loggedInUser: User | null;
      // functions
      updateLoggedInUser: () => void;
    }
  | undefined;

export const GlobalContext = createContext<GlobalContextType>(undefined);
GlobalContext.displayName = 'GlobalContext';

type GlobalContextProviderType = {
  children?: React.ReactNode;
};

export const GlobalContextProvider: React.FC<GlobalContextProviderType> = (
  props
) => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    updateLoggedInUser();
  }, []);

  const updateLoggedInUser = async () => {
    const user = await UserApi.getActiveUser();
    setLoggedInUser(user);
  };

  return (
    <GlobalContext.Provider value={{ loggedInUser, updateLoggedInUser }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be inside a GlobalContextProvider');
  }
  return context;
};
