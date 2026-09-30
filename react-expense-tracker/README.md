
# 💸 Expense Tracker

A responsive expense tracking application built with React and Vite. It helps users record daily expenses, organize transactions by category, search and sort records, and monitor their spending through a simple dashboard.

Transactions are stored in the browser using Local Storage, so your data remains available after refreshing the page.

## ✨ Features

- **Dashboard Overview** — View total expenses, transaction count, average expense, and monthly spending.
- **Add Transactions** — Record an expense with a title, amount, category, and date.
- **Delete Transactions** — Remove transactions you no longer need.
- **Category Filtering** — Filter expenses by Food, Travel, Shopping, Bills, Health, Education, Entertainment, and Other.
- **Search Transactions** — Search by expense title or category.
- **Sort Transactions** — Sort by newest, oldest, highest amount, or lowest amount.
- **Persistent Storage** — Automatically save expenses in browser Local Storage.
- **Responsive Layout** — Use the application on desktop, tablet, and mobile screens.
- **Form Validation** — Prevent submission when required fields are missing or the amount is invalid.
- **Reusable Components** — Keep the interface organized using reusable React components.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and production build |
| JavaScript (ES6+) | Application logic |
| CSS3 | Styling and responsive layout |
| Lucide React | Interface icons |
| Browser Local Storage | Client-side data persistence |
| ESLint | Code quality and linting |

## 📚 React Concepts & Hooks

This project demonstrates the following React concepts:

### `useState`
Manages transactions, form fields, search input, category selection, and sorting preferences.

### `useEffect`
Synchronizes expense data with Local Storage whenever the transaction list changes.

### `useRef`
References the expense title input and automatically focuses it when the form opens and after a transaction is added.

### Custom Hook — `useExpenses`
Encapsulates expense management logic, including adding and deleting transactions, filtering, calculations, and persistence.

### `useMemo`
Memoizes filtered transactions and total expense calculations to avoid unnecessary recalculation when their dependencies have not changed.

### Props & Component Composition
Passes data and event handlers between components to keep the application modular and maintainable.

## 📁 Project Structure

```text
react-expense-tracker/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   └── StatCard.jsx
│   │   ├── expense/
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── ExpenseForm.jsx
│   │   │   ├── ExpenseItem.jsx
│   │   │   ├── ExpenseList.jsx
│   │   │   └── ExpenseSearch.jsx
│   │   └── layout/
│   │       ├── Container.jsx
│   │       └── Header.jsx
│   ├── data/
│   │   └── categories.js
│   ├── hooks/
│   │   └── useExpenses.js
│   ├── utils/
│   │   └── calculations.js
│   │   └── storage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
├── vite.config.js
└── README.md
```

> The tree above represents the intended project organization. Keep only files that actually exist in your project. If you have not created `calculations.js`, remove that entry.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git (for version control)

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/react-expense-tracker.git
```

### 2. Navigate to the project

```bash
cd react-expense-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

### 5. Create a production build

```bash
npm run build
```

### 6. Run ESLint

```bash
npm run lint
```

## 💾 How Data Storage Works

The application uses browser Local Storage to persist transactions.

- Expenses are loaded when the application initializes.
- Changes to the expense list are saved automatically.
- Refreshing the page does not normally remove saved transactions.
- Data is stored locally in the current browser and origin.

**Note:** Local Storage is browser-specific. Clearing site data or switching browsers/devices may remove or hide your saved transactions. This project does not use a remote database or user authentication.

## 🖼️ Screenshots

Add screenshots of the running application to a `screenshots/` directory in the project root.

Suggested screenshots:

| Screenshot | Description |
|---|---|
| `dashboard.png` | Dashboard and expense summary cards |
| `add-expense.png` | Add Transaction form |
| `transactions.png` | Search, category filters, and transaction list |
| `mobile-view.png` | Responsive mobile layout |

Once the screenshots are added, display them here:

### Dashboard

![Expense Tracker Dashboard](./screenshots/dashboard.png)

### Add Expense

![Add Expense Form](./screenshots/add-expense.png)

### Transactions

![Expense Transactions](./screenshots/transactions.png)

> Replace these image paths if your screenshot filenames are different. GitHub will display the images once the referenced files are committed.

## 🔮 Future Improvements

- Edit existing transactions
- Date-range filtering
- Monthly and yearly expense charts
- Export transactions to CSV
- Budget limits and spending alerts
- Dark/light theme toggle
- Backend integration and user authentication

## 🎯 Learning Outcomes

Through this project, I practised:

- Building reusable React components.
- Managing application state with React Hooks.
- Creating custom hooks to separate business logic from UI.
- Working with browser Local Storage.
- Implementing search, filtering, sorting, and calculations.
- Designing responsive layouts with CSS.
- Maintaining code quality with ESLint and validating production builds with Vite.

## 👨‍💻 Author

**Aman Singh**

- GitHub: [@AmanSingh378](https://github.com/AmanSingh378)

---

Built as a hands-on React internship project to practise modern frontend development.