# Refinamiento editorial de la demo — revisión 2

31 de octubre de 2026. Jaime Valiente Alemán · Abogado.

Demo: https://mmlab-dev.github.io/jaime-valiente-web-demo/

Repositorio personal: https://github.com/mmlab-dev/jaime-valiente-web-demo

## Resultado y alcance

Se conserva la arquitectura de siete páginas, sus servicios y sus recorridos. Se mantienen Astro, TypeScript, Tailwind, las fuentes locales y la salida estática. La intervención mejora composición, proporciones, tipografía, navegación, contacto y estados. No añade funcionalidades de negocio ni modifica la web real, el dominio, el correo o el envío documental.

La demo sigue identificada como propuesta y lleva `noindex, follow`. Los textos legales y el área documental siguen siendo demostrativos. Esta entrega permite revisar y presentar el diseño; no constituye una aprobación de la web definitiva por el despacho.

## Auditoría anterior a los cambios

Se recorrieron las once rutas públicas en escritorio y móvil: siete páginas principales, tres legales y 404. Hay 22 observaciones en [auditoria-antes.json](auditoria-antes.json), y capturas reales de las siete páginas en [antes/](antes/), tanto del primer encuadre como de la página completa. Se examinaron expresamente Inicio, Empresas y Contacto en ambos tamaños antes de editar el frontend.

Prioridades observadas:

1. El H1 de Inicio alcanzaba 91,44 px a 1440, y el panel oscuro repetía valores sin facilitar la elección de un servicio. El titular de Contacto ocupaba tres líneas grandes en móvil.
2. Las tres tarjetas equivalentes, el marco con el nombre y varios bloques de consulta producían una apariencia demasiado genérica y repetitiva.
3. Las interiores tenían titulares de hasta 76 px, demasiado espacio entre piezas y listados estrechos con amplias zonas vacías. Empresas concentraba mucho verde en la cabecera.
4. La marca mostraba «Jaime Valiente / ABOGADO» y omitía Alemán. La cabecera necesitaba una relación más clara entre nombre, navegación y acceso de clientes.
5. Las oficinas parecían tarjetas decorativas; sus enlaces volvían a Contacto sin llevar al canal concreto. El área de clientes dedicaba espacio a una figura de documento que no aportaba información.

No se disponía de retrato auténtico autorizado. Se adoptó una presentación tipográfica.

## Decisiones visuales

- **Marca:** «Jaime Valiente / ALEMÁN · ABOGADO», nombre completo en Inicio y El despacho, y nombre accesible completo en los enlaces de marca. Esta composición procede de la instrucción del usuario; no implica registro de marca ni verificación de titularidad legal.
- **Portada:** retícula asimétrica, titular de 72 px a 1440 y 38–40 px en los móviles comprobados, cursiva de Source Serif 4 y explicación breve de la oferta. El lateral ahora es un índice funcional de Particulares, Empresas y Reclamaciones con ubicaciones y acceso a cita.
- **Servicios:** filas editoriales con número, categoría, nombre, explicación y enlace; se eliminan las tres cajas uniformes. En móvil pasan a una composición de número y contenido, con lectura vertical.
- **Interiores:** escala compartida y más contenida. Particulares conserva los grupos de familia y herencias; Empresas usa el verde en un bloque de consulta; Reclamaciones mantiene sus cuatro ámbitos y las referencias a civil y laboral. Se conserva toda la oferta de la versión anterior.
- **Despacho:** bloque tipográfico con enlaces útiles a las áreas; preparado para que un futuro retrato autorizado pueda sustituir ese lateral. Los datos profesionales pendientes siguen explícitos.
- **Contacto:** mensaje más breve, teléfono, correo y WhatsApp legibles y cómodos de pulsar; oficinas abiertas sobre líneas editoriales. Sus enlaces llevan a `contacto/#canales`.
- **Clientes:** pantalla funcional de la misma marca, estado de demo claro y consulta sobre el canal documental. Se retira la figura decorativa de documento.
- **Color:** marfil predominante, carbón para texto y petróleo para acciones y bloques puntuales. Bronce moderado en líneas; para texto pequeño se conserva la variante de contraste `#75583A`. Sin sombras fuertes, superficies glass, degradados o imágenes ficticias.
- **Tipografía:** Source Serif 4 para marca y jerarquía editorial; Source Sans 3 para lectura y funciones. Fuentes locales existentes, sin nuevas descargas externas.

El titular «Claridad jurídica para decisiones importantes» y el resto del copy editorial nuevo son **propuestas para aprobación**. No prometen resultados ni atribuyen experiencia o acreditaciones.

## Secuencia de revisión y correcciones

Primero se construyeron Inicio y Empresas y se capturaron en 1440 y 390: [primera-version/](primera-version/). Después se extendió el sistema y se revisaron las siete páginas en ambos tamaños, con capturas completas.

Cinco defectos observados y corregidos durante esa revisión:

