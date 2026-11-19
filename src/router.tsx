import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PageLayout } from './components/templates/PageLayout';
import { HomePage } from './pages/HomePage';
import { RouteErrorPage } from './pages/RouteErrorPage';
import { lazyWithReload } from './lib/lazyWithReload';

const PracticeTabPage = lazyWithReload(() => import('./pages/PracticeTabPage').then((m) => m.PracticeTabPage));
const PresencialesPage = lazyWithReload(() => import('./pages/PresencialesPage').then((m) => m.PresencialesPage));
const VirtualesPage = lazyWithReload(() => import('./pages/VirtualesPage').then((m) => m.VirtualesPage));
const TalleresPage = lazyWithReload(() => import('./pages/TalleresPage').then((m) => m.TalleresPage));
const PrensaPage = lazyWithReload(() => import('./pages/PrensaPage').then((m) => m.PrensaPage));
const ProfesionalesPage = lazyWithReload(() => import('./pages/ProfesionalesPage').then((m) => m.ProfesionalesPage));
const RopaInteriorPage = lazyWithReload(() => import('./pages/RopaInteriorPage').then((m) => m.RopaInteriorPage));
const ComingSoonPage = lazyWithReload(() => import('./pages/ComingSoonPage').then((m) => m.ComingSoonPage));
const RubberDollJadePage = lazyWithReload(() => import('./pages/RubberDollJadePage').then((m) => m.RubberDollJadePage));
const MazmorraArsenalPage = lazyWithReload(() => import('./pages/MazmorraArsenalPage').then((m) => m.MazmorraArsenalPage));
const ShowsPage = lazyWithReload(() => import('./pages/ShowsPage').then((m) => m.ShowsPage));
const EventosPage = lazyWithReload(() => import('./pages/EventosPage').then((m) => m.EventosPage));
const ContenidoPage = lazyWithReload(() => import('./pages/ContenidoPage').then((m) => m.ContenidoPage));
const ContenidoDetailPage = lazyWithReload(() => import('./pages/ContenidoDetailPage').then((m) => m.ContenidoDetailPage));
const WishlistPage = lazyWithReload(() => import('./pages/WishlistPage').then((m) => m.WishlistPage));
const NotFoundPage = lazyWithReload(() => import('./pages/NotFoundPage').then((m) => m.NotFoundPage));

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/practicas', element: <Navigate to="/practicas/fetiches" replace /> },
      { path: '/practicas/:slug', element: <PracticeTabPage /> },
      { path: '/presenciales', element: <PresencialesPage /> },
      { path: '/virtuales', element: <VirtualesPage /> },
      { path: '/talleres', element: <TalleresPage /> },
      { path: '/contenido', element: <ContenidoPage /> },
      { path: '/contenido/:slug', element: <ContenidoDetailPage /> },
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
