# Perú Peñón — sitio web

Rediseño de perupeón.com con el sistema visual de ballenacabo.com (paleta crema / negro / terracota / verde salvia, tipografía ancha en mayúsculas, header flotante, bloques de foto a sangre) conservando toda la información del restaurante.

Sitio 100 % estático: no necesita instalación ni build. Se sube tal cual a cualquier hosting (cPanel, Netlify, Vercel, GitHub Pages, etc.).

## Estructura

```
index.html          Inicio
quienes-somos.html  Quiénes somos + horarios
menu.html           Menú completo (6 categorías)
contacto.html       Formulario (abre WhatsApp con el mensaje listo)
css/style.css       Estilos y tokens de diseño (colores, tipografía)
js/main.js          Menú, preloader, revelado al hacer scroll, carrusel, formulario
img/                Fotos optimizadas y logo
```

## Datos que se editan con frecuencia

- **WhatsApp**: buscar `573107333883` en los .html y en `js/main.js`.
- **Teléfono fijo**: buscar `(032) 892 0300`.
- **Horarios**: aparecen en el bloque verde del pie de página (todas las páginas), en `quienes-somos.html` y en `menu.html`.
- **Precios y platos**: `menu.html`, cada plato es un bloque `.menu-item`.
- **Colores**: variables al inicio de `css/style.css` (`--cream`, `--ink`, `--terra`, `--sage`, `--sand`, `--mist`).

## Ver en local

```bash
python3 -m http.server 8080
```

y abrir http://localhost:8080