| Observación | Corrección |
| --- | --- |
| Botones de portada apilados con anchuras distintas en 390. | Columna de botones alineados con anchura común. |
| Cabeceras de sección de Inicio retenían dos columnas en móvil, fragmentando títulos y explicaciones. | Una columna explícita bajo 768. |
| El bloque de presentación del despacho en Inicio también retenía dos columnas estrechas en móvil. | Composición vertical y separación controlada. |
| Algunos encabezados de Reclamaciones dejaban cuatro líneas en una columna estrecha. | Encabezados más breves; explicaciones y ámbito de los servicios conservados. |
| El Área de clientes tenía un espacio inicial mayor que el resto de páginas. | Se alinea su entrada con las demás interiores. |

Las capturas afectadas de la revisión intermedia se conservan en [revision-intermedia/](revision-intermedia/). Se detectó además que la opacidad de apertura del menú dejaba ver momentáneamente el texto del fondo; el panel ahora permanece opaco y se anima solo su desplazamiento de 6 px. La captura [menu-390.jpg](despues/menu-390.jpg) muestra el resultado.

La revisión final volvió a comprobar las siete páginas en escritorio y móvil, y las once rutas en los cinco tamaños. Las capturas finales están en [despues/](despues/).

## Componentes y piezas modificadas

| Pieza | Cambio |
| --- | --- |
| Header | Identidad completa, alineación, acceso diferenciado de clientes y animación opaca del menú. |
| Footer | Identidad completa, escala y ritmo más compactos. |
| PageHero — presentación visual compartida | Titulares contenidos, separación editorial y composición particular para Empresas. |
| ServiceBlock | Retícula más útil, listados en dos columnas cuando hay espacio y eliminación del listado vacío en Reclamaciones. |
| Áreas de Inicio | Filas editoriales y nuevo índice rápido del hero. |
| Offices | Tratamiento abierto y enlace al ancla de canales. |
| ContactCta | Escala, espaciado y adaptación al sistema. |
| Botones, enlaces y navegación contextual | Alineación, subrayados, foco y respuestas de interacción comunes. |
| Despacho, Contacto y Área de clientes | Composiciones específicas, con los límites de la demo conservados. |
| Legal y 404 | Jerarquía y espaciado ajustados mediante el sistema compartido. |
| Motion / Reveal | Entrada de secciones a 320 ms, navegación nativa y reglas de movimiento reducido. |
| Verificación y CI | Prueba del recorrido con movimiento reducido añadida al workflow. |

El refinamiento se concentra en una hoja de estilo legible y cambios puntuales de los componentes existentes. No se sustituye el proyecto por una plantilla.

## Referencias y dependencias

Se conserva la evaluación de [PLAN-DISENO.md](../PLAN-DISENO.md):

