# 💱 Currency Converter App

A modern Currency Converter built using **React, Redux Toolkit, and Tailwind CSS**.
This app fetches live exchange rates and allows users to convert between currencies instantly.

---

## 📸 UI Preview

Add your screenshots here:

```md
![Converter UI](./src/assets/currency.png)
```

---

## 🚀 Features

- 🌍 Live currency exchange rates from API
- 🔄 Convert between any two currencies
- 🔁 Swap currencies instantly
- 📊 Real-time calculation without extra API calls
- ⚡ Redux Toolkit state management
- 🧠 Async API handling with `createAsyncThunk`
- 🎨 Clean responsive UI with Tailwind CSS

---

## 🛠 Tech Stack

- React.js
- Redux Toolkit
- React Redux
- Tailwind CSS
- Exchange Rate API

---

## 📁 Project Structure

```bash
src/
│
├── api/
│   └── currencyApi.js
│
├── redux/
│   ├── store.js
│   └── features/
│       └── currencySlice.js
│
├── utils/
│   └── currencyNames.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/currency-converter.git
```

Move into project folder

```bash
cd currency-converter
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in root:

```env
VITE_CURRENCY_API_KEY = "your_api_key_here"
```

---

## 🧠 Redux Flow Used

1. App loads → dispatch async thunk
2. API returns exchange rates
3. Redux store updates state
4. UI re-renders automatically
5. Conversion calculated locally

---

## 🎯 Learning Outcomes

This project demonstrates:

- Async Redux logic with `createAsyncThunk`
- API integration with Redux Toolkit
- Global state management patterns
- UI state vs server data separation
- Tailwind responsive layout techniques
