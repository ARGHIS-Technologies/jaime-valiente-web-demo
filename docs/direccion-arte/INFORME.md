# Dirección de arte — revisión 3

31 de octubre de 2026. Jaime Valiente Alemán · Abogado.

[Demo](https://mmlab-dev.github.io/jaime-valiente-web-demo/) · [Repositorio personal](https://github.com/mmlab-dev/jaime-valiente-web-demo)

## Problema abordado

La revisión anterior tenía legibilidad y orden, pero demasiadas superficies de intensidad similar. El verde se concentraba al final de Inicio; los tres accesos de la cabecera se repetían como tres resúmenes y la identidad del abogado quedaba diluida entre mensajes genéricos. La petición del usuario autoriza trabajar de forma autónoma hasta resolver esa dirección visual.

Se mantiene la arquitectura, las siete páginas, el inventario de servicios, los datos publicados y el stack. La intervención cambia composición, jerarquía, ritmo, acceso a especialidades y uso funcional del color. No modifica la web real, el dominio, el correo ni el envío documental.

## Decisiones

1. **Portada más concreta.** «Tu abogado, en Cádiz y Arcos» vincula la propuesta con la actividad y las ubicaciones. El nombre completo aparece en la entrada. La oferta de particulares y empresas se explica en el primer párrafo.
2. **Verde desde la primera pantalla.** El lateral petróleo contiene las tres áreas y sus ámbitos reales; sirve para elegir una ruta. Los textos claros y los focos mantienen contraste sobre ese fondo.
3. **Guía de especialidades.** Se sustituye el segundo listado de tres resúmenes por seis enlaces directos: civil, familia y sucesiones, penal, mercantil, laboral y contable/fiscal. Reclamaciones tiene una franja propia, con su alcance de deudas, negociación, monitorios y ejecución. Los accesos generales y los accesos a especialidades cumplen niveles distintos de orientación.
4. **Identidad profesional en el centro.** Una sección petróleo reúne nombre, atención personal y enlace al despacho. Se utiliza composición tipográfica porque no se dispone de retrato auténtico autorizado. No hay monograma ni fotografía ficticia.
5. **Contacto con presencia visual.** Teléfono, correo y WhatsApp forman un bloque verde legible. Las dos ubicaciones tienen superficies blancas sobre marfil y una línea bronce discreta.
6. **Interiores coherentes.** Cabeceras blancas, titulares petróleo, navegación contextual verde suave y contenido sobre una superficie de lectura. Empresas conserva su bloque petróleo; Reclamaciones introduce el tono cálido de acento. El despacho y Clientes usan el mismo sistema.
7. **Clientes con el estado visible antes.** En móvil, título y explicación breve preceden al bloque «Demo · Acceso no habilitado». La explicación adicional aparece después. Se conserva el orden lógico de lectura y no se simulan acceso, recepción de archivos ni expedientes.
8. **Cierre más claro.** La consulta final vuelve a una superficie blanca y una acción petróleo, antes del pie oscuro. Se elimina de Inicio el bloque independiente «Antes de una consulta» y se conserva su orientación en la llamada final y el acceso de clientes.

El marfil sigue siendo la base, con blanco, petróleo y dos tonos secundarios derivados de la paleta. El color marca funciones y momentos del recorrido. No se añaden decoraciones jurídicas, imágenes genéricas o efectos complejos.

El copy editorial nuevo es una **propuesta**; no se atribuyen trayectoria, colegiación, experiencia, equipo o resultados. Los servicios detallados de Particulares, Empresas y Reclamaciones permanecen sin cambios de contenido en sus archivos.

## Revisión visual e iteraciones

Antes de editar se había revisado la demo pública completa en escritorio y la entrada móvil, con una crítica explícita en la conversación. La referencia publicada se conserva en [antes/](antes/). Después se construyeron Inicio y Empresas, se examinaron en escritorio y móvil y se extendió la dirección al resto de páginas.

Defectos observados y corregidos durante esta pasada:

| Observación | Ajuste |
| --- | --- |
| En la primera versión móvil, el botón y el acceso secundario ocupaban demasiado espacio y se apilaban a 390. | Una fila a 390, con acción principal y enlace secundario; apilado intencional a 320. |
| La nota de valores de la entrada repetía el mensaje del bloque del despacho y retrasaba las áreas en móvil. | Se omite esa nota en móvil; el mensaje continúa en el bloque profesional. |
| El correo se partía como «.c / om» a 320. | Ajuste local de tipografía, separación y flecha; dirección completa en una línea. |
| A 768, la cabecera de servicios quedaba fragmentada en columnas estrechas. | Cabecera en una columna y escala específica para el bloque del despacho. |
| El estado de Clientes quedaba por debajo de la explicación larga en móvil. | Retícula con orden título → estado → información de apoyo. |

Las capturas de esas incidencias se conservan en [iteracion/](iteracion/). Las siete páginas se volvieron a revisar en 1440 y 390, con capturas completas en [despues/](despues/), y se repitió la matriz de cinco tamaños tras los ajustes.

## Componentes y dependencias

Nuevo componente estático `ServiceGuide.astro` para los enlaces de especialidades. Se modifican Inicio, el orden de Clientes, la llamada de contacto, el atributo de tema por página en Layout y la hoja del sistema editorial. Las oficinas, cabeceras de página, navegación contextual, pie y bloques de contacto reciben el tratamiento compartido.

Astro, TypeScript, Tailwind y Fontsource permanecen en sus versiones previas. `package.json` y `package-lock.json` no cambian. **Cero dependencias nuevas.** Se mantiene la evaluación de [Starwind UI, Motion, Astro Components Kit y transiciones de Astro](../PLAN-DISENO.md): componentes propios sencillos, CSS y navegación convencional entre documentos; no hay una necesidad que justifique instalar esas bibliotecas.

Se conservan apertura/cierre del menú, entradas discretas, subrayados y flechas. Se amplía el foco claro a superficies oscuras. El movimiento reducido desactiva las animaciones y los desplazamientos de los nuevos enlaces.

Durante las pruebas se reprodujo un error de estado de la transición nativa entre documentos al entrar en `empresas/#contable-fiscal`. Se ha desactivado esa transición entre documentos y se mantiene la navegación MPA convencional. La repetición de los dos accesos a especialidades y del menú no registró nuevos errores. Esta decisión se apoya en una incidencia observada y evita añadir un router cliente o una biblioteca de animaciones. [Registro de la corrección](compatibilidad.json).

## Pruebas ejecutadas

| Prueba | Resultado |
| --- | --- |
| Astro / TypeScript | 25 archivos; 0 errores, 0 advertencias y 0 sugerencias. |
| Construcción | Correcta, once páginas estáticas. |
| Referencias internas | 436 referencias correctas, incluidos los enlaces nuevos a especialidades. Un H1, idioma español, noindex, etiqueta demo y ausencia de formularios/Apps Script. [build.json](build.json). |
| Responsive | Once rutas por cinco tamaños: 320, 390, 768, 1024 y 1440; 55 observaciones finales sin desbordamiento ni elementos fuera del ancho del documento. [responsive.json](responsive.json). |
| Contraste | 658 nodos con texto a 390; mínimo 5,20:1. Sin fallos de los umbrales aplicados: 4,5:1 para texto normal y 3:1 para grande. Fondos CSS y transparencias compuestos. [contraste.json](contraste.json). |
| Recorridos | Desde Inicio hacia familia/sucesiones y contable/fiscal mediante teclado. Acceso de cliente desde cabecera y estado sin formularios. [navegacion.json](navegacion.json). |
| Menú y foco | Enter abre; Tab llega al primer enlace con contorno visible; Escape cierra y devuelve foco al botón. Comprobado con el documento cargado. |
| Movimiento reducido | Prueba de los scripts reales en contexto JS controlado: sin animaciones de menú ni observador de entradas; cierre inmediato y retorno de foco. CSS revisado. [movimiento-reducido.json](movimiento-reducido.json). |
| Consola | Se registró una incidencia de transición entre documentos y se corrigió como se detalla arriba. Sin nuevos avisos o errores en la repetición posterior. [Registro inicial](consola.json) y [repetición](compatibilidad.json). |
| Confidencialidad y alcance | Diff revisado, búsqueda de patrones de credenciales sin coincidencias y remoto personal verificado antes de publicar. Contenido detallado de las tres páginas de servicios conservado. |

La comprobación es del navegador integrado basado en Chromium. No certifica WCAG completa, no incluye lector de pantalla real, Safari ni dispositivos físicos. La preferencia de movimiento reducido se comprueba en los scripts y CSS; no se emula visualmente el ajuste del sistema operativo.

## Peso y mantenimiento

49.159 bytes de CSS sin comprimir; 10.461 bytes con gzip local. JavaScript integrado en Inicio: 1.809 bytes, sin aumento. Fuentes WOFF2: 71.544 bytes, sin cambios. No hay imágenes de contenido ni dependencias nuevas. Medidas de archivos en [peso.json](peso.json), no puntuaciones Lighthouse o Core Web Vitals de campo.

Las capturas permanecen en documentación y quedan fuera del artefacto publicado. La mejora se concentra en el sistema existente; no se incorpora una plantilla o un nuevo framework.

## Comparativas y pendientes

[Inicio en escritorio](comparativa-inicio-1440.jpg) · [Inicio en móvil](comparativa-inicio-390.jpg) · [Composición completa anterior y actual](comparativa-inicio-completa.jpg)

La nueva dirección tiene más contraste, identifica antes al abogado y permite entrar en especialidades desde Inicio. La guía móvil contiene más información útil; la decisión de diseño se apoya en esa orientación y no en una reducción global de longitud.

Siguen pendientes los datos profesionales y legales, la vigencia de contactos y direcciones, las condiciones de atención, el copy definitivo y un retrato auténtico autorizado. El canal documental actual no se ha conectado ni probado. Ver [PENDIENTES.md](../PENDIENTES.md).

## Publicación

Aplicación publicada: `8bd60e529624d42e1a715cc5478bfe427c8b6d7c`.

[Actions 41204893433](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41204893433) completó build y deploy con éxito; incluye comprobación de tipos, construcción, enlaces y movimiento reducido. [Estado registrado](despliegue.json).

Los 22 archivos públicos —once páginas y todos los recursos estáticos— devuelven HTTP 200 y coinciden por SHA256 con el build local. La ruta de prueba inexistente devuelve 404 y la página personalizada. [Verificación pública](publicacion.json).

Se comprobaron en la demo pública Inicio, las rutas directas a familia/sucesiones y contable/fiscal, el menú móvil después de navegar a una especialidad, Clientes y Contacto. Fuentes cargadas al completar la revisión y ausencia de nuevos errores o advertencias en ese recorrido. No se iniciaron llamadas ni se enviaron mensajes o documentos. [Recorridos públicos](navegacion-publica.json), con capturas `publico-*.jpg`.

El repositorio y el despliegue pertenecen a la cuenta personal mmlab-dev. Los commits posteriores que solo registran documentación y capturas no cambian la aplicación identificada arriba. La web real y su dominio permanecen sin modificaciones.
