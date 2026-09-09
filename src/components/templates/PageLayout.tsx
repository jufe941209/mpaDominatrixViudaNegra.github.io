import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { TopBar } from '../organisms/TopBar';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';
import { BackToTopButton } from '../molecules/BackToTopButton';

export function PageLayout() {
  const location = useLocation();

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
          <Outlet />
        </main>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