- [Starwind UI](https://github.com/starwind-ui/starwind-ui): no se instala; la interacción requerida sigue siendo un menú de divulgación sencillo, con teclado, Escape y foco comprobados. No hay una nueva necesidad que justifique una primitiva adicional.
- [Motion](https://motion.dev/): no se instala; no hay gestos, física o un efecto que exceda las capacidades nativas utilizadas.
- [Astro Components Kit](https://astrocomponents.dev/): referencia visual; no se copia una plantilla.
- [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/): se mantiene la transición CSS nativa entre documentos, sin incorporar ClientRouter. La documentación oficial distingue ambas opciones y confirma que la modalidad nativa conserva el funcionamiento MPA.

`package-lock.json` permanece sin cambios. No se ha instalado ningún paquete en este refinamiento.

## Interacción y movimiento

Botones y flechas responden en 160–200 ms; los subrayados se revelan en 200 ms. Las filas de servicio cambian el borde y conservan su posición. El menú abre en 180 ms y cierra en 150 ms. La entrada de secciones desplaza 8 px con opacidad inicial 0,94 durante 320 ms y solo se dispara una vez. La navegación nativa dura 160 ms cuando el navegador la admite.

Con `prefers-reduced-motion: reduce`, el menú cambia inmediatamente, no se inicia el observador de entradas, se anulan las animaciones y transiciones y se desactiva el desplazamiento suave. El contenido está visible por defecto.

## Pruebas y evidencia

| Comprobación | Resultado y límite |
| --- | --- |
| Astro / TypeScript | 24 archivos; 0 errores, 0 advertencias, 0 sugerencias. |
| Build | 11 páginas estáticas, correcto. |
| Enlaces y salida | 434 referencias locales, recursos y anclas comprobados; un H1, español, noindex y aviso de demo; sin formularios ni integración Apps Script. [build.json](build.json). |
| Responsive | 55 observaciones: once rutas por 320, 390, 768, 1024 y 1440. Sin desbordamiento horizontal ni elementos fuera del ancho del documento. [responsive.json](responsive.json). |
| Contraste de texto | 653 nodos con texto a 390; mínimo 5,44:1; sin fallos del umbral aplicado de 4,5:1 para texto normal y 3:1 para grande. Comprobación DOM de colores CSS y fondos, incluyendo composición de transparencias; no certificación integral. [contraste.json](contraste.json). |
| Teclado | Enter abre; Tab lleva a Inicio con contorno visible; Escape cierra y devuelve foco al botón. Se navegó a Empresas con teclado. Se comprobó el cierre al completar su animación. |
| Navegación ordinaria | Seis recorridos mediante enlaces principales completados con el título y H1 correctos; sin nuevos errores registrados en ese recorrido. [navegacion.json](navegacion.json). |
| Movimiento reducido | Los scripts reales de Header y Reveal se ejecutaron con la preferencia activada en un contexto JS controlado: cero animaciones de menú, cero observadores, cierre inmediato y devolución del foco. Reglas CSS revisadas. [movimiento-reducido.json](movimiento-reducido.json). El navegador de revisión no ofrece emulación de esa preferencia; no se atribuye una prueba visual del ajuste del sistema operativo. |
| Contactos | Destinos publicados conservados y revisados; no se enviaron mensajes o documentos ni se iniciaron llamadas. |
| Historial y confidencialidad | Diff revisado, búsqueda de patrones de credenciales sin coincidencias, lockfile intacto y remoto limitado al repositorio personal. |

Durante el recorrido automatizado se registró un `InvalidStateError` de una transición nativa («Page already revealed»). La navegación se completó y el aviso no se reprodujo en los seis recorridos ordinarios posteriores. Su causa no está determinada; se conserva el registro y debe revisarse en la validación entre navegadores. No se declara una consola completamente libre de incidencias durante toda la sesión.

## Peso

CSS de producción: 44.830 bytes sin comprimir; 9.724 bytes al comprimirlo localmente con gzip. Es una medida del archivo, no del tiempo de red. Las cuatro fuentes WOFF2 existentes suman 71.544 bytes; se conservan también los formatos WOFF de respaldo. JavaScript integrado en Inicio: 1.809 bytes; no se genera un bundle JS externo. Las once páginas suman 128.196 bytes de HTML.

No hay imágenes de contenido, frameworks de interfaz o dependencias nuevas. No se ha ejecutado Lighthouse ni medido Core Web Vitals de campo. Las capturas de auditoría viven en documentación y no se incluyen en el artefacto `dist/` publicado.

## Comparativas

Las imágenes siguientes son montajes de capturas reales con etiquetas; solo se escala proporcionalmente la presentación conjunta.

- [Inicio en escritorio](comparativa-inicio-escritorio.jpg).
- [Inicio en móvil](comparativa-inicio-movil.jpg).
- [Empresas en escritorio](comparativa-empresas-escritorio.jpg).
- [Contacto en móvil](comparativa-contacto-movil.jpg).

## Confirmado, propuesto y pendiente

**Confirmado por instrucción del usuario:** nombre Jaime Valiente Alemán, composición nominal, dirección visual, stack y repositorio personal `mmlab-dev`. La publicación previa de los servicios, contactos y direcciones está documentada; no demuestra su vigencia u operatividad.

**Propuesto:** titular y copy editorial, jerarquía visual, composición, microinteracciones y presentación de las áreas. Requieren el visto bueno del despacho.

**Pendiente:** titular legal, datos fiscales, titulación y colegiación, biografía y retrato autorizado, vigencia y alcance de los servicios, contactos y direcciones, condiciones de atención y textos legales finales. El envío documental actual no se ha probado ni conectado. Consultar [PENDIENTES.md](../PENDIENTES.md).

Quedan fuera de esta comprobación Safari, dispositivos físicos, un lector de pantalla real, auditoría WCAG completa y la emulación visual de movimiento reducido. La mejora se valida en el navegador integrado basado en Chromium, con los alcances indicados.

## Publicación

Aplicación publicada: `b6c14475c776e8ff69b2ea9544f3bb29df8d7851`.

[GitHub Actions 41193991168](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41193991168): build y deploy completados con éxito; incluye comprobación de tipos, construcción, enlaces y movimiento reducido. Evidencia: [despliegue.json](despliegue.json).

Las once páginas y todos los recursos de la salida estática —22 archivos en total— devuelven HTTP 200 y coinciden por SHA256 con el build revisado. Una ruta inexistente devuelve 404 con la página personalizada. Evidencia: [publicacion.json](publicacion.json).

En el navegador público se comprobó Inicio a 1440, Empresas a 1440, menú móvil hacia Contacto, destinos de teléfono/correo/WhatsApp, enlace de oficinas a los canales y Área de clientes sin formularios. Los canales quedan visibles por debajo de la cabecera al completar el desplazamiento. Fuentes cargadas y marca completa verificadas. Evidencia: [navegacion-publica.json](navegacion-publica.json) y capturas `publico-*.jpg`.

GitHub Pages mantiene HTTPS, publicación por workflow y `cname: null`. Se ha usado exclusivamente el repositorio personal de mmlab-dev. Los commits posteriores de documentación y capturas no cambian esta aplicación ni provocan un despliegue adicional. La web real y su dominio permanecen al margen de esta demo.
