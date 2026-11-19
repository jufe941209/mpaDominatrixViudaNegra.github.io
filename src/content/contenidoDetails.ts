import type { videos } from './videos';

export interface ContenidoDetail {
  slug: string;
  icon: string;
  image: string;
  imageAlt: string;
  videoKey: keyof typeof videos;
  videoAlt: string;
  whatsappMessage: string;
  titleKey: string;
  descriptionKey: string;
  fichaKey: 'domina' | 'rubberDoll';
}

export const contenidoDetails: ContenidoDetail[] = [
  {
    slug: 'domina',
    icon: 'fas fa-crown',
    image: '/img/rubberdoll/jade1.jpg',
    imageAlt: 'Muestra de Contenido de Domina',
    videoKey: 'contenidoDomina',
    videoAlt: 'Video de Contenido de Domina',
    whatsappMessage: 'Hola, quiero información sobre los paquetes de Contenido de Domina',
    titleKey: 'contenido:domina.title',
    descriptionKey: 'contenido:domina.description',
    fichaKey: 'domina',
  },
  {
    slug: 'rubber-doll',
    icon: 'fas fa-mask',
    image: '/img/rubberdoll/jade2.jpg',
    imageAlt: 'Muestra de Contenido de Rubber Doll',
    videoKey: 'contenidoRubberDoll',
    videoAlt: 'Video de Contenido de Rubber Doll',
    whatsappMessage: 'Hola, quiero información sobre los paquetes de Contenido de Rubber Doll',
    titleKey: 'contenido:rubberDoll.title',
    descriptionKey: 'contenido:rubberDoll.description',
    fichaKey: 'rubberDoll',
  },
];
