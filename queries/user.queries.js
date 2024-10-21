const db = require("../models");

const getAllUsers = async () => {
    try {
        const users = await db.user.findAll();
        console.log(users);
        return users;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllUsers
}