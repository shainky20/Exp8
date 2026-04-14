const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {email:"admin@gmail.com", password:"1234", role:"admin"},
  {email:"user@gmail.com", password:"1234", role:"user"}
];

app.post("/login",(req,res)=>{
  const {email,password}=req.body;
  const user=users.find(u=>u.email===email && u.password===password);
  if(!user) return res.status(401).send("Invalid");

  const token = jwt.sign(user,"secret");
  res.json({token, role:user.role});
});

app.get("/dashboard",(req,res)=>res.send("dashboard"));

app.listen(5000,()=>console.log("server running"));
