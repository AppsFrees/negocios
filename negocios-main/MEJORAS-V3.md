# Explorador de Negocios — mejoras v3

## Cambios incluidos
- Se recuperó el estilo original de las viñetas del mapa (circular con su pequeña punta), reduciendo su tamaño y el texto para que ocupen menos espacio.
- Se agregó un centro de herramientas compacto con módulos de promociones, perfil, reclamación de negocio, administración, métricas locales y notificaciones.
- Se incorporó exportación CSV de actividad.
- Se conservó la aplicación compilada original y sus archivos de mapas/funcionalidad.

## Alcance y limitaciones técnicas
Esta entrega añade módulos funcionales de demostración persistidos en el almacenamiento local del navegador. No equivale todavía a un servicio multiusuario en producción:
- Los perfiles no autentican identidad y no usan contraseñas ni tokens.
- Las promociones y solicitudes de reclamación solo se guardan en el dispositivo actual.
- La aprobación de una solicitud es una simulación local; la verificación real requiere revisión de documentos y un rol administrativo seguro.
- Las métricas son eventos locales del navegador; no son visitas/contactos globales.
- La notificación solicita permiso del navegador y ubicación, pero el cálculo de proximidad y las notificaciones en segundo plano requieren coordenadas de negocios, backend y push service.

## Requisitos recomendados para producción
1. Backend API y base de datos central (PostgreSQL/Supabase o Firebase).
2. Autenticación segura con roles: visitante, propietario, moderador y administrador.
3. Almacenamiento de imágenes y moderación de promociones.
4. Geocodificación/coordenadas para cada ficha y consulta por radio.
5. Registro de eventos de analítica con consentimiento y política de privacidad.
6. Verificación de titularidad con flujo de revisión y auditoría.
7. Notificaciones push web mediante service worker y proveedor compatible.
8. Pasarela de pagos para publicidad patrocinada y planes, antes de cobrar a usuarios.

## Cómo probar
Descomprimir y abrir `index.html` desde un servidor estático local (recomendado; algunas APIs del navegador no funcionan al abrir con `file://`). El botón **Herramientas** aparece sobre la navegación inferior.
