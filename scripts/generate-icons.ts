#!npx ts-node
import fs from 'fs/promises';
import { camelCase, startCase } from 'lodash';
import path from 'path';
import { info__ } from './utils/message';
import writeContentToFile from './utils/write-content-to-file';

const SRC_DIR = path.resolve(__dirname, '../src');
const ICONS_DIR = path.resolve(SRC_DIR, 'components/icons');
const ASSETS_DIR = path.resolve(ICONS_DIR, 'assets');
const GENERATED_DIR = path.resolve(ICONS_DIR, 'generated');

async function main() {
  // collect all svg file names
  const sourceFileNames: string[] = [];
  const dir = await fs.opendir(ASSETS_DIR);

  for await (const dirent of dir) {
    if (dirent.name.endsWith('.svg')) sourceFileNames.push(dirent.name);
  }

  // clean generated dir
  try {
    await fs.unlink(GENERATED_DIR);
  } catch (e) {
    //
  }

  const indexFilePath = path.resolve(ICONS_DIR, 'index.ts');

  let indexFileContent = '';

  // generate component for each svg
  for (const sourceFileName of sourceFileNames) {
    const sourceFilePath = path.resolve(ASSETS_DIR, sourceFileName);
    const componentFileName = sourceFileName
      .replace(/^ic-/, '')
      .replace('.svg', '');
    const componentName = startCase(camelCase(componentFileName)).replace(
      /\s/g,
      ''
    );
    const componentFilePath = path.resolve(
      GENERATED_DIR,
      `${componentFileName}.ts`
    );

    try {
      const data = (await extractSvgData(sourceFilePath))!;
      const iconPath = data.paths.join(' ');

      const content = data.complex
        ? `import Icon from '../assets/${sourceFileName}';
import createIcon from '../utils/create-icon';

export default createIcon(Icon, '${componentName}', '${data.viewBox}');`
        : `import createIcon from '../utils/create-icon';

export default createIcon('${iconPath}', '${componentName}', '${data.viewBox}');
`;

      indexFileContent += `export { default as ${componentName} } from './generated/${componentFileName}';\n`;

      await writeContentToFile(componentFilePath, content);

      info__('created %s', componentFileName);
    } catch (e) {
      info__((e as Error).message);
    }
  }

  await writeContentToFile(indexFilePath, indexFileContent);

  info__('completed');
}

async function extractSvgData(filePath: string) {
  try {
    const content = (await fs.readFile(filePath)).toString();

    // extract viewBox
    let viewBox = content.match(/viewBox="([\d\s-.]+)"/)?.[1];

    if (!viewBox) {
      const width = content.match(/width="([\d.]+)"/)?.[1];
      const height = content.match(/height="([\d.]+)"/)?.[1];

      if (!width || !height) {
        throw new Error(`could not extract viewBox in ${filePath}`);
        return;
      }

      viewBox = `0 0 ${width} ${height}`;
    }

    const paths = [];
    const complex = content.match(/<circle/g) !== null;
    const pathDecls = content.match(/<path.+?\/?>/g);

    if (!pathDecls) {
      throw new Error(`could not extract paths in ${filePath}`);
    }

    for (const pathDecl of pathDecls) {
      const d = pathDecl.match(/d="([^"]+)"/g)?.[0].slice(3, -1);
      paths.push(d);
    }

    return { viewBox, paths, complex };
  } catch (e) {
    throw new Error(`Could not open file ${filePath}`);
  }
}

void main();
