const { emptyDir } = require('fs-nextra');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const rimraf = require('rimraf');

emptyDir(`${__dirname}/dist`);

const TSCONFIG_FILE = resolve(__dirname, 'tsconfig.json');
const KLASA_DIR = resolve(__dirname, 'node_modules', 'klasa');
const DJS_DIR = resolve(__dirname, 'node_modules', 'discord.js');

const CONFIG_START = '		';

let tscContent = readFileSync(TSCONFIG_FILE, { encoding: 'utf8' });

tscContent = tscContent
  .replace(`${CONFIG_START}"noEmitOnError": true`, `${CONFIG_START}"noEmitOnError": false`)
  .replace(`${CONFIG_START}"noImplicitAny": true`, `${CONFIG_START}"noImplicitAny": false`)
  .replace(`${CONFIG_START}"noImplicitReturns": true`, `${CONFIG_START}"noImplicitReturns": false`)
  .replace(`${CONFIG_START}"noImplicitThis": true`, `${CONFIG_START}"noImplicitThis": false`)
  .replace(`${CONFIG_START}"noUnusedLocals": true`, `${CONFIG_START}"noUnusedLocals": false`)
  .replace(`${CONFIG_START}"noUnusedParameters": true`, `${CONFIG_START}"noUnusedParameters": false`)
  .replace(`${CONFIG_START}"strictBindCallApply": true,\n`, '');

writeFileSync(TSCONFIG_FILE, tscContent);

rimraf.sync(KLASA_DIR);
rimraf.sync(DJS_DIR);
