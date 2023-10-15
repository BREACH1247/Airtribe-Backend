const express = require('express')
const sequelize = require('./database/database');
require('dotenv').config();
const routes = require('./routes/routes');
const insertDummyData = require('./database/loader');
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',routes)
app.get("/",async(req,res) => {
    await insertDummyData()
    res.send("Connected to localhost 3000")
})

sequelize.sync().then(result =>{
    console.log(result)
    console.log("Database connected")
    app.listen(3000);
}
)
.catch(err => console.log(err))
