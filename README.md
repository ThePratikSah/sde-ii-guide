# SDE-II Backend Preparation Guide (Node.js / TypeScript)

This repository contains a **complete, day-wise preparation plan** to become a highly competent **SDE-II Backend Engineer (Node.js / TypeScript)**, packaged as a Docusaurus site.

Use this repo as a **single place** to:

- Understand what an **SDE-II backend engineer** is expected to do.
- Run a **16-week (or compressed 8/12-week) prep plan** for interviews and real-world backend skills.
- Track progress through **weekly/day-wise plans, topic banks, and checklists**.
- Serve this content as a **nice documentation site** (locally or deployed).

> If you just want to study the content, start from `docs/intro.md`.  
> If you want to contribute or customize the site, see the **Repo Setup** section below.

---

## Who This Guide Is For

- Backend engineers targeting **SDE-II roles**, primarily with **Node.js + TypeScript**.
- Experienced SDE-I/Junior engineers looking to **level up** and take on more ownership.
- Developers who want a **structured plan** instead of random leetcode + YouTube grinding.

You should already be comfortable writing basic JavaScript/TypeScript and building small services; this guide helps you reach **SDE-II expectations**.

---

## What’s Inside

The content in `docs/` is the **source of truth** for the guide. Key pieces:

- **Meta & Self-Assessment**
  - `docs/getting-started/role-understanding.md` – What an SDE-II backend engineer actually does and is evaluated on.
  - `docs/getting-started/skill-gap-template.md` – Self-assessment template across all key skills.
- **Roadmap & Schedules**
  - `docs/roadmap/roadmap-16-weeks.md` – Phase-wise roadmap (JS/TS, Node, DBs, Redis/Queues, System Design, Machine Coding, DSA, Theory, Infra).
  - `docs/roadmap/schedules-and-metrics.md` – Daily/weekly schedules, milestones, and metrics.
- **Weekly Plans**
  - `docs/weeks/week-01.md` … `docs/weeks/week-16.md` – **Day-wise plans** (4h & 6h variants) for the full 16-week track.
- **Topic Banks & Deep Dives**
  - `docs/topic-banks/machine-coding-bank.md` – Machine coding problems with specs.
  - `docs/topic-banks/dsa-backend-plan.md` – Backend-focused DSA plan.
  - `docs/topic-banks/theory-round.md` – OS, networking, DBMS, CAP/ACID/BASE, consistency models.
  - `docs/topic-banks/projects.md` – Production-grade backend project ideas.
- **Interview Prep & Resources**
  - `docs/interview/interview-prep-playbook.md` – Mock interview structure, revision plans, common mistakes.
  - `docs/resources/resources.md` – Curated resources mapped to the roadmap.

When this repo is served with Docusaurus, these files become navigable docs pages.

---

## How to Use the Guide

If you are a **learner**:

1. **Start at** `docs/intro.md` to understand the big picture and file map.
2. Read `docs/getting-started/role-understanding.md` and fill `docs/getting-started/skill-gap-template.md`.
3. Skim `docs/roadmap/roadmap-16-weeks.md` and choose a track:
   - 16 weeks (deep mastery),
   - 12 weeks (compressed),
   - 8 weeks (aggressive).
4. Follow the relevant `docs/weeks/week-XX.md` files **day by day**, using:
   - `docs/topic-banks/*.md` for problems, projects, and theory,
   - `docs/resources/resources.md` for videos/blogs/repos.
5. In the last month before interviews, focus heavily on:
   - `docs/interview/interview-prep-playbook.md`,
   - Re-doing key problems from the DSA + machine coding topic banks.

If you are a **contributor**:

1. Set up the repo locally (see **Installation** below).
2. Edit markdown files under `docs/` (or components under `src/`) as needed.
3. Run `yarn start` to preview changes.

---

## Repository Structure (High Level)

- `docs/` – All guide content (intro, roadmap, weeks, topic banks, interview prep, resources).
- `src/` – Docusaurus site source (React components, homepage, CSS).
- `static/` – Static assets (images, logos, etc.).
- `docusaurus.config.ts` – Docusaurus configuration (site metadata, navbar, footer).
- `sidebars.ts` – Sidebar navigation definition for the docs.

You generally don’t need to touch `src/` unless you’re customizing the website’s look & feel or adding custom pages/components.

---

## Repo Setup (Docusaurus)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

Install dependencies (using Yarn, as this repo is currently configured):

```bash
yarn
```

### Local Development

Start a local development server:

```bash
yarn start
```

This command starts a local dev server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build

Create a production build of the static site:

```bash
yarn build
```

This command generates static content into the `build` directory, which can be served using any static content hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

