const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL bağlantısı için gerekli bilgileri girin
const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // MySQL kullanıcı adı
  password: "", // MySQL şifre
  database: "loginreactnative", // Veritabanı adı
});

// MySQL bağlantısını başlatın
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Kullanıcı kaydı için POST endpoint'i
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).json({ error: "Error registering user" });
      return;
    }
    console.log("User registered successfully");
    res.status(200).json({ message: "User registered successfully" });
  });
});

// Kullanıcı girişi için POST endpoint'i
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error logging in:", err);
      res.status(500).json({ error: "Error logging in" });
      return;
    }
    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    console.log("User logged in successfully");
    res.status(200).json({ message: "User logged in successfully" });
  });
});

// Serverı dinlemeye başlayın
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
