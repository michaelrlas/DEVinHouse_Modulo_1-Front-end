import { createContext } from 'react';

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  return (
    <UsuarioContext.Provider
      value={{
        nome: 'Silas',
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };
