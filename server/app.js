const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const fileUpload = require("multer");
const dotenv = require("dotenv");

dotenv.config();

const documentRoutes = require('./routes/documentRoutes');


const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/documents', documentRoutes);

app.get('/', (req, res) => {
    res.send('server is running');
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})