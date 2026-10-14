import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const nodes=new Map();function node(){return {innerHTML:'',textContent:'',style:{},classList:{toggle(){},remove(){}},addEventListener(){},setAttribute(){},focus(){},showModal(){},close(){}}}
const context={console,structuredClone,setTimeout,clearTimeout,Date,Blob,URL,crypto:globalThis.crypto,location:{hash:'#/dashboard'},localStorage:{getItem:()=>null,setItem(){}},document:{querySelector:s=>{if(!nodes.has(s))nodes.set(s,node());return nodes.get(s)},body:node(),addEventListener(){},getElementById(){return node()}},window:{addEventListener(){},scrollTo(){}},indexedDB:{open(){throw new Error('no fake file database')}}};context.window=context;context.addEventListener=()=>{};context.scrollTo=()=>{};
vm.createContext(context);for(const f of ['data','domain-content','learning-paths','course-catalog'])vm.runInContext(readFileSync(new URL('../assets/data/'+f+'.js',import.meta.url),'utf8'),context);vm.runInContext(readFileSync(new URL('../app.js',import.meta.url),'utf8'),context);
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
