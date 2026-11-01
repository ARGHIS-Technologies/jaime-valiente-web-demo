import signature from '../assets/estudios-vectoriales/firma.svg?url';
import work from '../assets/estudios-vectoriales/papel-y-luz.svg?url';
import interior from '../assets/estudios-vectoriales/espacio-y-luz.svg?url';
import cadiz from '../assets/estudios-vectoriales/cadiz.svg?url';
import arcos from '../assets/estudios-vectoriales/arcos.svg?url';

export interface VisualStudySpec {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}
export const visualStudies = {
  portrait: { src: signature, width: 800, height: 1000, alt: 'J de la firma en marfil sobre planos de verde petróleo y bronce', caption: 'Firma tipográfica · Retrato pendiente.' },
  work: { src: work, width: 1200, height: 800, alt: 'Composición abstracta de hojas de papel y planos de luz en la paleta del despacho', caption: 'Papel y luz · Estudio provisional.' },
  interior: { src: interior, width: 1200, height: 800, alt: 'Estudio vectorial de un umbral y planos de luz; no representa un espacio real', caption: 'Espacio y luz · Estudio provisional.' },
  cadiz: { src: cadiz, width: 1200, height: 800, alt: 'Estudio abstracto de horizonte y volúmenes claros para el espacio fotográfico de Cádiz', caption: 'Estudio para Cádiz · Fotografía pendiente.' },
  arcos: { src: arcos, width: 1200, height: 800, alt: 'Estudio abstracto de arcos en marfil y bronce para el espacio fotográfico de Arcos', caption: 'Estudio para Arcos · Fotografía pendiente.' },
} satisfies Record<string, VisualStudySpec>;
