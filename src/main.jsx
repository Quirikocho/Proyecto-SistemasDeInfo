import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./Home/App";
import Login from "./Iniciar sesion/login";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  {/* Aquí pongo el header para que se vea en todas las páginas */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    {/* Footer para que esté en todas las páginas */}
  </BrowserRouter>
);


//*Aquí se conectan todas las páginas