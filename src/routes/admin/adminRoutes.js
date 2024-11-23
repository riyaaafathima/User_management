const express= require('express')
const router =express.Router()
const {getAllUsersController}=require('../../controller/admin/adminController')

router.get('/getAllUsers',getAllUsersController)



module.exports=router
