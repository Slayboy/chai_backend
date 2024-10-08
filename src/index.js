// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from './constants.js'
import connectDB from "./db/index.js";
import { app } from './app.js'
dotenv.config({
    path: './.env'  //.env
})

connectDB()
    .then(() => {
        // app.on('error', (error) => {
        //     console.log('ERR', error);
        //     throw err
        // })
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server is running at port ${process.env.PORT
                }`)
        })
    })
    .catch((error) => {
        console.log('MONGODB db connection failed !!!', error)
    })
















// import express from "express"
// const app = express()

//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on('error', (error) => {
//                 console.log("ERR:", error)
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`app is listening on port ${process.env.PORT}`)
//             })
//         }
//         catch (error) {
//             console.log("ERROR:", error)
//             throw err
//         }
//     })()