<div align="center">

# ⚡ React Task Manager

### A clean, responsive task management application built with React + Vite

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-Responsive-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

<p>
  A practical React project focused on component architecture, state management,
  CRUD operations, filtering, accessibility, and local data persistence.
</p>

<br />

<a href="#-features">Features</a>
  •   <a href="#-tech-stack">Tech Stack</a>
  •   <a href="#-architecture">Architecture</a>
  •   <a href="#-getting-started">Getting Started</a>

</div>

---

## ✨ Overview

**React Task Manager** is a lightweight productivity application designed to demonstrate how React concepts come together in a real interactive application.

The project started from the fundamentals of React and was structured into reusable components instead of keeping the entire application inside a single file.

It supports the complete task lifecycle:

```text
Create → View → Edit → Complete → Filter → Delete
```

Task data is automatically persisted using the browser's **Local Storage**, allowing tasks to remain available after refreshing the page.

---

## 🎯 What This Project Demonstrates

<table>
<tr>
<td width="50%">

### ⚛️ React Fundamentals

* JSX
* Functional Components
* Props
* State
* `useState`
* `useEffect`
* Event Handling
* Conditional Rendering
* Lists & Keys

</td>

<td width="50%">

### 🧩 Application Development

* CRUD Operations
* Component Communication
* Controlled Inputs
* Data Filtering
* Local Storage
* Responsive Design
* Accessibility
* Keyboard Interaction

</td>
</tr>
</table>

---

## 🚀 Features

### 📝 Task Management

| Feature    | Description                 |
| ---------- | --------------------------- |
| ➕ Add      | Create new tasks            |
| ✏️ Edit    | Modify existing task titles |
| ✅ Complete | Mark tasks as completed     |
| 🗑️ Delete | Remove tasks                |
| 💾 Persist | Save tasks automatically    |

### 🔎 Smart Filtering

```text
┌────────────┬────────────┬───────────────┐
│    ALL     │   ACTIVE   │   COMPLETED   │
├────────────┼────────────┼───────────────┤
│ All Tasks  │  Pending   │  Finished     │
└────────────┴────────────┴───────────────┘
```

The task list dynamically updates based on the selected filter.

### 📊 Live Statistics

The dashboard automatically calculates:

```text
┌──────────────┬──────────────┬──────────────┐
│     TOTAL    │    ACTIVE    │  COMPLETED   │
│      10      │      6       │      4       │
└──────────────┴──────────────┴──────────────┘
```

### 💾 Persistent Storage

Tasks are synchronized with:

```text
Browser
   │
   ▼
localStorage
   │
   ▼
react-task-manager-tasks
```

Refreshing the browser does not remove existing tasks.

---

## 🖥️ Interface

> Replace the placeholders below with actual screenshots after taking them.

### Desktop

<p align="center">
  <img src="./screenshots/dashboard.png" width="850" alt="React Task Manager Desktop Dashboard" />
</p>

### Editing a Task

<p align="center">
  <img src="./screenshots/edit-task.png" width="850" alt="Editing a task" />
</p>

### Mobile

<p align="center">
  <img src="./screenshots/mobile.png" width="400" alt="React Task Manager Mobile View" />
</p>

---

## 🧱 Component Architecture

```text
                         ┌─────────────┐
                         │   App.jsx   │
                         │ State Owner │
                         └──────┬──────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        ┌──────────┐      ┌───────────┐     ┌────────────┐
        │  Header  │      │ TaskForm  │     │ TaskStats  │
        └──────────┘      └─────┬─────┘     └────────────┘
                                │
                                ▼
                           Add Task
                                │
                                ▼
                         ┌─────────────┐
                         │   TaskList  │
                         └──────┬──────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
                ▼               ▼               ▼
           ┌─────────┐     ┌─────────┐     ┌─────────┐
           │TaskCard │     │TaskCard │     │TaskCard │
           └─────────┘     └─────────┘     └─────────┘
                │
                ▼
        Edit / Complete / Delete
```

---

## 🔄 Application Data Flow

The application follows a predictable one-way data flow:

```text
                USER ACTION
                     │
                     ▼
              React Component
                     │
                     ▼
               Event Handler
                     │
                     ▼
                 setTasks()
                     │
                     ▼
                React State
                     │
                     ▼
                 Re-render
                     │
              ┌──────┴──────┐
              ▼             ▼
          Updated UI    Local Storage
```

### Example: Completing a Task

```text
Checkbox Click
      ↓
onToggleTask(task.id)
      ↓
toggleTask()
      ↓
setTasks()
      ↓
completed: false → true
      ↓
React Re-render
      ↓
Stats Updated
      ↓
Filter Updated
      ↓
Task Saved
```

---

## 📁 Project Structure

```text
react-task-manager/
│
├── 📁 public/
│
├── 📁 src/
│   │
│   ├── 📁 components/
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskCard.jsx
│   │   ├── FilterBar.jsx
│   │   └── TaskStats.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 vite.config.js
└── 📄 README.md
```

