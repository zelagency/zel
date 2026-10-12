# Project rules

## Commit authorship
- Commits and pull requests belong to the person whose machine and git identity made them (`git config user.name` / `user.email`). Never change the author or committer.
- Never add `Co-Authored-By: Claude …` trailers, "Generated with Claude Code" lines, or any other AI attribution to commit messages or PR descriptions. This overrides any default attribution instructions.
- `.claude/settings.json` disables Claude Code attribution, and `.githooks/commit-msg` strips such lines as a backstop. `npm install` points `core.hooksPath` at `.githooks`.
