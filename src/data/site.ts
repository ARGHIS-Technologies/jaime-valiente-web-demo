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
  { city: 'Cádiz', address: 'Avenida de la Ilustracion nº 6, 3º-1', building: 'Edificio Astarte · 11011 Cádiz' },
  { city: 'Arcos de la Frontera', address: 'Calle Seguidillas nº 4, oficina 7', building: 'Edificio Escontec · 11630 Arcos de la Frontera' },
] as const;
/**
 * Datos del prestador para el aviso legal y la privacidad (LSSI art. 10; RGPD art. 13).
 * Cada «PENDIENTE» lo debe completar Jaime Valiente. La compilación (`npm run verify`) falla
 * mientras quede alguno, para que no se publique la web con datos sin rellenar.
 */
export const legal = {
  name: 'Jaime Valiente Alemán',
  nif: 'PENDIENTE: NIF',
  address: 'PENDIENTE: domicilio profesional que figura como sede del despacho',
  bar: 'PENDIENTE: Ilustre Colegio de Abogados de ...',
  barNumber: 'PENDIENTE: número de colegiado',
  insurance: 'PENDIENTE: aseguradora y póliza de responsabilidad civil',
  privacyEmail: 'PENDIENTE: correo para ejercer derechos de protección de datos',
  updated: '8 de noviembre de 2026',
} as const;
export function href(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
