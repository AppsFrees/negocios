# Explorador de Negocios — auditoría y actualización visual

## 1. Qué es
Aplicación web tipo directorio comercial geolocalizado: combina mapa interactivo, catálogo/listado de establecimientos y un panel local para que un propietario administre fichas comerciales.

## 2. Funciones que sí aparecen implementadas en el código entregado
- Mapa Leaflet con capas de OpenStreetMap y vista satelital de ArcGIS.
- Ubicación GPS del dispositivo (requiere permiso y contexto seguro HTTPS o localhost).
- Búsqueda por texto, país y categoría; vista de mapa/listado.
- Categorías personalizadas y filtro de favoritos.
- Fichas con fotografías, descripción, horarios, promociones y eventos cuando esos datos existen.
- Enlaces para abrir WhatsApp y rutas/búsquedas en Google Maps, sujetos a que la ficha tenga los datos necesarios.
- Calificaciones/reseñas almacenadas localmente.
- Panel de propietario con estadísticas locales, exportación CSV y respaldo/restauración JSON.
- Persistencia en IndexedDB mediante Dexie; el tema visual se guarda en localStorage.
- Planes Básico, Gold y Platinum con límites/funciones diferenciadas en la interfaz.

## 3. Límites importantes antes de venderla como plataforma real
El ZIP contiene una compilación de producción (HTML, CSS y JavaScript minificado), no el proyecto fuente editable. En el código inspeccionado no aparecen integraciones de Firebase, Supabase ni otro backend propio, ni un proveedor de pagos.

Por tanto, hoy debe tratarse como prototipo/local-first:
- Los datos se guardan en el navegador/dispositivo. No existe sincronización multiusuario centralizada demostrada.
- El panel de propietario no equivale a autenticación segura: no se encontró un flujo de inicio de sesión ni autorización respaldada por servidor.
- Los planes Gold/Platinum están representados en la interfaz y sus restricciones, pero no se encontró cobro recurrente ni verificación de suscripción.
- Las métricas se generan desde los datos disponibles localmente; no son analítica centralizada de visitantes reales.
- Las reseñas locales no tienen moderación ni protección central contra manipulación.
- Hay datos de demostración precargados, incluyendo establecimientos de distintas ciudades; deben identificarse como ejemplos o retirarse antes del lanzamiento.
- Las imágenes externas y las teselas del mapa dependen de internet, aunque parte de la base de datos se conserve offline.

## 4. Cambios aplicados en esta versión
- Rediseño visual más limpio: paneles, buscador, controles y chips compactos.
- Marcadores del mapa cambiados de burbujas circulares a mini tarjetas cuadradas con bordes redondeados; se redujeron fotografía, etiqueta y distintivos.
- Menos movimiento y efectos visuales para no distraer al explorar el mapa.
- Mejoras de adaptación a pantallas pequeñas y estados de foco accesibles.
- Se restauró el zoom del navegador en móviles (se eliminó la restricción `user-scalable=no`).
- Se añadió un botón compacto para limpiar la búsqueda.
- Atajo de teclado `/` para enfocar el buscador y `Escape` para salir de él.
- Etiqueta accesible y configuración de búsqueda más adecuada para móviles.

## 5. Siguiente etapa recomendada para producción
1. Recuperar el proyecto fuente original (componentes, estilos, dependencias y configuración de build).
2. Crear backend con autenticación, roles y permisos por propietario/administrador.
3. Centralizar negocios, fotos, reseñas, promociones y eventos en una base de datos en la nube.
4. Integrar pagos reales y activar planes solo tras validar el pago en servidor.
5. Añadir verificación de negocios, moderación/reportes y controles anti-spam.
6. Registrar analítica de forma centralizada y con aviso de privacidad.
7. Añadir panel administrativo, gestión de reclamos de fichas y recuperación de cuenta.
8. Revisar privacidad, consentimiento de geolocalización, términos y política de datos aplicables en Perú.

## 6. Archivos añadidos
- `assets/ux-upgrade.css`: capa de estilos de la actualización.
- `assets/ux-upgrade.js`: pequeñas mejoras de usabilidad sin dependencias externas.
