import { createContext, useState } from "react";
import { DefaultTheme, MD3DarkTheme } from "react-native-paper";

// Export the TemaContext as a named export
export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState(DefaultTheme);

  function alterarTema() {
    setTema(tema === DefaultTheme ? MD3DarkTheme : DefaultTheme);
  }

  return (
    <TemaContext.Provider value={{ tema, alterarTema }}>
      {children}
    </TemaContext.Provider>
  );
}
