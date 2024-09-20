const express = require('express');
const router = express.Router();
const Document = require('../models/Document');
const upload = require('../multer.js');

//get documnet
router.get( '/upload', upload.single('file') ,async(req, res)=>{
    try{
        const {title,discription} = req.body;
        const document = new Document({
            title,
            discription,
            filePath:req.file.path
        });
    }

    catch(err){
        res.status(500).json({error: 'Failed to upload document'});
    }
});

//list of documents
router.get('/all', async(req, res)=>{
    try{
        const documents = await Document.find({});
    }
    catch(err){
        res.status(500).json({error: 'Failed to get documents'});
    }
})
module.exports = router
