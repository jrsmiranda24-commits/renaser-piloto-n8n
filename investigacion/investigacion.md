# Un piloto de seguimiento para RENASER

## Qué recomiendo y qué pude comprobar

Recomiendo conservar el CRM y conectar el registro y el seguimiento con n8n. Empezaría con un piloto pequeño para comprobar dónde se pierden interesados y cuánto trabajo manual queda. El primer objetivo sigue siendo 30 asistentes reales. No tomaría la meta de 3.000 como un problema resuelto por automatizar un formulario.

Durante esta prueba construí un workflow en n8n Cloud y lo ejecuté con datos ficticios. Guarda registros en una Data Table, clasifica por reglas, registra un seguimiento de prueba y actualiza el estado. Probé un caso nuevo, un duplicado, un fallo simulado y su recuperación. El CRM real y los proveedores de mensajes todavía no están conectados. Lo que se ve funcionar es el piloto, no la operación comercial completa.

## Las tres opciones que comparé

CRM actual con n8n. Es mi primera elección si la integración del CRM es viable. Separa el proceso del canal: recibir, buscar el contacto, crear una tarea y guardar el resultado aunque WhatsApp falle. n8n ofrece webhooks y tablas internas [1, 2]. Alguien debe mantener credenciales, alertas y recuperación. Si el CRM ya hace todo esto con la licencia actual, usaría esas funciones antes de agregar componentes.

CRM actual con Make. También resuelve procesos con escenarios y conectores. Lo consideraría si su conector del CRM evita trabajo que n8n no resuelve fácilmente. Lo dejo como segunda opción porque ya disponemos de n8n y necesito comparar consumo por recorrido: las acciones consumen créditos y los escenarios pueden detenerse al agotarlos [4]. No probé la integración en Make; mi descarte es provisional, no una afirmación de que sea peor.

Google Sheets con Apps Script. Sirve como lista operativa temporal y es familiar para el equipo. No lo elegiría como registro oficial para crecer: tendría que programar deduplicación, permisos, concurrencia y recuperación alrededor de una hoja editable. Apps Script tiene cuotas por usuario y límites de ejecución [5]. Lo mantendría como exportación de contingencia con acceso restringido, no como un CRM nuevo construido a medida.

## Tiempo y costo que presupuestaría

Para un piloto conectado al CRM, estimo 24 a 36 horas técnicas y 12 a 16 del resto del equipo en siete días. Make podría requerir 20 a 32 horas técnicas; Sheets y Apps Script, 16 a 28. Son estimaciones propias, sujetas a revisar la API, la calidad de los contactos y la experiencia del equipo. No son tiempos medidos en RENASER.

El piloto ejecutado usó la prueba de n8n Cloud disponible; no activé pagos. La cuenta mostraba 14 días y una cuota de 1.000 ejecuciones. Como referencia, n8n publica EUR 20/mes para Starter y EUR 50/mes para Pro, facturados anualmente, con 2.500 y 10.000 ejecuciones [3]. No equivalen a una contratación mensual sin compromiso anual.

Make publica 1.000 créditos mensuales en Free [4]; el importe pagado debe confirmarse en su selector. Suponiendo seis acciones facturables, 200 registros consumirían unas 1.200 acciones antes de recordatorios. Para Sheets, el costo incremental podría ser USD 0 si las cuentas actuales bastan; mantenimiento y cuotas siguen contando. Google publica 100 destinatarios de correo al día en cuentas personales y 1.500 en Workspace, sujetos a condiciones [5]. No contrataría servicios hasta conocer volumen y canal. Publicidad, local, llamadas y horas del equipo van aparte.

---

## Cómo lo implementaría en siete días

Asignaría cuatro funciones a los trabajadores actuales: A integra y revisa datos; B consigue interesados y alianzas; C atiende comunicaciones; D coordina el evento y revisa pendientes. Son roles propuestos, no contrataciones. En el workflow de prueba, C recibe seguimiento normal y D revisa el fallo.

Día 1. A y C revisan CRM, acceso, campos y permisos de los 200 contactos. D define inscrito, confirmado y asistió. B identifica fuentes de interesados. Salida: inventario y línea base, no una migración apresurada.

Día 2. A conecta formulario y CRM o una tabla intermedia bien delimitada. C prueba datos inválidos y duplicados. El CRM mantiene los estados comerciales; la tabla del piloto no se convierte en otra verdad paralela.

Día 3. A y C prueban canal autorizado, bajas y manejo de fallos. D verifica alertas y responsables. Se distingue preparar una comunicación, enviarla, entregarla y recibir respuesta.

Día 4. B y C hacen un piloto acotado con permisos comprobados. D mide respuesta, inscripciones y trabajo manual. Si el evento aún no ocurre, no reportan asistencia como resultado.

