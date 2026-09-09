import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from './components/templates/PageLayout';
import { HomePage } from './pages/HomePage';

const PracticasPage = lazy(() => import('./pages/PracticasPage').then((m) => ({ default: m.PracticasPage })));
const PresencialesPage = lazy(() => import('./pages/PresencialesPage').then((m) => ({ default: m.PresencialesPage })));
const VirtualesPage = lazy(() => import('./pages/VirtualesPage').then((m) => ({ default: m.VirtualesPage })));
const TalleresPage = lazy(() => import('./pages/TalleresPage').then((m) => ({ default: m.TalleresPage })));
const PrensaPage = lazy(() => import('./pages/PrensaPage').then((m) => ({ default: m.PrensaPage })));
const ProfesionalesPage = lazy(() => import('./pages/ProfesionalesPage').then((m) => ({ default: m.ProfesionalesPage })));
const SesionesPage = lazy(() => import('./pages/SesionesPage').then((m) => ({ default: m.SesionesPage })));
const RopaInteriorPage = lazy(() => import('./pages/RopaInteriorPage').then((m) => ({ default: m.RopaInteriorPage })));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage').then((m) => ({ default: m.ComingSoonPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/practicas', element: <PracticasPage /> },
      { path: '/presenciales', element: <PresencialesPage /> },
      { path: '/virtuales', element: <VirtualesPage /> },
      { path: '/talleres', element: <TalleresPage /> },
      { path: '/prensa', element: <PrensaPage /> },
      { path: '/profesionales', element: <ProfesionalesPage /> },
      { path: '/sesiones', element: <SesionesPage /> },
      { path: '/ropa-interior', element: <RopaInteriorPage /> },
      { path: '/mazmorra', element: <ComingSoonPage /> },
      { path: '/sexshop', element: <ComingSoonPage /> },
      { path: '/lista-deseos', element: <ComingSoonPage /> },
      { path: '/shows', element: <ComingSoonPage /> },
      { path: '/eventos', element: <ComingSoonPage /> },
      { path: '/packages', element: <ComingSoonPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
