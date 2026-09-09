import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal } from '../atoms/Reveal';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf0xyhl4ZdfquSP5OGg8rBl8AL7D7IyDE-37FLTyZ2hJhU0Xg/viewform';

export function RulesSection() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const items = t('presenciales:rules.items', { returnObjects: true }) as string[];

  return (
    <div
      className="bg-cover bg-center bg-fixed py-16"
      style={{ backgroundImage: 'linear-gradient(#BA2505, rgba(0,0,0,0.2)), url(/img/fondoreglas.jpg)' }}
    >
      <Reveal className="mx-auto max-w-3xl px-4 text-center">
        <h1 className="mb-6 animate-fadeIn font-heading text-4xl font-semibold text-white">{t('presenciales:rules.title')}</h1>
        <ul className="mb-6 space-y-4 text-left">
          {items.map((item, i) => (
            <li
              key={i}
              className="animate-slideIn text-lg leading-relaxed text-white transition-transform hover:[animation:pulse-rule_0.6s_infinite]"
            >
              • {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setShowForm((s) => !s)}
          className="rounded bg-green-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-green-700"
        >
          {t('presenciales:rules.ctaButton')}
        </button>

        {showForm && (
          <div className="mt-6 rounded bg-gray-50 p-5 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-black">{t('presenciales:rules.formTitle')}</h2>
            <iframe src={FORM_URL} title={t('presenciales:rules.formTitle')} className="h-[900px] w-full border-0">
              Cargando...
            </iframe>
          </div>
        )}
      </Reveal>
    </div>
  );
}