Día 5. A corrige lo observado y ensaya recuperación y respaldo. C revisa mensajes y dudas frecuentes. IA puede ayudar a resumir o redactar, con revisión; no decide permiso, aforo o asistencia.

Día 6. D ensaya confirmación y registro presencial. C prepara excepciones; B revisa qué fuentes aportan interesados útiles. El equipo debe operar aunque un canal esté caído.

Día 7. Los cuatro presentan conversiones, fallos, costos y carga manual. Dirección decide ampliar, corregir o detener. No prometería 30 asistentes solo por terminar la integración.

## Si WhatsApp no funciona durante 48 horas

Mantendría abierta la inscripción y suspendería ese transporte. Usaría correo o llamadas solo donde exista autorización para ese canal. Los casos sin alternativa quedarían visibles con responsable y próxima acción. Al volver WhatsApp, conciliaría pendientes para no repetir comunicaciones resueltas. En el piloto no hay ningún nodo de envío: el seguimiento y su fallo son simulados y se guardan como tales.

## Tres formas en que puede fallar el plan

Datos inconsistentes. Un reenvío puede crear duplicados o perder contexto. A concilia entradas y CRM y prueba claves por contacto y evento. La demo deduplicó ejecuciones sucesivas; falta comprobar concurrencia y restricciones del CRM. Una búsqueda previa no garantiza unicidad bajo carga.

Canal caído o permisos insuficientes. C puede quedar sin forma válida de contactar. D revisa pendientes y prioriza urgencias; A conserva el registro y habilita solo la alternativa autorizada. Permiso de WhatsApp no significa permiso para cualquier canal.

Falta de demanda o exceso de excepciones. Los 200 contactos pueden no tener interés y cuatro trabajadores pueden saturarse. B mide fuentes y D compara pendientes con minutos disponibles. Si no alcanza la capacidad, reduciría el piloto antes de aumentar captación.

---

## Qué mediría antes de crecer

Separaría contactos, interesados, inscritos, confirmados y asistentes. Mediría conversión por fuente, primera respuesta, comunicaciones fallidas, duplicados, minutos por excepción y costo por asistente real. La asistencia se registra en el evento, no se deduce de un mensaje preparado.

Llegar a 30 asistentes desde 200 contactos exige una conversión final del 15 %. Es una relación matemática, no una tasa comprobada. Si 25 % se inscribe y 60 % asiste, harían falta 20.000 contactos para 3.000 asistentes. Son supuestos. Antes de comprar más captación exigiría datos conciliados, pendientes manejables, costos conocidos y aforo confirmado.

## Evidencia del piloto ejecutado

Workflow: RENASER Captación y seguimiento Piloto controlado. Motor: n8n Cloud. Almacenamiento: Data Table RENASER_PILOTO_CONTACTOS. Se creó vacía; los registros aparecieron al ejecutar el flujo. El panel local no es el motor de esta demostración.

Ejecución 1. Andrea Ejemplo, fila 1, duplicado false. Clasificación prioritario, responsable C, seguimiento completado_simulado, intentos 1, estado seguimiento_prueba_registrado.

Ejecución 2. El mismo registro, fila 1, duplicado true. Acción Omitir seguimiento ya registrado; intentos permanece en 1. No se creó otra inscripción.

Ejecución 3. Bruno Ejemplo, fila 2, fallo controlado. Quedó pendiente_revision, responsable D, seguimiento fallo_simulado e intentos 1.

Ejecución 4. Recuperación de Bruno, misma fila 2. Estado seguimiento_prueba_registrado, seguimiento completado_simulado e intentos 2. En todos los casos envio_real y whatsapp_api_llamada fueron false. Las salidas JSON se guardaron aparte de la configuración del workflow.

Falta validar formulario real, CRM, canales, bajas, accesos y concurrencia. Data Tables sirve para almacenamiento ligero o moderado y tiene límites [2]; no equivale a un CRM ni demuestra operación para 3.000 asistentes. Node.js y sus 17 pruebas locales se conservan como respaldo; no certifican el workflow de n8n.

## Fuentes consultadas

Consulta: 14 de octubre de 2026. Capacidades y tarifas proceden de fuentes oficiales; recomendación, horas y plan son mi evaluación. No entrevisté al equipo ni medí campañas comerciales.

[1] n8n Webhook, recepción y autenticación. https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/

[2] n8n Data Tables, persistencia, acceso y límites. https://docs.n8n.io/build/work-with-data/data-tables/

[3] n8n Pricing, planes y facturación. https://n8n.io/pricing/

[4] Make Pricing, créditos, nivel gratuito y agotamiento. https://www.make.com/pricing

[5] Google Apps Script Quotas, límites por cuenta y ejecución. https://developers.google.com/apps-script/guides/services/quotas
