import { Reveal } from '../atoms/Reveal';
import { Icon } from '../atoms/Icon';

const FEATURES = [
  {
    icon: 'fas fa-certificate',
    title: 'Experiencia Comprobada',
    text: 'Más de 8 años de trayectoria como Dominatrix, Ama y Mistress profesional de BDSM en Bogotá, Colombia.',
  },
  {
    icon: 'fas fa-user-secret',
    title: 'Discreción Total',
    text: 'Tu privacidad es prioridad: atención, pagos y comunicación 100% discretos en cada sesión.',
  },
  {
    icon: 'fas fa-sliders-h',
    title: 'Sesiones Personalizadas',
    text: 'Cada encuentro se adapta a tus fantasías y nivel de experiencia, desde iniciación hasta prácticas avanzadas.',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Mazmorra Privada en Bogotá',
    text: 'Espacio propio, equipado y seguro en Bogotá, Colombia, para vivir el BDSM como se merece.',
  },
];

export function WhyChooseSection() {
  return (
    <div className="bg-[#fdfdfd] py-16">
      <Reveal className="mx-auto max-w-[1320px] px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-black">¿Por Qué Elegirme?</h2>
          <p className="text-gray-600">
            La Dominatrix Viuda Negra combina experiencia, discreción y pasión por el BDSM para ofrecerte una
            experiencia auténtica en Bogotá, Colombia.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex h-full flex-col items-center rounded-[20px] border border-gray-200 bg-white p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon name={feature.icon} className="mb-4 text-4xl text-brand" />
              <h3 className="mb-2 font-heading text-lg font-bold text-black">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
