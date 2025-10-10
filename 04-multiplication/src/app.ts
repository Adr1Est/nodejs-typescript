import fs from 'fs';

const generarTablaMultiplicar = (num: number) => {
  let content = `
======================================\n
TABLA DEL ${num}\n
======================================\n
\n`;

  for (let i = 1; i < 10 ; i++){
    const result = num * i;
    content += `${num} + ${i} = ${result}\n`
  }

  const outputPath = 'outputs'

  fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(`${outputPath}/tabla-${num}.txt`, content);
  console.log('Archivo creado!');
  

  return content;
}

console.log(generarTablaMultiplicar(5));