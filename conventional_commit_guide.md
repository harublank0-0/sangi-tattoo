# Conventional Commits — Cheatsheet & Guide

A practical guide for writing clean, consistent, and meaningful Git commits.

---

## 1. Basic Format

```text
<type>(<scope>): <description>
```

Examples:

```text
feat(auth): add Google OAuth login
fix(workout): prevent duplicate daily entries
refactor(api): simplify workout service
docs(readme): add local development instructions
test(auth): add login integration tests
```

### Full Format

For commits that need more context:

```text
<type>(<scope>): <description>

<body>

<footer>
```

Example:

```text
feat(workout): add daily workout tracking

Users can now mark individual exercises as completed
and track their daily workout progress.

Closes #42
```

---

# 2. Commit Types

| Type       | Use when                                             | Example                                            |
| ---------- | ---------------------------------------------------- | -------------------------------------------------- |
| `feat`     | Adding a new user-facing feature                     | `feat(workout): add daily workout tracking`        |
| `fix`      | Fixing a bug                                         | `fix(auth): prevent session expiration on refresh` |
| `refactor` | Changing code without changing behavior              | `refactor(workout): simplify progress calculation` |
| `perf`     | Improving performance                                | `perf(workout): memoize exercise list`             |
| `docs`     | Documentation changes                                | `docs(readme): add setup instructions`             |
| `test`     | Adding or modifying tests                            | `test(auth): add login tests`                      |
| `style`    | Formatting/style-only changes                        | `style: format imports with biome`                 |
| `chore`    | Maintenance that doesn't affect application behavior | `chore: update development dependencies`           |
| `build`    | Build system/dependency configuration                | `build: update vite configuration`                 |
| `ci`       | CI/CD configuration                                  | `ci: add pull request checks`                      |
| `revert`   | Reverting a previous commit                          | `revert: revert feat(auth): add OAuth login`       |

---

# 3. Quick Decision Guide

Ask yourself:

```text
Did I add functionality?
        │
       YES → feat
        │
       NO
        ↓
Did I fix incorrect behavior?
        │
       YES → fix
        │
       NO
        ↓
Did I change implementation without changing behavior?
        │
       YES → refactor
        │
       NO
        ↓
Did I improve performance?
        │
       YES → perf
        │
       NO
        ↓
Did I change tests?
        │
       YES → test
        │
       NO
        ↓
Did I change documentation?
        │
       YES → docs
        │
       NO
        ↓
Is it project/dependency/tooling maintenance?
        │
       YES → chore / build / ci
```

---

# 4. Scope

The scope identifies the area of the application affected by the commit.

```text
feat(auth): add Google login
fix(workout): prevent duplicate exercises
refactor(database): simplify user repository
test(profile): add profile validation tests
docs(api): document workout endpoints
```

Common scopes:

```text
auth
user
profile
workout
exercise
nutrition
dashboard
settings
api
database
ui
components
routes
server
client
config
deps
ci
```

### Scope is optional

Both are valid:

```text
feat: add dark mode
feat(settings): add dark mode
```

Prefer a scope when it provides useful context.

---

# 5. Description Rules

Use the imperative mood.

Good:

```text
feat(auth): add Google login
fix(workout): prevent duplicate entries
refactor(api): simplify error handling
```

Avoid:

```text
feat(auth): added Google login
fix(workout): fixed duplicate entries
refactor(api): simplifying error handling
```

Think:

> "This commit will..."

```text
This commit will add Google login
This commit will fix duplicate entries
This commit will simplify error handling
```

---

# 6. Keep Descriptions Short

Prefer:

```text
feat(workout): add workout completion tracking
```

Instead of:

```text
feat(workout): add a system that allows users to track whether they have completed each individual workout exercise during their daily routine
```

If more explanation is required, use the commit body.

---

# 7. Adding a New Package

Installing a package is usually a `chore` or `build` commit.

### Development dependency

```text
chore(deps): add husky
```

```text
chore(deps): add lint-staged
```

```text
chore(deps): add commitlint
```

### Runtime dependency

If the package itself enables application functionality:

```text
build(deps): add zod
```

or:

```text
chore(deps): add date-fns
```

Use the convention your project has adopted consistently.

### Package upgrade

```text
chore(deps): update react
```

```text
chore(deps): update tanstack packages
```

### Removing a package

```text
chore(deps): remove lodash
```

### Replacing a package

```text
refactor(deps): replace moment with date-fns
```

---

# 8. Features

Use `feat` when users gain new functionality.

```text
feat(auth): add email authentication
```

```text
feat(workout): add daily workout tracking
```

```text
feat(nutrition): add daily calorie tracking
```

```text
feat(profile): allow users to update their goals
```

```text
feat(dashboard): add weekly progress chart
```

### Large feature

Use a body when the change needs explanation:

```text
feat(workout): add workout streak tracking

Track consecutive days on which users complete
their scheduled workouts.

Display the current streak and longest streak
on the dashboard.
```

