import { useTranslation } from 'react-i18next';
import { Button } from '../atoms/Button';
import { Reveal } from '../atoms/Reveal';
import { webcamPlatforms } from '../../content/webcamPlatforms';

export function WebcamPlatformList() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5">
      {webcamPlatforms.map((platform, i) => (
        <Reveal key={platform.id} delayMs={i * 60}>
          <div
            className={`flex flex-col items-center gap-6 rounded-2xl border-2 px-6 py-10 transition-transform duration-300 hover:-translate-y-1 md:flex-row ${
              platform.dark ? 'border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-black text-white' : 'border-brand bg-gradient-to-br from-white to-gray-50 text-black'
            } ${platform.imageOnLeft ? '' : 'md:flex-row-reverse'}`}
          >
            <div className="flex flex-1 items-center justify-center">
              <img src={platform.logo} alt={platform.name} loading="lazy" className="max-h-[200px] rounded-lg shadow-md" />
            </div>
            <div className="flex flex-1 flex-col items-center gap-4 text-center">
              <p className="text-center">{t(platform.descriptionKey)}</p>
              <Button href={platform.url} variant="warning" pill={false} className="w-full max-w-xs">
                {t('virtuales:webcamVisit')} {platform.name}
              </Button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
