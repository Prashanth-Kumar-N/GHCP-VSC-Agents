# Custom Copilot Agents — Base Package

A set of VS Code GitHub Copilot custom agents (`.agent.md` files) designed as
a shared base that individual projects can adopt and customize. This README
documents the package conventions. It is for humans — Copilot does not read it.

## Where these files go

Place agent files in `.github/agents/` at the root of the repo (or workspace
root, if using a multi-root `.code-workspace` setup):

```
.github/agents/
  planner.agent.md
  impact-analysis.agent.md       (not yet built)
  estimation.agent.md            (not yet built)
  onboarding.agent.md            (not yet built)
  angular-code-review.agent.md   (not yet built)
  react-code-review.agent.md     (not yet built)
  dotnet-code-review.agent.md    (not yet built)
  angular-test-gen.agent.md      (not yet built)
  react-test-gen.agent.md        (not yet built)
  dotnet-test-gen.agent.md       (not yet built)
```

Selecting an agent happens in VS Code via the agent picker in the Copilot
Chat panel.

## Required companion config: MCP servers

MCP Server Configuration
Atlassian (Jira) — ship as-is, no editing required

The Atlassian MCP server entry contains no secrets, tokens, or project-specific
values — it points to Atlassian's shared multi-tenant endpoint, identical for
every user and every project:

json
{
  "servers": {
    "atlassian": {
      "url": "https://mcp.atlassian.com/v1/mcp/authv2",
      "type": "http"
    }
  }
}

Authentication happens interactively via OAuth the first time a developer
uses an agent that needs it (Planner, later Estimation). VS Code prompts a
browser login, and the developer authorizes whichever Jira site they have
access to — a personal sandbox, or the org's real Jira. Nothing in this file
changes between those cases, so it's safe to bundle unedited in this package.

Future servers that need real secrets — use inputs, not placeholders

If a future agent needs a server with a genuine secret (an internal API
token, a self-hosted Jira/Confluence instance, GitHub Enterprise PAT, etc.),
do not ship a "mock value — please edit" file. Use VS Code's inputs
mechanism instead:

json
{
  "inputs": [
    {
      "id": "internal-api-token",
      "type": "promptString",
      "description": "Internal API token",
      "password": true
    }
  ],
  "servers": {
    "internal-service": {
      "url": "https://internal.example.com/mcp",
      "headers": { "Authorization": "Bearer ${input:internal-api-token}" }
    }
  }
}

The committed file holds no real value — VS Code prompts each developer once
on first use and stores the secret in its own secure storage, not in the
JSON. This is safe to commit/bundle, unlike a placeholder file that relies on
everyone remembering to edit it (and risks someone committing a real secret
into that spot by accident).

Where to put the config — workspace vs. user profile

Consuming teams should choose based on how broadly they want these agents
available:

Workspace (.mcp.json, committed to the repo) — scopes the
server to this one project. Shared automatically with anyone who clones
the repo. Best if a team only wants these agents on one codebase.
User profile (Command Palette → MCP: Open User Configuration) —
scopes the server to the developer's VS Code profile, active across
every workspace they open, and syncs across machines via Settings
Sync. Best if a developer uses these agents across multiple repos/projects
and doesn't want to duplicate the config into each one.

Either location works with the agents in this package unchanged — the
.agent.md files don't care which scope the server was registered at, only
that it's active when the agent runs.

## Multi-repo setup

Some agents (Planner, Impact Analysis, Estimation, Onboarding) reason across
both a frontend and backend repo. They do **not** require the repos to be
physically nested under one folder. Either of the following satisfies them:

1. **Single parent folder**, both repos as subfolders, opened as one VS Code
   workspace.
2. **Multi-root workspace** — a `.code-workspace` file listing both repo
   paths as separate `folders` entries. Preferred when repos live in
   separate locations and shouldn't be re-nested on disk.

   ```json
   {
     "folders": [
       { "path": "/path/to/frontend-repo" },
       { "path": "/path/to/backend-repo" }
     ]
   }
   ```

