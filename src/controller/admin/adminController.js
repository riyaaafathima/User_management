const userModel = require("../../model/userModel")

async function getAllUsersController(req, res) {
    try {
        const getAllUsers = await userModel.find({})
        return res.status(200).json(getAllUsers)

    } catch (error) {
        throw new Error('something went wrong', error)

    }
}
async function serveDashBoard(req, res) {
    try {
        const allUsers = await userModel.find({
            isAdmin: false
        })
        res.render('admin/dashboard', {
            allUsers
        })
    } catch (error) {
        throw new Error('something went wrong', error)
    }

}
async function deleteUserController(req, res) {
    try {
        const user_id = req.params.id
        const deletingUser = await userModel.findByIdAndDelete(user_id)
        return res.status(200).json('user deleted Successfully')

    } catch (error) {
        throw new Error("something went wrong");


    }
}
async function dashboardController(req, res) {
    try {
        const user_id = req.params.id
        const userdata = await userModel.findById(user_id);
        if(!userdata){
            throw new Error("no user found ");
        }
       return res.render('admin/userdata',{
            userdata
        })
    } catch (error) {
        // throw new Error('something went wrong',error?.message)
        return res.status(400).json(error.message)

    }
 

}
async function userUpdateController(req,res){
    try {
        const {username,email,_id}=req.body
        const updateUser = await userModel.findByIdAndUpdate(_id,{$set:{
            email,
            username
        }},{new:true})  //new true used to update the doc otherwise it ll show old doc 

       return res.redirect('/dashboard')
        
    } catch (error) {
    
    return res.status(400).json(error.message)
        
    }
}


module.exports = {
    getAllUsersController,
    serveDashBoard,
    deleteUserController,
    dashboardController,
    userUpdateController
}