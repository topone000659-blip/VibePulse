const express = require("express");
const router = express.Router();

router.get("/profile",(req,res)=>{
  res.json({feature:"profile"});
});

router.get("/groups",(req,res)=>{
  res.json({feature:"groups"});
});

router.get("/friends",(req,res)=>{
  res.json({feature:"friends"});
});

router.get("/upload",(req,res)=>{
  res.json({feature:"upload"});
});

router.get("/realtime",(req,res)=>{
  res.json({feature:"chat"});
});

module.exports = router;
