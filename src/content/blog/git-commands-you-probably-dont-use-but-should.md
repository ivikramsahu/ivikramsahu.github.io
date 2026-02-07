---
title: "Git Commands You Probably Don’t Use (But Should)"
description: "Git isn’t just a tool — it’s the backbone of modern software development. Whether you're a frontend developer shipping UIs, a backend engineer building APIs, a DevOps pro writing Terraform, or even a technical writer editing docs — Git is your versio..."
date: 2025-04-12
draft: false
readTime: 17
views: 116
---
Git isn’t just a tool — it’s the backbone of modern software development. Whether you're a frontend developer shipping UIs, a backend engineer building APIs, a DevOps pro writing Terraform, or even a technical writer editing docs — Git is your version control buddy. It helps you collaborate without stepping on each other’s toes, track every single line of code, and recover from disasters like a superhero with time-travel powers.

At its core, Git is surprisingly simple: you commit, push, pull, branch, and merge. That’s often enough to get by. You might already be familiar with commands like `git status`, `git add`, `git commit`, `git push`, and even `git checkout` or `git branch`.

But here’s the catch — **most developers only scratch the surface**. Git is much more than those handful of commands. Hidden just below the surface are dozens of lesser-known but incredibly powerful tools that can **save hours of debugging**, **recover lost work**, and **unlock smoother workflows**.

---

## Why Bother With Lesser-Known Git Commands?

Let’s face it: sometimes Git feels like magic, and other times it feels like black magic. You mistype a command, and suddenly your code is gone. Or you want to undo something, but you don’t know how. That's where these intermediate commands come in — they're **not complex**, just **underused**.

By learning these life-saving commands, you can:

*  Instantly recover lost commits
    
*  Debug regressions in minutes using built-in tools
    
*  Safely experiment with branches and commits
    
*  Understand your repo’s history like a pro
    
*  Work more confidently, even under pressure
    

These commands won’t just help you write code — they’ll help you *trust* your workflow. Whether you’re working solo or collaborating across teams, this is your next step toward becoming a Git ninja.

---

##  What’s Ahead

In this part, we’ll explore **Git commands** that are still simple enough to grasp quickly, but powerful enough to make a real difference in your day-to-day work.

Think of this as your Git growth curve — you're already using the basics, and now you're about to discover the tools that the power users quietly swear by.

---

#  1. Lesser-Known Git Commands That Can Save Your Day

Most developers live in the comfort zone of `git add`, `git commit`, and `git push`. And hey — that’s good enough most days. But Git is packed with subtle, underused commands that can make your workflow smoother, safer, and even faster.

These aren’t advanced tricks — they’re approachable, practical, and deeply useful once you know when and how to use them.

Let’s dive into these commands, breaking them down with **context**, **real-world usage**, and **enhancements through flags**.

---

### 1\. `git status -s` — The Shorter, Sharper Snapshot

`git status -s` (or `--short`) provides a cleaner, more readable version of the usual `git status`. It shows the status of files with a simple two-letter code:

```bash
git status -s
```

#### Output format:

```plaintext
M  file1.js      # Modified
A  newfile.js    # Newly added
?? temp.log      # Untracked
```

#### When to use:

* You’re juggling many files and need a compact, high-level overview
    
* Ideal in terminal workflows or when reviewing quick changes in a messy repo
    

#### Power tip:

Combine with `-b` for branch context:

```bash
git status -sb
```

This also shows which branch you’re on and how far it is ahead/behind the remote.

---

### 2\. `git log --oneline` — A Condensed History of Time

`git log` is powerful — and overwhelming. This command condenses each commit into a single line for faster scanning.

```bash
git log --oneline
```

#### When to use:

* Skimming through recent changes
    
* Finding a commit hash to reset, revert, or cherry-pick
    
* Reviewing work before a rebase or squash
    

#### Power tip:

Visualize your branch history as a graph:

```bash
git log --oneline --graph --all --decorate
```

This turns Git into a history map — helpful during merges, rebases, and conflict resolution.

---

### 3\. `git show <commit>` — Understand a Commit in One Shot

