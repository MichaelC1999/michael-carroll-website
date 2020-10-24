const express = require('express');
const router = express.Router();

const profileControls = require('../controllers/profileControls');
const projectControls = require('../controllers/projectControls');

router.get('/', profileControls.getProfile);
router.get('/exp', profileControls.getExp);
router.get('/skills', profileControls.getSkills);
router.get('/projects', projectControls.getProjects);


module.exports = router