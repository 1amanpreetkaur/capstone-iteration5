# 📋 Task Manager Web Application (Capstone Iteration 5)

A progressive task manager app built with **React**, **React Router**, **Firestore**, and **Context API**. Designed to handle task organization across multiple devices with real-time updates and offline persistence.

---

## 🚀 Features

✅ Meets all Capstone Iteration 5 Requirements:
- Remote state management using Firestore
- Context API for global state
- At least 5 React components
- Uses `children` prop
- List & conditional rendering
- Form to add and delete task lists
- Task form includes priority & completion
- Navigation between lists with React Router
- Responsive design
- Offline Firestore persistence

---

## 🌟 Extra Features (Above and Beyond)

✨ **Dark Mode Toggle**  
Switch themes and store preference in `localStorage`.

✨ **Priority Color Coding**  
Tasks are auto-colored by priority level (Red, Yellow, Green).

✨ **Drag-and-Drop Task Sorting**  
Reorder tasks using `react-beautiful-dnd`.

✨ **Progress Indicator**  
Shows % of completed tasks per list.

✨ **Tag System & Filter**  
Tasks can be tagged (e.g. Work, Personal) and filtered dynamically.

✨ **Due Dates with Reminders**  
Optional due date per task with visual countdown.

✨ **Snackbar “Undo Delete”**  
Instant undo for accidental deletions.

✨ **Multilingual Support (i18n)**  
Supports multiple languages (EN, FR, etc.) via `react-i18next`.

✨ **Offline-First Support**  
Create/update/delete tasks while offline. Syncs on reconnect.

---

## 🛠 Tech Stack

- React 18
- React Router 6
- Firebase Firestore
- Vite (for fast dev server)
- Context API
- CSS Modules / Tailwind (if applied)
- react-beautiful-dnd
- react-datepicker
- chart.js or recharts (optional for progress)

---

## 🖥️ Setup Instructions

1. Clone the repository  
   `git clone https://github.com/yourusername/task-manager-app.git`

2. Install dependencies  
   `npm install`

3. Add your Firebase config in `/src/firebase/firebaseConfig.js`

4. Run the development server  
   `npm run dev`

5. Open in browser:  
   `http://localhost:5173`

---

## 📸 Screenshots

![Dark Mode Screenshot](screenshots/dark-mode.png)  
![Progress Chart](screenshots/progress.png)

---

## 📹 Demo Video

**Watch full walkthrough here:**  
🎥 [YouTube]()
