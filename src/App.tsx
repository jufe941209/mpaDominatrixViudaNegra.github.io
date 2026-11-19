import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AgeGate } from './components/organisms/AgeGate';
import { MusicProvider } from './context/MusicContext';

export function App() {
  return (
    <MusicProvider>
      <AgeGate />
      <RouterProvider router={router} />
    </MusicProvider>
  );
}
