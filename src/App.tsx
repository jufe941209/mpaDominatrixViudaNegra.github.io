import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AgeGate } from './components/organisms/AgeGate';

export function App() {
  return (
    <>
      <AgeGate />
      <RouterProvider router={router} />
    </>
  );
}
