# Iconografía Phosphor — revisión 7

31 de octubre de 2026. Sustitución de la flecha propia y los símbolos de texto por una única familia de iconos.

## Elección y dependencia

Se utiliza [Phosphor Icons](https://github.com/phosphor-icons/core), peso **regular**, para mantener legibilidad en tamaños pequeños. Se seleccionan quince SVG del repositorio oficial, fijados al commit `2b75f3ad12b420c9504ef05df8d2564a28f8500e`. No se instala el paquete completo ni una integración de terceros; Astro renderiza los SVG locales durante la construcción.

Los originales y sus hashes están en `src/assets/icons/phosphor/`, junto a `provenance.json`. Se revisó que contienen únicamente geometría SVG, sin scripts, manejadores de eventos o referencias externas. La licencia MIT completa se incluye en `public/licenses/phosphor-icons.txt` y se copia a la publicación.

No se añade JavaScript, fuentes de iconos, peticiones a CDN, paquetes o cambios en el lockfile.

## Criterio visual

| Contexto | Icono y tratamiento |
| --- | --- |
| Teléfono y correo | Teléfono y sobre, situados junto al contenido del canal. Se retira la flecha genérica repetida. |
| WhatsApp | Conversación con puntos; el texto conserva el nombre del canal. El símbolo de salida aparece solo junto a este enlace externo que abre otra pestaña. No se usa el logotipo de la aplicación. |
| Ubicaciones | Pin junto al nombre de cada ciudad, con el bronce de texto ya utilizado. El enlace inferior conserva su dirección de navegación. |
| Área de clientes | Carpeta en el acceso; documento en la presentación; conversación para consultar el canal e información para privacidad. El aviso de demo y acceso deshabilitado permanece visible. No se introduce un candado o una afirmación de seguridad. |
| Especialidades | Chevron junto al título, con el texto y la descripción dentro del mismo enlace. |
| Navegación y acciones | Flechas de la misma familia; dirección descendente para explorar y ascendente para volver arriba. Se eliminan los caracteres Unicode que antes variaban según la fuente. |
| Menú y desplegable | Lista/cierre y signo más de Phosphor. Los estados se conservan con CSS y el comportamiento existente de teclado. |

Se mantiene la paleta, la tipografía y la arquitectura. Los símbolos se dimensionan por función: 16–22 px para navegación, 26 px para canales y ubicaciones y 32 px para la presentación documental.

## Accesibilidad y revisión

Todos los iconos acompañan texto visible; son decorativos, llevan `aria-hidden="true"` y `focusable="false"`. Los nombres y destinos de los enlaces continúan disponibles sin el icono. Se conserva foco visible y movimiento reducido.

Se compararon Inicio y Contacto con la versión anterior en escritorio y móvil, y se revisó Clientes a 320 px. Esta revisión detectó un título documental demasiado ancho: se acotó el panel y se ajustó su escala en la pantalla más estrecha. Después se recorrieron las once rutas en cinco tamaños y se revisaron las capturas completas de escritorio y móvil.

## Verificaciones ejecutadas

- Astro / TypeScript: 26 archivos, cero errores, advertencias o sugerencias.
- Build: once páginas. Verificación de 481 referencias internas, base, fragmentos, recursos, español, un H1, `noindex`, identificación de demo y ausencia de formularios/Apps Script. Se añade la comprobación de **217 SVG decorativos** y la presencia de la licencia en la salida. [Resultado](build.json).
- Responsive: **55 observaciones**, once rutas en 320, 390, 768, 1024 y 1440 px, sin desbordamientos. Se compara también contra el ancho disponible del documento, descontando la barra de desplazamiento. [Registro](responsive.json).
- Menú: alternancia de iconos lista/cierre, salida por Tab conservando foco, Escape devolviendo el foco al botón y desplegable profesional con Enter. Ningún SVG entra en el foco. Sin incidencias nuevas en el registro consultado. [Registro](navegacion.json).
- Movimiento reducido: regresión de los scripts reales en contexto JS controlado y revisión de reglas CSS, superada. [Resultado y alcance](movimiento.json).
- Contraste de iconos: 129 instancias visibles a 390 px, estado normal con menú cerrado; mínimo **5,90:1** sobre fondos CSS compuestos. Los iconos complementan texto y no son el único indicador de una acción. [Medidas](contraste-iconos.json).
- Contenido: los títulos visibles, introducciones y listas de las diez áreas coinciden con la base conservada; 15 elementos en Particulares, 18 en Empresas y cuatro ámbitos en Reclamaciones. [Comparación](inventario.json).

La revisión utiliza Chromium integrado. No se atribuye una auditoría WCAG completa, prueba en lector de pantalla o dispositivo físico, Safari o emulación visual de la preferencia de movimiento del sistema.

## Peso

Los quince archivos originales suman 5.047 bytes. El HTML incorpora los SVG que necesita cada página. En las tres páginas medidas, el gzip local del HTML aumenta entre 1,24 y 1,48 kB; el JavaScript integrado permanece en 2.163 bytes por página. No se añade una solicitud de red por icono. [Comparación con la publicación anterior](peso.json). Estas medidas no son una puntuación Lighthouse ni un resultado de Core Web Vitals.

Astro también emite los quince originales como recursos estáticos en la salida. La interfaz utiliza SVG dentro del HTML; la comprobación pública confirma que no contiene imágenes enlazadas a esos archivos.

## Capturas y alcance

[Contacto en escritorio: antes/después](comparativa-contacto-desktop.jpg) · [Contacto en móvil: antes/después](comparativa-contacto-movil.jpg).

Capturas originales en [antes/](antes/) y [despues/](despues/). Paneles de revisión completos `revision-1440-1.jpg` a `revision-1440-3.jpg` y `revision-390-1.jpg` a `revision-390-3.jpg`. Las comparativas y paneles solo colocan capturas reales con sus rótulos.

Se actualizan `Icon`, el adaptador `Arrow`, cabecera, pie, guía de servicios, ubicaciones, Contacto, Clientes y los símbolos de las páginas interiores. Los comportamientos de menú y entrada permanecen en sus scripts existentes. La web real, DNS, correo y sistema documental no se modifican. Continúan los [datos pendientes](../PENDIENTES.md) y la identificación de demo para aprobación.

## Publicación comprobada

Aplicación `0ed62616ec8e73cc27727bcfd5282134ee833805`. [Actions 41228963311](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41228963311) completó build y deploy con éxito. [Registro](despliegue.json).

Los 38 archivos públicos, incluidos licencia y originales SVG emitidos por Astro, devuelven HTTP 200 y coinciden por SHA256 con la salida revisada. La ruta inexistente conserva HTTP 404 y la página personalizada. [Verificación pública](publicacion.json).

Se recargó Contacto después del despliegue y se comprobaron sus canales y destinos, iconos semánticos, ausencia de flechas Unicode y carpeta de clientes. En móvil se comprobó apertura, Escape, cierre y devolución del foco al botón. Sin incidencias nuevas en el registro consultado. [Navegación](navegacion-publica.json), [captura pública de escritorio](publico-contacto-1440.png) y [móvil](publico-contacto-390.png).

Solo se actualizó el repositorio personal y su demo de GitHub Pages. Los commits posteriores de documentación no alteran la aplicación identificada arriba.
