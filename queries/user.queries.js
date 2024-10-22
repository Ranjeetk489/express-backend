const { QueryTypes } = require("sequelize");
const db = require("../models");

const getAllUsersQuery = async () => {
    const users = await db.user.findAll();
    return users ? users : [];
}

const getUserByIdQuery = async (id) => {
    // const user = await db.user.findByPk(id);
    const user = await db.sequelize.query(`Select * from "user" where id = ${id}`,
        {type: db.sequelize.QueryTypes.SELECT}
    )
    return user ? user : [];
}

module.exports = {      
    getAllUsersQuery,
    getUserByIdQuery  
}