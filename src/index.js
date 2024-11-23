/*
requiring express from module : npm
*/
const express = require('express')
/* 
requiring path its a core module
*/
const path = require('path')

const userRouter = require('./routes/user/userRoutes')

const adminRouter= require('./routes/admin/adminRoutes')

const dbConnection= require('./config/dbConnection')

const app = express()

const PORT = 4000;



/*
serving css and images by setting public folder as static 
 images are in public so no need to configure the path of img with weird slashes
*/
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

/* 
database called here
*/

dbConnection()


app.use(userRouter);
app.use(adminRouter);


app.listen(PORT, () => {
    console.log(`server is starting in port ${PORT}`);
})



