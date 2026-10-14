# RENASER: piloto de captación y seguimiento

Prototipo para ordenar el registro de interesados con n8n y Data Tables. Reutilizar el CRM y conectar los canales reales forma parte del plan de siete días; todavía no está implementado.

## Qué comprobé

Ejecuté cuatro casos en n8n Cloud: registro válido, repetición del mismo registro, fallo controlado y recuperación. Las salidas están en `evidencias/`. La tabla persistida terminó con dos filas. El duplicado se comprobó de forma secuencial; no probé concurrencia. Todos los contactos son ficticios, con direcciones example.test.

El seguimiento es simulado. No se enviaron correos ni mensajes de WhatsApp. Tampoco se conectó un CRM real ni se validó la captación de 3.000 asistentes.

## Reproducir

1. En n8n, crear la Data Table `RENASER_PILOTO_CONTACTOS` importando `workflow/esquema-contactos.csv`; sus nueve columnas son texto.
2. Importar `workflow/renaser.json`. Revisar que los nodos de almacenamiento encuentren la tabla por nombre.
3. En `Escenario de prueba`, completar nombre, email ficticio, evento, interes y consentimiento_email=true. Mantener simular_fallo=false. Ejecutar manualmente.
4. Repetir la entrada: debe conservar la fila y omitir un seguimiento ya completado.
5. Para el fallo, usar otro correo ficticio y simular_fallo=true. Debe quedar pendiente_revision, responsable D. Repetir esa entrada con simular_fallo=false: debe recuperarse en la misma fila con dos intentos.

Esta copia portable elimina las entradas de demostración y los metadatos de la instancia. Las cuatro ejecuciones documentadas corresponden al piloto original; la copia portable con campos vacíos no fue ejecutada.

## Recorrido

Disparador manual → entrada → validación → búsqueda por evento y email → preparación → almacenamiento → clasificación por reglas → seguimiento simulado → actualización → evidencia final.

La clasificación usa reglas explícitas, no IA. Sin permiso no se realiza el seguimiento. La revisión humana atiende fallos. Para producción faltan integraciones, control de concurrencia, historial de permisos y bajas, monitoreo y pruebas de capacidad.

## Investigación

`investigacion/` contiene el PDF definitivo de tres páginas y su fuente. Compara CRM+n8n, CRM+Make y Sheets+Apps Script; incluye fuentes, limitaciones, recursos y un plan de siete días.

## Verificación local de evidencias

Con Node.js: `node verificar-evidencias.mjs`.
Esto verifica la coherencia de los archivos exportados; no vuelve a ejecutar n8n ni sustituye una prueba de integración.

El video se prepara por separado. Este repositorio no contiene una grabación ni un enlace inventado.
