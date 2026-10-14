/* ZETA-authored learning packages, not publisher courses or professional certifications. */
(() => {
// slug | title | primary domain | related domains | estimated study hours | repository | focus
const rows=`ai-engineering-foundations|AI Engineering Foundations|0|2,14,18|36|scikit-learn/scikit-learn|Build a validated prediction feature and explain model persistence, evaluation and application boundaries.
computer-science-toolkit|Computer Science Toolkit|1|69,70,93|42|cs50/libcs50|Develop algorithmic reasoning and connect program behavior to system resources and distributed failure assumptions.
practical-machine-learning|Practical Machine Learning Lab|2|6,60|40|scikit-learn/scikit-learn|Compare tabular prediction methods through repeatable experiments, sound splits and explicit error analysis.
deep-learning-workbench|Deep Learning Workbench|3|14,16,96|52|pytorch/pytorch|Train a neural model, debug gradients and understand how distributed training changes execution.
robotics-simulation-studio|Robotics Simulation Studio|4|16,82|56|ros2/examples|Connect robot coordinate frames, messaging and feedback control in an inspectable simulated rover.
quant-research-lab|Quant Research Lab|5|7,60,61|48|QuantConnect/Lean|Test portfolio hypotheses using chronological evaluation, risk calculations and explicit transaction assumptions.
data-science-storytelling|Data Science: Evidence to Insight|6|57,58,60|34|pandas-dev/pandas|Clean a dataset and communicate a defensible insight with reproducible analysis and contextual limitations.
mathematics-for-computation|Mathematics for Computation|7|60,62|44|numpy/numpy|Connect vectors, derivatives and optimization through numerical examples with documented assumptions.
blockchain-contract-lab|Blockchain Contract Lab|8|78,79,77|38|argotorg/solidity|Build a testnet contract workflow and reason about transaction state, permissions and contract security.
full-stack-product-studio|Full-Stack Product Studio|9|27,45,50|60|fastapi/full-stack-fastapi-template|Connect an accessible interface to validated service behavior, persistence, authentication and deployment.
devops-delivery-lab|DevOps Delivery Lab|10|66,67,69|36|docker/getting-started|Create a repeatable delivery pipeline with container builds, reviewed changes and a recovery plan.
cybersecurity-practice-lab|Cybersecurity Practice Lab|11|75,76,77|40|WebGoat/WebGoat|Assess an authorized application lab, explain threat boundaries and verify fixes with reproducible evidence.
ai-compiler-engineering|AI Compiler Engineering|12|96,97,3|64|llvm/llvm-project|Lower tensor computations through intermediate representations and verify transformation correctness.
android-app-architecture|Android App Architecture|13|40,48|48|android/architecture-samples|Build a lifecycle-aware mobile study tool with clear state ownership and reliable interrupted-session behavior.
python-builders-path|Python Builder's Path|24|1,6|30|python/cpython|Turn language fundamentals into a structured tool with robust error handling and controlled asynchronous work.
react-interface-studio|React Interface Studio|27|25,26,48|34|react/react|Create an accessible interactive dashboard with explicit state ownership and reusable component contracts.
backend-api-engineering|Backend API Engineering|45|46,50,76|40|fastapi/fastapi|Design validated and authorized service operations with reliable retries and understandable API contracts.
data-pipeline-engineering|Data Pipeline Engineering|53|54,55,56|52|apache/spark|Design recoverable ingestion and transformation workflows with clear schemas and data-quality expectations.
aws-serverless-foundations|AWS Serverless Foundations|63|10,75,73|36|aws-powertools/powertools-lambda-python|Build a small cloud API and review its permission boundaries, observability and operational costs.
container-development-lab|Container Development Lab|66|10,45|24|docker/getting-started|Package a multi-service application with durable storage and a minimal reproducible runtime image.
kubernetes-workload-lab|Kubernetes Workload Lab|67|74,72,75|42|kubernetes/examples|Deploy replaceable application workloads with readiness checks, resource limits and clear access boundaries.
terraform-infrastructure-lab|Terraform Infrastructure Lab|68|63,64,65|32|hashicorp/terraform|Create reviewable reusable infrastructure and understand state ownership, drift and replacement actions.
inclusive-interface-design|Inclusive Interface Design|87|48,44|28|w3c/aria-practices|Research a learning task and prototype accessible interactions evaluated through realistic user journeys.
product-discovery-delivery|Product Discovery & Delivery|88|90,87|26|alphagov/govuk-design-system|Turn a user problem into a testable product brief, prioritized work and measurable delivery outcomes.
quantum-circuit-foundations|Quantum Circuit Foundations|91|7,60|44|Qiskit/qiskit|Build simple circuits and interpret measurement statistics, noise and the limits of experimental claims.
distributed-systems-lab|Distributed Systems Lab|93|99,70|56|etcd-io/etcd|Explore replication, consensus and network failures through a small explicitly scoped distributed-system design.
search-relevance-engineering|Search Relevance Engineering|94|20,51|38|elastic/elasticsearch|Build a resource search experience and evaluate indexing, filters and relevance against judged queries.
edge-ai-deployment|Edge AI Deployment Lab|95|3,82,13|44|pytorch/executorch|Evaluate compact model inference on constrained hardware using accuracy, memory and latency together.
flutter-app-studio|Flutter App Studio|42|13,48|42|flutter/flutter|Build a cross-platform planner with understandable layout constraints, state management and device-aware performance.`;
const originals=['jGwO_UgTS7I','8hly31xKli0','jGwO_UgTS7I','aircAruvnKk','csYtU2GY7FY','PHe0bXAIuk0','ua-CiDNNj30','fNk_zzaMoSs'];
const videoTitles=['Stanford CS229 — introductory machine learning lecture','Algorithms and data structures — foundation reference','Stanford CS229 — introductory machine learning lecture','Neural networks — visual introduction','Robot motion — foundation reference','Economic mechanisms — introductory context','Data science — foundation reference','Vectors — visual foundation'];
const repoFocus={0:'estimator interfaces and model evaluation',1:'C input helpers and type handling',2:'validation examples and estimator tests',3:'tensor operations and neural network examples',4:'ROS publisher and subscriber message flow',5:'algorithm examples and portfolio behavior',6:'dataframe transformations and their tests',7:'array operations and numerical routines',8:'contract examples and compiler tests',9:'frontend-to-API contracts and authentication',10:'containerized application setup',11:'a documented authorized security lesson',12:'MLIR representations and transformation passes',13:'application state and architecture patterns',24:'language examples and standard-library behavior',27:'component state behavior and its tests',45:'request validation and security examples',53:'structured data transformations',63:'Lambda logging and tracing examples',66:'container images and application storage',67:'deployment and service manifests',68:'provider and state documentation',87:'accessible widget examples and keyboard behavior',88:'reusable service interface components',91:'quantum circuit construction',93:'replicated state and consensus behavior',94:'query examples and relevance tests',95:'model export and on-device inference',42:'widget composition and layout examples'};
const entryLevels={3:'intermediate',4:'intermediate',5:'intermediate',12:'advanced',53:'intermediate',67:'intermediate',91:'intermediate',93:'advanced',95:'intermediate'};
const courses=rows.split('\n').map(row=>{
 const [id,title,domain,related,hours,repo,summary]=row.split('|');
 const primaryDomainId=Number(domain),d=window.ZETA_CATALOG.domains[primaryDomainId],orientation=window.ZETA_DOMAIN_CONTENT[primaryDomainId],path=window.ZETA_LEARNING_PATHS[primaryDomainId];
 const repository={title:`GitHub reference repository: ${repo}`,url:`https://github.com/${repo}`,type:'repo',source:'github',level:'intermediate',discovery:false};
 const video=primaryDomainId<8?{title:videoTitles[primaryDomainId],url:`https://www.youtube.com/watch?v=${originals[primaryDomainId]}`,type:'video',source:'youtube',level:'beginner',discovery:false}:{...path.resources.find(r=>r.source==='youtube'),title:`Find introductory ${d.name} videos on YouTube`};
 const modules=path.stages.map((stage,index)=>({id:`${id}-${stage.id}`,title:stage.title,level:stage.level,objectives:[stage.goal,`Explain the connection between ${stage.topics.slice(0,2).join(' and ')} using a concrete ${d.name.toLowerCase()} example.`],practice:stage.exercise,checkpoint:stage.checkpoint,resources:stage.resources.map(r=>({...r}))}));
 modules[0].resources.push(video);
 const focus=repoFocus[primaryDomainId];
 const lab={id:`${id}-reference-lab`,title:`Reference lab: ${focus}`,level:'intermediate',objectives:[`Locate a documented example, test or interface demonstrating ${focus}.`,`Compare the repository's stated purpose with your ${d.project.toLowerCase()} and identify what is reusable versus out of scope.`],practice:`Inspect ${repo} with a focus on ${focus}; its full implementation is not required reading. Find one relevant example or test, record its prerequisites and explain how it supports your course project. Where useful, run a small documented example in an isolated learning environment.`,checkpoint:`Provide the exact example or test path you studied and describe its inputs, expected behavior and relevance to ${d.name.toLowerCase()}. A source-code reading note is acceptable when running the full project is impractical.`,resources:[repository,{...d.resources[1],type:'doc',source:'other',discovery:false}]};
 modules.splice(2,0,lab);
 if(primaryDomainId===9){
  modules[1].practice='Implement one validated FastAPI endpoint for a learning record, persist it in a relational database and connect it to a React form. Exercise missing fields, invalid values and unauthorized access; document how the client receives each error.';
  modules[1].checkpoint='Create and retrieve a learning record through the interface, then show repeatable service checks for validation and authorization failures.';
 }
 // A matching textbook supplements the path; unverified or unrelated PDFs are not invented.
 const pdfs=path.resources.filter(r=>r.type==='pdf');
 pdfs.forEach(pdf=>{const target=modules.find(m=>m.level===pdf.level);if(target&&!target.resources.some(r=>r.url===pdf.url))target.resources.push({...pdf});});
 return {id,title,category:d.category,primaryDomainId,domainIds:[primaryDomainId,...related.split(',').map(Number)],level:entryLevels[primaryDomainId]||'beginner',estimatedHours:Number(hours),summary,skills:primaryDomainId===9?['React','Python','REST APIs','SQL']:d.skills.slice(),prerequisites:primaryDomainId===9?[...orientation.prerequisites,'Basic Python and JavaScript familiarity for the selected FastAPI and React implementation.']:orientation.prerequisites.slice(),outcomes:[summary,`Complete and document your ${d.project.toLowerCase()}.`,`Explain practical limits and review the result against ${d.roadmap[3].toLowerCase()}.`],modules};
});
const salarySource='https://talproindia.com/salary-guide/';
const demandSkills=[
 {name:'Model evaluation',reason:'A core learning ability for AI/ML engineering: compare models with representative evidence rather than training scores alone.',source:salarySource},
 {name:'React',reason:'A practical interface skill in the guide’s React + Node full-stack role family; included as an editorial learning focus.',source:salarySource},
 {name:'Node.js',reason:'A service-development skill associated with the guide’s React + Node full-stack role family.',source:salarySource},
 {name:'CI/CD',reason:'An editorial core ability for the guide’s DevOps and platform engineering role families.',source:salarySource},
 {name:'SQL',reason:'A foundation for data engineering and reliable analytical data models; included in the curated career learning map.',source:salarySource},
 {name:'Cloud architecture',reason:'A learning focus associated with cloud and platform roles covered by the guide, rather than a live skill ranking.',source:salarySource}
];
window.ZETA_COURSE_CATALOG={courses,demandSkills,sources:[{title:'ZETA authored curricula and study estimates',url:'./COURSE-SOURCES.md',checked:'2026-10-14'},{title:'Talpro India IT Salary Guide 2026 — role-family context',url:salarySource,checked:'2026-10-14'}]};
})();