This command displays a full snapshot of a commit — the diff, the author, the timestamp, and the message.

```bash
git show <commit-hash>
```

#### When to use:

* Auditing what a particular commit did
    
* Understanding changes from teammates
    
* Writing release notes or debugging regressions
    

#### Power tip:

Preview a file’s content at a specific commit:

```bash
git show 4a6e1f9:index.html
```

This shows `index.html` *as it looked in that commit* — no checkout or switching branches needed.

---

### 4\. `git diff --staged` — Review Before You Commit

You’ve added files using `git add`. But what exactly did you add? This command shows the difference between the last commit and the current staging area.

```bash
git diff --staged
```

#### When to use:

* Before committing, to double-check staged changes
    
* When using partial staging (`git add -p`)
    
* During code reviews, to see what's about to be pushed
    

#### Power tip:

To compare specific files that are staged:

```bash
git diff --staged app.js
```

Or view *unstaged* changes (what’s edited but not yet added):

```bash
git diff
```

---

### 5\. `git branch -vv` — Your Local Branches, Explained

Lists all local branches with the latest commit and shows what each branch is tracking (if any), including whether it’s ahead or behind the remote.

```bash
git branch -vv
```

#### When to use:

* You’re managing multiple branches and want to see what’s outdated
    
* To identify stale local branches or detect ones not tracking any remote
    
* Cleaning up old feature branches
    

#### Power tip:

To see *only* branches that haven’t been merged into your current branch:

```bash
git branch --no-merged
```

Great for spring-cleaning after a big release.

Awesome, Vikram! Let’s keep the flow going. Here’s the next set of 5 easy-but-life-saving Git commands, following the **refined and enriched format**:

---

### 6\. `git stash list` — A Peek Into Your Stash Drawer

When you stash changes using `git stash`, Git quietly stores them away so you can switch branches or pull updates without committing.  
`git stash list` shows you all the stashes you’ve made, along with metadata about where and when they were created.

```bash
git stash list
```

#### When to use:

* You stashed something yesterday and forgot what it was
    
* You're juggling multiple branches and want to check what’s “on hold”
    
* You’re debugging something and keep stashing changes to try alternate fixes
    

#### Power tip:

Preview what’s inside a stash before applying:

```bash
git stash show -p stash@{0}
```

You can even stash with custom messages:

```bash
git stash push -m "WIP: styling header"
```

---

### 7\. `git stash pop` — Resume Where You Left Off

Retrieves the latest stash (or any stash you specify) and reapplies the changes back to your working directory — *and* removes it from the stash stack.

```bash
git stash pop
```

#### When to use:

* After resolving a merge or testing something, and you're ready to resume work
    
* When you switched branches to fix a bug and now want your original code back
    

#### Power tip:

Use `git stash apply` instead if you want to keep the stash for future re-use:

```bash
git stash apply stash@{1}
```

Useful when working on multiple features in parallel.

---

### 8\. `git commit --amend` — Edit the Past (One Commit Back)

Allows you to modify the most recent commit — either by changing the commit message or adding more changes to it.

```bash
git commit --amend
```

#### When to use:

* You forgot to stage a file before the last commit
    
* You want to tweak the commit message (fix typo, make it clearer)
    
* You want to keep your history clean and grouped
    

#### Power tip:

Edit the last commit message only:

```bash
git commit --amend -m "New, improved commit message"
```

>  **Note**: Only use `--amend` on local commits you haven’t pushed yet. Amending a pushed commit and force-pushing can confuse collaborators.

---

### 9\. `git restore <file>` — Undo File Changes Safely

Restores the file to its last committed state (removes uncommitted changes). Think of it as a "revert changes" in your IDE.

```bash
git restore filename.js
```

#### When to use:

* You made changes you no longer want to keep
    
* You're debugging and want to start fresh with the original version
    
* You accidentally edited the wrong file 
    

#### Power tip:

Want to undo staged changes instead?

```bash
git restore --staged filename.js
```

That pulls the file out of the staging area without touching the actual content.

---

