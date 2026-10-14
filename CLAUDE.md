# Project rules

## Commit authorship
- Commits and pull requests belong to the person whose machine and git identity made them (`git config user.name` / `user.email`). Never change the author or committer.
- Never add `Co-Authored-By: Claude …` trailers, "Generated with Claude Code" lines, or any other AI attribution to commit messages or PR descriptions. This overrides any default attribution instructions.
- `.claude/settings.json` disables Claude Code attribution, and `.githooks/commit-msg` strips such lines as a backstop. `npm install` points `core.hooksPath` at `.githooks`.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
