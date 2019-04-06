const { emptyDir } = require('fs-nextra');
const { readFileSync, writeFileSync } = require('fs');
const { promisify } = require('util');
const { exec } = require('child_process');
const { resolve } = require('path');
const rimraf = require('rimraf');

const pExec = promisify(exec);

rimraf.sync(`${__dirname}/dist`);

const TSCONFIG_FILE = resolve(__dirname, 'tsconfig.json');
const PACKAGE_FILE = resolve(__dirname, 'package.json');
const KLASA_DIR = resolve(__dirname, 'node_modules', 'klasa');
const DJS_DIR = resolve(__dirname, 'node_modules', 'discord.js');

const CONFIG_START = '		';
const PACKAGE_START = '    ';

const ORIGINAL_TSC_CONTENT = readFileSync(TSCONFIG_FILE, { encoding: 'utf8' });
const ORIGINAL_PACKAGE_CONTENT = readFileSync(PACKAGE_FILE, { encoding: 'utf8' });

const tscContent = ORIGINAL_TSC_CONTENT
  .replace(`${CONFIG_START}"noEmitOnError": true`, `${CONFIG_START}"noEmitOnError": false`)
  .replace(`${CONFIG_START}"noImplicitAny": true`, `${CONFIG_START}"noImplicitAny": false`)
  .replace(`${CONFIG_START}"noImplicitReturns": true`, `${CONFIG_START}"noImplicitReturns": false`)
  .replace(`${CONFIG_START}"noImplicitThis": true`, `${CONFIG_START}"noImplicitThis": false`)
  .replace(`${CONFIG_START}"noUnusedLocals": true`, `${CONFIG_START}"noUnusedLocals": false`)
  .replace(`${CONFIG_START}"noUnusedParameters": true`, `${CONFIG_START}"noUnusedParameters": false`)
  .replace(`${CONFIG_START}"strictBindCallApply": true,\n`, '');

const packageContent = ORIGINAL_PACKAGE_CONTENT
  .replace(`${PACKAGE_START}"klasa": "github:dirigeants/klasa#master",\n`, '');

writeFileSync(TSCONFIG_FILE, tscContent);
writeFileSync(PACKAGE_FILE, packageContent);

rimraf.sync(KLASA_DIR);
rimraf.sync(DJS_DIR);

pExec(`npx tsc --project "${resolve(__dirname)}"`)
  .then(() => writeFileSync(TSCONFIG_FILE, original_tscContent));
