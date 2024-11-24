const messages = require("../constant/response")

const requireUser=(req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        return res.redirect('/signup')
    }


}
module.exports=requireUser