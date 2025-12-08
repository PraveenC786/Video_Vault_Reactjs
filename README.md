# 🎬 Video Vault  
*A React-based video management application with authentication, real-time search, and full CRUD operations.*

- Built a React-based app for managing video data with **CRUD operations** using Axios and JSON Server.
- Implemented **token-based authentication** for secure login/logout and real-time search.
- Users can **add, edit, delete, and view videos** for streamlined video management.
---

## 🚀 Tech Stack & Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JSON Server](https://img.shields.io/badge/JSON%20Server-000000?style=for-the-badge&logo=json&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![UUID](https://img.shields.io/badge/UUID-1E90FF?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

---

## 📌 Overview  
**Video Vault** is a user-friendly video management system built using **React + JSON Server**.  
It allows users to **Create, Read, Update, Delete** video entries and includes **token-based authentication** to secure actions like adding or editing videos.

---

## 🎥 Key Features

### ✔️ Full CRUD Functionality  
- Add videos  
- Edit videos  
- Delete videos  
- View details  

### ✔️ Real-Time Search  
- Instantly filters video list as you type  

### ✔️ Secure Authentication  
- Login system with **UUID-based token**  
- Token stored in localStorage  
- Only logged-in users can Add/Edit/Delete  

### ✔️ Responsive, Clean UI

---

## 🔑 Authentication Flow  
- User logs in → UUID token generated  
- Token stored in `localStorage`  
- Protected actions verify token  
- Logout clears token  

---

## 📡 API Endpoints (JSON Server)

### Videos (`/videos`)

| Method | Endpoint          | Description            |
|--------|--------------------|------------------------|
| GET    | `/videos`          | Get all videos         |
| GET    | `/videos/:id`      | Get video by ID        |
| POST   | `/videos`          | Add new video          |
| PUT    | `/videos/:id`      | Update video           |
| DELETE | `/videos/:id`      | Delete video           |

### Users (`/users`)

| Method | Endpoint      | Description         |
|--------|----------------|---------------------|
| POST   | `/users`       | Register user       |
| GET    | `/users?id=1`  | Get user by ID      |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the project  
```bash
git clone https://github.com/your-username/video-vault.git
cd video-vault

### 2️⃣ Install dependencies
```bash
npm install

### 3️⃣ Start JSON Server
```bash
json-server --watch videos.json --port 4000
json-server --watch register.json --port 8000

### 4️⃣ Start React App
```bash
npm start

If using Vite + React:

```bash
npm run dev

## 🙋‍♂️ Author

**Praveen C**\
Java Full Stack Developer
