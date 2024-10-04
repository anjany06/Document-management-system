// updated
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Document = require('../models/Document');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

//get 
router.get('/files', async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get documents' });
  }
});

router.put('/documents/:id', async (req, res) => {
  try {
      const document = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!document) {
          return res.status(404).json({ message: 'Document not found' });
      }
      res.json(document);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

//post
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const document = new Document({
      title: req.body.fileName,
      description: req.body.description,
      filePath: req.file.path,
      size: req.file.size,
    });
    await document.save();
    res.status(201).json({ message: 'Document uploaded successfully', document });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload document' });
  }
});
//delete
router.delete('/files/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Document.findByIdAndDelete(id);
    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete document' });
  }
});

module.exports = router;