const express = require("express");

const { serveHomePage, serveLoginPage, serveSignUpPage } = require("../../controller/user/userController")

const router = express.Router()


router.get("/", serveHomePage)

module.exports = router

