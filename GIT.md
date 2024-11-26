# Git Strategy

## Branch Naming

When creating a new feature, the branch name should have the prefix feat/. For example, feat/modal-window-implementation.

For bug fixes, use the prefix fix/.

For refactoring code, use the prefix refactor/.

For general tasks or chores that affect the entire project, use the prefix chore/.

### Examples:

- Feature implementation: feat/modal-window-implementation
- Bug fix: fix/bug-in-login-page
- Code refactoring: refactor/cleanup-auth-service
- General chore: chore/update-dependencies

## Commit Messages

Commit messages should follow a similar strategy to branch naming:

- For a bug fix, use fix: commit message.
- For a new feature, use feat: commit message.
- For a refactor, use refactor: commit message.
- For general tasks, use chore: commit message.

### Examples:

- fix: resolve issue with user authentication
- feat: add modal window for user settings
- refactor: optimize database queries
- chore: update README with new instructions

## Pull Request (PR) Guidelines

When creating a pull request, follow these guidelines:

1. Screenshot: Add a screenshot showing what was changed or added in the PR.
2. Description: Write a brief summary of what was changed or added.
3. Squash Commits: Check the option to squash commits.
4. Delete Branch: Ensure the option to delete the branch after merging is checked.

These practices help maintain a clean and organized Git history and ensure that all changes are well-documented and easy to understand.

---

By following this strategy, we can maintain a consistent and clear workflow, making it easier to collaborate and review changes effectively.
