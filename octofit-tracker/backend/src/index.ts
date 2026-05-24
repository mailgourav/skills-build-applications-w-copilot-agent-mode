import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker';

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', port: PORT });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  console.log(`Frontend available at http://localhost:5173`);
  console.log(`MongoDB connection: ${MONGODB_URI}`);
});
