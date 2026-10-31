# Jaime Valiente Alemán — Demo de diseño

**Revisión vigente:** [iconografía Phosphor](docs/iconografia/INFORME.md), con procedencia, licencia, capturas y verificaciones.

Dirección visual: [composición editorial y presencia personal](docs/composicion-editorial/INFORME.md).

Iconos: selección local de Phosphor Icons, peso regular, renderizada por Astro. [Procedencia y hashes](src/assets/icons/phosphor/provenance.json) · [Licencia MIT incluida en la publicación](public/licenses/phosphor-icons.txt).

Demo navegable para revisión del despacho. No sustituye ni modifica `jaimevalienteabogado.es`.

- Propietario personal: **mmlab-dev**.
- Repositorio: https://github.com/mmlab-dev/jaime-valiente-web-demo
- URL de publicación: https://mmlab-dev.github.io/jaime-valiente-web-demo/
- Siete páginas: Inicio, Particulares, Empresas, Reclamaciones, El despacho, Contacto y Área de clientes.
- Soporte: aviso legal, privacidad y cookies demostrativos, y 404 personalizada.

## Instalar y ejecutar

Requiere Node.js **22.23.4 o superior**, con una versión par compatible. Desarrollo y CI verificados con Node 24. Dependencias fijadas en `package-lock.json`.

```sh
npm ci
npm run dev
```

Abrir la URL que imprime Astro, incluyendo `/jaime-valiente-web-demo/`. No abrir `index.html` con `file://`.

```sh
npm run check
npm run build
npm run verify
npm run verify:motion
npm run preview
```

`check` comprueba TypeScript y componentes Astro. `build` genera `dist/`. `verify` comprueba rutas, recursos, enlaces internos, anclas, base, idioma, H1, identificación de demo y ausencia de formularios/Apps Script/analítica en el HTML generado. No sustituye una auditoría integral.

## Stack y dependencias directas

| Paquete | Versión |
| --- | --- |
| Astro | 7.4.4 |
| Tailwind CSS | 4.3.3 |
| Integración Vite de Tailwind | 4.3.3 |
| TypeScript | 6.0.3 |
| Astro Check | 0.9.12 |
| Source Serif 4 y Source Sans 3 mediante Fontsource | 5.3.1 |

HTML estático y scripts pequeños integrados para el menú y la entrada de secciones. Sin framework de interfaz, backend, base de datos, autenticación, servicios de pago, formularios o cargas de archivos. Las fuentes se sirven desde el propio sitio; licencias en `docs/licencias/`. No se usan fotografías ni retratos ficticios.

## Organización

```text
src/
  components/     Cabecera, pie, presentación, servicios, oficinas y acciones
  data/site.ts    Navegación, contactos, direcciones y constructor de rutas
  layouts/       Documento HTML, metadatos y marco compartido
  pages/         Siete pantallas, rutas legales y 404
  styles/        Identidad, retícula, estados y adaptación responsive
public/          Favicon, robots y .nojekyll
scripts/         Verificación del build estático
docs/            Informe, pendientes, desviaciones, pruebas y capturas
.github/workflows/deploy.yml
```

## Publicar en GitHub Pages

La configuración real de Astro es `site: https://mmlab-dev.github.io` y `base: /jaime-valiente-web-demo`. Todos los enlaces internos, scripts, estilos y fuentes respetan ese subdirectorio. No hay archivo CNAME ni dominio personalizado.

En el repositorio personal, seleccionar **Settings → Pages → Source → GitHub Actions**. El workflow de `main` instala con `npm ci`, comprueba, construye, verifica y despliega `dist/` con las acciones oficiales de GitHub. Los cambios exclusivos de documentación no provocan un nuevo despliegue. Las acciones están fijadas por SHA y sus etiquetas de versión están documentadas en el workflow. La publicación usa OIDC y permisos por trabajo; no requiere secretos en el repositorio.

Para publicar un cambio ya revisado:

```sh
git add <archivos revisados>
git commit -m "Describe el cambio"
git push origin main
```

El workflow también se puede ejecutar manualmente desde Actions. Esperar a que termine y comprobar la URL pública, las rutas directas y los recursos. Para revertir, revertir el commit correspondiente y desplegar de nuevo. No modificar DNS ni la web real.

## Contenido y límites

Fuentes de requisitos: `Especificacion_Redisenio_Jaime_Valiente_v1_0.docx` y `auditoria-jaime-valiente-2026-10-31.md`, revisadas localmente. No se publican estos documentos ni otros archivos del espacio de trabajo en este repositorio. Se conserva toda la oferta inventariada, sin atribuir credenciales, experiencia, equipo, casos o resultados no acreditados.

La demo utiliza `noindex, follow` en todas las páginas. No se generan datos estructurados que atribuyan credenciales o condiciones pendientes. El Área de clientes no integra Google Apps Script ni el SaaS documental. Los enlaces de teléfono/correo/WhatsApp abren los canales publicados; no se han enviado mensajes ni comprobado su recepción. Las páginas legales son información demostrativa, no documentos jurídicos definitivos.

Ver [informe y pruebas](docs/INFORME.md), [pendientes](docs/PENDIENTES.md), [desviaciones](docs/DESVIACIONES.md) [plan de diseño y evaluación de referencias](docs/PLAN-DISENO.md) y [capturas reales](docs/capturas/).

## Referencias técnicas

- [Astro y GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Astro requisitos de instalación](https://docs.astro.build/en/install-and-setup/)
- [API GitHub Pages](https://docs.github.com/en/rest/pages/pages)

Publicar esta demo no autoriza a sustituir la web del despacho. Una versión definitiva requiere validación editorial, operativa y jurídica y autorización expresa de publicación en el dominio real.

Para contrastar una publicación con el build local, ejecutar `node scripts/verify-public.mjs docs/pruebas-publicacion.json`. Compara páginas y recursos por SHA256 y comprueba la 404 pública.
