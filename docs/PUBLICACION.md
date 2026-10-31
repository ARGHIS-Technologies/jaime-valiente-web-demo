# Publicaciones verificadas de la demo

Fecha: 31 de octubre de 2026, Europe/Madrid.

## Revisión vigente: iconografía Phosphor

Aplicación `0ed62616ec8e73cc27727bcfd5282134ee833805`, publicada correctamente por [Actions 41228963311](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41228963311). Los 38 archivos públicos coinciden por SHA256 con el build, incluidos licencia y SVG estáticos. Comprobados Contacto en escritorio y móvil, iconos semánticos, carpeta de clientes y menú con Escape. [Informe vigente y comparativas](iconografia/INFORME.md).

## Registro histórico: detalles de interacción

Aplicación `1341beb2cb755385f196d2dbc40f697e8456ed2a`, publicada correctamente por [Actions 41222893257](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41222893257). Los 22 archivos públicos coinciden por SHA256 con el build. Comprobados las acciones compactas en tableta, las seis flechas y los tiempos efectivos de entrada; recorrido a Familia con foco y destino visibles. [Informe vigente](detalles-interaccion/INFORME.md).

## Registro histórico: composición editorial y presencia personal

Aplicación `a32703d5d9a6ebd61a20867c78d5648e07c7f636`, publicada correctamente por [Actions 41220651388](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41220651388). Los 22 archivos públicos coinciden por SHA256 con el build y la ruta inexistente conserva su 404. Revisados públicamente Inicio, El despacho y la navegación móvil. [Informe vigente y comparativas](composicion-editorial/INFORME.md).

## Registro histórico: auditoría integral y correcciones

Aplicación `ee1d4ebc7e794ec14a0095393667056b99dffb65`, publicada correctamente por [Actions 41214508787](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41214508787). Los 22 archivos públicos coinciden por SHA256 con el build. Comprobados en la demo pública el menú por Tab/Escape, el foco en Contacto y el desplegable profesional. [Informe vigente](auditoria-integral/INFORME.md).

## Registro histórico: dirección de arte y contraste

Aplicación `8bd60e529624d42e1a715cc5478bfe427c8b6d7c`, publicada correctamente por [Actions 41204893433](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41204893433). Los 22 archivos públicos coinciden por SHA256 con la salida revisada. Recorridos de particulares, empresas y clientes comprobados sin nuevas incidencias. Ver [informe vigente y capturas](direccion-arte/INFORME.md).

## Registro histórico: refinamiento editorial

Aplicación `b6c14475c776e8ff69b2ea9544f3bb29df8d7851`, publicada correctamente por [Actions 41193991168](https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41193991168). Se comprobaron los 22 archivos públicos por HTTP y SHA256, la página 404 y los recorridos públicos. Ver [informe y evidencias actuales](refinamiento/INFORME.md).

## Registro histórico: primera entrega

- **Demo:** https://mmlab-dev.github.io/jaime-valiente-web-demo/
- **Repositorio personal público:** https://github.com/mmlab-dev/jaime-valiente-web-demo
- **Propietario confirmado:** `mmlab-dev`, tipo de cuenta `User`. La selección fue confirmada por el usuario antes de crear el repositorio.
- **Versión de aplicación desplegada:** `4d344b87b2cfd9cb096c187b9586ad775faf39a8`.
- **GitHub Actions:** https://github.com/mmlab-dev/jaime-valiente-web-demo/actions/runs/41186264909
- **Resultado:** trabajos `build` y `deploy` completados con `success`.

El trabajo de build ejecutó correctamente `npm ci`, `npm run check`, `npm run build`, `npm run verify` y la carga del artefacto de Pages. El despliegue se realizó mediante GitHub Actions, con HTTPS y sin dominio personalizado (`cname: null`).

## Comprobaciones públicas realizadas

Se solicitaron las 11 páginas generadas y los recursos de la salida estática: 22 archivos en total, excluido el marcador `.nojekyll`. Todos devolvieron HTTP 200 y coincidieron por SHA256 con el build local. Esto incluye el CSS y los ocho ficheros de fuentes WOFF/WOFF2. Una ruta deliberadamente inexistente devolvió HTTP 404 y el contenido personalizado del despacho.

Se abrió la demo pública en el navegador integrado y se comprobó la navegación de escritorio a Empresas, la apertura del menú móvil con teclado, el recorrido a Empresas y el acceso al Área de clientes. El aviso final de clientes se volvió a comprobar tras actualizar el navegador. Sin errores o advertencias en el registro consultado. No se enviaron formularios, mensajes, correos o documentos ni se iniciaron llamadas.

Evidencias: `pruebas-publicacion.json`, `pruebas-navegacion-publica.json` y capturas `capturas/publico-inicio-1440.jpg` y `capturas/publico-inicio-390.jpg`. La matriz de 55 observaciones responsive y las capturas del resto de páginas están en esta misma carpeta.

Los commits posteriores que solo actualizan este informe o capturas no cambian la aplicación ni provocan un despliegue adicional. La fuente de la aplicación y el workflow de despliegue quedan identificados por el commit y la ejecución anteriores.

## Límites de la entrega

Demo para revisión de diseño. Se mantienen los datos profesionales, operativos y legales pendientes de validar con Jaime. No se ha modificado la web real, sus DNS, su correo o el sistema documental. No se han usado repositorios de una organización. No hay backend, autenticación, recepción de documentos, analítica o servicios de pago en la demo.

No se declara una auditoría WCAG completa, prueba en dispositivos físicos o puntuación Lighthouse. Consultar `INFORME.md`, `PENDIENTES.md`, `DESVIACIONES.md` y `PLAN-DISENO.md` para el alcance exacto.
