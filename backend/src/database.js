const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./vibepulse.db");

db.serialize(()=>{

db.run(`
CREATE TABLE IF NOT EXISTS profiles(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 user_id INTEGER,
 bio TEXT,
 avatar TEXT
)`);

db.run(`
CREATE TABLE IF NOT EXISTS groups(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 name TEXT,
 owner_id INTEGER
)`);

db.run(`
CREATE TABLE IF NOT EXISTS group_members(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 group_id INTEGER,
 user_id INTEGER
)`);

db.run(`
CREATE TABLE IF NOT EXISTS follows(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 follower_id INTEGER,
 following_id INTEGER
)`);

db.run(`
CREATE TABLE IF NOT EXISTS media(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 user_id INTEGER,
 type TEXT,
 url TEXT
)`);

db.run(`
CREATE TABLE IF NOT EXISTS notifications(
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 user_id INTEGER,
 title TEXT,
 body TEXT
)`);

});

module.exports=db;
