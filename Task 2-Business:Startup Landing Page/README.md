# Flowly — Business/Startup Landing Page

A modern and fully responsive **Business/Startup Landing Page** built using **HTML, CSS, and JavaScript**.

This project was created as a practical web development assignment to learn and demonstrate core frontend concepts such as CSS selectors, the box model, typography, colors, Flexbox, CSS Grid, positioning, media queries, and responsive design.

---

## 🚀 Live Preview

You can open the project locally in your browser by opening:

```text
index.html
````

---

## 📌 Project Overview

Flowly is a SaaS-style business landing page designed for a modern startup or project management platform.

The website focuses on:

* Clean and modern UI
* Responsive design
* SaaS-style dashboard hero section
* Service cards
* Feature sections
* Customer testimonials
* Pricing plans
* Contact form
* Responsive navigation
* JavaScript form validation

---

## ✨ Features

### Navigation

* Responsive navigation bar
* Smooth scrolling
* Active navigation link
* Mobile hamburger menu
* Sticky navbar
* Navbar background changes on scroll

### Hero Section

* Modern startup headline
* Call-to-action buttons
* User/team statistics
* SaaS dashboard preview
* Responsive dashboard layout

### Services

Three service cards covering:

* Project Management
* Team Collaboration
* Business Analytics

### Features

Includes:

* Unified workspace
* Smart task management
* Real-time analytics
* Dashboard-style UI elements

### Testimonials

Three customer testimonial cards with:

* Star ratings
* Customer names
* Job roles
* Responsive card layout

### Pricing

Three pricing plans:

* Starter
* Professional
* Business

Each plan contains:

* Monthly price
* Features
* Call-to-action button

### Contact

Contact section includes:

* Name
* Email
* Subject
* Message
* JavaScript form validation
* Error messages
* Success message

### Footer

Includes:

* Company information
* Product links
* Company links
* Resources
* Social media links
* Copyright information

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Google Fonts
* CSS Flexbox
* CSS Grid
* CSS Media Queries
* Intersection Observer API

---

## 📚 Concepts Learned

This project demonstrates the following concepts:

### HTML

* Semantic HTML structure
* Headings
* Paragraphs
* Links
* Buttons
* Forms
* Input fields
* Textarea
* Sections
* Footer

### CSS

* CSS selectors
* Box model
* Typography
* Colors
* CSS variables
* Flexbox
* CSS Grid
* Positioning
* Borders
* Border radius
* Gradients
* Transitions
* Hover effects
* Media queries
* Responsive layouts

### JavaScript

* DOM selection
* Event listeners
* Form validation
* Regular expressions
* Class manipulation
* Smooth scrolling
* Mobile navigation
* Scroll events
* Intersection Observer API

---

## 📁 Project Structure

```text
flowly-landing-page/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 💻 How to Run

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Open the project

```bash
cd flowly-landing-page
```

### 3. Run the website

Simply open:

```text
index.html
```

in your web browser.

---

## 📱 Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile
* Small mobile screens

Responsive behavior is implemented using CSS media queries.

### Desktop

The website uses:

* Multi-column layouts
* Dashboard preview
* Horizontal navigation
* Grid-based sections

### Tablet

The layout automatically adjusts:

* Grid columns
* Dashboard size
* Cards
* Contact section

### Mobile

The website changes to:

* Hamburger navigation
* Single-column cards
* Stacked buttons
* Responsive dashboard
* Mobile-friendly contact form
* Smaller typography

---

## 🎨 Design

The landing page uses a modern SaaS-inspired visual style with:

* Dark background
* Purple and blue gradients
* Glass-like cards
* Rounded corners
* Soft borders
* Dashboard UI
* Modern typography
* Subtle hover animations

The design is an original implementation inspired by modern SaaS landing page patterns.

---

## 🧪 Form Validation

The contact form validates:

* Empty name
* Short name
* Empty email
* Invalid email format
* Empty subject
* Empty message
* Short message

Example validation:

```javascript
if (!isValidEmail(emailInput.value.trim())) {
  emailError.textContent =
    "Please enter a valid email address.";
}
```

After successful validation, the user receives a success message.

> Note: The form currently performs frontend validation only. It does not send data to a backend server.

---

## 📸 Sections

The website contains:

```text
Navbar
   ↓
Hero
   ↓
Trusted Companies
   ↓
Services
   ↓
Features
   ↓
Testimonials
   ↓
Pricing
   ↓
Contact
   ↓
Footer
```

---

## 🔮 Future Improvements

The project can be extended by adding:

* Backend contact form
* Database integration
* User authentication
* Real dashboard
* Payment gateway
* Dark/light theme toggle
* Blog section
* FAQ section
* Newsletter subscription
* Real testimonials
* CMS integration
* Deployment using Vercel or Netlify

---

## 👨‍💻 Author

**Aman Singh**

Full Stack Developer & AI Enthusiast

---

## 📄 License

This project is created for educational and portfolio purposes.

You are free to modify and improve the project for learning and personal use.
```