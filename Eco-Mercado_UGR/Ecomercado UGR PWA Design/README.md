# Ecomercado UGR PWA

PWA para el Ecomercado UGR: descubrimiento de productores, listado de productos ecologicos y flujo de reserva con codigo QR. Desarrollada como prototipo funcional para el Trabajo Final de DIU 2025/26.

Deploy: [ecomercado-ugr-diu3.surge.sh](https://ecomercado-ugr-diu3.surge.sh)

## Stack

- React 18 + Vite 6
- Tailwind CSS v4 + shadcn/ui
- React Router v7 (HashRouter para hosting estatico)
- Surge.sh

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:5173
npm run build  # genera dist/
```

## Estructura

```
src/
  app/
    App.tsx          # Rutas y todas las paginas
    components/
      ui/            # Componentes shadcn/ui
      utils/         # Utilidades compartidas
  styles/            # CSS global y tokens
```

## Paginas

| Ruta | Descripcion |
|---|---|
| `#/` | Home - proximo mercado y destacados |
| `#/verduras` | Listado de categoria (verduras) |
| `#/fruta` | Listado de categoria (fruta) |
| `#/lacteos` | Listado de categoria (lacteos) |
| `#/conservas` | Listado de categoria (conservas) |
| `#/producto/tomates-rama` | Detalle de producto con selector de cantidad |
| `#/confirmacion` | Confirmacion de reserva con codigo QR |
| `#/productor/huerta-la-vega` | Perfil del productor |
| `#/wireframe` | Wireframe anotado de la propuesta |
