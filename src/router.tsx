import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PageLayout } from './components/templates/PageLayout';
import { HomePage } from './pages/HomePage';

const PracticeTabPage = lazy(() => import('./pages/PracticeTabPage').then((m) => ({ default: m.PracticeTabPage })));
const PresencialesPage = lazy(() => import('./pages/PresencialesPage').then((m) => ({ default: m.PresencialesPage })));
const VirtualesPage = lazy(() => import('./pages/VirtualesPage').then((m) => ({ default: m.VirtualesPage })));
const TalleresPage = lazy(() => import('./pages/TalleresPage').then((m) => ({ default: m.TalleresPage })));
const PrensaPage = lazy(() => import('./pages/PrensaPage').then((m) => ({ default: m.PrensaPage })));
const ProfesionalesPage = lazy(() => import('./pages/ProfesionalesPage').then((m) => ({ default: m.ProfesionalesPage })));
const RopaInteriorPage = lazy(() => import('./pages/RopaInteriorPage').then((m) => ({ default: m.RopaInteriorPage })));
const ComingSoonPage = lazy(() => import('./pages/ComingSoonPage').then((m) => ({ default: m.ComingSoonPage })));
const RubberDollJadePage = lazy(() => import('./pages/RubberDollJadePage').then((m) => ({ default: m.RubberDollJadePage })));
const MazmorraArsenalPage = lazy(() => import('./pages/MazmorraArsenalPage').then((m) => ({ default: m.MazmorraArsenalPage })));
const ShowsPage = lazy(() => import('./pages/ShowsPage').then((m) => ({ default: m.ShowsPage })));
const EventosPage = lazy(() => import('./pages/EventosPage').then((m) => ({ default: m.EventosPage })));
const ContenidoPage = lazy(() => import('./pages/ContenidoPage').then((m) => ({ default: m.ContenidoPage })));
const WishlistPage = lazy(() => import('./pages/WishlistPage').then((m) => ({ default: m.WishlistPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/practicas', element: <Navigate to="/practicas/fetiches" replace /> },
      { path: '/practicas/:slug', element: <PracticeTabPage /> },
      { path: '/presenciales', element: <PresencialesPage /> },
      { path: '/virtuales', element: <VirtualesPage /> },
      { path: '/talleres', element: <TalleresPage /> },
      { path: '/contenido', element: <ContenidoPage /> },
      { path: '/prensa', element: <PrensaPage /> },
      { path: '/profesionales', element: <ProfesionalesPage /> },
      { path: '/sesiones', element: <ComingSoonPage /> },
      { path: '/ropa-interior', element: <RopaInteriorPage /> },
      { path: '/mazmorra', element: <MazmorraArsenalPage /> },
      { path: '/sexshop', element: <ComingSoonPage /> },
      { path: '/lista-deseos', element: <WishlistPage /> },
      { path: '/shows', element: <ShowsPage /> },
      { path: '/eventos', element: <EventosPage /> },
      { path: '/packages', element: <ComingSoonPage /> },
      { path: '/rubber-doll-jade', element: <RubberDollJadePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
