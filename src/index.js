/*
requiring express from module : npm
*/
const express = require('express')

const session=require('express-session')

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

app.use(express.json());    

app.use(session({
    secret:'abcd', 
    resave:false,
    saveUninitialized:false,
    cookie: {
    maxAge: 1200000,  
    sameSite: true
    },
    
}))



/* 
database has called here
*/

dbConnection(); 


// preventing the navigation of chrome adding this in middleware
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    next();
  });

        
app.use(userRouter);
app.use(adminRouter);


    

app.listen(PORT, () => {
    console.log(`server is starting in port ${PORT}`);
})





