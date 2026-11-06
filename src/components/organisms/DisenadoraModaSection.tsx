import { useTranslation } from 'react-i18next';
import { Reveal } from '../atoms/Reveal';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export function DisenadoraModaSection() {
  const { t } = useTranslation();

  return (
    <div
      className="bg-cover bg-center py-20"
      style={{ backgroundImage: 'linear-gradient(#BA2505, rgba(0,0,0,0.2)), url(/img/tour-booking-bg.jpg)' }}
    >
      <Reveal className="mx-auto max-w-[1000px] px-4 text-center">
        <h2 className="mb-4 font-heading text-3xl font-semibold text-white">{t('home:moda.title')}</h2>
        <p className="mb-8 text-center text-white/90">
          {t('home:moda.text')} {t('home:moda.contact')}
        </p>
        <Button to="/ropa-interior" variant="outline-light">
          <Icon name="fas fa-shopping-bag" />
          Ver Tienda
        </Button>
      </Reveal>
    </div>
  );
}
