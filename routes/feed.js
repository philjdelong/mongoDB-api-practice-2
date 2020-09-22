const express = require('express')
const feedController = require('../controllers/feed')

const router = express.Router();

router.get("/", feedController.postIndex)
router.post("/post/new", feedController.postCreate)
router.get("/post", feedController.postShow)
router.patch("/post", feedController.postUpdate)
router.delete("/post", feedController.postDelete)

module.exports = router;