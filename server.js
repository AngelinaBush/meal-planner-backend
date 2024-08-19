const express = require('express')
const app = express();

const routes = require('./MealRoutes')
const cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false)

const PORT = process.env.port || 7000
app.use(express.json())
app.use(cors())

mongoose  
.connect(process.env.MONGODB_LINK, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000, 
})
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))  

app.use(routes)

app.listen(PORT, () => {
    console.log(`I am listening on PORT ${PORT}`)
})


//mongodb+srv://asbushuevaa:<password>@cluster0.bwbp3f5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
