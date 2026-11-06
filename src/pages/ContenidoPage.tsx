import { Reveal } from '../components/atoms/Reveal';
import { Button } from '../components/atoms/Button';
import { Icon } from '../components/atoms/Icon';
import { buildWhatsAppUrl } from '../lib/whatsapp';

interface ContentSectionProps {
  icon: string;
  title: string;
  description: string;
  whatsappMessage: string;
  delayMs?: number;
}

function ContentSection({ icon, title, description, whatsappMessage, delayMs }: ContentSectionProps) {
  return (
    <Reveal delayMs={delayMs} className="h-full">
      <div className="flex h-full flex-col items-center rounded-[20px] border-2 border-brand bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] p-8 text-center shadow-2xl transition-transform duration-300 hover:-translate-y-1 md:p-10">
        <Icon name={icon} className="mb-4 text-5xl text-brand" />
        <h2 className="mb-4 font-heading text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mb-8 flex-1 leading-relaxed text-gray-300">{description}</p>
        <Button href={buildWhatsAppUrl(whatsappMessage)} variant="success">
          <Icon name="fa fa-whatsapp" />
          Consultar Paquetes Disponibles
        </Button>
      </div>
    </Reveal>
  );
}

export function ContenidoPage() {
  return (
    <div className="bg-black py-20">
      <div className="mx-auto max-w-[1100px] px-4">
        <Reveal className="mb-12 text-center">
          <h1 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">Contenido</h1>
          <p className="mx-auto max-w-2xl text-white/70">
            Paquetes de fotos y videos exclusivos, sin necesidad de pasar por OnlyFans. Escríbeme por WhatsApp y te
            cuento cuántas fotos trae cada paquete, de qué se trata y el precio. Una vez confirmes el pago, te envío
            todo directamente por WhatsApp o Telegram.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContentSection
            icon="fas fa-crown"
            title="Contenido de Domina"
            description="Paquetes exclusivos de fotos y videos en mi faceta de Dominatrix: dominación, fetiches y control absoluto. Muy pronto encontrarás aquí la muestra y el detalle de cada paquete disponible."
            whatsappMessage="Hola, quiero información sobre los paquetes de Contenido de Domina"
          />
          <ContentSection
            icon="fas fa-mask"
            title="Contenido de Rubber Doll"
            description="Paquetes exclusivos de fotos y videos en mi faceta de Rubber Doll Jade. Muy pronto encontrarás aquí la muestra y el detalle de cada paquete disponible."
            whatsappMessage="Hola, quiero información sobre los paquetes de Contenido de Rubber Doll"
            delayMs={100}
          />
        </div>
      </div>
    </div>
  );
}