### 10\. `git clean -n` — Safely Preview What Git Will Delete

Identifies and lists untracked files or directories in your working directory that would be removed by `git clean`.

```bash
git clean -n
```

#### When to use:

* You’ve compiled, built, or generated files and want to clean them up
    
* Your repo has become cluttered with logs, temp files, or artifacts
    
* You want to reset the repo to just tracked files
    

#### Power tip:

Delete untracked files **for real** (after previewing):

```bash
git clean -f
```

Want to include untracked directories too?

```bash
git clean -fd
```

Still nervous? Add `-i` for interactive mode:

```bash
git clean -i
```

---

#  2. Git Commands That Make You a Version Control Wizard

As you get more comfortable with Git, you'll inevitably run into situations where a basic commands won't save the day.

Maybe you accidentally deleted a branch.  
Maybe you lost a commit.  
Or you need a specific commit from another branch, but you don’t want the whole thing.

That's where these Git commands come in. They're **precision tools**, and once you start using them, you'll wonder how you ever got by without them.

---

### 1\. `git reflog` — Recover the “Unrecoverable”

Shows a log of everything you've done in Git: checkouts, commits, rebases, resets, and more — even if you’ve deleted branches or commits.

```bash
git reflog
```

#### When to use:

* You accidentally did a `git reset --hard` and need to get your commit back
    
* A branch was deleted, and you're trying to remember where it pointed
    
* You lost a commit after a rebase or amend
    

#### Power tip:

To restore a lost commit:

```bash
git checkout HEAD@{4}
```

Or create a branch from it:

```bash
git checkout -b rescue-branch HEAD@{4}
```

> Think of `reflog` as your **black box recorder** — Git remembers everything you did.

---

### 2\. `git cherry-pick <commit>` — Apply That One Perfect Commit

Takes a single commit from one branch and applies it to your current branch.

```bash
git cherry-pick <commit-hash>
```

#### When to use:

* You want to pull in a bug fix or a small feature without merging the whole branch
    
* You accidentally committed to the wrong branch
    
* You want to selectively pick commits across branches
    

#### Power tip:

Pick a range of commits:

```bash
git cherry-pick A^..B
```

This picks all commits from A (excluding A) up to B (including B).

Use `--no-commit` if you want to stage changes first:

```bash
git cherry-pick --no-commit <hash>
```

---

### 3\. `git bisect` — Binary Search Your Bugs

Helps you find the exact commit that introduced a bug by performing a binary search through your commit history.

```bash
git bisect start
git bisect bad              # current state is broken
git bisect good <commit>    # known working commit
```

Then Git checks out commits in between until you identify the one that broke things.

#### When to use:

* There’s a regression and you don’t know where it came from
    
* You’re debugging a flaky feature introduced in a large feature branch
    
* You have hundreds of commits and don’t want to guess blindly
    

#### Power tip:

Automate testing during bisect:

```bash
git bisect run ./test-script.sh
```

This runs your script automatically on each commit and stops when it finds the culprit.

---

### 4\. `git diff <branch1>..<branch2>` — Compare What’s Different

Shows the differences between two branches (or commits) — great for code reviews, merge planning, or debugging.

```bash
git diff main..feature/login
```

#### When to use:

* You're prepping a pull request and want to see exactly what's changed
    
* You’re reviewing someone’s branch
    
* Before rebasing or merging to identify potential conflicts
    

#### Power tip:

You can also limit to a specific file:

```bash
git diff dev..main src/utils.js
```

---

### 5\. `git reset --soft` vs `--mixed` vs `--hard` — Control the Rollback

`git reset` lets you move the HEAD pointer to a previous commit.  
Depending on the flag, it affects the staging area and working directory differently:

* `--soft`: Moves HEAD but keeps everything staged
    
* `--mixed` (default): Moves HEAD and unstages changes
    
* `--hard`: Resets HEAD, staging, and working directory ( Destructive!)
    

```bash
git reset --soft HEAD~1
```

#### When to use:

* Undo a commit but keep the changes for a better message or squashing
    
* Unstage changes (`--mixed`) without losing them
    