Note: Copilot/Claude agent sessions reaching across all workspace roots was
only added to VS Code in version 1.136 (late Aug/Sep 2026) and is marked
**experimental**. Confirm behavior on your team's VS Code version before
relying on it.

## Workspace Scope Check — shared pattern

Several agents need to detect when a task requires a repo that isn't open in
the current workspace, and handle it consistently. The **explanation
wording** is canonical and copy-pasted verbatim into each agent's body (no
`.agent.md` include mechanism exists, so this must be kept in sync by hand).
What differs per agent is the **action taken** after the explanation:

| Agent | Default action when a needed repo is missing |
|---|---|
| Planner | **Ask first.** Stop, explain what's missing and why, then offer: proceed scoped to open repo(s), or wait for the other repo to be opened. Does not proceed until the user responds. |
| Impact Analysis | **Ask first.** Same pattern as Planner — a missed consumer is the exact failure mode this agent exists to prevent. |
| Estimation | **Proceed with partial, label clearly.** Estimates only the open repo(s); marks the missing layer in the output (e.g. `Backend: Not estimated — backend repo not open`). Exception: if the ticket explicitly names a specific other repo/service, ask once first. |
| Onboarding | **Proceed with partial, label clearly — never asks.** Onboarding to "half the system" is still useful on its own; output is headed with a `Scope:` line listing what's open. |

When adding or editing this logic in any agent file, use this canonical
phrasing for the explanation step:

> Identify what's missing and explain plainly why it matters for this
> specific task (not a generic "repo not found" message).

Then apply that agent's own default action (ask vs. partial) from the table
above.

## Agents in this package

### Planner (`planner.agent.md`) — included in this delivery
Takes a Jira ticket key, fetches the ticket and its parent via the Atlassian
MCP server, explores the currently open repo(s), and produces an
implementation plan (affected areas, proposed steps, open questions/risks,
and a single Complexity label — no hours or breakdown; that detail belongs
to the Estimation agent). Uses the ask-first workspace scope pattern.

Operates in two phases:
- **Plan** (always runs, read-only) — produces the plan and ends by asking
  whether to implement it.
- **Implement** (gated) — only runs on explicit approval. If the plan was
  scope-limited (a repo wasn't open), re-confirms before implementing on
  that partial basis. Implements only what the approved plan describes;
  does not write tests (defers to the Test Generation agent) and does not
  silently expand scope if something unexpected turns up mid-implementation.

### Planned, not yet built
- **Impact Analysis** — scans frontend/backend/DB usage for a given
  API/component/table and reports what else would break. Ask-first pattern.
  Read-only — no implement phase.
- **Estimation** — reads a ticket + repo, produces complexity + hours by
  discipline (frontend/backend/testing), flags missing acceptance criteria.
  Partial-with-label pattern. Read-only — no implement phase.
- **Onboarding** — explains the open repo(s): architecture, build process,
  important modules, coding standards, common workflows. No MCP needed.
  Partial-with-label pattern (never asks). Read-only — no implement phase.
- **Code Review** (Angular / React / .NET) — per-stack review agents, no
  MCP needed, operate on diff/PR only.
- **Test Generation** (Angular / React / .NET) — generates/extends unit
  tests for a diff or user-specified file(s), no MCP needed.

**Note:** Planner is intentionally the only agent in this package with edit
permissions (`editFiles` in its tools list), and only uses them after
explicit approval. All other agents stay strictly read-only — keep it that
way when building them, since giving multiple agents write access multiplies
the review burden for any team adopting this package.

## Adoption notes for consuming projects

- Single-repo agents (code review, test generation) need no MCP server and
  no multi-root setup — drop in the relevant `.agent.md` files only.
- A project without Jira access can omit Planner and Estimation entirely
  without affecting the other agents.
- A project that's frontend-only or backend-only can still use Onboarding
  and Estimation (with partial output); Impact Analysis and Planner will
  prompt to open the other repo if the task needs it.
