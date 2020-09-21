const express = require('express')
const feedController = require('../controllers/feed')

const router = express.Router();

router.get("/", feedController.getPosts)
router.post("/new", feedController.newPost)

module.exports = router