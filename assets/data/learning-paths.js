/* Followable editorial learning paths; platform searches are clearly labelled discovery. */
(() => {
const paths={};
const books=[
 {ids:[0,2,3,14,15,16,17,22,23,95,96,101],title:'Dive into Deep Learning — textbook PDF',url:'https://d2l.ai/d2l-en.pdf',level:'intermediate'},
 {ids:[24],title:'Think Python, second edition — programming textbook PDF',url:'https://greenteapress.com/thinkpython2/thinkpython2.pdf',level:'beginner'},
 {ids:[9,25,26,27,28,29,30,31,43,44,49],title:'Eloquent JavaScript — language and web foundations PDF',url:'https://eloquentjavascript.net/Eloquent_JavaScript.pdf',level:'beginner'},
 {ids:[1,70],title:'OSTEP — processes chapter PDF',url:'https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf',level:'beginner'},
 {ids:[4],title:'Modern Robotics — mechanics, planning and control textbook PDF',url:'https://hades.mech.northwestern.edu/images/7/7f/MR.pdf',level:'intermediate'},
 {ids:[5,7,62],title:'Convex Optimization — mathematical textbook PDF',url:'https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf',level:'advanced'},
 {ids:[11,75,76],title:'NIST Cybersecurity Framework 2.0 — risk-management guidance PDF',url:'https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf',level:'intermediate'},
 {ids:[10,63,72],title:'AWS Well-Architected Framework — architecture review PDF',url:'https://docs.aws.amazon.com/pdfs/wellarchitected/latest/framework/wellarchitected-framework.pdf',level:'intermediate'},
 {ids:[88,90],title:'The Scrum Guide — official 2020 framework PDF',url:'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf',level:'beginner'},
 {ids:[91],title:'Caltech quantum information notes — foundations chapter PDF',url:'https://www.preskill.caltech.edu/ph219/chap2_15.pdf',level:'intermediate'}
];
const directCourses=[
 {ids:[1],title:'CS50x — Harvard introduction to computer science',url:'https://cs50.harvard.edu/x/',level:'beginner'},
 {ids:[24],title:'CS50P — Harvard introduction to programming with Python',url:'https://cs50.harvard.edu/python/',level:'beginner'},
 {ids:[14,15,19],title:'Hugging Face LLM course — introductory chapter',url:'https://huggingface.co/learn/llm-course/chapter1/1',level:'beginner'},
 {ids:[17],title:'Hugging Face deep reinforcement learning course — introduction',url:'https://huggingface.co/learn/deep-rl-course/unit0/introduction',level:'beginner'}
];
const normalize=(r,level)=>({...r,type:r.type||'doc',source:'other',level:level||r.level,discovery:false});
const discovery=(domain,source)=>{
 const query=encodeURIComponent(`${domain.name} ${source==='youtube'?'tutorial fundamentals':'course'}`);
 const url=source==='youtube'?`https://www.youtube.com/results?search_query=${query}`:source==='coursera'?`https://www.coursera.org/search?query=${query}`:`https://www.udemy.com/courses/search/?q=${query}`;
 return {title:`Find ${domain.name} ${source==='youtube'?'videos on YouTube':`courses on ${source==='coursera'?'Coursera':'Udemy'}`}`,url,type:source==='youtube'?'video':'course',source,level:'beginner',discovery:true};
};
window.ZETA_CATALOG.domains.forEach(d=>{
 const orientation=window.ZETA_DOMAIN_CONTENT[d.id];
 const stages=[
 {id:'beginner',level:'beginner',title:`Foundations: ${d.roadmap[0]}`,goal:`Build a working understanding of ${d.roadmap[0].toLowerCase()} before tackling ${d.roadmap[1].toLowerCase()}.`,topics:[d.roadmap[0],d.skills[0],orientation.subjects[0]],exercise:`Read the foundation resource, then create a small annotated example of ${d.roadmap[0].toLowerCase()} in a ${d.name.toLowerCase()} notebook or lab. Explain this principle in your own words: ${orientation.basics[0]}`,checkpoint:`Explain ${d.roadmap[0].toLowerCase()} without copying the guide and show one example that works plus one limitation or invalid case.`,resources:[normalize(d.resources.find(r=>r.level==='beginner'))]},
 {id:'intermediate',level:'intermediate',title:`Apply: ${d.roadmap[1]}`,goal:`Connect ${d.roadmap[1].toLowerCase()} with ${d.roadmap[2].toLowerCase()} through an inspectable practical example.`,topics:[d.roadmap[1],d.roadmap[2],d.skills[1]],exercise:`${d.task} Keep the inputs, implementation or design choices, and observed output together. Use ${d.skills[1]} and explain how this concept affects your result: ${orientation.basics[1]}`,checkpoint:`Demonstrate ${d.roadmap[1].toLowerCase()} and describe how ${d.roadmap[2].toLowerCase()} changes the outcome; include a repeatable check rather than only a screenshot.`,resources:[normalize(d.resources.find(r=>r.level==='intermediate'))]},
 {id:'advanced',level:'advanced',title:`Deepen: ${d.roadmap[3]}`,goal:`Evaluate the tradeoffs and failure conditions involved in ${d.roadmap[3].toLowerCase()}, using ${d.skills[2]} where relevant.`,topics:[d.roadmap[3],d.skills[2],'Validation and limitations'],exercise:`Extend your ${d.name.toLowerCase()} example to investigate ${d.roadmap[3].toLowerCase()}. Compare two approaches or configurations and document the evidence supporting your choice. Learning focus: ${orientation.insights[0]}`,checkpoint:`Present an evidence-backed decision about ${d.roadmap[3].toLowerCase()}, including at least one failure case, constraint or unresolved assumption.`,resources:[normalize(d.resources.find(r=>r.level==='advanced'))]},
 {id:'capstone',level:'advanced',title:`Capstone: ${d.project}`,goal:`Combine the ${d.name.toLowerCase()} curriculum into your ${d.project.toLowerCase()} and connect it to a practical use case: ${orientation.applications[0].toLowerCase()}.`,topics:[d.project,...d.skills,'Documentation and review'],exercise:`Build or design the ${d.project.toLowerCase()} using the four roadmap subjects. Keep setup instructions, key decisions and a demonstration of ${orientation.applications[0].toLowerCase()} with the project. Add checks that challenge your main assumptions.`,checkpoint:`A peer can follow your setup or design instructions, inspect the result and explain its limitations. Show how ${d.roadmap[0].toLowerCase()} and ${d.roadmap[3].toLowerCase()} shaped the final project.`,resources:d.resources.map(r=>normalize(r))}
 ];
 stages.forEach(s=>s.topics=[...new Set(s.topics.filter(Boolean))]);
 // Full-stack release work needs identity controls as well as a deployment guide.
 if(d.id===9) stages.find(s=>s.id==='advanced').resources.push({title:'FastAPI — security and authentication tutorial',url:'https://fastapi.tiangolo.com/tutorial/security/',type:'doc',source:'other',level:'advanced',discovery:false});
 const extras=['youtube','coursera','udemy'].map(source=>discovery(d,source));
 books.filter(b=>b.ids.includes(d.id)).forEach(b=>{
  const resource={title:b.title,url:b.url,type:'pdf',source:'other',level:b.level,discovery:false};
  extras.push(resource);
  stages.find(s=>s.id===b.level).resources.push({...resource});
 });
 directCourses.filter(c=>c.ids.includes(d.id)).forEach(c=>{
  const resource={title:c.title,url:c.url,type:'course',source:'other',level:c.level,discovery:false};
  // The same official entrypoint may already be part of the core documentation route.
  if(!d.resources.some(r=>r.url===resource.url)) extras.push(resource);
 });
 paths[d.id]={stages,resources:extras};
});
window.ZETA_LEARNING_PATHS=paths;
})();
