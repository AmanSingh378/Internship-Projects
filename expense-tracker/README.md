# 💰 Expense Tracker

> A clean and responsive personal finance tracker built with **React + JavaScript** to manage income, expenses, categories, and transaction history directly from the browser.

**Expense Tracker** is a frontend-focused web application created to practice modern JavaScript concepts while building something practical. Users can record their income and expenses, monitor their balance, search transactions, apply filters, and keep their data persistent using browser Local Storage.

---

## ✨ Highlights

* 💵 Add income and expense transactions
* 📊 Automatically calculate income, expenses, and balance
* 🧾 View complete transaction history
* 🔎 Search transactions instantly
* 🗂️ Filter by category
* ↕️ Filter by income or expense
* 🗑️ Delete transactions
* 💾 Persistent data with Local Storage
* 🌐 Fetch API integration
* ⚡ Async/Await and Promise handling
* 🛡️ API error handling
* 📱 Fully responsive interface
* 🎨 Clean dark-themed dashboard
* 🧩 Component-based React architecture

---

## 🖥️ Preview

### Dashboard

The application provides a simple dashboard where users can quickly see their financial summary.

```text
┌─────────────────────────────────────────────────────────┐
│  💰 Expense Tracker                                     │
│  Manage your money simply                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Total Income      Total Expenses      Current Balance │
│  ₹25,000           ₹8,500              ₹16,500         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Add Transaction                                       │
│                                                         │
│  Expense / Income                                       │
│  Title      Amount      Category      Date             │
│                                                         │
│                  + Add Transaction                      │
├─────────────────────────────────────────────────────────┤
│  🔍 Search...    Category ▼    Type ▼                  │
├─────────────────────────────────────────────────────────┤
│  Transaction History                                    │
│                                                         │
│  🛒 Grocery Shopping          Food       - ₹500        │
│  💼 Freelance Project        Freelance  + ₹10,000     │
└─────────────────────────────────────────────────────────┘
```

> Add your actual project screenshot here after taking one.

```md
![Expense Tracker Dashboard](./screenshots/dashboard.png)
```

---

## 🛠️ Tech Stack

| Technology          | Purpose                                |
| ------------------- | -------------------------------------- |
| **React.js**        | Building the user interface            |
| **JavaScript ES6+** | Application logic                      |
| **Vite**            | Development environment and build tool |
| **CSS3**            | Responsive UI and styling              |
| **Lucide React**    | Interface icons                        |
| **Fetch API**       | External API requests                  |
| **Local Storage**   | Persistent transaction data            |

---

## 📚 JavaScript Concepts Practiced

This project was specifically structured around important JavaScript concepts.

### Destructuring

Used to extract values from objects and function parameters.

```js
const { title, amount, type, category } = transaction;
```

### Spread Operator

Used when updating React state without mutating the existing object.

```js
setFormData((previous) => ({
  ...previous,
  [name]: value,
}));
```

### Array Methods

The project uses JavaScript's built-in array methods for transaction processing.

```js
filter()
map()
reduce()
```

For example, calculating total expenses:

```js
transactions
  .filter(({ type }) => type === "expense")
  .reduce((total, { amount }) => total + Number(amount), 0);
```

### Modules

Application logic is separated into reusable modules:

```text
components/
utils/
services/
data/
```

### Promises & Async/Await

The API service uses asynchronous JavaScript to handle external requests.

```js
const data = await response.json();
```

### Fetch API

External data is requested using the browser's Fetch API.

### Error Handling

API requests and Local Storage operations are wrapped with error handling to prevent unexpected application failures.

### Local Storage

Transaction data is serialized and stored in the browser:

```js
localStorage.setItem(
  "expense-tracker-transactions",
  JSON.stringify(transactions)
);
```

---

## 🧩 Application Architecture

The project follows a simple separation-of-concerns structure.

```text
                    ┌──────────────────┐
                    │      App.jsx     │
                    │  State Management│
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │   Form   │   │ Summary  │   │ Filters  │
        └────┬─────┘   └──────────┘   └────┬─────┘
             │                              │
             └──────────────┬───────────────┘
                            ▼
                   ┌────────────────┐
                   │ TransactionList│
                   └───────┬────────┘
                           ▼
                   ┌────────────────┐
                   │TransactionItem │
                   └────────────────┘

        ┌─────────────────────────────────────┐
        │              Utilities              │
        │  Storage • Calculations • Filtering │
        └─────────────────────────────────────┘

        ┌─────────────────────────────────────┐
        │              Services               │
        │          Fetch API / Async          │
        └─────────────────────────────────────┘
```

