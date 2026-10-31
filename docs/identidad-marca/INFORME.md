# Paquete de marca y favicon — revisión 10

31 de octubre de 2026. Exportación de la firma existente y coherencia del icono de navegador.

## Resultado

Se entregan las cuatro variantes de la firma tipográfica: petróleo, marfil, negro y blanco. Mantienen las dos líneas Jaime Valiente / ALEMÁN · ABOGADO, Source Serif 4 Regular y Source Sans 3 Semibold, con el espaciado y la separación de la identidad. HarfBuzz aplica el kerning nativo de las fuentes. No se crea un símbolo jurídico ni un monograma JV.

Los SVG incluyen las letras convertidas en trazados y un margen de protección. Son autónomos, con viewBox y nombre accesible, sin texto tipográfico activo, scripts, imágenes externas ni fuentes enlazadas. Los PNG correspondientes se exportan en RGBA, con fondo transparente y 1.600 px de ancho.

El paquete local de 28 archivos incorpora icono auxiliar de 1.024 px, favicon SVG, siete tamaños PNG (16, 32, 48, 64, 180, 192 y 512), un ICO con cuatro tamaños, previsualizaciones, guía de uso, licencias, manifiesto con hashes y el manual de identidad 1.0 de 30 páginas. El ZIP se entrega al usuario; la web publica únicamente los recursos de favicon necesarios.

## Favicon de la demo

La J conserva su función auxiliar. Se sustituye la letra Georgia dependiente de las fuentes del dispositivo por el contorno de Source Serif 4 Regular. Campo petróleo #243D3A, letra marfil #F6F3EC, viewBox de 64 × 64 y radio 8. La altura visible de la letra es 40 unidades y su tinta se centra geométricamente.

La cabecera conserva la firma como texto accesible. Se enlazan SVG, PNG de 32 px, ICO de 16/32/48/64 y un icono táctil de 180 px. La versión de las referencias cambia para evitar conservar el icono previo en caché. No se añaden dependencias al sitio.

## Verificación

Se analizaron los seis SVG y las cuatro firmas PNG; se comprobaron dimensiones, canal alfa, márgenes transparentes, tamaños de los iconos, contenido del ICO e integridad del ZIP. El manifiesto registra las huellas de cada archivo. Se inspeccionaron las cuatro variantes y los iconos a tamaño real y ampliado. [Verificación del paquete](verificacion-paquete.json).

En el navegador local se comprobaron las cuatro referencias de icono en Inicio y el SVG real: un trazado, ningún elemento de texto y viewBox correcto. Astro/TypeScript sin errores, advertencias ni sugerencias. Build de once páginas, 520 referencias internas y 219 iconos decorativos verificados. La comprobación del build ahora exige el favicon trazado y sus formatos alternativos.

[Variantes](variantes.png) · [Tamaños de favicon](favicon-tamanos.png) · [Captura del SVG local](favicon-local.png) · [Procedencia y hash](favicon-procedencia.json).

## Alcance

El icono J no sustituye a la firma comercial. Los SVG maestros del paquete son sRGB; las condiciones de impresión y la reproducción física requieren la preparación indicada en el manual. No se atribuye registro de marca ni se modifican datos, servicios o condiciones profesionales.

## Publicación final verificada

Aplicación `1f8d0303c9439095cc2a138c5c90f236f1c08b77`, publicada correctamente por [Actions 41238733084](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41238733084). [Identificación del artefacto](ci-artifact.json) · [Mediciones CI](ci-summary.json) · [Informe axe CI](ci-axe.json).

Lighthouse: cinco páginas, tres ejecuciones por página; medianas 100 en rendimiento, accesibilidad automática y buenas prácticas. SEO 63 por el bloqueo de indexación intencional de la demo. Axe: 28 estados, cero infracciones y cero incompletos inesperados; se conserva el incompleto conocido del menú opaco documentado en la revisión 8. Son controles de laboratorio, sin afirmar una certificación WCAG ni resultados de usuarios reales.

Los 42 archivos públicos coinciden por SHA256 con el build final y devuelven HTTP 200. La página inexistente conserva su 404 personalizada. [Verificación pública](publicacion.json). Se abrió el SVG publicado en el navegador y se comprobaron sus trazados y las referencias SVG/ICO/PNG/táctil en Inicio. [Captura del favicon público](favicon-publico.png). El SVG de favicon entregado en el ZIP coincide exactamente con el publicado.
