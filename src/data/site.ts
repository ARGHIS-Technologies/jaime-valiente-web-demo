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
  { city: 'Cádiz', address: 'Avenida de la Ilustracion nº 6, 3º-1', building: 'Edificio Astarte · 11011 Cádiz', number: '01' },
  { city: 'Arcos de la Frontera', address: 'Calle Seguidillas nº 4, oficina 7', building: 'Edificio Escontec · 11630 Arcos de la Frontera', number: '02' },
] as const;
export function href(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
