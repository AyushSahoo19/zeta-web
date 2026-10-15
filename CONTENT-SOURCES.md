# Content sources and verification scope

The content expansion adds 30 direct primary-publisher learning references across all 10 catalogue categories. Original source schemas and IDs remain unchanged. The editorial notes, practice tasks, worked examples, role profiles and preparation questions are ZETA-authored learning guidance, rather than quotations, employer requirements or publisher completion criteria.

## What was checked

On 2026-10-14, each new publisher URL was opened using web browsing to establish its identity and educational topic. This was a page-level check, not a complete review or execution of every tutorial, textbook, video, course or lab. Parallel HTTP GET checks recorded response status, final URL and content type. The 10 existing unique PDF URLs were additionally checked for their `%PDF-` signature. Those checks verify availability and file format, not every page of their content.

Result: 29 of 30 added URLs returned HTTP 200, as did all 10 retained PDF URLs. Raspberry Pi returned HTTP 403 to the automated GET while its official documentation was readable with web browsing. That restriction is recorded below rather than presented as a successful HTTP check. No new YouTube video IDs were invented. The bookshelf reuses direct videos and repositories already present in the original curricula. OpenIntro is explicitly a publisher book page, not labelled as a PDF URL.

The detailed machine-readable report is `assets/data/resource-verification.json`. Availability and access terms can change. Courses on external platforms are separate from enrollment in the local ZETA study paths. Coursera and Udemy remain explicitly labelled discovery searches with variable free/paid access.

## Added direct references

- [Google Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) — HTTP 200. Checked 2026-10-14.
- [Practical Deep Learning for Coders](https://course.fast.ai/) — HTTP 200. Checked 2026-10-14.
- [TensorFlow: first neural network](https://www.tensorflow.org/tutorials/quickstart/beginner) — HTTP 200. Checked 2026-10-14.
- [MIT: The Missing Semester](https://missing.csail.mit.edu/) — HTTP 200. Checked 2026-10-14.
- [Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/) — HTTP 200. Checked 2026-10-14.
- [Computer Networking: author lectures](https://gaia.cs.umass.edu/kurose_ross/online_lectures.htm) — HTTP 200. Checked 2026-10-14.
- [Python Data Science Handbook](https://jakevdp.github.io/PythonDataScienceHandbook/) — HTTP 200. Checked 2026-10-14.
- [OpenIntro Statistics](https://www.openintro.org/book/os/) — HTTP 200. Checked 2026-10-14.
- [R for Data Science, second edition](https://r4ds.hadley.nz/) — HTTP 200. Checked 2026-10-14.
- [React: build Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe) — HTTP 200. Checked 2026-10-14.
- [Learn Performance](https://web.dev/learn/performance) — HTTP 200. Checked 2026-10-14.
- [MDN: web forms learning guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms) — HTTP 200. Checked 2026-10-14.
- [The Rust Book: getting started](https://doc.rust-lang.org/book/ch01-00-getting-started.html) — HTTP 200. Checked 2026-10-14.
- [A Tour of Go](https://go.dev/tour/welcome/1) — HTTP 200. Checked 2026-10-14.
- [TypeScript: everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) — HTTP 200. Checked 2026-10-14.
- [Docker: run a containerized app](https://docs.docker.com/get-started/tutorials/run-an-app/) — HTTP 200. Checked 2026-10-14.
- [Kubernetes: Hello Minikube](https://kubernetes.io/docs/tutorials/hello-minikube/) — HTTP 200. Checked 2026-10-14.
- [Terraform: AWS getting started](https://developer.hashicorp.com/terraform/tutorials/aws-get-started) — HTTP 200. Checked 2026-10-14.
- [OWASP: authentication cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) — HTTP 200. Checked 2026-10-14.
- [PortSwigger Web Security Academy](https://portswigger.net/web-security) — HTTP 200. Checked 2026-10-14.
- [Ethereum: anatomy of smart contracts](https://ethereum.org/developers/docs/smart-contracts/anatomy/) — HTTP 200. Checked 2026-10-14.
- [Arduino: the Blink example](https://docs.arduino.cc/built-in-examples/basics/Blink/) — HTTP 200. Checked 2026-10-14.
- [Raspberry Pi: MicroPython](https://www.raspberrypi.com/documentation/microcontrollers/micropython.html) — Automated GET blocked (403); primary page readable in browser. Checked 2026-10-14.
- [Godot: your first 2D game](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html) — HTTP 200. Checked 2026-10-14.
- [W3C: accessible forms tutorial](https://www.w3.org/WAI/tutorials/forms/) — HTTP 200. Checked 2026-10-14.
- [GOV.UK: user research practice](https://www.gov.uk/service-manual/user-research) — HTTP 200. Checked 2026-10-14.
- [Google: Technical Writing One](https://developers.google.com/tech-writing/one) — HTTP 200. Checked 2026-10-14.
- [IBM Quantum: your first circuit](https://quantum.cloud.ibm.com/docs/en/guides/hello-world) — HTTP 200. Checked 2026-10-14.
- [Emscripten: compiling your first example](https://emscripten.org/docs/getting_started/Tutorial.html) — HTTP 200. Checked 2026-10-14.
- [NVIDIA: CUDA Programming Guide](https://docs.nvidia.com/cuda/cuda-programming-guide/index.html) — HTTP 200. Checked 2026-10-14.

## Retained PDF format checks

- [Dive into Deep Learning — textbook PDF](https://d2l.ai/d2l-en.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [OSTEP — processes chapter PDF](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [Modern Robotics — mechanics, planning and control textbook PDF](https://hades.mech.northwestern.edu/images/7/7f/MR.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [Convex Optimization — mathematical textbook PDF](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [Eloquent JavaScript — language and web foundations PDF](https://eloquentjavascript.net/Eloquent_JavaScript.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [AWS Well-Architected Framework — architecture review PDF](https://docs.aws.amazon.com/pdfs/wellarchitected/latest/framework/wellarchitected-framework.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [NIST Cybersecurity Framework 2.0 — risk-management guidance PDF](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [Think Python, second edition — programming textbook PDF](https://greenteapress.com/thinkpython2/thinkpython2.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [The Scrum Guide — official 2020 framework PDF](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.
- [Caltech quantum information notes — foundations chapter PDF](https://www.preskill.caltech.edu/ph219/chap2_15.pdf) — HTTP 200; content type `application/pdf`; PDF signature confirmed: True.

## Career and salary context

All 24 career preparation profiles are authored examples. “A week in this kind of work” describes plausible activities, not a promised employer schedule. Self-declared skill comparisons use exact comma/semicolon/newline-separated entries from Profile and never infer proficiency. Salary figures retain the original Talpro 2026 India junior (0–3 years), annual CTC scope and source link. Search buttons lead to live third-party searches and do not imply a vacancy exists.

## Data boundaries

The four copied original catalogues remain unchanged. `content-enrichment.js` holds additional references and authored guidance; `content-ui.js` renders the richer structures and registers references while retaining URL deduplication, domain/course associations and the existing local state keys. No mobile app files, shared login or cloud data were changed.
