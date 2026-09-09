import { useTranslation } from 'react-i18next';
import { Icon } from '../atoms/Icon';
import { useBackToTop } from '../../hooks/useBackToTop';

export function BackToTopButton() {
  const { t } = useTranslation();
  const visible = useBackToTop();

  return (
    <button
      type="button"
      aria-label={t('common:backToTop')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-opacity duration-300 hover:bg-brand-dark ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <Icon name="fas fa-arrow-up" />
    </button>
  );
}
