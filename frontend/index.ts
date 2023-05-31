import fs from './fs.server';

fs.readFile('./sample.txt').then((fileContent) => {
  document.getElementById('file-content').innerText = fileContent;
});
