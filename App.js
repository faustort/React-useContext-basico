import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { TemaProvider, TemaContext } from './src/contexts/TemaContext';
import HomeScreen from './src/components/HomeScreen';

export default function App() {
  return (
    <TemaProvider>
      <PaperProvider>
        <HomeScreen />
      </PaperProvider>
    </TemaProvider>
  );
}
