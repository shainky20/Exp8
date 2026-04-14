import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/login", data);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      window.location.href = "/dashboard";
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <input {...register("email")} placeholder="Email" /><br /><br />
      <input {...register("password")} type="password" placeholder="Password" /><br /><br />

      <button type="submit">Login</button>
    </form>
  );
}