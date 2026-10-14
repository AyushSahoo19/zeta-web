import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root=process.cwd();
for (const required of ['index.html','styles.css','app.js']) assert(fs.existsSync(required),`Missing ${required}`);
function walk(dir){ return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')||['node_modules','site','screenshots'].includes(e.name)?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]); }
for(const file of walk(root).filter(f=>f.endsWith('.js'))) new vm.Script(fs.readFileSync(file,'utf8'),{filename:file});
const context=vm.createContext({URL});context.window=context;
for(const file of ['data.js','domain-content.js','learning-paths.js','course-catalog.js']) vm.runInContext(fs.readFileSync(path.join('assets/data',file),'utf8'),context);
assert.equal(context.ZETA_CATALOG.domains.length,102);
assert.equal(context.ZETA_COURSE_CATALOG.courses.length,29);
assert.equal(context.ZETA_COURSE_CATALOG.courses.reduce((n,c)=>n+c.modules.length,0),145);
for(const domain of context.ZETA_CATALOG.domains){assert(context.ZETA_DOMAIN_CONTENT[domain.id]);assert.equal(context.ZETA_LEARNING_PATHS[domain.id].stages.length,4);}
const html=fs.readFileSync('index.html','utf8');
for(const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)){const value=match[1];if(/^(?:https?:|data:|#)/.test(value))continue;assert(fs.existsSync(value.split('?')[0]),`Missing local asset ${value}`);}
console.log('Website syntax, assets, 102 domains, 29 courses and 145 modules verified.');
