export const brand = 'Jaime Valiente Alemán · Abogado';
export const contact = {
  phone: '+34 692 203 087',
  tel: 'tel:+34692203087',
  email: 'jvalientea@gmail.com',
  mailto: 'mailto:jvalientea@gmail.com',
  whatsapp: 'https://wa.me/34692203087',
};
export const navigation = [
  { label: 'Inicio', path: '' },
  { label: 'Particulares', path: 'particulares/' },
  { label: 'Empresas', path: 'empresas/' },
  { label: 'Reclamaciones', path: 'reclamaciones/' },
  { label: 'El despacho', path: 'el-despacho/' },
  { label: 'Contacto', path: 'contacto/' },
] as const;
export const offices = [
  { city: 'Cádiz', address: 'Avenida de la Ilustración nº 6, 3º-1', building: 'Edificio Astarté · 11011 Cádiz' },
  { city: 'Arcos de la Frontera', address: 'Calle Seguidilla nº 4, local 7', building: 'Edificio Escontec · 11630 Arcos de la Frontera' },
] as const;
/**
 * Datos del prestador para el aviso legal y la privacidad (LSSI art. 10; RGPD art. 13).
 * Cada «PENDIENTE» lo debe completar Jaime Valiente. La compilación (`npm run verify`) falla
 * mientras quede alguno, para que no se publique la web con datos sin rellenar.
 */
export const legal = {
  name: 'Jaime Valiente Alemán',
  nif: '31262537V',
  address: 'Avenida de la Ilustración nº 6, 3º-1 (Edificio Astarté), 11011 Cádiz, y Calle Seguidilla nº 4, local 7 (Edificio Escontec), 11630 Arcos de la Frontera',
  bar: 'Ilustre Colegio de Abogados de Cádiz',
  barNumber: '2362',
  privacyEmail: 'jvalientea@gmail.com',
  updated: '8 de noviembre de 2026',
} as const;
export function href(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
