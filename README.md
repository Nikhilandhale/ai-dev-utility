# AI Context Minimizer & E2E Testing Lab

A lightweight developer utility that helps reduce the amount of source code shared with Large Language Models (LLMs) by generating a simplified project dependency map. The repository also includes Playwright-based end-to-end tests for validating UI workflows.

## Features

- Generate a dependency map from a local JavaScript project
- Reduce code context before sharing with AI tools
- Playwright-based browser automation for UI testing
- Local execution with no external services required

---

## Tech Stack

- Node.js
- JavaScript (ES6+)
- Playwright

---

## Project Structure

```
.
├── index.js          # Dependency graph generator
├── tester.js         # Playwright automation
├── src/              # Sample application
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/Nikhilandhale/ai-dev-utility.git
cd ai-dev-utility
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium
```

---

## Usage

### Generate Dependency Graph

```bash
node index.js
```

This scans the project, identifies module imports, and generates a simplified dependency structure that can be shared with LLMs instead of sending the complete source code.

### Run UI Tests

```bash
node tester.js
```

This launches a Chromium browser using Playwright and executes the configured end-to-end test flow.

---

## Example Use Cases

- Reduce token usage when working with AI coding assistants
- Understand project dependencies
- Validate UI behaviour through browser automation
- Experiment with Playwright testing

---

## Future Improvements

- TypeScript support
- Better dependency visualization
- Export graph as JSON or Mermaid
- Support for additional project structures

---

## License

This project is licensed under the MIT License.
