export interface ProfessionalPhoto {
  src: string;
  alt: string;
  colSpan: 'lg-3' | 'lg-4' | 'lg-6';
  height: 300 | 400;
  caption?: string;
}

const photo = (n: number, colSpan: ProfessionalPhoto['colSpan'], height: 300 | 400 = 300): ProfessionalPhoto => ({
  src: `/img/profesionales/profesionales${n}.jpg`,
  alt: `Foto Profesional ${n}`,
  colSpan,
  height,
});

// Note: the old "En El Trono" (29-32), "Galería Completa" (1-11) and "Porte Real" (18-27)
// sets have moved out of this page entirely — they now live only on Home and Cuero/Leather,
// so they're not duplicated here anymore.
export const professionalGalleryRow7: ProfessionalPhoto[] = [33, 34, 35, 36, 37, 38].map((n) => photo(n, 'lg-3'));

// Grid 2: replicates the second gallery (note: photo 16 is reused twice in the
// original markup instead of using the unused profesionales17.jpg on disk —
// kept as-is so the visual result stays identical to the current site)
export const professionalGalleryRow3: ProfessionalPhoto[] = [
  photo(12, 'lg-6', 400),
  photo(16, 'lg-3', 400),
  photo(13, 'lg-3', 400),
];
export const professionalGalleryRow4: ProfessionalPhoto[] = [14, 15, 16].map((n) => photo(n, 'lg-4'));
