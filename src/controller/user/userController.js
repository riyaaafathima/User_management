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

module.exports = {
    serveHomePage,
    serveLoginPage,
    serveSignUpPage
}