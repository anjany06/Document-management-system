const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Import routes
const documentRoutes = require('./routes/documentRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

  app.use(cors({
    origin: 'http://localhost:5173',
  }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/documents', documentRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});

// //step 3 : heroku

// if(process.env.NODE_ENV == "production"){
//   app.use(express.static("client/build"));
// }

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
