
const express = require("express");
const db = require("../models");

const router = express.Router()
router.get("/users", async (req, res) => {
    try {
        const users = await db.user.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.get("/users/:id", async (req, res) => {
    try {
        const user = await db.user.findByPk(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
