const express = require('express');
const router = express.Router();

const subject = '{"contactSubject": ["General Enquery","Classes","Schedules","Instructors","Prices","Other","Phattadon"]}'

router.get('/', (req, res) => {
  res.json(subject);
});


module.exports = router 