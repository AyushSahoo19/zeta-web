/* ZETA curated learning catalogue. Level labels are our suggested sequence. */
(() => {
const refs = {
 ml:['https://scikit-learn.org/stable/getting_started.html','https://scikit-learn.org/stable/supervised_learning.html','https://scikit-learn.org/stable/model_selection.html'],
 torch:['https://docs.pytorch.org/tutorials/beginner/basics/intro.html','https://docs.pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html','https://docs.pytorch.org/tutorials/advanced/cpp_frontend.html'],
 cs:['https://cs50.harvard.edu/x/','https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/','https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/'],
 ros:['https://docs.ros.org/en/jazzy/Tutorials/Beginner-CLI-Tools.html','https://docs.ros.org/en/jazzy/Tutorials/Intermediate.html','https://docs.ros.org/en/jazzy/Tutorials/Advanced.html'],
 quant:['https://www.quantconnect.com/docs/v2/writing-algorithms/key-concepts/getting-started','https://www.quantconnect.com/docs/v2/writing-algorithms/portfolio/holdings','https://www.quantconnect.com/docs/v2/writing-algorithms/optimization/parameters'],
 pandas:['https://pandas.pydata.org/docs/getting_started/intro_tutorials/','https://pandas.pydata.org/docs/user_guide/groupby.html','https://pandas.pydata.org/docs/user_guide/enhancingperf.html'],
 math:['https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/','https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/','https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/'],
 chain:['https://ethereum.org/en/developers/docs/intro-to-ethereum/','https://docs.soliditylang.org/en/latest/solidity-by-example.html','https://docs.soliditylang.org/en/latest/security-considerations.html'],
 web:['https://developer.mozilla.org/en-US/docs/Learn_web_development','https://developer.mozilla.org/en-US/docs/Web/API','https://developer.mozilla.org/en-US/docs/Web/Performance'],
 devops:['https://docs.github.com/en/actions/get-started/quickstart','https://docs.docker.com/get-started/','https://kubernetes.io/docs/concepts/cluster-administration/'],
 security:['https://owasp.org/www-project-top-ten/','https://owasp.org/www-project-web-security-testing-guide/','https://owasp.org/www-project-application-security-verification-standard/'],
 compiler:['https://llvm.org/docs/tutorial/','https://mlir.llvm.org/docs/Tutorials/Toy/','https://mlir.llvm.org/docs/Dialects/'],
 android:['https://developer.android.com/courses','https://developer.android.com/guide','https://developer.android.com/topic/performance'],
 hf:['https://huggingface.co/learn/llm-course/chapter1/1','https://huggingface.co/docs/transformers/training','https://huggingface.co/docs/transformers/quantization/overview'],
 cv:['https://docs.opencv.org/4.x/d9/df8/tutorial_root.html','https://docs.opencv.org/4.x/d2/d96/tutorial_py_table_of_contents_imgproc.html','https://docs.opencv.org/4.x/d9/dba/tutorials_dnn.html'],
 rl:['https://huggingface.co/learn/deep-rl-course/unit0/introduction','https://huggingface.co/learn/deep-rl-course/unit6/introduction','https://huggingface.co/learn/deep-rl-course/unit8/introduction'],
 mlops:['https://mlflow.org/docs/latest/ml/getting-started/','https://mlflow.org/docs/latest/ml/tracking/','https://mlflow.org/docs/latest/ml/model-registry/'],
 python:['https://docs.python.org/3/tutorial/','https://docs.python.org/3/library/asyncio.html','https://docs.python.org/3/extending/'],
 js:['https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide','https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises','https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference'],
 ts:['https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html','https://www.typescriptlang.org/docs/handbook/2/generics.html','https://www.typescriptlang.org/docs/handbook/2/conditional-types.html'],
 react:['https://react.dev/learn','https://react.dev/learn/managing-state','https://react.dev/reference/react'],
 node:['https://nodejs.org/en/learn/getting-started/introduction-to-nodejs','https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick','https://nodejs.org/api/worker_threads.html'],
 next:['https://nextjs.org/learn','https://nextjs.org/docs/app/building-your-application/data-fetching','https://nextjs.org/docs/app/building-your-application/caching'],
 vue:['https://vuejs.org/tutorial/','https://vuejs.org/guide/scaling-up/state-management.html','https://vuejs.org/guide/extras/rendering-mechanism.html'],
 angular:['https://angular.dev/tutorials','https://angular.dev/guide/routing','https://angular.dev/guide/signals'],
 java:['https://dev.java/learn/','https://dev.java/learn/api/collections-framework/','https://dev.java/learn/new-features/virtual-threads/'],
 spring:['https://spring.io/guides/gs/rest-service/','https://spring.io/guides/gs/accessing-data-jpa/','https://docs.spring.io/spring-security/reference/'],
 go:['https://go.dev/tour/','https://go.dev/doc/tutorial/generics','https://go.dev/doc/effective_go'],
 rust:['https://doc.rust-lang.org/book/','https://doc.rust-lang.org/book/ch16-00-concurrency.html','https://doc.rust-lang.org/nomicon/'],
 cpp:['https://learn.microsoft.com/en-us/cpp/cpp/welcome-back-to-cpp-modern-cpp','https://learn.microsoft.com/en-us/cpp/standard-library/cpp-standard-library-reference','https://learn.microsoft.com/en-us/cpp/parallel/parallel-programming-in-visual-cpp'],
 dotnet:['https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/','https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api','https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/'],
 php:['https://www.php.net/manual/en/tutorial.php','https://www.php.net/manual/en/language.oop5.php','https://www.php.net/manual/en/security.php'],
 ruby:['https://www.ruby-lang.org/en/documentation/quickstart/','https://guides.rubyonrails.org/getting_started.html','https://guides.rubyonrails.org/security.html'],
 kotlin:['https://kotlinlang.org/docs/getting-started.html','https://kotlinlang.org/docs/coroutines-overview.html','https://kotlinlang.org/docs/multiplatform.html'],
 swift:['https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/','https://developer.apple.com/tutorials/swiftui','https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/'],
 flutter:['https://docs.flutter.dev/get-started/','https://docs.flutter.dev/data-and-backend/state-mgmt/','https://docs.flutter.dev/perf/'],
 rn:['https://reactnative.dev/docs/getting-started','https://reactnative.dev/docs/network','https://reactnative.dev/docs/performance'],
 sql:['https://www.postgresql.org/docs/current/tutorial.html','https://www.postgresql.org/docs/current/queries.html','https://www.postgresql.org/docs/current/performance-tips.html'],
 mongo:['https://www.mongodb.com/docs/manual/tutorial/getting-started/','https://www.mongodb.com/docs/manual/core/aggregation-pipeline/','https://www.mongodb.com/docs/manual/core/sharding-introduction/'],
 redis:['https://redis.io/docs/latest/develop/get-started/','https://redis.io/docs/latest/develop/data-types/','https://redis.io/docs/latest/operate/oss_and_stack/management/replication/'],
 spark:['https://spark.apache.org/docs/latest/quick-start.html','https://spark.apache.org/docs/latest/sql-programming-guide.html','https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html'],
 kafka:['https://kafka.apache.org/quickstart','https://kafka.apache.org/documentation/#design','https://kafka.apache.org/documentation/streams/'],
 airflow:['https://airflow.apache.org/docs/apache-airflow/stable/tutorial/index.html','https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html','https://airflow.apache.org/docs/apache-airflow/stable/administration-and-deployment/index.html'],
 dbt:['https://docs.getdbt.com/docs/introduction','https://docs.getdbt.com/docs/build/data-tests','https://docs.getdbt.com/docs/build/incremental-models'],
 bi:['https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-getting-started','https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-modeling-view','https://learn.microsoft.com/en-us/power-bi/guidance/power-bi-optimization'],
 aws:['https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html','https://docs.aws.amazon.com/lambda/latest/dg/welcome.html','https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html'],
 azure:['https://learn.microsoft.com/en-us/training/azure/','https://learn.microsoft.com/en-us/azure/architecture/','https://learn.microsoft.com/en-us/azure/well-architected/'],
 gcp:['https://cloud.google.com/docs/get-started','https://cloud.google.com/architecture','https://cloud.google.com/architecture/framework'],
 docker:['https://docs.docker.com/get-started/','https://docs.docker.com/compose/','https://docs.docker.com/build/building/multi-stage/'],
 k8s:['https://kubernetes.io/docs/tutorials/kubernetes-basics/','https://kubernetes.io/docs/concepts/workloads/','https://kubernetes.io/docs/concepts/security/'],
 tf:['https://developer.hashicorp.com/terraform/tutorials','https://developer.hashicorp.com/terraform/language/modules','https://developer.hashicorp.com/terraform/language/state'],
 git:['https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository','https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows','https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History'],
 linux:['https://docs.kernel.org/admin-guide/quickly-build-trimmed-linux.html','https://docs.kernel.org/admin-guide/index.html','https://docs.kernel.org/core-api/index.html'],
 net:['https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview','https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x','https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching'],
 sre:['https://sre.google/sre-book/introduction/','https://sre.google/workbook/implementing-slos/','https://sre.google/sre-book/managing-critical-state/'],
 otel:['https://opentelemetry.io/docs/concepts/','https://opentelemetry.io/docs/collector/','https://opentelemetry.io/docs/specs/otel/'],
 test:['https://playwright.dev/docs/intro','https://playwright.dev/docs/test-assertions','https://playwright.dev/docs/ci'],
 perf:['https://grafana.com/docs/k6/latest/get-started/','https://grafana.com/docs/k6/latest/using-k6/','https://grafana.com/docs/k6/latest/testing-guides/'],
 api:['https://fastapi.tiangolo.com/tutorial/','https://fastapi.tiangolo.com/tutorial/security/','https://fastapi.tiangolo.com/advanced/'],
 graphql:['https://graphql.org/learn/','https://graphql.org/learn/schema/','https://graphql.org/learn/best-practices/'],
 embedded:['https://docs.arduino.cc/learn/','https://docs.zephyrproject.org/latest/develop/getting_started/index.html','https://docs.zephyrproject.org/latest/kernel/services/index.html'],
 unity:['https://learn.unity.com/','https://docs.unity3d.com/Manual/ScriptingSection.html','https://docs.unity3d.com/Manual/UnderstandingPerformance.html'],
 blender:['https://docs.blender.org/manual/en/latest/getting_started/index.html','https://docs.blender.org/manual/en/latest/modeling/index.html','https://docs.blender.org/manual/en/latest/render/index.html'],
 ux:['https://www.w3.org/WAI/fundamentals/accessibility-intro/','https://www.w3.org/WAI/tutorials/','https://www.w3.org/WAI/ARIA/apg/'],
 product:['https://www.scrumguides.org/scrum-guide.html','https://www.gov.uk/service-manual/user-research','https://www.gov.uk/service-manual/measuring-success'],
 crypto:['https://cryptography.io/en/latest/','https://cryptography.io/en/latest/fernet/','https://cryptography.io/en/latest/hazmat/primitives/'],
 quantum:['https://quantum.cloud.ibm.com/learning','https://quantum.cloud.ibm.com/docs/en/guides','https://quantum.cloud.ibm.com/docs/en/guides/error-mitigation-and-suppression-techniques'],
 r:['https://cran.r-project.org/doc/manuals/r-release/R-intro.html','https://cran.r-project.org/doc/manuals/r-release/R-data.html','https://cran.r-project.org/doc/manuals/r-release/R-exts.html'],
 scipy:['https://docs.scipy.org/doc/scipy/tutorial/','https://docs.scipy.org/doc/scipy/tutorial/stats.html','https://docs.scipy.org/doc/scipy/tutorial/optimize.html'],
 wasm:['https://developer.mozilla.org/en-US/docs/WebAssembly','https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API','https://developer.mozilla.org/en-US/docs/WebAssembly/Reference'],
 systems:['https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/','https://pdos.csail.mit.edu/6.824/','https://raft.github.io/'],
 search:['https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html','https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html','https://www.elastic.co/guide/en/elasticsearch/reference/current/tune-for-search-speed.html']
};
// name | category | specific skills | four roadmap milestones | project | source family
const rows = `AI & ML|AI & Intelligence|Python,Model evaluation,Feature engineering|Python and vectors;Supervised estimators;Validation and leakage;Model deployment|Sentiment classification service|ml
Computer Science|Systems & Foundations|Algorithms,Data structures,Complexity|Programming basics;Lists trees and graphs;Complexity and proof;Distributed system tradeoffs|Search engine index|cs
Machine Learning|AI & Intelligence|Regression,Cross validation,Scikit-learn|Tabular data preparation;Regression baselines;Ensembles and tuning;Reliable model selection|House-price predictor|ml
Deep Learning|AI & Intelligence|PyTorch,Backpropagation,Transformers|Tensors and gradients;Neural network training;Representation learning;Distributed training|Image recognition lab|torch
Robotics|Hardware & Spatial|ROS,Kinematics,Control systems|Robot coordinate frames;ROS topics and services;Motion planning;Control and simulation|Autonomous rover simulation|ros
Quant Finance|Data & Mathematics|Backtesting,Portfolio optimization,Time series|Returns and risk;Trading signals;Portfolio construction;Out-of-sample backtesting|Portfolio optimizer|quant
Data Science|Data & Mathematics|Pandas,Statistics,Visualization|Data cleaning;Exploratory analysis;Statistical comparisons;Reproducible insight delivery|Customer insights dashboard|pandas
Mathematics|Data & Mathematics|Linear algebra,Calculus,Optimization|Vectors and matrices;Derivatives and integrals;Probability models;Numerical optimization|Gradient descent notebook|math
Blockchain|Security & Web3|Solidity,Smart contracts,Wallets|Blocks and transactions;Smart contract state;Contract testing;Security and gas optimization|Testnet voting contract|chain
Full Stack|Web & Applications|React,Node.js,SQL|Semantic web interfaces;REST services;Database integration;Authenticated deployment|Learning management application|web
DevOps|Cloud & Operations|CI/CD,Docker,Kubernetes|Git and delivery basics;Container builds;Automated release pipelines;Cluster operations|Container deployment pipeline|devops
Cybersecurity|Security & Web3|Threat modeling,OWASP,Security testing|Security fundamentals;Common web weaknesses;Authorized test methodology;Verification and remediation|Local application security review|security
AI Compilers|Systems & Foundations|LLVM,MLIR,Compiler optimization|Lexing and parsing;Intermediate representations;Tensor dialect lowering;Compiler optimization passes|Toy tensor compiler|compiler
Mobile Development|Web & Applications|Kotlin,App architecture,Mobile performance|Mobile interface foundations;Navigation and storage;Network integration;Release and performance|Mobile habit tracker|android
Generative AI|AI & Intelligence|Transformers,LLM evaluation,Quantization|Tokens and attention;Pretrained generation;Fine-tuning datasets;Efficient model serving|Document drafting assistant|hf
Natural Language Processing|AI & Intelligence|Tokenization,Embeddings,Sequence models|Text preprocessing;Language representations;Sequence fine-tuning;Evaluation and deployment|Support-ticket classifier|hf
Computer Vision|AI & Intelligence|OpenCV,Image processing,Object detection|Pixels and filters;Contours and features;Neural image inference;Detection pipeline optimization|Document scanner|cv
Reinforcement Learning|AI & Intelligence|Rewards,Q-learning,Policy gradients|Agents and environments;Value-based learning;Policy optimization;Evaluation across seeds|Simulation navigation agent|rl
MLOps|AI & Intelligence|MLflow,Model registry,Experiment tracking|Track experiments;Package model artifacts;Version production models;Monitor and roll back|Versioned prediction pipeline|mlops
AI Agents|AI & Intelligence|Tool use,LLM evaluation,Transformers|Language model interfaces;Structured tool calls;Multi-step workflows;Reliability evaluation|Read-only research assistant|hf
RAG & Vector Search|AI & Intelligence|Embeddings,Retrieval,Search evaluation|Document chunking;Semantic embeddings;Retrieval quality;Grounded response evaluation|Technical document search|search
Responsible AI|AI & Intelligence|Model evaluation,Data governance,Fairness|Dataset limitations;Validation protocols;Slice-level error analysis;Document model constraints|Model evaluation report|ml
Speech & Audio AI|AI & Intelligence|Audio features,PyTorch,Sequence models|Audio tensor processing;Feature extraction;Sequence network training;Latency-aware inference|Sound event classifier|torch
Recommendation Systems|AI & Intelligence|Ranking,Feature engineering,Offline evaluation|User-item data;Baseline recommenders;Ranking experiments;Leakage-resistant evaluation|Content recommendation prototype|ml
Python|Languages & Frameworks|Python,AsyncIO,Packaging|Syntax and functions;Modules and testing;Asynchronous IO;Extension interfaces|Concurrent file indexer|python
JavaScript|Languages & Frameworks|JavaScript,Promises,DOM|Language fundamentals;DOM interactions;Promise workflows;Runtime behavior|Browser study timer|js
TypeScript|Languages & Frameworks|TypeScript,Generics,Type modeling|Static type basics;Interfaces and unions;Generic abstractions;Conditional type design|Typed API client|ts
React|Languages & Frameworks|React,State management,Accessibility|Components and props;Interactive state;Shared state patterns;Reusable component APIs|Accessible learning dashboard|react
Node.js|Languages & Frameworks|Node.js,Event loop,Worker threads|Node runtime and modules;Async IO services;Event loop profiling;CPU work isolation|Background import service|node
Next.js|Languages & Frameworks|Next.js,Server rendering,Caching|Routes and layouts;Server data fetching;Mutation workflows;Caching strategy|Server-rendered resource library|next
Vue|Languages & Frameworks|Vue,Composition API,State management|Reactive components;Composable behavior;Shared stores;Rendering optimization|Interactive study catalogue|vue
Angular|Languages & Frameworks|Angular,Routing,Signals|Component templates;Dependency injection;Application routing;Reactive signal architecture|Team task dashboard|angular
Java|Languages & Frameworks|Java,Collections,Concurrency|Objects and types;Collections and streams;Concurrent tasks;Virtual thread services|Concurrent inventory API|java
Spring Boot|Languages & Frameworks|Spring Boot,JPA,Spring Security|REST controllers;Persistence models;Service integration;Authentication and authorization|Secure project API|spring
Go|Languages & Frameworks|Go,Goroutines,Generics|Go syntax and packages;Interfaces and errors;Generic collections;Concurrent service design|Concurrent URL monitor|go
Rust|Languages & Frameworks|Rust,Ownership,Concurrency|Ownership and borrowing;Enums and traits;Thread-safe sharing;Unsafe boundary review|Memory-safe log parser|rust
C++|Languages & Frameworks|C++,STL,Concurrency|RAII and objects;Standard containers;Algorithms and templates;Parallel execution|High-speed simulation engine|cpp
C# & .NET|Languages & Frameworks|C#,ASP.NET,Task parallelism|C# type fundamentals;Web API endpoints;Persistence and services;Parallel processing|Asset tracking API|dotnet
PHP|Languages & Frameworks|PHP,OOP,Web security|PHP request handling;Object-oriented design;Database forms;Secure session handling|Resource submission portal|php
Ruby on Rails|Languages & Frameworks|Ruby,Rails,MVC|Ruby objects;MVC application structure;Relational persistence;Application security|Learning journal web app|ruby
Kotlin|Languages & Frameworks|Kotlin,Coroutines,Multiplatform|Null safety and types;Functional collections;Coroutine workflows;Shared platform modules|Shared mobile data layer|kotlin
Swift & iOS|Web & Applications|Swift,SwiftUI,Concurrency|Swift language tour;Declarative views;App state and navigation;Actor-based concurrency|iOS learning tracker|swift
Flutter|Web & Applications|Dart,Flutter,State management|Widget composition;Navigation and forms;Shared application state;Rendering performance|Cross-platform study planner|flutter
React Native|Web & Applications|React Native,Networking,Mobile performance|Native components;Navigation patterns;Network-backed screens;Mobile runtime optimization|Mobile resource vault|rn
Frontend Engineering|Web & Applications|HTML,CSS,Accessibility|Semantic structure;Responsive layouts;Browser API integration;Web performance budgets|Responsive domain explorer|web
Backend Engineering|Web & Applications|REST APIs,Authentication,SQL|HTTP service basics;Request validation;Identity integration;Production API architecture|Authenticated learning backend|api
API Design|Web & Applications|OpenAPI,Validation,REST APIs|Resource contracts;Typed request models;Authentication scopes;Versioning and async workflows|Versioned public catalogue API|api
GraphQL|Web & Applications|GraphQL,Schema design,Resolvers|Queries and mutations;Typed schema design;Resolver integration;Query cost controls|Learning graph API|graphql
Web Accessibility|Design & Product|WCAG,Semantic HTML,ARIA|Accessibility principles;Keyboard navigation;Accessible forms;Complex widget patterns|Keyboard-accessible component kit|ux
Progressive Web Apps|Web & Applications|Service workers,Web storage,Performance|Responsive web basics;Browser storage;Offline interactions;Performance optimization|Installable study companion|web
SQL & PostgreSQL|Data & Mathematics|SQL,PostgreSQL,Query optimization|Tables and queries;Joins and grouping;Transactions and indexes;Execution plan tuning|Learning analytics database|sql
MongoDB|Data & Mathematics|MongoDB,Aggregation,Sharding|Document CRUD;Data model choices;Aggregation pipelines;Distributed collections|Document asset vault|mongo
Redis|Cloud & Operations|Redis,Caching,Replication|Key-value operations;Structured data types;Cache invalidation;Replication strategy|Session and rate-limit cache|redis
Data Engineering|Data & Mathematics|Spark,SQL,ETL|Data ingestion;Structured transformations;Batch data pipelines;Streaming reliability|Event-to-warehouse pipeline|spark
Apache Spark|Data & Mathematics|Spark,DataFrames,Streaming|Spark application setup;DataFrame transformations;SQL analytics;Streaming checkpoints|Streaming log analytics|spark
Apache Kafka|Cloud & Operations|Kafka,Event streaming,Stream processing|Topics and producers;Consumer groups;Delivery semantics;Stream processing|Learning event bus|kafka
Apache Airflow|Data & Mathematics|Airflow,DAGs,Workflow orchestration|Schedule a workflow;Task dependencies;Failure handling;Production scheduler operations|Daily asset ingestion DAG|airflow
Analytics Engineering|Data & Mathematics|dbt,SQL,Data quality|Warehouse transformations;Layered data models;Automated data tests;Incremental processing|Tested analytics model layer|dbt
Business Intelligence|Data & Mathematics|Power BI,Data modeling,DAX|Import clean data;Relational reporting models;Measure design;Dashboard optimization|Learning KPI dashboard|bi
R Programming|Data & Mathematics|R,Statistical analysis,Data manipulation|R vectors and functions;Data import;Statistical modeling;Reusable R extensions|Reproducible experiment report|r
Statistics|Data & Mathematics|Hypothesis testing,Distributions,Estimation|Random variables;Sampling distributions;Hypothesis comparisons;Numerical inference|A/B testing notebook|scipy
Time Series|Data & Mathematics|Pandas,Forecast evaluation,Resampling|Datetime indexing;Resampling observations;Rolling-window features;Efficient temporal analysis|Study-time trend explorer|pandas
Scientific Computing|Data & Mathematics|SciPy,Numerical methods,Optimization|Numerical array workflows;Scientific routines;Statistical computation;Constrained optimization|Numerical optimization lab|scipy
AWS|Cloud & Operations|AWS,Lambda,Cloud architecture|Cloud service categories;Serverless functions;Managed service integration;Well-architected reviews|Serverless study API|aws
Microsoft Azure|Cloud & Operations|Azure,Cloud architecture,Identity|Azure fundamentals;Application services;Reference architectures;Reliability review|Azure learning workspace|azure
Google Cloud|Cloud & Operations|Google Cloud,Cloud architecture,Data services|Cloud project setup;Managed compute;Data service architecture;Architecture framework review|Cloud event analytics|gcp
Docker|Cloud & Operations|Docker,Compose,Image optimization|Container fundamentals;Service composition;Reproducible images;Multi-stage builds|Containerized resource portal|docker
Kubernetes|Cloud & Operations|Kubernetes,Deployments,Cluster security|Pods and services;Deployment controllers;Workload configuration;Cluster security review|Resilient application cluster|k8s
Terraform|Cloud & Operations|Terraform,IaC,State management|Infrastructure declarations;Resource dependencies;Reusable modules;Remote state operations|Reusable cloud environment|tf
Git & Collaboration|Systems & Foundations|Git,Code review,Branch workflows|Commits and history;Branching strategies;Collaborative reviews;History repair techniques|Versioned documentation workspace|git
Linux Administration|Systems & Foundations|Linux,Kernel configuration,System administration|Kernel build foundations;System administration interfaces;Runtime configuration;Kernel API investigation|Documented Linux lab|linux
Computer Networking|Systems & Foundations|HTTP,Connection management,Caching|Request-response protocols;Connection behavior;Network efficiency;Cache correctness|HTTP diagnostic toolkit|net
Site Reliability Engineering|Cloud & Operations|SLOs,Incident response,Distributed systems|Reliability vocabulary;Service-level objectives;Incident workflows;Critical state management|Service reliability runbook|sre
Observability|Cloud & Operations|OpenTelemetry,Tracing,Metrics|Telemetry signals;Trace instrumentation;Collector pipelines;Signal specification review|End-to-end tracing demo|otel
Platform Engineering|Cloud & Operations|Kubernetes,Developer platforms,Cluster security|Platform workload basics;Reusable deployments;Developer service contracts;Multi-tenant security|Internal deployment platform|k8s
Cloud Security|Security & Web3|Threat modeling,Cloud architecture,IAM|Cloud service boundaries;Identity design;Security architecture;Risk review checklist|Cloud access control review|aws
Application Security|Security & Web3|OWASP,Threat modeling,Security testing|Web risk categories;Secure design patterns;Authorized testing;Verification controls|Secure API assessment|security
Cryptography|Security & Web3|Encryption,Key management,Cryptography|Cryptographic interfaces;Authenticated encryption;Key lifecycle design;Primitive misuse review|Encrypted local note vault|crypto
Smart Contracts|Security & Web3|Solidity,Contract testing,Gas optimization|Contract storage;Solidity examples;Transaction behavior;Security review|Testnet escrow simulator|chain
Web3 Development|Security & Web3|Ethereum,Solidity,Wallets|Ethereum accounts;Contract interfaces;Transaction workflows;Contract security boundaries|Testnet asset registry|chain
QA Automation|Web & Applications|Playwright,Test design,CI/CD|Browser test setup;Reliable assertions;Cross-browser suites;Continuous test execution|Portal regression suite|test
Performance Engineering|Cloud & Operations|k6,Load testing,Performance budgets|Load test basics;Traffic scenarios;Threshold evaluation;Resilience test design|API load-test report|perf
Embedded Systems|Hardware & Spatial|Arduino,Zephyr,RTOS|Microcontroller IO;Firmware toolchains;Real-time tasks;Kernel service integration|Environmental sensor logger|embedded
Internet of Things|Hardware & Spatial|Sensors,Embedded firmware,RTOS|Sensor interfaces;Device firmware;Periodic task scheduling;Reliable device behavior|Connected greenhouse prototype|embedded
Game Development|Hardware & Spatial|Unity,C#,Game optimization|Scene and input basics;Gameplay scripts;Physics interactions;Frame-time optimization|Physics puzzle game|unity
3D & Technical Art|Hardware & Spatial|Blender,3D modeling,Rendering|3D workspace navigation;Mesh modeling;Material workflows;Render optimization|Interactive robot asset pack|blender
AR & VR|Hardware & Spatial|Unity,Spatial interaction,3D performance|Spatial scene foundations;Interaction scripting;Physics and feedback;Frame-rate budgeting|Immersive study room|unity
UI/UX Design|Design & Product|Accessibility,User research,Interaction design|Inclusive interface basics;Task-focused interactions;Usability review;Accessible design patterns|Learning app usability redesign|ux
Product Management|Design & Product|Discovery,Prioritization,Outcome measurement|Product goals;User research;Backlog prioritization;Outcome measurement|Learning platform product brief|product
Technical Writing|Design & Product|Documentation,Accessibility,Information architecture|Audience and task analysis;Readable technical instructions;Accessible content structures;Documentation usability review|Accessible onboarding guide|ux
Agile Delivery|Design & Product|Scrum,Backlog refinement,Outcome measurement|Scrum accountabilities;Iteration planning;User-centered delivery;Outcome-based improvement|Team delivery playbook|product
Quantum Computing|Emerging Technologies|Qiskit,Quantum circuits,Error mitigation|Qubits and gates;Circuit composition;Algorithm execution;Error mitigation|Quantum circuit experiment|quantum
WebAssembly|Emerging Technologies|WebAssembly,JavaScript,Runtime interfaces|Binary module concepts;JavaScript integration;Memory boundaries;Instruction reference|Browser compute module|wasm
Distributed Systems|Systems & Foundations|Replication,Consensus,Fault tolerance|System design foundations;Distributed service behavior;Replicated storage;Consensus failure analysis|Replicated key-value lab|systems
Search Engineering|Data & Mathematics|Elasticsearch,Query DSL,Search optimization|Search index setup;Structured query design;Relevance evaluation;Query performance tuning|Resource search engine|search
Edge AI|Emerging Technologies|PyTorch,Model compression,Inference|Tensor inference basics;Compact model training;Deployment constraints;Advanced inference optimization|On-device image classifier|torch
GPU Programming|Systems & Foundations|PyTorch,Tensors,Performance profiling|GPU tensor placement;Vectorized computation;Memory-aware execution;Advanced kernel workflows|GPU matrix benchmark|torch
Compiler Engineering|Systems & Foundations|LLVM,Parsing,Intermediate representations|Lexer construction;AST and IR generation;Dialect lowering;Optimization pipelines|Expression language compiler|compiler
Database Engineering|Data & Mathematics|PostgreSQL,Transactions,Query optimization|Relational storage;Query composition;Transaction isolation;Performance analysis|Indexed event database|sql
System Design|Systems & Foundations|Architecture,Replication,Consensus|Service decomposition;Distributed boundaries;Replicated state;Failure-mode reasoning|Learning platform architecture|systems
FinTech Engineering|Data & Mathematics|QuantConnect,Portfolio analytics,Backtesting|Financial data basics;Portfolio calculations;Strategy simulation;Parameter robustness|Paper-trading analytics lab|quant
AI Research Engineering|AI & Intelligence|PyTorch,Experiment tracking,Reproducibility|Tensor math foundations;Research model implementation;Controlled experiments;Advanced training systems|Reproducible model paper prototype|torch`;
const palette=[['#c8f4df','#237655'],['#d2e4ff','#3268ab'],['#ffe0c9','#ad5b28'],['#fff1b8','#967419'],['#cdeffa','#2c7e9b'],['#ffd9d0','#ad5f4e'],['#d4f3d9','#307b49'],['#edf4c2','#687b23']];
const categoryIcon={'AI & Intelligence':'brain','Systems & Foundations':'code','Data & Mathematics':'analytics','Security & Web3':'network','Cloud & Operations':'algorithm','Web & Applications':'code','Languages & Frameworks':'code','Hardware & Spatial':'robot','Design & Product':'book','Emerging Technologies':'network'};
const domains=rows.split('\n').map((row,id)=>{
 const [name,category,skills,stages,project,ref]=row.split('|');
 const roadmap=stages.split(';');
 return {id,name,category,icon:['brain','code','algorithm','network','robot','trend','analytics','math'][id]||categoryIcon[category],bg:palette[id%8][0],color:palette[id%8][1],description:`Explore ${name.toLowerCase()} through ${roadmap[1].toLowerCase()} and ${roadmap[3].toLowerCase()}.`,skills:skills.split(','),roles:[],roadmap,resources:refs[ref].map((url,i)=>({title:`${name}: ${roadmap[[0,1,3][i]]}`,url,level:['beginner','intermediate','advanced'][i],type:'doc'})),project,task:`Complete a practical exercise on ${roadmap[1].toLowerCase()} for your ${project.toLowerCase()}.`};
});
// A curriculum milestone is broader than some references. Name the actual publisher
// material instead of implying that every linked page teaches the entire milestone.
const publisherTitles={
 ml:['Scikit-learn — getting started','Scikit-learn — supervised learning','Scikit-learn — model selection and evaluation'],
 torch:['PyTorch — tensors, autograd and neural network basics','PyTorch — character-level RNN classification tutorial','PyTorch — C++ frontend tutorial'],
 cs:['Harvard CS50x — introduction to computer science','MIT 6.006 — introduction to algorithms','MIT 6.046J — design and analysis of algorithms'],
 ros:['ROS 2 — beginner CLI tutorials','ROS 2 — intermediate tutorials','ROS 2 — advanced tutorials'],
 quant:['QuantConnect — getting started with algorithms','QuantConnect — portfolio holdings','QuantConnect — optimization parameters'],
 pandas:['Pandas — introductory data tutorials','Pandas — group-by operations','Pandas — performance enhancement'],
 math:['MIT 18.06 — linear algebra','MIT 18.01SC — single-variable calculus','MIT 18.065 — matrix methods in data analysis'],
 chain:['Ethereum — introduction for developers','Solidity — contract examples','Solidity — security considerations'],
 web:['MDN — learn web development','MDN — web API reference','MDN — web performance'],
 devops:['GitHub Actions — quickstart','Docker — getting started','Kubernetes — cluster administration'],
 security:['OWASP — Top 10 application security risks','OWASP — web security testing guide','OWASP — application security verification standard'],
 compiler:['LLVM — language implementation tutorial','MLIR — Toy language tutorial','MLIR — dialect reference'],
 android:['Android — official training courses','Android — developer guides','Android — app performance guidance']
};
domains.forEach((d,id)=>{
 const ref=rows.split('\n')[id].split('|')[5];
 d.resources.forEach((r,i)=>{
  const url=new URL(r.url);
  const segments=url.pathname.split('/').filter(Boolean);
  const leaf=segments[segments.length-1]||'documentation';
  const page=leaf.replace(/\.(html?|php)$/i,'').replace(/[-_]+/g,' ');
  r.title=publisherTitles[ref]?.[i]||`${url.hostname.replace(/^www\./,'')} — ${page}`;
 });
});
const replaceResource=(id,level,title,url)=>{
 const resource=domains[id].resources.find(r=>r.level===level);
 Object.assign(resource,{title,url});
};
replaceResource(0,'beginner','Python — language tutorial','https://docs.python.org/3/tutorial/');
replaceResource(0,'advanced','Scikit-learn — model persistence and serving options','https://scikit-learn.org/stable/model_persistence.html');
replaceResource(1,'advanced','MIT 6.5840 — distributed systems course and labs','https://pdos.csail.mit.edu/6.824/');
replaceResource(3,'advanced','PyTorch — distributed data parallel training','https://docs.pytorch.org/tutorials/intermediate/ddp_tutorial.html');
replaceResource(9,'intermediate','FastAPI — service tutorial and request handling','https://fastapi.tiangolo.com/tutorial/');
replaceResource(9,'advanced','FastAPI — deployment concepts and server setup','https://fastapi.tiangolo.com/deployment/');
replaceResource(10,'beginner','Pro Git — getting a repository and Git fundamentals','https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository');
replaceResource(12,'advanced','MLIR — pass management and transformation infrastructure','https://mlir.llvm.org/docs/PassManagement/');
const roleRows=`AI Engineer|AI & ML,Generative AI,AI Agents|Python,Transformers,LLM evaluation|Build and evaluate AI features and integrate models with applications.|Computing or mathematics study, or equivalent AI project portfolio.|8–15
ML Engineer|Machine Learning,AI & ML,Responsible AI|Python,Scikit-learn,Model evaluation|Train validated predictive models and maintain inference services.|Statistics and programming foundations demonstrated through evaluated models.|8–15
Data Scientist|Data Science,Statistics,Time Series|Pandas,Statistics,Visualization|Investigate datasets and explain experimentally supported findings.|Quantitative study or equivalent analysis portfolio with statistical reasoning.|6–12
Data Engineer|Data Engineering,Apache Spark,Apache Airflow|SQL,Spark,ETL|Build reliable ingestion pipelines and maintain usable data models.|Computing study or practical SQL and pipeline projects.|6–12
MLOps Engineer|MLOps,DevOps,Docker|MLflow,CI/CD,Docker|Version model artifacts and automate reproducible model delivery.|Software foundations plus model deployment and operations experience.|8–14
Full-Stack Engineer|Full Stack,React,Node.js|React,Node.js,SQL|Deliver connected interfaces, service endpoints and database features.|Computing study or equivalent deployed full-stack portfolio.|6–10
Frontend Engineer|Frontend Engineering,React,Web Accessibility|HTML,CSS,React|Build accessible interfaces and improve browser performance.|Interface development portfolio demonstrating responsive accessible work.|5–10
Backend Engineer|Backend Engineering,API Design,SQL & PostgreSQL|REST APIs,SQL,Authentication|Implement reliable service contracts, persistence and authorization.|Software foundations or equivalent tested backend projects.|5–10
DevOps Engineer|DevOps,Docker,Terraform|CI/CD,Docker,Terraform|Automate builds and deployment and maintain delivery infrastructure.|Linux and scripting foundations with practical delivery projects.|6–11
Platform Engineer|Platform Engineering,Kubernetes,Observability|Kubernetes,Developer platforms,OpenTelemetry|Build reusable platform services that improve developer delivery.|Infrastructure foundations with platform or cluster projects.|8–14
Site Reliability Engineer|Site Reliability Engineering,Observability,Linux Administration|SLOs,Incident response,Linux|Improve availability through service objectives and incident learning.|Systems foundations and hands-on operational debugging experience.|7–12
Cybersecurity Engineer|Cybersecurity,Application Security,Cloud Security|Threat modeling,OWASP,Security testing|Assess authorized systems, prioritize weaknesses and verify fixes.|Security or computing study, or equivalent lab work and security portfolio.|6–12
Android Developer|Mobile Development,Kotlin|Kotlin,App architecture,Mobile performance|Build Android applications and maintain reliable mobile releases.|Mobile development portfolio and Kotlin foundations.|5–10
iOS Developer|Swift & iOS|Swift,SwiftUI,Concurrency|Implement accessible iOS features and manage app state and performance.|Swift projects demonstrating interface and data-flow design.|6–11
Flutter Developer|Flutter,Mobile Development|Dart,Flutter,State management|Deliver cross-platform interfaces and optimize app rendering.|Dart foundations and released or demonstrable Flutter projects.|5–9
React Native Developer|React Native,Mobile Development|React Native,Networking,React|Build shared mobile features and debug native integration issues.|JavaScript and React foundations with a mobile project portfolio.|5–10
QA Automation Engineer|QA Automation,API Design|Playwright,Test design,CI/CD|Design reliable automated checks and investigate regressions.|Testing foundations and an automated test portfolio.|4–8
Embedded Engineer|Embedded Systems,Internet of Things,Robotics|RTOS,Embedded firmware,Control systems|Develop device firmware and validate hardware-software behavior.|Electronics or computing study, or equivalent hardware projects.|5–10
UI/UX Engineer|UI/UX Design,Web Accessibility,Frontend Engineering|Accessibility,Interaction design,HTML|Translate research into usable interfaces and accessible interaction patterns.|Design and implementation portfolio with documented usability work.|4–8
Rust Developer|Rust,Distributed Systems,Compiler Engineering|Rust,Ownership,Concurrency|Implement memory-safe services and reason about concurrent behavior.|Systems programming foundations supported by Rust projects.|8–14
Blockchain Developer|Blockchain,Smart Contracts,Web3 Development|Solidity,Contract testing,Wallets|Build tested smart-contract applications and review transaction risks.|Programming foundations with testnet projects and contract security practice.|varies
Robotics Engineer|Robotics,Embedded Systems,Computer Vision|ROS,Kinematics,Control systems|Integrate perception, motion planning and robot control modules.|Robotics or engineering study, or equivalent simulation and hardware work.|varies
AI Compiler Engineer|AI Compilers,Compiler Engineering,GPU Programming|LLVM,MLIR,Compiler optimization|Develop tensor lowering and optimize model execution pipelines.|Strong algorithms and systems foundations with compiler projects.|varies
Quant Researcher|Quant Finance,Mathematics,Statistics|Backtesting,Statistics,Optimization|Evaluate market hypotheses and assess strategy risk and robustness.|Quantitative study or equivalent rigorous research and backtesting portfolio.|varies`;
const salaryURL='https://talproindia.com/salary-guide/';
const roles=roleRows.split('\n').map(row=>{const [title,dnames,skills,responsibilities,qualifications,band]=row.split('|');return {id:title.toLowerCase().replace(/[^a-z0-9]+/g,'-'),title,domainNames:dnames.split(','),skills:skills.split(','),responsibilities,qualifications:`Typical route: ${qualifications} Employer requirements differ.`,package:band==='varies'?'Varies by employer':`₹${band} LPA`,salarySource:band==='varies'?'':salaryURL};});
domains.forEach(d=>{d.roles=roles.filter(r=>r.domainNames.includes(d.name)).map(r=>r.title);if(!d.roles.length)d.roles=[d.category==='AI & Intelligence'?'AI Engineer':d.category==='Data & Mathematics'?'Data Engineer':d.category==='Security & Web3'?'Cybersecurity Engineer':d.category==='Hardware & Spatial'?'Embedded Engineer':d.category==='Design & Product'?'UI/UX Engineer':d.category==='Cloud & Operations'?'DevOps Engineer':'Backend Engineer'];});
window.ZETA_CATALOG={domains,roles,skills:[...new Set(domains.flatMap(d=>d.skills))],categories:[...new Set(domains.map(d=>d.category))],salarySources:[{title:'Talpro India IT Salary Guide 2026',name:'Talpro India IT Salary Guide 2026',url:salaryURL,scope:'India permanent roles; annual CTC; junior 0–3 years; placement-data benchmark, not an offer guarantee.',date:'Q1 2026',accessed:'2026-10-14'}]};
})();

