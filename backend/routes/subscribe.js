const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { email } = req.body;
    console.log('Content Form Submitted',{email});
    res.status(200).json({message : 'Email Received'});
});

module.exports = router;

