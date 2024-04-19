//EfQjpOOGIqMOh2fD

import express from 'express'
import mongoose from 'mongoose'
import moviebookrouter from './routes/moviebook.js'
import cors from 'cors'
import moviecreaterouter from './routes/moviecreate.js'
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',moviebookrouter)
app.use('/',moviecreaterouter)


mongoose.connect('mongodb+srv://samuvelraja072:EfQjpOOGIqMOh2fD@cluster0.ehzzikr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Database Connected")
        app.listen(5000)
    })
    .catch((e) => console.log("Database disconnected"))

