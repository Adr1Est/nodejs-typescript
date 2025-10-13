import fs from 'fs';
import { yarg } from './plugins/yargs.plugin';

// Definir una arquitectura limpia mediante los casos de uso
// crear la tabla
// grabar usando file system

const generarTablaMultiplicar = (base: number, limit: number, show: boolean) => {
  let content = `
======================================\n
TABLA DEL ${base}\n
======================================\n
\n`;

  for (let i = 1; i <= limit ; i++){
    const result = base * i;
    content += `${base} + ${i} = ${result}\n`
  }

  const outputPath = 'outputs'

  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, content);
  console.log('Archivo creado!');
  
  if(show) { console.log(content); }

  return content;
}

// b:base es renombrar las variables
const { b:base, l:limit, s:show } = yarg;

generarTablaMultiplicar(base, limit, show);