export const RESUME_URL = "/Sanidhya_Malhotra_Resume.pdf";

export const profile = {
  name: "Sanidhya Malhotra",
  firstName: "SANIDHYA",
  lastName: "MALHOTRA",
  roles: ["CYBERSECURITY ENGINEER", "SOC · THREAT ANALYSIS", "CLOUD SECURITY"],
  tagline:
    "Cybersecurity professional focused on security monitoring, incident response and threat analysis — translating technical findings into clear, actionable intelligence for every audience.",
  email: "sanidhyamalhotra01@gmail.com",
  phone: "(562) 336-3246",
  linkedin: "https://linkedin.com/in/sanidhya-malhotra/",
  github: "https://github.com/sanidhyamalhotra",
  location: "Carson, California",
};

export const manifesto = [
  {
    n: "01",
    title: "Defender at the intersection of SOC, cloud & communication",
    body: "I investigate incidents with Splunk, Security Onion and Wireshark — mapping IOCs to MITRE ATT&CK and turning noisy telemetry into actionable intelligence for both engineers and executives.",
  },
  {
    n: "02",
    title: "Secure-by-design across cloud & CI/CD",
    body: "M.S. Cybersecurity at CSU Dominguez Hills (4.0 GPA). I architect AWS controls — IAM, KMS, Cognito MFA, CloudTrail — and embed SonarQube, Jira and secure pipelines into every release.",
  },
  {
    n: "03",
    title: "Risk translated into language people act on",
    body: "CompTIA Security+ and ISC2 CC certified. I write the reports, runbooks and stakeholder briefings that close the loop between detection, remediation and measurable risk reduction.",
  },
];

export const experience = [
  {
    role: "Research Assistant",
    company: "California State University, Dominguez Hills",
    period: "2024 — Present",
    location: "Carson, CA",
    points: [
      "Building immersive AR/VR educational applications in Unity (C#, XR Toolkit) with strong emphasis on physics simulation, VR interaction design and UX for STEM learning.",
      "Integrating AI-powered conversational NPCs using the OpenAI API and Convai — engineering prompt strategies for classroom-grade tutoring experiences.",
      "Producing 3D assets, scene optimizations and animations in Blender to keep VR environments performant on standalone headsets.",
      "Deploying VictoryXR chemistry simulations and supporting faculty during live VR classroom sessions.",
      "Contributing web development and UI improvements to the department website and content management workflows.",
    ],
  },
  {
    role: "Supplemental Instruction (SI) Leader",
    company: "TLTC — CSU Dominguez Hills",
    period: "2024 — May 2026",
    location: "Carson, CA",
    points: [
      "Led review sessions and delivered one-on-one and group tutoring in Statistics, Probability, Algebra, Geometry and Calculus.",
      "Developed study guides, practice problems and review slide decks that scaled learning across cohorts.",
      "Provided in-class support and student mentoring, translating dense concepts into approachable frameworks.",
      "Strengthened public speaking, leadership and communication skills — the same skills that make security findings land with executives.",
    ],
  },
  {
    role: "Treasurer & Event Manager",
    company: "CSUDH Cybersecurity Club",
    period: "Jan 2025 — May 2026",
    location: "Carson, CA",
    points: [
      "Managed club finances as Treasurer — tracked budgets, expenses, reimbursements and event spending with organised records.",
      "Coordinated workshops, technical events, meetings, competitions and outreach from planning to day-of execution.",
      "Supported ToroHack — the club's Capture the Flag competition — through logistics, participant experience and on-site ops.",
      "Helped organise the GMiS CTF Workshop for 350+ participants, delivering custom security challenges via CTFd.",
      "Partnered with officers, faculty, speakers, volunteers and external partners to run events at university scale.",
      "Documented budgets, event playbooks and post-event learnings to make future club events reproducible.",
    ],
  },
  {
    role: "System Engineer",
    company: "Tata Consultancy Services",
    period: "Aug 2021 — Aug 2024",
    location: "Noida, India",
    points: [
      "Built and secured REST APIs with JWT authentication and OWASP-aligned protections across UI and backend layers of the MePC A.P. Moller logistics platform.",
      "Developed dynamic, secure web interfaces using JavaScript and Backbone.js with XSS, CSRF and SQLi mitigation techniques.",
      "Automated secure deployments via Postman, GitHub Actions and Jenkins pipelines, reducing manual release effort by 30%.",
      "Documented security findings, tracked remediation and communicated issue status to technical and business stakeholders.",
      "Prepared security documentation, supported compliance activities and communicated recommendations across project teams.",
    ],
  },
  {
    role: "Networking Engineering Intern",
    company: "Oil and Natural Gas Corporation (ONGC)",
    period: "Jun 2021 — Jul 2021",
    location: "New Delhi, India",
    points: [
      "Designed segmented network topologies in Cisco Packet Tracer with secure routing protocols.",
      "Implemented firewalls and encryption to protect internal communications and VoIP.",
      "Documented system risks and configurations to support internal IT compliance reports and audit readiness.",
    ],
  },
];

