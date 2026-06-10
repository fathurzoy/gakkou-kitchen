import fs from 'fs';

const filePath = './data/recipes.js';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /export const categories = \[([\s\S]*?)\];/,
  `export const categories = [
  { id: "semua", label_id: "Semua", label_en: "All", label_jp: "すべて", emoji: "🌏" },
  { id: "indonesia", label_id: "Indonesia", label_en: "Indonesia", label_jp: "インドネシア", emoji: "🇮🇩" },
  { id: "jepang", label_id: "Jepang", label_en: "Japan", label_jp: "日本", emoji: "🇯🇵" },
  { id: "myanmar", label_id: "Myanmar", label_en: "Myanmar", label_jp: "ミャンマー", emoji: "🇲🇲" },
  { id: "nepal", label_id: "Nepal", label_en: "Nepal", label_jp: "ネパール", emoji: "🇳🇵" },
  { id: "vietnam", label_id: "Vietnam", label_en: "Vietnam", label_jp: "ベトナム", emoji: "🇻🇳" }
];`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Categories updated with label_en');
