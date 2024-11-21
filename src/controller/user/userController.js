function  serveHomePage(req,res) {
    try {
        res.render('user/home')
        
    } catch (error) {
        throw new Error('something went wrong',error)
    }
}
function serveLoginPage(req,res){

}

function serveSignUpPage(req,res){

}

module.exports={
    serveHomePage,
    serveLoginPage,
    serveSignUpPage
}