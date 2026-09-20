# Contexto del proyecto — Perú Peñón

Resumen para continuar el trabajo con otra persona u otro modelo. Fecha: 20 de septiembre de 2026.

## Objetivo

Rediseñar el sitio del restaurante **Perú Peñón** (https://xn--perupeon-i3a.com/ · perupeón.com, Cali, Colombia) usando el **diseño de https://ballenacabo.com/**, pero conservando toda la información del restaurante. Ya está hecho; lo que sigue son ajustes y publicación.

## Estado actual

Sitio 100 % estático (HTML/CSS/JS, sin framework ni build). Se sube tal cual a cualquier hosting.

```
perupenon/
├── index.html            Inicio
├── quienes-somos.html    Quiénes somos + horarios
├── menu.html             Menú completo (6 categorías, precios)
├── contacto.html         Formulario (al enviar abre WhatsApp con el mensaje listo)
├── css/style.css         Tokens de diseño (colores, tipografía) y estilos
├── js/main.js            Preloader, menú, revelado al hacer scroll, carrusel, formulario
├── img/                  Fotos optimizadas, logo en blanco/negro/rojo, favicon
├── README.md             Qué editar y dónde
├── CONTEXTO.md           Este archivo
└── _fuentes/             Material de trabajo (no se sube al hosting)
    ├── build.py          Generador de las 4 páginas (header y footer compartidos). Si se edita,
    │                     ejecutar `python3 build.py` desde _fuentes/ para regenerar los .html.
    │                     También se pueden editar los .html directamente y olvidarse del generador.
    ├── fotos-originales/ Fotos tal como estaban en perupeón.com (sin optimizar) y el logo original
    └── ballena-css/      CSS del tema "Paisana" de ballenacabo.com, de donde salieron los tokens
```

Verificado en 1440, 1100 y 375 px de ancho, sin errores de consola.

## Sistema de diseño (copiado de Ballena)

- Colores: crema `#F8F2E5`, negro `#03090D`, terracota `#C2644F`, verde salvia `#779580`, gris arena `#B8B2A6`, gris niebla `#C3C6BD`, piedra `#D3CFC5`. Están como variables al inicio de `css/style.css`.
- Tipografía: Ballena usa Sweet Sans Pro y TT Commons Pro (de pago). Se sustituyeron por Google Fonts: **Archivo** ancha (`wdth 125`) para títulos en mayúsculas, **DM Sans** para texto, **Bodoni Moda** para el wordmark gigante del pie.
- Componentes: header flotante centrado (botón "Pedir a domicilio" izquierda, logo centro, hamburguesa derecha) · menú que cae desde la barra, en crema, con foto abajo · preloader negro con la frase "Nos re-inventamos" (solo la primera vez por sesión) · hero con foto a sangre · bloque partido foto + panel terracota · imagen completa · intro sobre gris arena · tarjetas de platos con carrusel · testimonios · "about" con foto en blanco y negro · banda verde de contacto/horarios · footer gris con wordmark "PERÚ PEÑÓN".

## Datos del negocio (verificados en el sitio original)

- WhatsApp: **+57 310 733 3883** (el enlace wa.link/igdfy5 del sitio viejo redirige ahí). Buscar `573107333883` para cambiarlo.
- Teléfono fijo: **(032) 892 0300** (`tel:+576028920300`).
- Facebook: https://www.facebook.com/restauranteperupenon
- Horarios: martes a viernes 12:00–9:00 pm · sábados 12:00–8:30 pm · domingos 12:00–7:00 pm · festivos 12:00–8:30 pm. Aparecen en el pie (todas las páginas), en `quienes-somos.html` y en `menu.html`.
- Ubicación: barrio El Peñón, oeste de Cali. **El sitio original no tiene dirección exacta.**
- Platos destacados: Corvina en trozos apanados $35.000 · Pescado a la chorrillana $40.000 · Causa de pollo $25.000.

## Decisiones tomadas (por si hay que revertirlas)

1. Se corrigieron erratas del original ("huaNcaIna", "Nikeii", "Traicional", "cocinadaen", "pisca", "Nos re-invetamos", etc.).
2. Se quitó del pie el crédito "diseñado por brand consulting business".
3. El formulario de contacto no tiene backend: arma el mensaje y abre WhatsApp.
4. "Reservar mesa" y "Recoger pedido" apuntan al WhatsApp (el original no tenía sistema de reservas).
5. El logo original solo existía en rojo; se generaron versiones en blanco y negro sobre transparente.

## Pendientes / preguntas para el cliente

- Dirección exacta del local.
- ¿El formulario debe llegar por correo (a qué dirección) o basta con WhatsApp?
- ¿Conservar el crédito del diseñador anterior?
- ¿Hay Instagram? El original solo lista Facebook.
- Publicación: elegir hosting (la carpeta se sube tal cual, sin `_fuentes/`).

## Cómo ver en local

```bash
cd "/Volumes/Tw3/Proyecto Claude/perupenon" && python3 -m http.server 8080
```

y abrir http://localhost:8080