---

# 9. Bug Fixes

Use `fix` when existing behavior is incorrect.

```text
fix(auth): prevent expired sessions from being reused
```

```text
fix(workout): prevent duplicate exercise entries
```

```text
fix(nutrition): calculate calories correctly
```

```text
fix(profile): prevent empty username submission
```

### Debugging a bug

If you are fixing the bug:

```text
fix(api): handle missing workout records
```

If you are only adding debugging/logging temporarily:

```text
chore(debug): add request logging
```

If you are adding permanent diagnostic tooling:

```text
feat(debug): add request tracing
```

Don't use `debug` as a commit type. It isn't a standard Conventional Commit type.

---

# 10. Refactoring

Use `refactor` when the implementation changes but the intended behavior remains the same.

```text
refactor(workout): extract progress calculation
```

```text
refactor(auth): move session logic into service
```

```text
refactor(ui): extract reusable form components
```

```text
refactor(api): simplify error handling
```

### Refactor vs Fix

If you changed code because it was broken:

```text
fix(workout): correct streak calculation
```

If the calculation was already correct and you're restructuring it:

```text
refactor(workout): extract streak calculation
```

---

# 11. Performance

Use `perf` when the primary purpose is improving performance.

```text
perf(workout): memoize exercise list
```

```text
perf(dashboard): reduce unnecessary queries
```

```text
perf(images): lazy load workout thumbnails
```

```text
perf(api): add database index for workout queries
```

If you're simply restructuring code that happens to improve performance, `refactor` may still be more appropriate.

---

# 12. Tests

Use `test` when adding or modifying tests.

```text
test(auth): add login integration tests
```

```text
test(workout): add streak calculation tests
```

```text
test(api): cover invalid workout requests
```

```text
test(profile): add validation tests
```

If you fix production code because a test exposed a bug:

```text
fix(workout): correct streak calculation
test(workout): add regression test for streaks
```

It is often better to keep the production fix and test as separate commits when practical.

---

# 13. Documentation

Use `docs`.

```text
docs(readme): add local development setup
```

```text
docs(api): document workout endpoints
```

```text
docs(contributing): add commit guidelines
```

```text
docs(architecture): document project structure
```

Documentation-only changes should not use `chore`.

Prefer:

```text
docs(readme): update installation instructions
```

over:

```text
chore: update readme
```

---

# 14. Formatting / Code Style

Use `style` when there is no behavioral change.

```text
style: format code with biome
```

```text
style(ui): normalize component formatting
```

```text
style: fix import ordering
```

Don't use `style` for UI feature changes.

This:

```text
feat(ui): add dark mode
```

is correct.

This:

```text
style(ui): add dark mode
```

is incorrect.

---

# 15. Configuration

Choose the type based on what the configuration does.

### Build configuration

```text
build: configure vite
```

```text
build: configure tailwind
```

```text
build: update tsconfig
```

### CI configuration

```text
ci: add GitHub Actions workflow
```

```text
ci: run tests on pull requests
```

### Development tooling

```text
chore: configure husky
```

```text
chore: configure lint-staged
```

---

# 16. Git Hooks

Examples:

```text
chore(git): configure husky hooks
```

```text
chore(git): add pre-commit checks
```

```text
chore(git): configure commitlint
```

---

# 17. Database Changes

Use the type that best describes the purpose.

### New migration/schema functionality

```text
feat(database): add workout tables
```

### Database bug fix

```text
fix(database): correct workout foreign key
```

### Database refactor

```text
refactor(database): normalize exercise metadata
```

### Index/performance change

```text
perf(database): add index for workout history
```

---

# 18. API Changes

### New endpoint

```text
feat(api): add workout history endpoint
```

### Bug fix

```text
fix(api): return 404 for missing workout
```

### Refactor

```text
refactor(api): extract workout service
```

### API documentation

```text
docs(api): document workout endpoints
```

---

# 19. Breaking Changes

Breaking changes require special attention.

You can indicate a breaking change with `!`:

```text
feat(api)!: change authentication response
```

Or use the footer:

```text
feat(api): change authentication response

BREAKING CHANGE: authentication responses now return
a session object instead of a token string.
```

A breaking change can apply to any commit type:

```text
refactor(api)!: replace legacy response format
```

```text
chore(config)!: remove deprecated environment variables
```

---

# 20. Multiple Changes

Avoid commits like:

```text
feat: add login, fix dashboard, update dependencies, refactor API
```

This is difficult to review and revert.

Prefer separate commits:

```text
feat(auth): add Google login
fix(dashboard): correct progress calculation
chore(deps): update TanStack packages
refactor(api): simplify response handling
```

### Rule

> One commit should represent one logical change.

---

# 21. Good Commit Sequence

A typical feature might look like:

```text
feat(database): add workout schema
feat(api): add workout endpoints
feat(workout): add workout creation form
feat(workout): add daily workout tracking
test(workout): add workout tracking tests
docs(api): document workout endpoints
```

You don't have to create this many commits, but each commit should represent a coherent unit.

---

# 22. Before Committing

Run the project's quality checks:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

If applicable:

```bash
pnpm build
```

Then inspect the changes:

```bash
git status
git diff
```

Stage only the intended files:

```bash
git add <files>
```

Review staged changes:

```bash
git diff --cached
```

Then commit:

```bash
git commit -m "feat(workout): add daily workout tracking"
```

---

# 23. Commit Message Cheat Sheet

```text
feat(scope): add something new
fix(scope): fix incorrect behavior
refactor(scope): restructure without behavior change
perf(scope): improve performance
test(scope): add or update tests
docs(scope): update documentation
style(scope): formatting/style-only changes
chore(scope): maintenance/tooling
build(scope): build/dependency configuration
ci(scope): CI/CD changes
revert(scope): revert a previous commit
```

---

# 24. Common Examples

### New feature

```text
feat(auth): add password reset
```

### New UI

```text
feat(dashboard): add weekly progress chart
```

### Bug

```text
fix(workout): prevent duplicate daily entries
```

### Debugging

```text
chore(debug): add request logging
```

### Refactor

```text
refactor(workout): extract progress calculation
```

### Performance

```text
perf(dashboard): reduce unnecessary queries
```

### New package

```text
chore(deps): add date-fns
```

### Remove package

```text
chore(deps): remove lodash
```

### Update package

```text
chore(deps): update tanstack packages
```

### Tests

```text
test(auth): add OAuth callback tests
```

### Documentation

```text
docs(readme): update installation instructions
```

### Formatting

```text
style: format code with biome
```

### Build

```text
build: update Vite configuration
```

### CI

```text
ci: add pull request checks
```

### Breaking change

```text
feat(api)!: replace legacy authentication response
```

---

# 25. Bad Commits

Avoid:

```text
update
```

```text
fix
```

```text
changes
```

```text
work
```

```text
final
```

```text
final-final
```

```text
asdf
```

```text
feat: stuff
```

```text
fix: things
```

Instead:

```text
fix(auth): prevent expired session reuse
```

---

# 26. Commit Scope Guidelines

Keep scopes consistent across the project.

Recommended:

```text
auth
user
profile
workout
exercise
nutrition
dashboard
settings
api
database
ui
deps
config
ci
```

Don't create unnecessarily granular scopes:

```text
workout-button
workout-header
workout-modal
workout-card
```

Prefer:

```text
feat(workout): add exercise completion
```

---

# 27. Commit Body

Use a body when the "what" isn't enough to explain the "why".

```text
fix(auth): refresh session before API requests

Previously, requests could use an expired access token
when the refresh operation had not completed.

Refresh the session before sending authenticated requests.
```

A good body explains:

```text
WHY was this change necessary?
WHAT important behavior changed?
WHAT consequences should developers know about?
```

Avoid simply repeating the title.

---

# 28. Footer

Use footers for metadata such as:

```text
Closes #123
```

```text
Fixes #456
```

or:

```text
BREAKING CHANGE: remove legacy authentication endpoint
```

Example:

```text
feat(workout): add workout history

Users can now view completed workouts from previous days.

Closes #123
```

---

# 29. Squashing

If your development history contains:

```text
fix
fix again
oops
debug
try again
final fix
```

you can squash them before merging.

The final commit should be meaningful:

```text
feat(workout): add daily workout tracking
```

A clean Git history is more valuable than preserving every experimental commit.

---

# 30. Golden Rules

1. **Use the correct type.**
2. **Keep commits focused.**
3. **Use scopes consistently.**
4. **Use imperative language.**
5. **Keep the subject concise.**
6. **Explain why in the body when necessary.**
7. **Don't use `debug` as a commit type.**
8. **Don't mix unrelated changes.**
9. **Use `!` or `BREAKING CHANGE` for breaking changes.**
10. **Review the staged diff before committing.**

---

# Quick Reference

```text
NEW FEATURE        → feat
BUG FIX            → fix
RESTRUCTURE        → refactor
PERFORMANCE        → perf
TEST               → test
DOCUMENTATION      → docs
FORMATTING          → style
MAINTENANCE        → chore
BUILD/DEPENDENCY   → build
CI/CD              → ci
REVERT             → revert
BREAKING CHANGE    → ! or BREAKING CHANGE
```

### Most common commands

```bash
git status
git diff
git add <files>
git diff --cached

git commit -m "feat(workout): add daily tracking"
```

### Most common patterns

```text
feat(scope): description
fix(scope): description
refactor(scope): description
perf(scope): description
test(scope): description
docs(scope): description
chore(scope): description
build(scope): description
ci(scope): description
```

> **When in doubt:** describe what changed, identify the affected area, and choose the type based on the primary purpose of the change.

