const mongoose = require('mongoose');

// Define the schema for the document
const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  filePath: { type: String, required: true },
  size: { type: Number, required: true },
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Create and export the Mongoose model
const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
