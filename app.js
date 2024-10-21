
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const  morganMiddleware  = require("./logger/morgan.logger");
const router = express.Router()

app.use(cors());
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(router);


router.get('/health', (req,res) =>  {
    res.send(
        "Server is up and running"
    )
})
router.use('/apis/v1', require('./routes/users.routes'));



module.exports = {
    app,
    router
}