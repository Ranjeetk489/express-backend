
const express = require("express");
const { findAllUserController, findUserByIdController } = require("../controllers/user.controllers");
const router = express.Router()

router.get("/users", findAllUserController);
router.get("/users/:id", findUserByIdController);

module.exports = router;
