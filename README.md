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
    DEVBOX
    |-- backend
    |   |-- app.py
    |   |-- config.py
    |   |-- requirements.txt
    |   |-- api
    |   |   |-- terminal.py
    |   |-- models
    |   |-- utils
    |
    |-- frontend
    |   |-- public
    |   |-- src
    |       |-- assets
    |       |-- components
    |       |-- pages
    |       |-- App.jsx
    |       |-- main.jsx
    |
    |-- scripts
    |   |-- init_db.py
    |
    |-- docs
    |   |-- architecture.png
    |   |-- api_routes.md
    |
    |-- .env.example
    |-- .gitignore
    |-- docker-compose.yml
    |-- README.md

