const jwt = require("jsonwebtoken");

const SECRET = "vibepulse_secret_key";

function auth(req,res,next){
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({error:"Unauthorized"});
  }

  try{
    req.user = jwt.verify(
      token.replace("Bearer ",""),
      SECRET
    );
    next();
  }catch(e){
    res.status(401).json({error:"Invalid token"});
  }
}

module.exports = auth;
