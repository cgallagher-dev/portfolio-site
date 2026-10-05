export const projects = [
  {
    title: "Small Agent Safety Evaluation",
    kind: "personal",
    label: "Final-year project",
    status: "In progress",
    featured: true,
    summary:
      "When a small AI agent fails a harmful task, it might have refused, or it might just not be capable of doing it. Most safety scores can't tell those apart. I'm building an open-source tool that pairs each harmful task with a harmless one using the same tools, so you can see which.",
    outcome:
      "I'll use it to compare three sizes of Qwen3.5 (4B, 9B and 27B), with reasoning on and off. It's built on Inspect AI and AgentHarm, test-first, with a CLI, a local dashboard and PDF reports.",
    stack: ["Python", "Inspect AI", "AgentHarm", "Ollama", "pytest"],
  },
  {
    title: "Knowledge Agent for a Multi-Agent Platform",
    kind: "work",
    label: "HPE, Jun 2026 - Present",
    featured: true,
    summary:
      "An agent that the other agents on a multi-agent platform can ask when they need to look something up. It pulls product docs and asset data through MCP, and the answer it hands back is put together in code rather than written by the model, so it can be trusted.",
    outcome:
      "It became the innovation team's fastest proof of concept to make it onto the product roadmap. It also led to a patent mining session and two papers I co-wrote.",
    stack: ["Python", "Google ADK", "A2A", "MCP", "FastAPI", "pgvector", "Docker"],
  },
  {
    title: "AI Report Generation Tool",
    kind: "work",
    label: "HPE, Jan - Jun 2026",
    featured: true,
    summary:
      "Sales engineers upload a spreadsheet of a customer's hardware and get back a finished report. Python does the number crunching, an LLM writes the narrative, and Pydantic schemas catch any output that doesn't fit before it reaches the document. Reports export to Word, PowerPoint, PDF or Excel.",
    outcome:
      "I led the architecture and backend. It went from an empty repo to production approval in ten weeks, with over 100 tests and a Kubernetes deployment, and it's now been productised. It also won me a Bronze Star.",
    stack: ["Python", "Pandas", "Pydantic", "React", "Grommet", "Docker", "Kubernetes"],
  },
  {
    title: "Agentic Cloud Migration Platform",
    kind: "work",
    label: "HPE, Feb - Jul 2026",
    featured: true,
    summary:
      "A large platform that uses AI agents to help move workloads to the cloud, built by teams in Galway, India and the US. I built two of its action agents: a storage agent, and a pre-flight agent that checks an environment is ready before a migration starts.",
    outcome:
      "I also worked on the frontend, and was picked for the small team that built the demo for a major industry conference, turning the UX team's research and Figma designs into a working UI.",
    stack: ["TypeScript", "React", "Go", "Figma"],
  },
  {
    title: "Storage Health Check Tool",
    kind: "work",
    label: "HPE, Sep 2026 - Present",
    status: "In progress",
    summary:
      "A web app that walks solution architects through turning storage array exports into a health check report, so every report is checked the same way. It validates the data before running any analysis, and throws out any AI-written wording that changes a number.",
    stack: ["Python", "FastAPI", "Pandas", "React", "Grommet", "python-pptx", "Docker"],
  },
  {
    title: "bee-safe-cv",
    kind: "personal",
    label: "RUN-EU Short Advanced Programme",
    summary:
      "A phone app that spots Varroa mites on honeybees and tells male and female bees apart, running the model on the phone with no internet needed. I built it with an international student team using Scrum.",
    outcome:
      "We presented it to staff and industry partners at Howest University of Applied Sciences in Belgium.",
    stack: ["Python", "YOLOv8", "TensorFlow Lite", "Flutter", "Roboflow"],
    detailPage: "/projects/bee-safe-cv",
  },
  {
    title: "distributed-inventory-manager",
    kind: "personal",
    label: "Coursework, team project",
    summary:
      "A command-line inventory and sales tool for a liquor store, built as a team over several sprints. Managers and clerks log in with their own roles to manage stock, record sales and export reports.",
    outcome:
      "The real focus was the process: user stories and epics in Jira, design docs in Confluence, and a Jenkins pipeline running tests and SonarQube analysis on every change.",
    stack: ["Python", "SQLite", "Pytest", "Jenkins", "SonarQube", "Jira", "Confluence"],
    code: "https://github.com/cgallagher-dev/distributed-inventory-manager-project",
    detailPage: "/projects/distributed-inventory-management",
  },
  {
    title: "mushroom-classifier",
    kind: "personal",
    label: "Coursework",
    summary:
      "A model that predicts whether a mushroom is safe to eat. I used a decision tree so you can follow exactly why it made each call.",
    stack: ["Python", "scikit-learn", "Pandas", "PyQt5"],
    code: "https://github.com/cgallagher-dev/mushroom-classifier",
    detailPage: "/projects/mushroom-classifier",
  },
];
