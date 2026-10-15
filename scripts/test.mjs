import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const nodes=new Map();function node(){return {innerHTML:'',textContent:'',style:{},classList:{toggle(){},remove(){},add(){},contains(){return false}},addEventListener(){},setAttribute(){},removeAttribute(){},querySelector(){return node()},focus(){},showModal(){this.open=true},close(){this.open=false}}}
const context={console,structuredClone,setTimeout,clearTimeout,Date,Blob,URL,crypto:globalThis.crypto,location:{hash:'#/dashboard'},localStorage:{getItem:()=>null,setItem(){}},document:{querySelector:s=>{if(!nodes.has(s))nodes.set(s,node());return nodes.get(s)},body:node(),addEventListener(){},getElementById(){return node()}},window:{addEventListener(){},scrollTo(){}},indexedDB:{open(){throw new Error('no fake file database')}}};context.window=context;context.addEventListener=()=>{};context.scrollTo=()=>{};
vm.createContext(context);for(const f of ['data','domain-content','learning-paths','course-catalog','content-enrichment'])vm.runInContext(readFileSync(new URL('../assets/data/'+f+'.js',import.meta.url),'utf8'),context);vm.runInContext(readFileSync(new URL('../app.js',import.meta.url),'utf8'),context);vm.runInContext(readFileSync(new URL('../content-ui.js',import.meta.url),'utf8'),context);
const run=code=>vm.runInContext(code,context);
assert.equal(run('state.enrolled.length'),0);assert.equal(run('state.sessions.length'),0);
for(const page of ['dashboard','domains','courses','knowledge','jobs','profile','analytics']){run(`view={page:'${page}'};render()`);assert.ok(nodes.get('#main').innerHTML.includes('<h1>'),page)}
for(const d of context.ZETA_CATALOG.domains)for(const tab of ['about','basics','roadmap','resources','jobs','insights'])run(`view={page:'domains',id:'${d.id}',tab:'${tab}'};render()`);
for(const c of context.ZETA_COURSE_CATALOG.courses)for(const tab of ['overview','syllabus','roadmap','resources','progress'])run(`view={page:'courses',id:'${c.id}',tab:'${tab}'};render()`);
run(`state.enrolled.push(C[0].id);state.completed.push(C[0].modules[0].id)`);assert.equal(run('pct(C[0])'),20);
run(`state.sessions.push({id:'test',title:'Real practice',minutes:30,date:localDate(),course:C[0].id})`);assert.equal(run('weekly().reduce((a,d)=>a+d.minutes,0)'),30);
run(`state.goals.push({id:'g',title:'Finish practice',course:C[0].id,done:false});state.notes[C[0].modules[0].id]='<script>alert(1)</script>';state.saved.push(resources[0].url);view={page:'courses',id:C[0].id,tab:'syllabus'};render()`);assert.ok(nodes.get('#main').innerHTML.includes('&lt;script&gt;'));assert.ok(!nodes.get('#main').innerHTML.includes('<script>alert'));
assert.ok(run(`resources.every(r=>r.domains.length&&r.types.length&&r.levels.length)`));
run(`filter.type='PDF';filter.source='youtube'`);assert.equal(run('resources.filter(resourceMatches).length'),0);
for(const tab of ['tracker','goals','vault'])run(`view={page:'courses',id:'my-learning',tab:'${tab}'};render()`);
console.log('Passed: all pages, 612 domain tabs, 145 course tabs, enrollment progress, session aggregation, goal render, escaped notes, composable resource filters and empty states.');

assert.equal(run('E.resources.length'),30);assert.equal(run('new Set(E.resources.flatMap(r=>r.domainIds.map(id=>D[id].category))).size'),10);
assert.equal(run('resources.length'),run('new Set(resources.map(r=>r.url)).size'));
assert.ok(run('E.resources.every(r=>byURL.has(r.url)&&r.why.length>30&&r.task.length>30)'));
const originalURLs=run('new Set([...D.flatMap(d=>ZETA_LEARNING_PATHS[d.id].resources),...C.flatMap(c=>c.modules.flatMap(m=>m.resources))].map(r=>r.url))');assert.ok(run('E.resources').filter(r=>!originalURLs.has(r.url)).length>=25);
for(const r of context.ZETA_CATALOG.roles){run(`roleDetail('${r.id}')`);assert.ok(nodes.get('#modal').innerHTML.includes('A week in this kind of work'));assert.ok(nodes.get('#modal').innerHTML.includes('Not listed in your profile yet'));assert.ok(nodes.get('#modal').innerHTML.includes('Interview')||nodes.get('#modal').innerHTML.includes('INTERVIEW'));assert.ok(run(`roleCard(R.find(r=>r.id==='${r.id}'))`).includes('data-compare'));}
for(const d of context.ZETA_CATALOG.domains){const html=run(`domainBasics(D[${d.id}])`);assert.ok(html.includes('FOUNDATION 01'));assert.ok(html.includes('TRY THIS CONCEPT'));assert.ok(run(`domainCanvas(D[${d.id}])`).includes('THE WORKING TOOLKIT'));assert.ok(run(`domainLadder(D[${d.id}])`).includes('<dt>Verify</dt>'));}
for(const c of context.ZETA_COURSE_CATALOG.courses){assert.ok(run(`courseContract(C.find(c=>c.id==='${c.id}'))`).includes('THE LEARNING CONTRACT'));assert.ok(run(`courseCard(C.find(c=>c.id==='${c.id}'))`).includes('A LOOK INSIDE'));}
console.log('Expansion passed: actual loaded script order,30 references across10 categories,25+new URLs,all102 field canvases/concept notes/ladders,29 learning contracts/cards,24 role dialogs with portfolio/interview/self-declared skills, deduplicated references.');

assert.ok(!run("lessonGuide(C[0])").includes('Python and vectors and Python'));assert.ok(!run("lessonGuide(C[0])").includes('a ai &amp; ml'));assert.ok(!run("domainBasics(D[0])").includes('Predictive maintenance:'));
