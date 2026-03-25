# 🏥 Automated Hospital Appointment Chatbot

An intelligent AI-powered system that automates hospital bookings. This project connects a **React** frontend with an automated **n8n** workflow powered by **Google Gemini**.

## 🚀 Key Features
* **AI-Driven conversation:** Uses Google Gemini to extract appointment details (Name, Email, Dept, Date).
* **Automated Workflow:** Orchestrated by n8n to handle data logic and webhooks.
* **Database Integration:** Automatically logs and updates appointments in Google Sheets.

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite.
* **Backend/Automation:** n8n.
* **LLM:** Google Gemini.
* **Storage:** Google Sheets API.

## 📁 Project Structure
* `/frontend`: React source code and UI components.
* `/workflow`: n8n workflow JSON file (Ready for import).

## 🔧 Setup
1. **Frontend:** Go to `/frontend`, run `npm install` then `npm run dev`.
2. **n8n:** Import the JSON file from `/workflow` into your n8n instance.
3. **Config:** Replace `N8N_WEBHOOK_URL` in `Chatbot.jsx` with your n8n production URL.