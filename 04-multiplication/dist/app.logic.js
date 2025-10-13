"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const generarTablaMultiplicar = (num) => {
    let content = `
======================================\n
TABLA DEL ${num}\n
======================================\n
\n`;
    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        content += `${num} + ${i} = ${result}\n`;
    }
    const outputPath = 'outputs';
    fs_1.default.mkdirSync(outputPath, { recursive: true });
    fs_1.default.writeFileSync(`${outputPath}/tabla-${num}.txt`, content);
    console.log('Archivo creado!');
    return content;
};
//console.log(generarTablaMultiplicar(5));
