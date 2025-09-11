
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

* [Node.js](https://nodejs.org/) (v18.x or later recommended)
* [npm](https://www.npmjs.com/) (usually comes with Node.js)
* [Git](https://git-scm.com/)

### **1. Clone the Repository**

First, clone the repository to your local machine.

```bash
git clone https://github.com/Himashree-KB/SPAD.git

cd frontend

npm install

npm run dev
```

 Let’s walk through a **practical example of two people (Alice and Bob) collaborating** on a GitHub repo.

---

## 🧑‍💻 Example: Alice & Bob Collaborating with Git

### 🔹 Step 1. Alice creates the repo

Alice runs:

```bash
# Create a new folder and init git
mkdir my-project && cd my-project
git init

# Add a README
echo "# My Project" > README.md
git add README.md
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/alice/my-project.git
git push -u origin main
```

---

### 🔹 Step 2. Bob clones the repo

Bob runs:

```bash
git clone https://github.com/alice/my-project.git
cd my-project
```

Now Bob has the same files as Alice.

---

### 🔹 Step 3. Both create branches for their work

* Alice:

  ```bash
  git checkout -b feature-login
  ```
* Bob:

  ```bash
  git checkout -b feature-dashboard
  ```

Each works on their own feature separately.

---

### 🔹 Step 4. They make changes and commit

* Alice edits `login.js` and commits:

  ```bash
  git add login.js
  git commit -m "Add login functionality"
  git push origin feature-login
  ```

* Bob edits `dashboard.js` and commits:

  ```bash
  git add dashboard.js
  git commit -m "Add dashboard UI"
  git push origin feature-dashboard
  ```

---

### 🔹 Step 5. Open Pull Requests (PRs)

* Alice goes to GitHub → opens a **PR** from `feature-login → main`.
* Bob does the same for `feature-dashboard → main`.

They review each other’s code, leave comments, and approve.

---

### 🔹 Step 6. Merge to `main`

* Once approved, each PR gets merged into `main`.
* GitHub keeps history clean.

---

### 🔹 Step 7. Sync with `main`

After merging, both Alice and Bob need the latest version:

```bash
git checkout main
git pull origin main
```

---

### 🔹 Step 8. Delete old branches

After features are merged:

```bash
git branch -d feature-login
git push origin --delete feature-login
```

(same for Bob with his branch)

---

✅ Now both Alice and Bob have collaborated smoothly:

* They worked **in parallel** on separate branches.
* They **reviewed each other’s code**.
* They merged changes back into `main`.

---
