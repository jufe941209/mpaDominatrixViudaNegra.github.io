export interface ProfessionalPhoto {
  src: string;
  alt: string;
  colSpan: 'lg-3' | 'lg-4' | 'lg-6';
  height: 300 | 400;
}

const photo = (n: number, colSpan: ProfessionalPhoto['colSpan'], height: 300 | 400 = 300): ProfessionalPhoto => ({
  src: `/img/profesionales/profesionales${n}.jpg`,
  alt: `Foto Profesional ${n}`,
  colSpan,
  height,
});

export const professionalGalleryShowcase: ProfessionalPhoto[] = [1, 2, 3, 4].map((n) => ({
  src: `/img/throne/throne${n}.jpg`,
  alt: `Dominatrix Viuda Negra en su trono ${n}`,
  colSpan: 'lg-3',
  height: 400,
}));

// Grid 1: replicates profesionales.php's first gallery (11 photos, 4/4/3 rows)
export const professionalGalleryRow1: ProfessionalPhoto[] = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => photo(n, 'lg-3'));
export const professionalGalleryRow2: ProfessionalPhoto[] = [9, 10, 11].map((n) => photo(n, 'lg-4'));

// Grid 2: replicates the second gallery (note: photo 16 is reused twice in the
// original markup instead of using the unused profesionales17.jpg on disk —
// kept as-is so the visual result stays identical to the current site)
export const professionalGalleryRow3: ProfessionalPhoto[] = [
  photo(12, 'lg-6', 400),
  photo(16, 'lg-3', 400),
  photo(13, 'lg-3', 400),
];
export const professionalGalleryRow4: ProfessionalPhoto[] = [14, 15, 16].map((n) => photo(n, 'lg-4'));
