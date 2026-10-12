# Changelog — Planner & Implementer Base Package

This tracks the **base package** as distributed. If you've forked and
customized `planner.agent.md` or `implementer.agent.md` for your team,
these entries stop describing what you're actually running the moment
you make your first local edit — track your own changes separately
rather than continuing this file for a fork.

## Planner

- **3.1** — Added a tag-correctness self-check: before finalizing a plan,
  verify each Proposed Step's `[React]`/`[.NET]`/`[Shared]` tag actually
  matches the file/area it describes, and fix any mismatch before
  presenting the plan. (A mistagged step causes Implementer to either
  skip real work silently or apply it against the wrong stack's context,
  with no signal to the user — this check closes that gap.)
- **3.0** — Consolidated two stack-specific handoffs into a single
  "Implement Changes" button routed to the unified `implementer` agent,
  which auto-detects applicable stacks from open repos instead of the
  user picking one. Added the mandatory Version Compatibility section
  requiring every plan to state the manual-invocation fallback as a
  primary instruction, not a conditional footnote, since VS Code version
  can't be detected from inside the agent.
- **2.0** — Split implementation out of this agent entirely. Removed the
  Implementation Phase, the `editFiles` tool, and all implement-specific
  constraints — this agent became read-only with no edit capability at
  all. Added stack tagging (`[React]`/`[.NET]`/`[Shared]`) to Proposed
  Steps and handoffs to stack-specific implementer agents (superseded by
  the single `implementer` agent in 3.0).
- **1.1** — (as the combined Planner-Implementer agent) Added
  ticket-content injection defense, explicit decline handling, repo-scope
  clarification for unrelated folders, pre-implementation working-tree
  reminder, post-implementation Acceptance Criteria cross-check, fixed an
  Output Format Parent-line drift bug.
- **1.0** — (as the combined Planner-Implementer agent) Initial release:
  two-phase Plan/Implement flow, read-only Jira access, hard-stop on
  ticket fetch failure, ask-first workspace scope check, secrets
  guardrail, parent-fetch graceful degradation.

## Implementer

- **1.2** — Added multi-plan disambiguation (ask which plan, if more
  than one is visible in context, rather than assuming the most recent).
  Added resume-without-redo logic (on re-invocation against a plan with a
  prior partial run, only attempt previously incomplete/skipped steps).
  Reframed Acceptance Criteria output as an explicitly advisory note for
  human review ("looks addressed" / "looks not addressed" / "can't judge
  from the diff") rather than language implying a verified result — this
  is a reading of the diff, not a test run, and the previous "Addressed /
  Not addressed" wording overstated that. Trimmed the missing-standards-
  file fallback to one generic rule instead of Angular-specific text.
  Fixed a workflow step-numbering bug (two steps were both labeled "3").
- **1.1** — Added explicit consultation of stack-specific standards files
  (`.github/instructions/react.instructions.md`,
  `.github/instructions/dotnet.instructions.md`) before implementing each
  stack's steps, with a defined fallback and disclosure when a stack has
  no standards file yet. Added "Standards Applied" to the final summary.
- **1.0** — Consolidated from an earlier two-agent (`react-implementer` /
  `dotnet-implementer`) split into a single agent that auto-detects
  applicable stacks from open repos. Replaced manual stack selection with
  automatic repo detection; added explicit "Skipped — Repo Not Open"
  reporting naming the specific missing repo/stack.

## Known limitations (accepted, not yet solved)

See the README's "Known Limitations" section for the current list —
kept there rather than duplicated here so there's one place to check.
