const express = require('express')
const app = express();

const routes = require('./MealRoutes')
const cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false)
//соединяем mongoose с базой данных

const PORT = 7000 || process.env.port   //может быть соединен с другим портом

app.use(express.json())
app.use(cors())

mongoose  
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))   //соединяем с базой данных 

app.use(routes)

app.listen(PORT, () => {
    console.log(`I am listening on PORT ${PORT}`)
})


//mongodb+srv://asbushuevaa:<password>@cluster0.bwbp3f5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0