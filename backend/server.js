const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoUri = "mongodb://localhost:27017/ctf-website";

mongoose.connect("mongodb+srv://ctfuser:ctf123456@cluster0.6q6vo2s.mongodb.net/?appName=Cluster0")

// Import routes
const authRoutes = require('./authRoutes');

// Use routes
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.json({ message: 'CTF Backend is running!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});