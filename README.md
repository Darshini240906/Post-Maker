# 📸 Post Maker

A full-stack MERN application that lets users upload an image with a caption and view all posts in a clean, scrollable feed. Built as my first end-to-end MERN project — from database schema to a deployed-ready REST API to a fully styled React frontend.

![MERN](https://img.shields.io/badge/Stack-MERN-6c5ce7?style=flat-square)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## ✨ Features

- **Create posts** — upload an image + caption through a clean, animated form
- **Live feed** — fetches and displays all posts in a responsive card layout
- **Cloud image storage** — images uploaded via [ImageKit](https://imagekit.io/) instead of storing binary data in MongoDB
- **RESTful API** — simple, predictable endpoints (`POST /create-post`, `GET /posts`)
- **Client-side routing** — React Router handles navigation between Create Post and Feed pages without full page reloads

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM — client-side routing
- Axios — HTTP requests
- Custom CSS (no framework) — gradients, animations, responsive card UI

**Backend**
- Node.js + Express — REST API server
- Multer — handles multipart/form-data image uploads in memory
- Mongoose — MongoDB object modeling
- ImageKit SDK — cloud image hosting & CDN delivery
- CORS + dotenv — cross-origin requests & environment config

**Database**
- MongoDB Atlas (cloud-hosted)

---

## 📂 Project Structure

```
Post-Maker/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   └── post.model.js       # Mongoose schema for posts
│   │   ├── services/
│   │   │   └── storage.service.js  # ImageKit upload logic
│   │   ├── db/
│   │   │   └── db.js               # MongoDB connection
│   │   └── app.js                  # Express app + routes
│   ├── server.js                   # Entry point
│   └── .env                        # Environment variables (not committed)
│
└── frontend/
    └── post-maker/
        ├── src/
        │   ├── pages/
        │   │   ├── CreatePost.jsx  # Post creation form
        │   │   └── Feed.jsx        # Post feed display
        │   ├── App.jsx             # Routes
        │   ├── App.css             # Styling
        │   └── main.jsx            # React entry point
        └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- A MongoDB Atlas connection string
- An ImageKit account (for `privateKey`, `publicKey`, `urlEndpoint`)

### 1. Clone the repo
```bash
git clone https://github.com/Darshini240906/post-maker.git
cd post-maker
```

### 2. Set up the backend
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Run the server:
```bash
node server.js
```
Server runs on `http://localhost:3000`

### 3. Set up the frontend
```bash
cd frontend/post-maker
npm install
npm run dev
```
App runs on `http://localhost:5173`

---

## 🔌 API Reference

| Method | Endpoint       | Description                          |
|--------|----------------|---------------------------------------|
| POST   | `/create-post` | Uploads an image + caption, creates a post |
| GET    | `/posts`       | Returns all posts from the database   |

**POST /create-post** — expects `multipart/form-data`:
```
img: <file>
caption: <string>
```

---

## 🧠 What I Learned

Building this project end-to-end taught me a lot about how the pieces of a full-stack app actually connect:

- **Multipart form handling** — how `multer` parses `multipart/form-data` on the backend, and why `FormData` (not a plain JS object) has to be used on the frontend to send files correctly
- **Cloud image storage** — why storing images directly in MongoDB is a bad idea, and how to offload that to a service like ImageKit and just store the returned URL instead
- **React Router fundamentals** — setting up routes, navigating programmatically with `useNavigate`, and why routes need to be explicitly defined (including a root `/` route)
- **The Rules of Hooks** — debugged a real "Invalid hook call" error caused by **duplicate copies of React** in nested `node_modules` folders, which taught me why hook errors aren't always about the code itself
- **Environment variables & `dotenv`** — debugging a silent `.env` loading failure, including checking for file encoding issues (BOM) and load order
- **CORS & connection debugging** — diagnosing `ERR_CONNECTION_REFUSED` errors and understanding the difference between a frontend crash and a backend not running at all
- **Async error handling** — wrapping Express route handlers in `try/catch` so failed uploads or DB writes return clean error responses instead of hanging
- **CSS layout debugging** — how a single missing `flex-direction` property can break an entire page layout, reinforcing how important flexbox fundamentals are

---

## 🔮 Future Improvements

- [ ] Add loading states/spinners while posts fetch or upload
- [ ] Add form validation (required fields, file size/type limits)
- [ ] Add pagination or infinite scroll to the feed
- [ ] Add user authentication so posts are tied to accounts
- [ ] Add delete/edit functionality for posts
- [ ] Add a toast notification on successful post creation

---

## 👩‍💻 Author

**Darshini**
3rd-year CSBS student, SRMIST Ramapuram
[GitHub](https://github.com/Darshini240906) · [LeetCode](https://leetcode.com/Darshini240906)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
