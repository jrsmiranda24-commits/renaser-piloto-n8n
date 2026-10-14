import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const files=['01-valido','02-duplicado','03-fallo','04-recuperacion'];
const e=files.map(x=>JSON.parse(readFileSync(new URL(`./evidencias/evidencia-${x}.json`,import.meta.url),'utf8')));
assert.deepEqual(e.map(x=>String(x.ejecucion)),['1','2','3','4']);
assert.equal(e[0].almacenamiento.fila_id,e[1].almacenamiento.fila_id);
assert.equal(e[1].almacenamiento.duplicado,true);
assert.equal(e[2].almacenamiento.fila_id,e[3].almacenamiento.fila_id);
for(const x of e){assert.equal(x.seguimiento.envio_real,false);}
console.log('PASS: cuatro ejecuciones documentadas, duplicado y recuperación conservan su fila; sin envíos reales.');
