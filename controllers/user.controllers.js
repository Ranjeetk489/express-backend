const logger = require("../logger/winston.logger");
const {  getAllUsersQuery, getUserByIdQuery } = require("../queries/user.queries");
const ApiResponse = require("../utils/apiResponse")


const findAllUserController = async (req, res) => {
    try {
        const usersData = await getAllUsersQuery();
        res.status(200).json(new ApiResponse(200, usersData));
    } catch (error) {
        logger.error(error.message);
        res.status(200).json(new ApiResponse(400, "Error Occured"));
    }
}

const findUserByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id) {
            return res.status(400).json(new ApiResponse(400, "user id is required"));
        }
        const userData = await getUserByIdQuery(id);
        res.status(200).json(new ApiResponse(200, userData));
    } catch (error) {
        logger.error(error.message);
        res.status(200).json(new ApiResponse(400, 
            "Error Occured"
        ));
    }
}


module.exports = {
    findAllUserController,
    findUserByIdController,
}