---

## 📁 Project Structure

```text
expense-tracker/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Summary.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── SearchFilter.jsx
│   │   ├── TransactionItem.jsx
│   │   └── TransactionList.jsx
│   │
│   ├── data/
│   │   └── categories.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── utils/
│   │   ├── storage.js
│   │   ├── calculations.js
│   │   └── transactionUtils.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Core Features

### 1. Add Transactions

Users can create both:

* Income
* Expense

Each transaction contains:

```text
Title
Amount
Type
Category
Date
```

Input validation prevents empty titles and invalid amounts.

---

### 2. Financial Summary

The dashboard automatically calculates:

```text
Total Income
Total Expenses
Current Balance
```

The balance is calculated using:

```text
Balance = Income - Expenses
```

---

### 3. Transaction History

Every transaction appears in the history section with:

* Transaction type
* Title
* Category
* Date
* Amount
* Delete action

---

### 4. Search & Filtering

Users can narrow down transactions using multiple filters.

**Search**

```text
Search by transaction title
```

**Category**

```text
Salary
Freelance
Food
Shopping
Travel
Bills
Entertainment
Health
Education
Other
```

**Type**

```text
All
Income
Expense
```

The filters can also work together.

---

### 5. Local Storage

Transaction data is automatically saved in the browser.

This means:

```text
Add Transaction
       ↓
React State
       ↓
Local Storage
       ↓
Refresh Browser
       ↓
Transactions Restored
```

No backend or database is required for the current version.

---

## 🌐 API Integration

The project includes a separate API service for fetching exchange-rate information.

### API Service

```text
src/services/api.js
```

The service demonstrates:

* Fetch API
* HTTP response validation
* Promises
* Async/Await
* Try/Catch
* Error propagation

Example flow:

```text
User/Application
       ↓
API Service
       ↓
Fetch Request
       ↓
External API
       ↓
JSON Response
       ↓
Application
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm

Check your versions:

```bash
node -v
npm -v
```

---

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Open the Project

```bash
cd expense-tracker
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Install Lucide Icons

```bash
npm install lucide-react
```

### 5. Start Development Server

```bash
npm run dev
```

The application will run on the local URL provided by Vite, usually:

```text
http://localhost:5173
```

---

## 📦 Available Commands

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🧪 Example Usage

### Add Income

```text
Type: Income
Title: Freelance Project
Amount: ₹10,000
Category: Freelance
```

### Add Expense

```text
Type: Expense
Title: Grocery Shopping
Amount: ₹500
Category: Food
```

### Result

```text
Total Income      ₹10,000
Total Expenses       ₹500
Current Balance    ₹9,500
```

After refreshing the browser, the transactions remain available because they are stored in Local Storage.

---

## 📱 Responsive Design

The interface is designed to work across:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

The layout automatically adjusts based on screen size.

---

## 🔮 Future Improvements

Planned improvements for future versions:

* [ ] Edit transactions
* [ ] Monthly financial reports
* [ ] Expense charts
* [ ] Category-wise spending analysis
* [ ] Monthly budget limits
* [ ] CSV export
* [ ] Import transactions
* [ ] Dark/Light theme switch
* [ ] Multiple currency support
* [ ] User authentication
* [ ] Cloud database
* [ ] Backend API
* [ ] Dashboard analytics

---

## 🎯 Learning Objective

The main goal of this project was to combine JavaScript fundamentals with a practical React application.

Instead of implementing concepts separately, the project uses them together in a real-world workflow:

```text
JavaScript Fundamentals
        ↓
React Components
        ↓
State Management
        ↓
Data Processing
        ↓
Local Storage
        ↓
API Integration
        ↓
Responsive Web Application
```

---

## 👨‍💻 Author

### Aman Singh

**Full Stack Developer & AI Enthusiast**

Interested in building modern web applications using React, Node.js, MongoDB and AI technologies.

---

## 📄 License

This project is created for **learning and educational purposes**.

Feel free to explore, modify, and improve the project.
