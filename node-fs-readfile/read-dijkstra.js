import fs from 'node:fs/promises';

async function readDijkstra() {
  const filePath = './dijkstra.txt';
  const contents = await fs.readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
}

readDijkstra();