* Wipe everything clean (`--hard`) if you're sure
    

#### Power tip:

Use with care. Always check `git reflog` first before using `--hard`.

---

### 6\. `git shortlog -sn` — See Who’s Been Doing What

Generates a summary of commits grouped by author, showing the number of commits per person.

```bash
git shortlog -sn
```

#### When to use:

* You want to see contributor stats
    
* You’re managing a project and want a sense of author activity
    
* You're curious about who made most of the changes in a repo
    

#### Power tip:

Add `--all --no-merges` to include all branches and ignore merge commits:

```bash
git shortlog -sn --all --no-merges
```

Want to see commits per author with their messages?

```bash
git shortlog -sne
```

---

### 7\. `git blame <file>` — Find Who Wrote That Line (and When)

Displays line-by-line annotation of a file showing the author and commit responsible for each line.

```bash
git blame src/app.js
```

#### When to use:

* You're debugging a confusing piece of logic
    
* You want to ask someone about why a line exists
    
* You’re reviewing legacy code and want context before changing it
    

#### Power tip:

Want to check a line range?

```bash
git blame -L 20,40 src/app.js
```

Or ignore whitespace changes:

```bash
git blame -w src/app.js
```

> Don’t weaponize blame — use it to **collaborate and understand**, not criticize 

---

### 8\. `git show-branch` — Get a Summary of Multiple Branches

####  What it does:

Gives a side-by-side view of commits across branches, useful for comparing histories without a full visual tree.

```bash
git show-branch
```

#### When to use:

* You want a compact summary of multiple branches and where they diverged
    
* You're managing releases and need to audit differences
    
* You want to understand how far a branch is behind/ahead without checking them all manually
    

####  Power tip:

Compare specific branches:

```bash
git show-branch main dev staging
```

---

### 9\.  `git revert <commit>` — Undo the Effect of a Commit (Without Deleting History)

####  What it does:

Creates a new commit that reverses the changes of a specified commit — perfect for fixing mistakes in public branches.

```bash
git revert abc123
```

####  When to use:

* You made a mistake and already pushed it
    
* You want to undo something in a clean, auditable way
    
* You're working in a shared repo and need to avoid force-push
    

####  Power tip:

Revert a whole range of commits:

```bash
git revert HEAD~3..HEAD
```

> Unlike `reset`, `revert` is safe for collaborative workflows because it doesn’t rewrite history.

---

#  3. Git Commands for Real-World Engineers

Git’s core functionality can take you pretty far, but these advanced commands will empower you to:

* Manage multiple working directories
    
* Handle submodules and external repositories
    
* Perform complex rebases and merges
    
* Automate your workflows
    

These are often **less talked about** but **extremely powerful** — let’s get into them.

---

### 1\. `git worktree` — Multiple Working Directories from a Single Repository

Allows you to create additional working directories tied to a single Git repository. This is great when you need to work on multiple branches simultaneously, without cloning the entire repo.

```bash
git worktree add -b feature-xyz ../feature-xyz branch-name
```

#### When to use:

* You need to work on multiple branches without switching between them constantly
    
* You want to avoid the overhead of cloning the repo again
    
* You need to build or test features independently of your main working directory
    

#### Power tip:

List all worktrees:

```bash
git worktree list
```

> `git worktree` makes it easy to multitask without messing up your working environment.

---

### 2\. `git submodule` — Manage Nested Repositories

Tracks sub-repositories inside your main project, so you can include and manage external repositories as part of your project.

```bash
git submodule add <repository-url> path/to/submodule
```

#### When to use:

* You need to include an external dependency or library in your project
    
* You’re managing a project with multiple components that each have their own repo
    
* You want to ensure that external dependencies are version-controlled alongside your main project
    

#### Power tip:

Update your submodules after a pull:

```bash
git submodule update --remote
```

---

### 3\. `git rerere` — Automatically Resolve Conflicts

Git “remembers” conflict resolutions and automatically applies the same resolutions in future merges or rebases. This saves you from resolving the same conflict over and over again.

```bash
git config --global rerere.enabled true
```

#### When to use:

