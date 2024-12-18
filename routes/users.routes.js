
const express = require("express");
const { findAllUserController, findUserByIdController, signupController } = require("../controllers/users.controllers");
const router = express.Router()

// router.get("/users", findAllUserController);
// router.get("/users/:id", findUserByIdController);
router.post('/signup', signupController);
// router.post('/login', loginController);



module.exports = router;
