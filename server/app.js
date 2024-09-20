const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("multer");
const dotenv = require("dotenv");

const documentRoutes = require('./routes/documentRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/documents', documentRoutes)

app.get('/', (req, res) => {
    res.send('server is running');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})