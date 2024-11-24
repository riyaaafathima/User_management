
const userModel = require('../../model/userModel');
const UserModel = require('../../model/userModel');
const bcrypt = require('bcrypt');

function serveHomePage(req, res) {
    try {
        res.render('user/home')

    } catch (error) {
        throw new Error('something went wrong', error)
    }
}
function serveLoginPage(req, res) {
    try {
        res.render('user/login')
    } catch (error) {
        throw new Error("something went wrong", error);

    }
}

function serveSignUpPage(req, res) {
    try {
        res.render('user/signup')
    } catch (error) {
        throw new Error('something went wrong', error)

    }

}


async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        const isEmailExist = await userModel.findOne({ email })



        if (!isEmailExist) {
            // throw new Error('email already exist');
            return res.status(400).json({ error: 'email doenot exist', type: "email" })
        }

        const isMatch = await bcrypt.compare(password, isEmailExist.password)

        if (!isMatch) {
            // throw new Error("password incorrect 😒");

            return res.status(400).json({ error: 'Password is incorrect 😒', type: 'password' });

        }
        if (isEmailExist.isAdmin) {
            return res.status(200).json({ message: 'login successfull 🎉', isAdmin: true })
        }
        req.session.user = {
            email: email
        }

        return res.status(200).json({ message: 'login successfull 🎉' })
    } catch (error) {
        return res.status(400).json({ error: 'internal server error', type: 'error' })


    }


}

async function signupController(req, res) {
    try {
        const { username, email, password } = req.body;
        const isEmailExist = await userModel.findOne({ email })
        if (isEmailExist) {
            throw new Error("email already exist");
        }


        const newUser = new UserModel({
            // attaching blueprint from schema as key and userdata as pairs that from req .body;
            username,
            email,
            password: await bcrypt.hash(password, 10)
        })

        await newUser.save()
        req.session.user = {
            email: email
        }

        return res.status(200).json('successfully saved')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}









module.exports = {
    serveHomePage,
    serveLoginPage,
    serveSignUpPage,
    signupController,
    loginController,
}

