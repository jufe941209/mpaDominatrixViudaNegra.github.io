export interface PracticeCategory {
  slug: string;
  titleKey: string;
  folder: string;
  filePrefix: string;
  count: number;
  extension: 'jpg' | 'jpeg' | 'png';
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface PressItem {
  id: number;
  titleKey: string;
  textKey: string;
  image: string;
  externalUrl: string;
}

export interface ServiceCard {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  emoji: string;
  buttonVariant: 'danger' | 'success' | 'primary' | 'dark' | 'secondary';
  whatsappMessage: string;
}

export interface WebcamPlatform {
  id: string;
  name: string;
  logo: string;
  descriptionKey: string;
  url: string;
  imageOnLeft: boolean;
  dark: boolean;
}

export interface UnderwearTier {
  id: string;
  titleKey: string;
  descriptionKey: string;
  whatsappMessage: string;
  accent: 'economica' | 'estandar' | 'plus';
}

export interface MultipleSessionCard {
  id: number;
  image: string;
  titleKey: string;
  subtitleKey: string;
}
