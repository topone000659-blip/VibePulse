const express = require("express");
const router = express.Router();
const db = require("../database");

// PROFILE
router.get("/profile/:user_id",(req,res)=>{
  const {user_id}=req.params;

  db.get(
    "SELECT * FROM profiles WHERE user_id=?",
    [user_id],
    (err,row)=>{
      if(err) return res.status(500).json({error:err.message});
      res.json(row || {});
    }
  );
});


// GROUPS
router.get("/groups",(req,res)=>{
  db.all(
    "SELECT * FROM groups ORDER BY id DESC",
    [],
    (err,rows)=>{
      if(err) return res.status(500).json({error:err.message});
      res.json(rows);
    }
  );
});


router.post("/groups",(req,res)=>{
  const {name,owner_id}=req.body;

  db.run(
    "INSERT INTO groups(name,owner_id) VALUES(?,?)",
    [name,owner_id],
    function(err){
      if(err) return res.status(500).json({error:err.message});

      res.json({
        success:true,
        id:this.lastID
      });
    }
  );
});


router.post("/groups/join",(req,res)=>{
  const {group_id,user_id}=req.body;

  db.run(
    "INSERT INTO group_members(group_id,user_id) VALUES(?,?)",
    [group_id,user_id],
    err=>{
      if(err) return res.status(500).json({error:err.message});

      res.json({success:true});
    }
  );
});


// FOLLOW
router.post("/friends",(req,res)=>{
  const {follower_id,following_id}=req.body;

  db.run(
    "INSERT INTO follows(follower_id,following_id) VALUES(?,?)",
    [follower_id,following_id],
    err=>{
      if(err) return res.status(500).json({error:err.message});

      res.json({success:true});
    }
  );
});


router.get("/friends/:id",(req,res)=>{
  db.all(
    "SELECT * FROM follows WHERE follower_id=? OR following_id=?",
    [req.params.id,req.params.id],
    (err,rows)=>{
      if(err) return res.status(500).json({error:err.message});

      res.json(rows);
    }
  );
});


// GROUPS
router.get("/groups",(req,res)=>{
  db.all(
    "SELECT * FROM groups ORDER BY id DESC",
    [],
    (err,rows)=>{
      if(err) return res.status(500).json({error:err.message});
      res.json(rows);
    }
  );
});


router.post("/groups",(req,res)=>{
  const {name,owner_id}=req.body;

  db.run(
    "INSERT INTO groups(name,owner_id) VALUES(?,?)",
    [name,owner_id],
    function(err){
      if(err) return res.status(500).json({error:err.message});

      res.json({
        success:true,
        id:this.lastID
      });
    }
  );
});


router.post("/groups/join",(req,res)=>{
  const {group_id,user_id}=req.body;

  db.run(
    "INSERT INTO group_members(group_id,user_id) VALUES(?,?)",
    [group_id,user_id],
    err=>{
      if(err) return res.status(500).json({error:err.message});

      res.json({success:true});
    }
  );
});


// FOLLOW
router.post("/friends",(req,res)=>{
  const {follower_id,following_id}=req.body;

  db.run(
    "INSERT INTO follows(follower_id,following_id) VALUES(?,?)",
    [follower_id,following_id],
    err=>{
      if(err) return res.status(500).json({error:err.message});

      res.json({success:true});
    }
  );
});


router.get("/friends/:id",(req,res)=>{
  db.all(
    "SELECT * FROM follows WHERE follower_id=? OR following_id=?",
    [req.params.id,req.params.id],
    (err,rows)=>{
      if(err) return res.status(500).json({error:err.message});

      res.json(rows);
    }
  );
});


// UPLOAD / MEDIA
router.post("/upload",(req,res)=>{
  const {user_id,type,url}=req.body;

  db.run(
    "INSERT INTO media(user_id,type,url) VALUES(?,?,?)",
    [user_id,type,url],
    function(err){
      if(err) return res.status(500).json({error:err.message});

      res.json({
        success:true,
        id:this.lastID
      });
    }
  );
});


router.get("/media/:user_id",(req,res)=>{
  db.all(
    "SELECT * FROM media WHERE user_id=? ORDER BY id DESC",
    [req.params.user_id],
    (err,rows)=>{
      if(err) return res.status(500).json({error:err.message});

      res.json(rows);
    }
  );
});


// NOTIFICATIONS
router.get("/notifications/:user_id",(req,res)=>{
  db.all(
    "SELECT * FROM notifications WHERE user_id=? ORDER BY id DESC",
    [req.params.user_id],
    (err,rows)=>{
      if(err) return res.status(500).json({error:err.message});

      res.json(rows);
    }
  );
});


router.post("/notifications",(req,res)=>{
  const {user_id,title,body}=req.body;

  db.run(
    "INSERT INTO notifications(user_id,title,body) VALUES(?,?,?)",
    [user_id,title,body],
    err=>{
      if(err) return res.status(500).json({error:err.message});

      res.json({success:true});
    }
  );
});


// REALTIME
router.get("/realtime",(req,res)=>{
  res.json({
    success:true,
    feature:"chat"
  });
});


module.exports = router;

