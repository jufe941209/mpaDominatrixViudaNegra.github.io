import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { TopBar } from '../organisms/TopBar';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { BackToTopButton } from '../molecules/BackToTopButton';
import { useSeo } from '../../hooks/useSeo';

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand/20 border-t-brand" />
    </div>
  );
}

export function PageLayout() {
  const location = useLocation();
  useSeo();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <div className="relative flex-1">
        <Navbar overlay={isHome} />
        <main>
          <Suspense fallback={<PageFallback />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
