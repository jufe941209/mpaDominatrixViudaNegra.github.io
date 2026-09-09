import { useTranslation } from 'react-i18next';
import { Reveal } from '../atoms/Reveal';

export function ArtesEscenicasSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#fdfdfd] py-16">
      <Reveal className="mx-auto max-w-[1300px] px-4 text-center">
        <h1 className="mb-4 font-heading text-3xl font-semibold text-black">{t('home:artes.title')}</h1>
        <p className="text-center text-gray-700">{t('home:artes.text')}</p>
      </Reveal>
    </div>
  );
}
