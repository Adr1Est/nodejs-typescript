const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ');
const wordsCount = words.length;
// const reactWordCount = words.filter((w) => w.toLowerCase().includes('react')).length;
const reactWordCount = content.match(/react/gi).length;

console.log(`Palabras: ${wordsCount}`);
console.log(`Palabra React: ${reactWordCount}`);