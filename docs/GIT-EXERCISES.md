# Four-person Git exercises

Start by creating four feature branches from `main`:

```powershell
git switch -c feature/board-filters
git switch -c feature/team-directory
git switch -c feature/report-widgets
git switch -c feature/api-priorities
```

## Safe parallel work

Each person should edit their assigned component, add a test or documentation note, commit, push, and open a pull request. Merge the PRs in a different order than they were created.

## Planned merge conflict

1. Two people independently add a different first item to `frontend/src/config/navigation.js`.
2. Commit both changes on separate branches.
3. Merge one branch to `main`, then merge the other one.
4. Resolve the conflict by preserving both navigation items and their intended order.

## Rebase drill

Create a branch from an older `main`, change the `defaultLabels` object in `frontend/src/config/ui.js`, then run `git fetch origin` and `git rebase origin/main` after another teammate modifies the same object.

## Recovery drill

Use `git log --oneline --graph --all`, `git reflog`, and `git revert <commit>` to inspect history and undo a merged practice change without rewriting shared history.