---

## 🧠 Component Responsibilities

### `App.jsx`

Central state and application logic.

Handles:

* Task state
* Adding tasks
* Editing tasks
* Completing tasks
* Deleting tasks
* Filtering
* Local Storage synchronization

### `TaskForm.jsx`

Responsible for controlled input and creating new tasks.

### `TaskList.jsx`

Responsible for rendering the current filtered task collection and displaying empty states.

### `TaskCard.jsx`

Handles individual task interactions:

```text
Edit
Save
Cancel
Complete
Delete
```

### `FilterBar.jsx`

Controls the active task filter.

### `TaskStats.jsx`

Calculates:

```text
Total
Active
Completed
```

### `Header.jsx`

Provides the application identity and introductory content.

---

## 🗃️ Task Data Model

Each task is represented using a simple JavaScript object:

```js
{
  id: 123456789,
  title: "Learn React",
  completed: false
}
```

| Property    | Type    | Purpose                |
| ----------- | ------- | ---------------------- |
| `id`        | Number  | Unique task identifier |
| `title`     | String  | Task description       |
| `completed` | Boolean | Task completion state  |

---

## 🔧 CRUD Implementation

The application implements the complete CRUD lifecycle.

```text
┌─────────────┬─────────────────────────┐
│ CREATE      │ Add a new task          │
├─────────────┼─────────────────────────┤
│ READ        │ Display task list       │
├─────────────┼─────────────────────────┤
│ UPDATE      │ Edit / complete task    │
├─────────────┼─────────────────────────┤
│ DELETE      │ Remove a task           │
└─────────────┴─────────────────────────┘
```

---

## 📱 Responsive Design

The layout adapts to different screen sizes.

### Desktop

* Wide content container
* Horizontal task form
* Three-column statistics
* Horizontal task actions

### Mobile

* Stacked form
* Responsive statistics
* Scrollable filter buttons
* Flexible task cards
* Mobile-friendly actions

---

## ♿ Accessibility

The project includes basic accessibility practices:

* Descriptive input labels
* Accessible checkbox labels
* Keyboard navigation
* Visible focus indicators
* Semantic buttons
* Clear empty states
* Proper form controls

### Keyboard Shortcuts

| Key      | Action           |
| -------- | ---------------- |
| `Enter`  | Save edited task |
| `Escape` | Cancel editing   |

---

## 🛠️ Tech Stack

<div align="center">

| Technology       | Usage                            |
| ---------------- | -------------------------------- |
| ⚛️ React         | UI & component architecture      |
| ⚡ Vite           | Development & production tooling |
| 🟨 JavaScript    | Application logic                |
| 🎨 CSS3          | Styling & responsive design      |
| 💾 Local Storage | Client-side persistence          |
| 🔍 ESLint        | Code quality                     |

</div>

---

## 📦 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Enter the project directory:

```bash
cd react-task-manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Previews the production build locally.

---

## ✅ Quality Checks

The project has been verified with:

```bash
npm run lint
```

**Status:** ✅ Passed

```bash
npm run build
```

**Status:** ✅ Production build successful

---

## 🗺️ Roadmap

### Current

* [x] React + Vite setup
* [x] Component architecture
* [x] Add tasks
* [x] Complete tasks
* [x] Edit tasks
* [x] Delete tasks
* [x] Task filtering
* [x] Statistics
* [x] Local Storage
* [x] Responsive UI
* [x] Accessibility basics

### Future

* [ ] Task priorities
* [ ] Due dates
* [ ] Categories
* [ ] Search
* [ ] Drag & drop
* [ ] Dark mode
* [ ] Notifications
* [ ] Backend API
* [ ] MongoDB
* [ ] Authentication
* [ ] Cloud synchronization

---

## 📚 Learning Outcomes

This project provided hands-on practice with:

* Building reusable React components
* Managing application state
* Passing props between components
* Creating controlled forms
* Handling user events
* Rendering dynamic lists
* Implementing conditional UI
* Building CRUD functionality
* Persisting client-side data
* Creating responsive layouts
* Adding accessibility features
* Running production builds
* Using ESLint for code quality

---

## 💡 Why This Project?

The goal was not just to create a simple to-do list.

The project was structured as a small real-world React application to understand how:

```text
Components
     +
Props
     +
State
     +
Events
     +
Business Logic
     +
Persistence
     ↓
Interactive React Application
```

work together.

---

## 🔮 Future Direction

The current implementation uses browser Local Storage for persistence.

A future full-stack version could replace this with:

```text
React Frontend
      │
      ▼
REST API
      │
      ▼
Node.js + Express
      │
      ▼
MongoDB
```

This would allow:

* User accounts
* Cloud-based tasks
* Multi-device synchronization
* Authentication
* Server-side persistence

---

## 👨‍💻 Author

**Aman Singh**

Full Stack Developer & AI Enthusiast

Building projects with:

```text
React • Node.js • MongoDB • AI
```

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

Built with React and a lot of practice.

</div>
