```markdown
# AI Context Minimizer & E2E Testing Lab

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)
![Playwright](https://img.shields.io/badge/Playwright-Automated-blue.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Build: Passing](https://img.shields.io/badge/Build-Passing-brightgreen.svg)

## Description
A lightweight local developer utility designed to solve token limit bottlenecks when feeding code to LLMs, and to maintain UI tests for complex dashboards. It parses local project structures into condensed dependency graphs (drastically reducing context-window payloads) and orchestrates headless browser automation for transactional UI state validation.

## Table of Contents
- [Prerequisites & Tech Stack](#prerequisites--tech-stack)
- [Installation](#installation)
- [Usage / Quickstart](#usage--quickstart)
- [Features](#features)

## Prerequisites & Tech Stack
Before running this project, ensure you have the following installed:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (Node Package Manager)
* **Core Stack**: JavaScript (ES6+), Node.js `fs` module, Playwright (`@playwright/test`)

## Installation
Follow these steps to set up the software environment locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Nikhilandhale/ai-dev-utility.git](https://github.com/Nikhilandhale/ai-dev-utility.git)
   cd ai-dev-utility

```

2. **Install project dependencies:**
```bash
npm install

```


3. **Install Playwright browser binaries:**
```bash
npx playwright install chromium

```



## Usage / Quickstart

This repository contains two primary utilities. You can execute them directly from your terminal.

**1. Generating the Code Dependency Graph**
Reads the `/src` directory, extracts `import` statements, and builds a JSON context map for LLM consumption.

```bash
node index.js

```

*Expected Output:* A JSON tree mapping the file relationships printed to your console.

**2. Running the Agentic UI Test**
Launches a Chromium browser session to interact with the mock Data Lineage dashboard and validates the DOM response.

```bash
node tester.js

```

*Expected Output:* The browser will execute the transaction trace simulation, and the terminal will output the validated success state.

## Features

* **AST-Inspired Static Dependency Graphing:** Utilizes regex-based token scanning to map file relationships, minimizing input tokens for external AI agents.
* **Automated Agentic Testing:** Leverages Playwright to programmatically orchestrate browser sessions and assert UI state mutations.
* **Mock Fintech Environment:** Includes a pre-configured `src/index.html` simulating high-compliance BFSI data flows for testing validation logic.
* **Zero-Persistence Execution:** Runs entirely locally without requiring external database connections or persistent state.
