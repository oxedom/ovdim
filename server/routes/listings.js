const express = require('express');
const router = express.Router();
const logic = require('../bl/listing_bl')

router.get('/all', async (req, res) => 
{
    let data = await logic.getAllListings()
    return res.json(data)
})