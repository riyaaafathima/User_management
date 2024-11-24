const express = require('express')
const router = express.Router()
const { getAllUsersController, serveDashBoard, deleteUserController, dashboardController, userUpdateController } = require('../../controller/admin/adminController')

router.get('/getAllUsers', getAllUsersController)
router.get('/dashboard', serveDashBoard)
router.delete('/deleteUser/:id', deleteUserController)
router.get('/dashboard/:id', dashboardController)
router.post('/updateUser', userUpdateController)



module.exports = router
