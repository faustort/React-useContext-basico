
import { useContext } from "react";
import TemaContext, { TemaProvider } from "./src/context/TemaContext";
import { Provider, Surface, Text } from "react-native-paper";


export default function App() {
  const temaContext = useContext(TemaContext);

  if (!temaContext) {
    return null; // ou exibir algum fallback
  }

  return (
    <TemaProvider>
      <Provider
        theme={useContext(temaContext).tema}
      >
        <HomeScreen />
      </Provider>
    </TemaProvider>
  );
}


function HomeScreen() {
  return (
    <Surface>
      <Text>Olá </Text>
    </Surface>
  )
}
