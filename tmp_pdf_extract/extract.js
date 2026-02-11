const fs = require('fs');
const { PDFParse } = require('pdf-parse');

(async () => {
  const data = fs.readFileSync('../Elevate Capital Profile 2026.pdf');
  const p = new PDFParse({ data });
  await p.load();
  const t = await p.getText();

  fs.writeFileSync('../profile_extracted.txt', t.text, 'utf8');

  const perPage = t.pages
    .map((pg, i) => `\n--- PAGE ${i + 1} ---\n${pg.text || ''}`)
    .join('');
  fs.writeFileSync('../profile_by_page.txt', perPage, 'utf8');

  console.log('Pages:', t.total);
  console.log('Chars:', t.text.length);

  await p.destroy();
})();
