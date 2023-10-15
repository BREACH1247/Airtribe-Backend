const express = require('express');
const router = express.Router();
const createCourse = require('../controllers/createCourse')
const updateCourse = require('../controllers/updateCourse')
const registerLead = require('../controllers/registerLead')
const updateLead = require('../controllers/updateLead')
const searchLead = require('../controllers/searchLead')
const addComment = require('../controllers/addComment')
const registerInstructor = require('../controllers/registerInstructor')

router.post('/createCourse',createCourse)
router.put('/updateCourse/:id',updateCourse)
router.post('/registerLead',registerLead)
router.put('/updateLead/:id',updateLead)
router.get('/searchLead',searchLead)
router.post('/addComment',addComment) 
router.post('/registerInstructor',registerInstructor)

module.exports = router
