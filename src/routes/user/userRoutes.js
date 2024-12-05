const express = require("express");

const { serveHomePage, serveLoginPage, serveSignUpPage, signupController, loginController, logoutController } = require("../../controller/user/userController");
const requireUser = require("../../middleware/requireUser");
const preventNavigation = require("../../middleware/preventNavigation");

const router = express.Router()


router.get("/",requireUser ,serveHomePage)




router.get("/login",preventNavigation, serveLoginPage)


router.get("/signup",preventNavigation, serveSignUpPage)

router.post('/signup',signupController)

router.post('/login',loginController) 

router.get('/logout',logoutController)

module.exports = router   