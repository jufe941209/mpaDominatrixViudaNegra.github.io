import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from './components/templates/PageLayout';
import { HomePage } from './pages/HomePage';
import { PracticasPage } from './pages/PracticasPage';
import { PresencialesPage } from './pages/PresencialesPage';
import { VirtualesPage } from './pages/VirtualesPage';
import { TalleresPage } from './pages/TalleresPage';
import { PrensaPage } from './pages/PrensaPage';
import { ProfesionalesPage } from './pages/ProfesionalesPage';
import { SesionesPage } from './pages/SesionesPage';
import { RopaInteriorPage } from './pages/RopaInteriorPage';
import { ComingSoonPage } from './pages/ComingSoonPage';
import { NotFoundPage } from './pages/NotFoundPage';

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
