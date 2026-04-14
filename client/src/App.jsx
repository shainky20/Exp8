import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";


function Protected({ children }) {
  return localStorage.getItem("token") ? children : <Navigate to="/" />;
}

function AdminRoute({ children }) {
  return localStorage.getItem("role") === "admin"
    ? children
    : <Navigate to="/dashboard" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />

        <Route
          path="/admin"
          element={
            <Protected>
              <AdminRoute>
                <Admin />
              </AdminRoute>
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}