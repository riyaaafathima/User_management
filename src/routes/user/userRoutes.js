const express = require("express");

const { serveHomePage, serveLoginPage, serveSignUpPage, signupController, loginController, serveDashBoard } = require("../../controller/user/userController")

const router = express.Router()


router.get("/", serveHomePage)


router.get("/login", serveLoginPage)


router.get("/signup", serveSignUpPage)

router.get('/dashboard',serveDashBoard)

router.post('/signup',signupController)

router.post('/login',loginController) 

module.exports = router