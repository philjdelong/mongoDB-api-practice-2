const express = require('express')
const feedController = require('../controllers/feed')

const router = express.Router();

router.get("/", feedController.postIndex)
router.get("/post", feedController.postShow)
router.post("/post/new", feedController.postCreate)
router.delete("/post", feedController.postDelete)

module.exports = router