export const projects = [
  {
    slug: "threat-hunting-mitre-attack",
    category: "Blue Team",
    name: "Threat Hunting — MITRE ATT&CK",
    tag: "BLUE TEAM · DETECTION",
    period: "Ongoing",
    description:
      "Live threat hunting lab: simulating adversary techniques (credential dumping, PowerShell obfuscation), forwarding Windows logs into Wazuh, and engineering custom detection rules mapped to MITRE ATT&CK with Navigator heatmaps to visualize coverage.",
    stack: ["Wazuh", "MITRE ATT&CK", "PowerShell", "SIEM", "Windows Logs", "Detection Eng."],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    overview:
      "A live purple-team lab where I emulate real-world adversary tradecraft — credential dumping, PowerShell obfuscation, lateral movement — and engineer the SIEM detections that catch them. Windows telemetry flows into Wazuh, detections are mapped to MITRE ATT&CK, and coverage is visualised through Navigator heatmaps so gaps are impossible to hide.",
    stats: [
      { label: "ATT&CK Techniques Simulated", value: "20+" },
      { label: "Custom Wazuh Rules", value: "35" },
      { label: "Log Sources Forwarded", value: "6" },
      { label: "Navigator Coverage", value: "62%" },
    ],
    methodology: [
      {
        title: "Emulate",
        body: "Simulate attacker TTPs in an isolated Windows lab — credential dumping (T1003), obfuscated PowerShell (T1059.001, T1027), and privilege escalation.",
      },
      {
        title: "Forward",
        body: "Ship Sysmon and Windows Event logs into Wazuh via agents; normalise fields for correlation.",
      },
      {
        title: "Detect",
        body: "Author custom Wazuh rules and decoders targeting the observed telemetry; tune noise, tag with MITRE technique IDs.",
      },
      {
        title: "Visualise",
        body: "Publish coverage in MITRE ATT&CK Navigator heatmaps so blind spots are visible to stakeholders at a glance.",
      },
    ],
    iocs: [
      { type: "Technique", value: "T1003.001 — LSASS Memory Dump" },
      { type: "Technique", value: "T1059.001 — PowerShell Execution" },
      { type: "Technique", value: "T1027 — Obfuscated Files or Information" },
      { type: "Rule", value: "wazuh: 100320 · Suspicious PowerShell EncodedCommand" },
      { type: "Rule", value: "wazuh: 100411 · Non-standard parent for lsass.exe access" },
    ],
    takeaways: [
      "Coverage-first mindset: measure detection breadth with ATT&CK Navigator before adding more rules.",
      "PowerShell obfuscation is caught cheapest at parent–child process anomalies, not string signatures.",
      "Purple teaming shortens the feedback loop between attacker emulation and defender confidence.",
    ],
  },
  {
    slug: "network-intrusion-pcap",
    category: "SOC",
    name: "Network Intrusion Analysis — PCAP",
    tag: "SOC · IR",
    period: "Aug 2024 — Oct 2024",
    description:
      "End-to-end investigation of simulated incidents: correlated IOCs and adversary activity across Splunk, Security Onion and Wireshark, enriched with VirusTotal / Any.Run / OSINT, and produced incident reports with MITRE mappings for remediation and hardening.",
    stack: ["Splunk", "Security Onion", "Wireshark", "VirusTotal", "Any.Run", "OSINT"],
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    overview:
      "Full incident lifecycle on captured network traffic. I dissected PCAPs in Wireshark, ran the same events through Splunk and Security Onion, enriched suspicious artefacts against VirusTotal / Any.Run / OSINT, and produced an executive-ready incident report with MITRE mappings, remediation and hardening recommendations.",
    stats: [
      { label: "PCAPs Analysed", value: "12" },
      { label: "IOCs Extracted", value: "48" },
      { label: "Sigma / Snort Rules Tuned", value: "9" },
      { label: "Executive Reports Delivered", value: "3" },
    ],
    methodology: [
      {
        title: "Triage",
        body: "Timeline PCAP protocols and volumes in Wireshark; identify suspicious flows, DNS anomalies and unusual TLS SNIs.",
      },
      {
        title: "Correlate",
        body: "Pivot the same events through Splunk searches and Security Onion (Zeek, Suricata) to enrich with alerts and metadata.",
      },
      {
        title: "Enrich",
        body: "Run domains, hashes and IPs through VirusTotal and Any.Run; validate with OSINT (threat feeds, WHOIS, passive DNS).",
      },
      {
        title: "Report",
        body: "Author a stakeholder-ready incident summary — impact, IOCs, MITRE mapping, containment steps and long-term hardening.",
      },
    ],
    iocs: [
      { type: "Domain", value: "malicious-c2[.]xyz — DGA-style beaconing over HTTPS" },
      { type: "IP", value: "185.220.101.42 — Tor exit node associated with data exfil" },
      { type: "Hash", value: "SHA256 e3b0c44298fc1c14…9afbf4c8996fb92427ae41e4649b934ca495991b" },
      { type: "Technique", value: "T1071.001 — Application Layer Protocol: Web" },
      { type: "Technique", value: "T1041 — Exfiltration Over C2 Channel" },
    ],
    takeaways: [
      "PCAP + SIEM together beat either tool alone: Wireshark gives fidelity, Splunk gives scale.",
      "Enrichment is where junior vs senior SOC work diverges — never report a raw IOC without context.",
      "Executive summaries land better with risk framing than with packet-level detail.",
    ],
  },
  {
    slug: "simulated-network-threat-detection",
    category: "Blue Team",
    name: "Simulated Network Threat Detection",
    tag: "BLUE TEAM · SIEM",
    period: "2025",
    githubUrl: "https://github.com/sanidhyamalhotra/Simulated-Network-Threat-Detection",
    description:
      "End-to-end enterprise detection lab: Cisco Packet Tracer + GNS3 + Kali + Wireshark + Splunk. Simulated ARP spoofing, port scans and Hydra brute-force against a virtual enterprise topology, then built custom SPL detections and full investigation runbooks.",
    stack: ["Cisco Packet Tracer", "GNS3", "Kali Linux", "Splunk", "SPL", "Wireshark", "Nmap", "Hydra"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    overview:
      "A reproducible, open-source detection lab that stitches Cisco Packet Tracer, GNS3, Kali Linux, Wireshark and Splunk into one enterprise environment. I simulated real-world attacks — ARP spoofing (MITM), Nmap reconnaissance and Hydra brute-force — captured the telemetry, and engineered SPL detections and dashboards a SOC analyst could actually pivot on. The goal: give students and small orgs a free, realistic threat-detection playground.",
    stats: [
      { label: "Attack Scenarios Simulated", value: "4" },
      { label: "Custom SPL Detections", value: "10+" },
      { label: "Splunk Dashboards", value: "3" },
      { label: "Log Sources Ingested", value: "5" },
    ],
    methodology: [
      {
        title: "Design",
        body: "Modeled an enterprise topology in Cisco Packet Tracer — router, switch, DNS, web server and endpoints — then bridged into GNS3 for live traffic and attacker VMs.",
      },
      {
        title: "Attack",
        body: "Executed ARP spoofing (MITM), Nmap reconnaissance/service enumeration and Hydra credential-attack workflows from Kali against the simulated network.",
      },
      {
        title: "Detect",
        body: "Normalised logs into Splunk with custom sourcetypes; authored SPL queries and dashboards for baseline traffic, ARP anomalies, port scans and auth failures.",
      },
      {
        title: "Document",
        body: "Published attack + investigation runbooks in Markdown/GitHub — reproducible playbooks that other students can fork and extend.",
      },
    ],
    iocs: [
      { type: "Detection", value: "SPL — duplicate MAC / conflicting ARP replies → ARP spoofing" },
      { type: "Detection", value: "SPL — >100 SYN attempts to sequential ports in 60s → port scan" },
      { type: "Detection", value: "SPL — 10+ failed auths from single source in 5m → brute force" },
      { type: "Artifact", value: "PCAPs + Wireshark exports archived per scenario for teaching" },
      { type: "Technique", value: "T1595 Recon · T1557.002 ARP Poisoning · T1110 Brute Force" },
    ],
    takeaways: [
      "Realistic labs don't need enterprise budgets — Packet Tracer + GNS3 + Splunk Free is enough to teach real SOC skills.",
      "Detection engineering lives and dies on log normalisation — invest in sourcetypes before you write queries.",
      "Reproducible documentation multiplies impact: one lab becomes a curriculum when the README is right.",
    ],
  },
  {
    slug: "secure-banking-aws",
    category: "Cloud",
    name: "Secure & Scalable Banking on AWS",
    tag: "CLOUD SECURITY",
    period: "Apr 2025 — May 2025",
    description:
      "Cloud-native banking backend on AWS Lambda, API Gateway, DynamoDB, Aurora RDS and S3. Cognito + MFA authentication, IAM least-privilege, KMS at-rest and TLS in-transit encryption, Step Functions for loan-eligibility workflows, and CloudTrail / CloudWatch for full audit and compliance reporting.",
    stack: ["AWS Lambda", "Cognito · MFA", "KMS", "IAM", "CloudTrail", "Step Functions", "Flask"],
    image: "https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg",
    overview:
      "A serverless, secure-by-design banking backend on AWS. Authentication is enforced through Cognito with MFA, all data is protected with KMS at rest and TLS in transit, IAM policies follow least-privilege, and Step Functions orchestrate loan-eligibility workflows. Every action is captured via CloudTrail and CloudWatch — turning the platform into an auditable, compliance-ready system.",
    stats: [
      { label: "AWS Services Integrated", value: "13" },
      { label: "IAM Roles Scoped", value: "22" },
      { label: "REST Endpoints Hardened", value: "18" },
      { label: "KMS-Encrypted Stores", value: "100%" },
    ],
    methodology: [
      {
        title: "Model Threats",
        body: "STRIDE against the banking flows — authentication, transactions, loan eligibility, admin access.",
      },
      {
        title: "Architect Least-Privilege",
        body: "One IAM role per Lambda; deny-by-default on S3 and DynamoDB; KMS CMKs per data domain.",
      },
      {
        title: "Build Secure APIs",
        body: "Flask + API Gateway with Cognito authorisers; MFA enforced on privileged actions; TLS everywhere.",
      },
      {
        title: "Prove Compliance",
        body: "CloudTrail + CloudWatch dashboards; audit-ready documentation, control mappings and reporting artefacts for stakeholders.",
      },
    ],
    iocs: [
      { type: "Control", value: "AWS Config rule — encrypted-volumes across every RDS/S3 store" },
      { type: "Control", value: "IAM policy — MFA required for AssumeRole on privileged roles" },
      { type: "Control", value: "CloudTrail — organisation-wide trail with S3 log integrity validation" },
      { type: "Control", value: "KMS — CMK rotation enabled; customer-managed keys per environment" },
    ],
    takeaways: [
      "Secure-by-design costs less than retrofitting: the IAM boundaries baked in at day one paid off during every code review.",
      "MFA on the console is the cheapest, highest-impact control you can enforce on a financial workload.",
      "Executive-friendly compliance evidence lives in dashboards, not in PDF appendices.",
    ],
  },
  {
    slug: "digital-forensics-lab",
    category: "Forensics",
    name: "Digital Forensics Lab Simulation",
    tag: "FORENSICS",
    period: "2025",
    description:
      "Full forensics workflow across disk imaging, deleted-file recovery, steganography extraction and wireless / network analysis — using OSForensics, DiskDigger, DeepSound, Wireshark and Vistumbler, with structured evidence collection and incident reporting.",
    stack: ["OSForensics", "DiskDigger", "DeepSound", "Wireshark", "Vistumbler"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    overview:
      "A hands-on forensics simulation covering the full evidence lifecycle. I imaged disks and recovered deleted artefacts, extracted hidden payloads from steganographic audio, mapped wireless surface with Vistumbler and dissected suspicious traffic in Wireshark — then packaged the findings into a chain-of-custody-ready incident report.",
    stats: [
      { label: "Disk Images Processed", value: "4" },
      { label: "Files Recovered", value: "312" },
      { label: "Steg Payloads Extracted", value: "5" },
      { label: "Wireless Networks Mapped", value: "40+" },
    ],
    methodology: [
      {
        title: "Acquire",
        body: "Bit-for-bit disk imaging with hash verification; write-blocked evidence handling and chain-of-custody logging.",
      },
      {
        title: "Recover",
        body: "OSForensics + DiskDigger to surface deleted artefacts, browser histories and slack-space evidence.",
      },
      {
        title: "Analyse",
        body: "DeepSound for steganographic audio; Wireshark for suspicious traffic; Vistumbler for the wireless attack surface.",
      },
      {
        title: "Report",
        body: "Structured incident report — findings, hashes, timelines, and admissible evidence packaging.",
      },
    ],
    iocs: [
      { type: "Artifact", value: "Deleted browser history — indicated pre-incident recon activity" },
      { type: "Artifact", value: "DeepSound-embedded payload inside .wav — extracted keys / notes" },
      { type: "Signal", value: "Rogue SSID with WPS enabled detected on adjacent channel" },
      { type: "Hash", value: "MD5/SHA1/SHA256 recorded and verified for every acquired image" },
    ],
    takeaways: [
      "Evidence integrity dies without hashes and chain-of-custody — treat both as non-negotiable.",
      "Steganography is rare but devastating when missed; audit media files if the case allows it.",
      "Wireless recon is under-used — Vistumbler will surface risks that never touch the wire.",
    ],
  },
  {
    slug: "sonarqube-jenkins-devsecops",
    category: "DevSecOps",
    name: "SonarQube & Jenkins Secure CI/CD",
    tag: "DEVSECOPS",
    period: "Jan 2025 — Feb 2025",
    description:
      "Secure SDLC pipeline with Jenkins, SonarQube, GitHub Actions and Dockerized scanners — quality gates, static analysis, automated API validation and Jira-backed vulnerability tracking, embedding DevSecOps into every release.",
    stack: ["Jenkins", "SonarQube", "GitHub Actions", "Docker", "Jira", "Quality Gates"],
    image:
      "https://images.unsplash.com/photo-1613749030206-9f59d27a28b8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    overview:
      "A DevSecOps pipeline that shifts security left — automated static analysis, quality gates, Docker-based scanners and API tests all wired into Jenkins and GitHub Actions. Vulnerabilities flow into Jira with owners, SLAs and dashboards, so security becomes a first-class citizen of the release cycle rather than a blocker at the end.",
    stats: [
      { label: "Pipelines Automated", value: "8" },
      { label: "Quality Gates Enforced", value: "14" },
      { label: "SAST Findings Triaged", value: "220+" },
      { label: "Manual Release Effort Cut", value: "30%" },
    ],
    methodology: [
      {
        title: "Baseline",
        body: "Establish SonarQube quality gates for coverage, duplication, complexity and vulnerability severity.",
      },
      {
        title: "Automate",
        body: "Jenkins + GitHub Actions run scans on every PR; Docker containers isolate tools and produce portable results.",
      },
      {
        title: "Triage",
        body: "Findings flow into Jira with severity, ownership and SLA — no dead-letter tickets, no orphaned bugs.",
      },
      {
        title: "Prove",
        body: "Dashboards for engineering + leadership: defect density, mean-time-to-remediate, quality-gate pass rate.",
      },
    ],
    iocs: [
      { type: "Gate", value: "Reliability Rating ≥ A · Security Rating ≥ A · Coverage ≥ 80%" },
      { type: "Signal", value: "SAST → Critical / High → auto-fail build + open Jira" },
      { type: "Signal", value: "Container scan → CVE ≥ 7.0 → block promotion to prod" },
      { type: "Signal", value: "Secret detection on diff → block merge + alert channel" },
    ],
    takeaways: [
      "A pipeline is only secure if it fails loudly — quality gates must actually block, not warn.",
      "Ownership beats detection: every finding needs a name, an SLA and a dashboard.",
      "DevSecOps culture wins when developers get feedback in minutes, not sprint reviews.",
    ],
  },
  {
    slug: "gmis-ctf-workshop",
    category: "OffSec",
    name: "GMiS CTF Workshop — Design & Host",
    tag: "OFFSEC · WORKSHOP",
    period: "2025",
    description:
      "Designed and hosted a Capture the Flag workshop for 350+ participants on CTFd/Flask — authored OWASP Top 10 challenges, hardened the CTF infrastructure, mentored teams live and led the security-awareness curriculum end-to-end.",
    stack: ["CTFd", "Flask", "Python", "OWASP Top 10", "Web Security"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    impact: "350+ PARTICIPANTS",
    overview:
      "I designed and hosted the GMiS Capture the Flag workshop end-to-end — from authoring OWASP Top 10 challenges on CTFd and hardening the infrastructure, to live-mentoring 350+ participants through the exercises. The mission was security awareness at scale, delivered through an event people actually wanted to attend.",
    stats: [
      { label: "Participants", value: "350+" },
      { label: "Challenges Authored", value: "18" },
      { label: "OWASP Categories Covered", value: "10" },
      { label: "Workshops Delivered", value: "1 flagship" },
    ],
    methodology: [
      {
        title: "Design",
        body: "Map challenges to OWASP Top 10 — Injection, Broken Auth, XSS, IDOR, SSRF, deserialization and more.",
      },
      {
        title: "Build",
        body: "Author challenges in Flask/Python; ship them on CTFd with rate limits, hints and staged difficulty.",
      },
      {
        title: "Harden",
        body: "Lock down the CTFd infrastructure — container isolation, TLS, IAM, backups and abuse-resistant rate limits.",
      },
      {
        title: "Facilitate",
        body: "Live mentorship, opening + closing talks, and post-event debrief with take-home material and career pointers.",
      },
    ],
    iocs: [
      { type: "Challenge", value: "web/auth-1 — Broken authentication via predictable JWT secret" },
      { type: "Challenge", value: "web/injection-3 — Blind SQLi over time-based oracle" },
      { type: "Challenge", value: "misc/steg-1 — Payload hidden in PNG least-significant bits" },
      { type: "Control", value: "Rate-limit + WAF on CTFd surface to block brute force" },
    ],
    takeaways: [
      "Security awareness sticks when people play with the vulnerabilities, not when they watch slides.",
      "Great CTF authors write challenges with a story — bad ones write puzzles.",
      "Hosting infra for 350+ concurrent users is its own security exercise — practice what you preach.",
    ],
  },
  {
    slug: "llm-red-team-guardrails",
    category: "AI Security",
    name: "LLM Red Team & Guardrail Security Lab",
    tag: "AI SECURITY · RED + BLUE",
    period: "Aug 2025 — Aug 2026",
    githubUrl: "https://github.com/sanidhyamalhotra/LLM-RedTeam",
    impact: "12.5% → 0%",
    description:
      "Self-hosted LLM security lab: 15 structured adversarial tests across two rounds uncovered a system-prompt extraction flaw and a guardrail-bypass via output reformatting. I engineered a custom two-layer defense and independently re-verified — driving attack success rate from 12.5% at baseline to 0% on the final defended system.",
    stack: ["Ollama", "Flask", "Python", "SQLite", "MITRE ATLAS", "Prompt Injection"],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
    overview:
      "A locally-hosted LLM chatbot with a protected secret in its system prompt, purpose-built as an adversarial playground. Over two structured rounds — baseline prompt injection/jailbreaking, then advanced guardrail-evasion — I ran 15 adversarial tests, discovered two real vulnerabilities (system-prompt extraction and an output-reformatting bypass), engineered a two-layer defense (input pattern flagging + output secret/leak detection) and independently re-verified. Baseline ASR of 12.5% dropped to 0% on the final defended system.",
    stats: [
      { label: "Adversarial Tests Run", value: "15" },
      { label: "Real Vulnerabilities Found", value: "2" },
      { label: "Baseline Attack Success Rate", value: "12.5%" },
      { label: "Post-Defense ASR", value: "0%" },
    ],
    methodology: [
      {
        title: "Deploy",
        body: "Stood up a self-hosted Ollama + Flask chatbot with SQLite logging and a protected sensitive secret in its system prompt to emulate a real internal LLM deployment.",
      },
      {
        title: "Red Team",
        body: "Two rounds of structured adversarial tests — direct prompt injection, jailbreaks, role-play attacks and advanced guardrail-evasion — mapped to MITRE ATLAS techniques.",
      },
      {
        title: "Harden",
        body: "Engineered a two-layer guardrail: input pattern flagging on the way in and output secret/leak detection on the way out; iterated based on logged failures.",
      },
      {
        title: "Re-Verify",
        body: "Independently re-ran the full adversarial suite plus a log re-scan tool; produced a pentest-style findings report with root cause analysis and production recommendations.",
      },
    ],
    iocs: [
      { type: "Finding", value: "V-01 — System prompt extraction via layered role-play + delimiter abuse" },
      { type: "Finding", value: "V-02 — Guardrail bypass through output reformatting (base64 / rot13 / poetry)" },
      { type: "Defense", value: "Input layer — regex + intent classifier flagging injection patterns" },
      { type: "Defense", value: "Output layer — secret/leak detector scanning every response before send" },
      { type: "Technique", value: "MITRE ATLAS AML.T0051 — Prompt Injection · AML.T0057 — LLM Data Leakage" },
    ],
    takeaways: [
      "Reduced LLM attack success rate from 12.5% to 0% through custom guardrail engineering, validated across 15 adversarial tests.",
      "Prompt-only defenses fail — real guardrails need input AND output inspection, plus deterministic detectors.",
      "AI red teaming is pentesting with new primitives — MITRE ATLAS + reproducible test suites make the work rigorous.",
    ],
  },
];

export const skills = [
  {
    group: "Security Operations",
    items: [
      "Splunk (SIEM)",
      "Security Onion",
      "Wireshark",
      "Threat Detection",
      "Threat Intelligence",
      "Incident Response",
      "Incident Triage & Escalation",
      "IOC Analysis",
      "Log Analysis",
      "MITRE ATT&CK",
      "Security Monitoring",
    ],
  },
  {
    group: "Cloud Security",
    items: [
      "AWS IAM",
      "KMS",
      "Cognito · MFA",
      "CloudTrail",
      "CloudWatch",
      "S3 · EC2 · Lambda",
      "RBAC",
      "Access Control",
      "Encryption Standards",
    ],
  },
  {
    group: "Risk & Governance",
    items: [
      "ISO 27001",
      "SOC 2",
      "Risk Assessments",
      "Security Policies",
      "Compliance Reporting",
      "Third-Party Risk",
      "Risk Communication",
      "Control Documentation",
      "Jira",
    ],
  },
  {
    group: "Security Communications",
    items: [
      "Security Awareness",
      "Technical Writing",
      "Security Documentation",
      "Awareness Content",
      "Executive Reporting",
      "Training Delivery",
      "Workshop Facilitation",
      "Stakeholder Engagement",
    ],
  },
  {
    group: "Application Security",
    items: [
      "OWASP Top 10",
      "JWT Auth",
      "XSS / CSRF / SQLi",
      "Secure Coding",
      "Code Review",
      "SonarQube",
    ],
  },
  {
    group: "Programming & Tools",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
      "REST APIs",
      "Git",
      "GitHub Actions",
      "Jenkins",
    ],
  },
];

export const education = [
  {
    degree: "M.S. Cybersecurity",
    school: "California State University, Dominguez Hills",
    period: "May 2026",
    detail: "Info Security · Cyber Forensics · CyberOps · Cloud DevSecOps · Network Security",
  },
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "IK Gujral Punjab Technical University",
    period: "Jun 2021",
    detail: "Networking · Data Structures · Simulation & Modeling · AI · OOPS",
  },
];

export const certifications = [
  "CompTIA Security+",
  "ISC2 Certified in Cybersecurity (CC)",
];

export const marqueeItems = [
  "SOC ANALYST",
  "INCIDENT RESPONSE",
  "THREAT INTELLIGENCE",
  "MITRE ATT&CK",
  "CLOUD SECURITY",
  "DEVSECOPS",
  "RISK & COMPLIANCE",
];

export const impactMetrics = [
  { value: 4, suffix: "+", label: "Years Enterprise Experience" },
  { value: 350, suffix: "+", label: "CTF Participants Mentored" },
  { value: 20, suffix: "+", label: "MITRE ATT&CK Techniques Covered" },
  { value: 8, suffix: "", label: "Security Case Files Shipped" },
];

export const projectCategories = ["All", "Blue Team", "SOC", "Cloud", "DevSecOps", "Forensics", "OffSec", "AI Security"];
