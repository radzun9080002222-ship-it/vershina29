import {readFileSync} from 'node:fs';
const source=readFileSync('public/metrika.js','utf8');
const id=Number(source.match(/var id = (\d+)/)?.[1]);
if(!id)throw new Error('Launch blocked: dedicated Arkhangelsk Metrika counter is not configured yet.');