* You frequently merge or rebase branches with the same conflicts
    
* You want to automate repetitive merge conflict resolutions
    
* You’re working on long-running branches with frequent merges
    

#### Power tip:

Check which conflicts have been resolved:

```bash
git rerere status
```

> `git rerere` is a life-saver for teams working on complex features and long-running branches.

---

### 4\. `git filter-branch` — Rewrite History for Cleanup

Rewrites Git history by filtering commits, useful for removing large files, changing author info, or cleaning up sensitive data across the entire history.

```bash
git filter-branch --tree-filter 'rm -f sensitive-file.txt' HEAD
```

#### When to use:

* You want to remove large or sensitive files from your Git history
    
* You need to fix incorrect author information across multiple commits
    
* You want to clean up an entire branch’s history without deleting the branch
    

#### Power tip:

Instead of manually fixing each commit, you can rewrite all of history:

```bash
git filter-branch --env-filter '
    if [ "$GIT_AUTHOR_EMAIL" = "old@example.com" ];
    then
        GIT_AUTHOR_NAME="New Name";
        GIT_AUTHOR_EMAIL="new@example.com";
        GIT_COMMITTER_NAME="New Name";
        GIT_COMMITTER_EMAIL="new@example.com";
    fi
' HEAD
```

> This command is **destructive**. Use with caution, and always back up your repo before using `filter-branch`.

---

### 5\. `git rebase -i` — Interactive Rebase for Clean History

Interactively rebase commits — allowing you to reorder, squash, fixup, or drop commits from your history.

```bash
git rebase -i HEAD~5
```

#### When to use:

* You want to tidy up your commit history before pushing to a shared branch
    
* You’re making a series of small, incremental commits that should be squashed into one
    
* You’re working on a feature branch and need to clean up before merging
    

#### Power tip:

Want to squash multiple commits into one? In the interactive rebase editor, change `pick` to `squash` or `fixup` for the commits you want to merge.

> **Interactive rebasing** is **crucial** for keeping a clean Git history — especially in a team environment.

---

### 6\. `git config --global` — Advanced Configuration

Allows you to set up detailed Git configurations like signing commits with GPG, ignoring certain files, and setting up aliases for Git commands.

```bash
git config --global user.signingkey <GPG-key-id>
```

#### When to use:

* You want to ensure all your commits are signed with GPG for security
    
* You frequently use long Git commands and want to shorten them with aliases
    
* You need to customize your global or local Git configuration
    

#### Power tip:

Set up an alias for commonly used commands:

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

---

### 7\. `git commit --fixup` — Fix a Commit without Changing History

Creates a fixup commit to modify a previous commit. It marks the commit so that it can be automatically squashed into the target commit using rebase.

```bash
git commit --fixup=<commit-hash>
```

#### When to use:

* You need to modify a commit that has already been made but don’t want to alter the commit history manually
    
* You want to prepare a commit for squashing into another commit during a rebase
    

#### Power tip:

After creating the fixup commit, use:

```bash
git rebase -i --autosquash HEAD~5
```

This will automatically squash your fixup commit into the target commit without additional manual intervention.

---

### 8\. `git merge --no-ff` — Preserve Merge History

Forces Git to create a merge commit, even if the merge could be fast-forwarded.

```bash
git merge --no-ff feature-xyz
```

#### When to use:

* You want to keep a clear, visible history of merges for feature branches
    
* You’re working on a release and need a clear marker in the Git history for when the feature was integrated
    

#### Power tip:

Use `--no-ff` to keep feature branch histories intact:

```bash
git merge --no-ff feature-xyz
```

---

### **Conclusion**

Git is an essential tool for any developer, and it’s more than just tracking changes. The commands we’ve covered today give you a deeper understanding of how Git works and how you can use it to make your life easier.

By learning these lesser-known commands, you’ll be able to work faster, keep your code clean, and handle tricky situations without breaking a sweat.

 **Want to improve your Git skills?** Bookmark this blog and come back whenever you need a quick reference.

Feel free to leave a comment with your thoughts or any Git tips you swear by!
