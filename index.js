
const {app} = require("./app");
const sequelize = require("./db");
const {Umzug} = require('umzug');
const { getAllUsers } = require("./queries/user.queries");

app.listen(4001, () => {
    console.log("Server is running on port 3000");
});


sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
});



