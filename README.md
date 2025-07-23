# Smart-QA

Smart-QA is a full-stack web application for collaborative question-answer rooms, integrating AI-powered capabilities using Gemini. Users can create rooms, ask questions, and get smart, automated responses.

---

## 🔧 Features

- 🌐 Create and join dynamic Q&A rooms
- 🤖 AI integration with Google Gemini for smart answers
- ⚡ Built with Vite + React on the frontend
- 🛠️ Node.js + Express backend
- 📦 MongoDB for storing rooms and questions

---

## 📁 Project Structure

```
Smart-Qa-main/
├── server/                  # Express backend
│   ├── src/
│   │   ├── controllers/     # Room logic
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API endpoints
│   │   └── services/        # Gemini API service
│   └── server.js            # Server entry point
├── smartqa-react-client/   # Frontend React app
│   ├── src/                 # Components and config
│   ├── public/              # Static assets
│   └── vite.config.js       # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- MongoDB
- Google Gemini API key

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Smart-Qa.git
cd Smart-Qa-main
```

---

### 2. Set Up Environment Variables

#### ➤ Create a `.env` file inside the `server/` folder with the following:

```env
CLIENT_URL=http://localhost:5173
PORT=5001
MONGODB_URL=mongodb://localhost:27017/smartqa
GEMINI_API_KEY=your_actual_gemini_api_key_here
```

#### ➤ Create a `.env` file inside the `smartqa-react-client/` folder with the following:

```env
VITE_SERVER_ENDPOINT=http://localhost:5001
```

---

### 3. Start the Backend

```bash
cd server
npm install
npm start
```

---

### 4. Start the Frontend

```bash
cd smartqa-react-client
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **AI Service:** Google Gemini API

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.