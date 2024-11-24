

const requireAdmin=(req,res,next)=>{
    if(req.session.isAdmin){
        next()
    }else{
        return res.redirect('/signup')
    }


}
module.exports=requireAdmin