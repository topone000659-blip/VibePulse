const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server,{
  cors:{
    origin:"*"
  }
});

app.use(cors());
app.use(express.json());
app.use("/api/features", require("./routes/features"));

const db = new sqlite3.Database("./vibepulse.db");
const SECRET = "vibepulse_secret_key";

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS messages(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT,
      text TEXT,
      created DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

app.post("/register", async (req,res)=>{
  const {email,password}=req.body;
  const hash=await bcrypt.hash(password,10);

  db.run(
    "INSERT INTO users(email,password) VALUES(?,?)",
    [email,hash],
    err=>{
      if(err) return res.status(400).json({error:"User exists"});
      res.json({success:true});
    }
  );
});

app.post("/login",(req,res)=>{
  const {email,password}=req.body;

  db.get(
    "SELECT * FROM users WHERE email=?",
    [email],
    async(err,user)=>{
      if(!user) return res.status(401).json({error:"Invalid login"});

      const ok=await bcrypt.compare(password,user.password);

      if(!ok) return res.status(401).json({error:"Invalid login"});

      const token=jwt.sign(
        {id:user.id,email:user.email},
        SECRET
      );

      res.json({token});
    }
  );
});

app.get("/messages",(req,res)=>{
  db.all(
    "SELECT * FROM messages ORDER BY id DESC",
    [],
    (err,data)=>{
      res.json(data);
    }
  );
});

app.post("/messages",(req,res)=>{
  const {user,text}=req.body;

  db.run(
    "INSERT INTO messages(user,text) VALUES(?,?)",
    [user,text],
    ()=>{
      res.json({success:true});
    }
  );
});

io.on("connection",(socket)=>{

  console.log("User connected");

  socket.on("join",(room)=>{
    socket.join(room);
  });

  socket.on("message",(data)=>{
    io.emit("message",data);
  });

  socket.on("disconnect",()=>{
    console.log("User disconnected");
  });

});


server.listen(3000,()=>{
  console.log("VibePulse API running on 3000");
});
