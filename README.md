# DevBox
Full-stack developer utility box featuring a web terminal, snippet manager, and real-time analytics. Built with Flask, React, and modern web tech.

## Overview:

DevBox is your all-in-one browser-based developer companion. Whether you're quickly testing commands in a terminal, saving your favourite code snippets, or checking usage patterns, DevBox helps streamline your workflow.

---

## Features:

- **Web Terminal:** Run and test shell commands right in your browser.
- **Snippet Manager:** Save, organize, and reuse code snippets across multiple languages.
- **Analytics Dashboard:** Track your usage and see which tools you use most.

---

## Tech Stack:

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Flask, Flask-SocketIO, REST API
- **Database:** PostgreSQL
- **Other Tools:** Docker, WebSockets, Heroku (or Render), GitHub Actions (CI/CD)

---

## Project Structure:

DevBox/
  ├── backend/ # Flask backend
    │ ├── app.py # Main app entry
    │ ├── api/ # REST API routes
    │ │ └── terminal.py # Web terminal logic
    │ ├── models/ # DB models
│ ├── utils/ # Helper functions
│ ├── config.py # Config & env loading
│ └── requirements.txt # Python dependencies
│
├── frontend/ # React frontend
│ ├── public/
│ └── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
│
├── scripts/ # Utility or deployment scripts
│ └── init_db.py # Example DB init script
│
├── docs/ # UML diagrams and documentation
│ ├── architecture.png
│ └── api_routes.md
│
├── .env.example # Sample environment variables
├── .gitignore
├── README.md
└── docker-compose.yml # Dev setup
