import fs from 'fs/promises';
import path from 'path';

async function readFile(filePath: string) {
  return await fs.readFile(path.resolve(__dirname, filePath), { encoding: 'utf-8' });
}

export default {
  readFile
};
