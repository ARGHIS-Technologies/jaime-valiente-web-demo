# Composición editorial y presencia personal — revisión 5

31 de octubre de 2026. Jaime Valiente Alemán · Abogado.

[Demo](https://mmlab-dev.github.io/jaime-valiente-web-demo/) · [Repositorio personal](https://github.com/mmlab-dev/jaime-valiente-web-demo)

## Decisión visual

La revisión responde a la crítica de jerarquía, repetición de módulos, uso excesivo de cursivas y escasa presencia personal. Conserva la paleta, las dos familias tipográficas, las siete páginas y sus funcionalidades. Se modifica la composición dentro del proyecto existente, sin nuevas bibliotecas, fotografías ficticias ni símbolos de marca.

La identidad se apoya en el nombre completo, las proporciones tipográficas y una alternancia más deliberada entre marfil, blanco y petróleo. El retrato auténtico sigue pendiente; el diseño actual no contiene un espacio vacío ni una imagen que pretenda representarlo.

## Cambios y propósito

| Elemento | Resolución |
| --- | --- |
| Entrada de Inicio | Índice de tres accesos más compacto, de 320 px en escritorio, alineado con el final de la presentación. Se eliminan números y resúmenes repetidos. El titular recupera prioridad. |
| Guía de especialidades | Dos filas editoriales de ancho completo, con tres enlaces por ámbito en escritorio y listas en móvil. Empresas conserva su superficie verde clara. Reclamaciones tiene una franja abierta, sin otro recuadro. |
| Nombre de Jaime | Se convierte en el título principal del bloque del despacho. La frase de atención pasa a un nivel secundario. Se conserva la identidad de cabecera «Jaime Valiente / ALEMÁN · ABOGADO». |
| El despacho | Apertura propia en petróleo con el nombre y la denominación profesional. Cuerpo editorial de lectura acotada y navegación a servicios. El desplegable de información pendiente sigue disponible y claramente rotulado. |
| Cursiva | Se reserva para la localización del titular de Inicio. Los restantes títulos emplean redonda. |
| Ubicaciones | Se sustituyen las tarjetas blancas por dos columnas abiertas sobre marfil. Se retiran los números y el rótulo provincial duplicado. Se conservan ciudades, direcciones, edificios y enlaces. |
| Cabeceras interiores | Se retiran etiquetas y números que repetían la ruta de navegación. Empresas usa verde claro; Reclamaciones conserva el tono cálido. |
| Cierre de contacto | Se elimina la etiqueta repetitiva «El siguiente paso». Se mantienen acción, explicación y jerarquía de encabezados. |

Los cambios de copy editorial son propuestas de presentación. No añaden hechos profesionales ni amplían servicios.

## Secuencia de revisión y correcciones observadas

Se guardó Inicio y El despacho de la demo publicada anterior en escritorio y móvil. Después se construyeron y examinaron ambas páginas en 1440 y 390 px, antes de extender los ajustes a los componentes compartidos.

La primera revisión detectó un título de servicios demasiado largo en móvil, un desfase de alineación entre las dos filas y una medida de lectura excesiva en El despacho. Se acortó el título, se igualaron los márgenes de las filas en escritorio y tableta y se limitó a 700 px la columna de presentación. La simplificación de ubicaciones y etiquetas se aplicó después de esa revisión.

Se capturaron nuevamente las once rutas en escritorio y móvil. Se revisaron los paneles completos de las páginas comerciales, Contacto, Clientes, legales y 404, además de Inicio en 768 y 1024 px tras el último ajuste. Las diferencias de composición son deliberadas; las acciones, colores funcionales, tipos y navegación pertenecen al mismo sistema.

## Componentes y archivos

Cambios en Inicio, El despacho, `ServiceGuide`, `Offices`, `PageHero` y `ContactCta`, más los estilos compartidos. Particulares, Empresas y Reclamaciones dejan de pasar el número decorativo de cabecera. Se retiran 44 grupos de selectores que mencionaban elementos eliminados. No se cambia el menú ni el código de animación.

El CSS final ocupa 42.097 bytes sin comprimir frente a 41.993 en la revisión anterior: 104 bytes adicionales. No se añade JavaScript, fuentes o dependencias. Los archivos de paquetes y el lockfile permanecen intactos.

## Verificación ejecutada

| Control | Resultado y alcance |
| --- | --- |
| Astro / TypeScript | 25 archivos, cero errores, advertencias o sugerencias. |
| Construcción y referencias | Once páginas estáticas, 481 referencias internas comprobadas, recursos y fragmentos válidos. Idioma, un H1 por página, `noindex`, identificación de demo, dos precargas de fuente y ausencia de formularios/Apps Script conservados. [Registro](build.json). |
| Responsive | Once rutas en 320, 390, 768, 1024 y 1440 px: 55 observaciones, sin desbordamientos del documento ni elementos de contenido fuera del ancho. Repetida la observación de Inicio en tableta y portátil después del último ajuste. [Registro](responsive.json). |
| Oferta | Títulos visibles, introducciones y listas de los diez bloques de servicios coinciden con la base anterior: 15 elementos en Particulares, 18 en Empresas y cuatro ámbitos en Reclamaciones. [Comparación](inventario.json). |
| Contraste | 613 nodos de texto visibles en once rutas a 390 px; mínimo 5,20:1, sin fallos de los umbrales aplicados de 4,5:1 para texto normal y 3:1 para grande. Fondos CSS compuestos; estado normal, sin desplegar información profesional. [Registro](contraste.json). |
| Teclado y navegación | Salida del menú por Tab con cierre y conservación del nuevo foco; Escape con devolución al botón tras terminar el cierre; acceso a Servicios; desplegable profesional con Enter; enlace de Cádiz a Contacto con destino y foco visibles. Sin incidencias nuevas en el registro consultado. [Registro](navegacion.json). |
| Movimiento reducido | Regresión sobre scripts reales en contexto JS controlado y reglas CSS: sin animación ni observador con preferencia reducida; conservados cierre, foco y adaptación a altura. [Registro](movimiento.json). |

La revisión de navegador utiliza Chromium integrado. No se atribuyen pruebas en Safari, dispositivos físicos, lector de pantalla, emulación visual de la preferencia del sistema o Lighthouse. El contraste y las comprobaciones anteriores no constituyen una certificación WCAG completa.

## Evidencia visual

[Inicio: antes y después](comparativa-inicio.jpg) · [El despacho: antes y después](comparativa-despacho.jpg).

Capturas originales en [antes/](antes/) y [despues/](despues/). Paneles completos de revisión: [escritorio 1](revision-desktop-1.jpg), [2](revision-desktop-2.jpg), [3](revision-desktop-3.jpg); [móvil 1](revision-movil-1.jpg), [2](revision-movil-2.jpg), [3](revision-movil-3.jpg). Los paneles solo reducen y colocan capturas reales con sus rótulos.

## Alcance y pendientes

Se mantiene la arquitectura aprobada y el acceso separado de clientes. El envío documental continúa deshabilitado en esta demo. No se integra ni prueba Google Apps Script, no se reciben archivos y no se simula autenticación o tramitación. No se contacta con terceros.

La titularidad legal, colegiación, biografía, fotografía autorizada, contactos, direcciones, vigencia de servicios, condiciones de atención y textos legales continúan sujetos a validación del despacho. [Pendientes](../PENDIENTES.md). La fuente de contenido sigue siendo la especificación y el inventario conservado; no se declara una nueva ratificación de la web original.

La recomendación es presentar esta composición para aprobación y completar los datos profesionales antes de sustituir la web real. El trabajo se limita al repositorio personal de mmlab-dev y su demo de GitHub Pages.

## Publicación comprobada

Aplicación `a32703d5d9a6ebd61a20867c78d5648e07c7f636`, publicada correctamente por [Actions 41220651388](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41220651388). Los trabajos de build y deploy terminaron con éxito. [Pasos del despliegue](despliegue.json).

Los 22 archivos públicos devuelven HTTP 200 y coinciden por SHA256 con el build local; la ruta inexistente devuelve HTTP 404 con la página personalizada. [Comprobación](publicacion.json).

Se abrió Inicio en escritorio y se accedió a El despacho desde su enlace. Se revisó esta página en móvil y se volvió a Inicio mediante el menú, que cerró correctamente. Sin advertencias o errores nuevos en el registro consultado. [Recorrido público](navegacion-publica.json). Capturas `publico-inicio-desktop.png`, `publico-inicio-movil.png`, `publico-despacho-desktop.png` y `publico-despacho-movil.png`.

La cuenta y el repositorio se comprobaron como personales y públicos, con HTTPS y sin dominio personalizado. No se modificaron la web real, el DNS, el correo o el sistema documental. Los commits posteriores de documentación no alteran la aplicación identificada arriba.
