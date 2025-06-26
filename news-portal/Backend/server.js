require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const blogsRoutes = require("./Routes/UserRoutes"); // Route file

const app = express();
const PORT = process.env.PORT || 3001;

// ------------------- MIDDLEWARE -------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log every request
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ------------------- ROUTES -------------------
app.use(blogsRoutes); // API routes (like /add-blog, /blogs, etc.)

app.get("/", (req, res) => {
  res.sendFile("./index1.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});

// ------------------- DB CONNECT -------------------
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
  });
