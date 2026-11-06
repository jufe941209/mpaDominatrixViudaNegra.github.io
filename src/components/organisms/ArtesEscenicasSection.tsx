import { useTranslation } from 'react-i18next';
import { Reveal } from '../atoms/Reveal';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export function ArtesEscenicasSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#fdfdfd] py-16">
      <Reveal className="mx-auto max-w-[1300px] px-4 text-center">
        <h2 className="mb-4 font-heading text-3xl font-semibold text-black">{t('home:artes.title')}</h2>
        <p className="mb-8 text-center text-gray-700">{t('home:artes.text')}</p>
        <Button to="/talleres" variant="danger">
          <Icon name="fas fa-theater-masks" />
          Ver Talleres y Capacitaciones
        </Button>
      </Reveal>
    </div>
  );
}
