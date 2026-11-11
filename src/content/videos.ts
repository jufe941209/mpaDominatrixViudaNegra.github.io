const BUNNY_LIBRARY = '801001';
const BUNNY_CDN = 'https://vz-c017e5bd-8fc.b-cdn.net';

function bunnyUrl(videoId: string) {
  return `https://player.mediadelivery.net/play/${BUNNY_LIBRARY}/${videoId}`;
}

/** Bunny Stream's own generated thumbnail for the video, so the static poster always matches what plays. */
function bunnyThumbnail(videoId: string) {
  return `${BUNNY_CDN}/${videoId}/thumbnail.jpg`;
}

const videoIds = {
  home: 'c3f5baac-3553-40a4-9656-8078506d0d1b',
  inicio: '19fa5b5f-1497-444b-a60b-12fa8f7f3c7d',
  presenciales: '3c98e918-d894-4ee3-bbae-4221a4ae73d9',
  mazmorraJuguetes: '24e98f21-f846-45e2-9c72-f616850ff89a',
  rubberDollJade: '40b17239-7822-4439-959a-2241e84c4461',
  contenidoDomina: 'e1420395-47ac-4d38-b33d-e338b36cc8b5',
  contenidoRubberDoll: 'f215edda-20e2-433c-871a-bb4ce6de282d',
};

export const videos: Record<keyof typeof videoIds, string> = Object.fromEntries(
  Object.entries(videoIds).map(([key, id]) => [key, bunnyUrl(id)]),
) as Record<keyof typeof videoIds, string>;

export const videoPosters: Record<keyof typeof videoIds, string> = Object.fromEntries(
  Object.entries(videoIds).map(([key, id]) => [key, bunnyThumbnail(id)]),
) as Record<keyof typeof videoIds, string>;

export interface ShowVideo {
  id: string;
  url: string;
  poster: string;
  title: string;
  description: string;
}

const showVideoIds = {
  'erotic-show': '73cc6aad-dbd8-42ec-8029-c23eba51cf8c',
  'performance-1': 'dfe113c7-547e-4e46-bb66-2502efeede67',
  'performance-2': '4ba4606d-1292-4825-bf35-06b0170d184a',
};

export const showVideos: ShowVideo[] = [
  {
    id: 'erotic-show',
    url: bunnyUrl(showVideoIds['erotic-show']),
    poster: bunnyThumbnail(showVideoIds['erotic-show']),
    title: 'The Special Erotic Show',
    description: 'Un adelanto del show erótico que la Dominatrix Viuda Negra lleva a los eventos y clubes más oscuros de Bogotá.',
  },
  {
    id: 'performance-1',
    url: bunnyUrl(showVideoIds['performance-1']),
    poster: bunnyThumbnail(showVideoIds['performance-1']),
    title: 'Performance en Vivo',
    description: 'Momentos de dominación y control absoluto, capturados en pleno performance.',
  },
  {
    id: 'performance-2',
    url: bunnyUrl(showVideoIds['performance-2']),
    poster: bunnyThumbnail(showVideoIds['performance-2']),
    title: 'Fetish Fantasies',
    description: 'Extracto de una presentación latex BDSM en vivo, parte del universo fetichista que la Dominatrix Viuda Negra lleva a los escenarios.',
  },
];
