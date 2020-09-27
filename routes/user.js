const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get("/dashboard", userController.userDashboard)
router.post("/new", userController.userCreate)

module.exports = router;