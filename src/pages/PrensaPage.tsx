import { useTranslation } from 'react-i18next';
import { PressCardList } from '../components/organisms/PressCardList';
import { Reveal } from '../components/atoms/Reveal';

export function PrensaPage() {
  const { t } = useTranslation();

  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/fondo1.jpg')" }}
    >
      <div className="mx-auto max-w-[1320px] px-4">
        <Reveal>
          <h1 className="mb-12 text-center font-heading text-4xl font-bold text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] md:text-5xl">
            {t('common:nav.press')}
          </h1>
        </Reveal>
        <PressCardList />
      </div>
    </div>
  );
}
