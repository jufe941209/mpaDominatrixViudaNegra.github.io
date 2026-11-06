import { Reveal } from '../atoms/Reveal';
import { Icon } from '../atoms/Icon';

const FEATURES = [
  {
    icon: 'fas fa-certificate',
    title: '16 Años de Experiencia',
    text: 'Más de una década y media dominando el arte del BDSM como Dominatrix, Ama y Mistress profesional en Bogotá, Colombia.',
  },
  {
    icon: 'fas fa-user-secret',
    title: 'Discreción Total',
    text: 'Tu privacidad es prioridad: atención, pagos y comunicación 100% discretos en cada sesión.',
  },
  {
    icon: 'fas fa-crown',
    title: 'Las Reglas las Pongo Yo',
    text: 'Tendrás la oportunidad de seleccionar las prácticas que acordemos y tus límites en un formato, pero aquí la que manda soy yo: decido cómo comienza y cómo termina la sesión. No realizo fantasías al pie de la letra.',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Mazmorra Privada en Bogotá',
    text: 'Mi mazmorra es un espacio propio y privado, donde podemos llevar a cabo nuestros fetiches y fantasías.',
  },
];

export function DominaPhilosophySection() {
  return (
    <div className="bg-[#fdfdfd] py-16">
      <Reveal className="mx-auto max-w-[1320px] px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-black">Dominatrix Profesional y Vocacional</h2>
          <p className="text-gray-600">
            16 años de trayectoria como Ama, Mistress y Dominatrix de BDSM en Bogotá, Colombia. Esto no es solo un
            servicio: es mi vocación y mi forma de vida.
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
