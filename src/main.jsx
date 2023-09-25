import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCMtW9_w4djSB3eCyNvQw-Yk_QMWyyWl6Q",
  authDomain: "reactcoder-bd.firebaseapp.com",
  projectId: "reactcoder-bd",
  storageBucket: "reactcoder-bd.appspot.com",
  messagingSenderId: "570708878513",
  appId: "1:570708878513:web:f1110d8b7971a731bb6e90",
  measurementId: "G-7TLWYCRZJZ",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
