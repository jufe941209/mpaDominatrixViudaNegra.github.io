export const videos = {
  home: 'https://player.mediadelivery.net/play/801001/c3f5baac-3553-40a4-9656-8078506d0d1b',
  inicio: 'https://player.mediadelivery.net/play/801001/19fa5b5f-1497-444b-a60b-12fa8f7f3c7d',
  presenciales: 'https://player.mediadelivery.net/play/801001/3c98e918-d894-4ee3-bbae-4221a4ae73d9',
  mazmorraJuguetes: 'https://player.mediadelivery.net/play/801001/24e98f21-f846-45e2-9c72-f616850ff89a',
  rubberDollJade: 'https://player.mediadelivery.net/play/801001/32058c9f-1f44-413b-bfe6-c1eb6b16704d',
};

export interface ShowVideo {
  id: string;
  url: string;
  poster: string;
  title: string;
  description: string;
}

export const showVideos: ShowVideo[] = [
  {
    id: 'erotic-show',
    url: 'https://player.mediadelivery.net/play/801001/73cc6aad-dbd8-42ec-8029-c23eba51cf8c',
    poster: '/img/eventos/event1.jpg',
    title: 'The Special Erotic Show',
    description: 'Un adelanto del show erótico que la Dominatrix Viuda Negra lleva a los eventos y clubes más oscuros de Bogotá.',
  },
  {
    id: 'performance-1',
    url: 'https://player.mediadelivery.net/play/801001/dfe113c7-547e-4e46-bb66-2502efeede67',
    poster: '/img/throne/throne1.jpg',
    title: 'Performance en Vivo',
    description: 'Momentos de dominación y control absoluto, capturados en pleno performance.',
  },
  {
    id: 'performance-2',
    url: 'https://player.mediadelivery.net/play/801001/4ba4606d-1292-4825-bf35-06b0170d184a',
    poster: '/img/eventos/event5.jpg',
    title: 'Fetish Fantasies',
    description: 'Extracto de una presentación latex BDSM en vivo, parte del universo fetichista que la Dominatrix Viuda Negra lleva a los escenarios.',
  },
];
