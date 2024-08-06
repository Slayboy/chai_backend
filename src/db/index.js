import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongodb connected !. DB HOST : ${connectionInstance.connection.host} `)
        // console.log(connectionInstance)
    }
    catch (error) {
        console.log("MONGODB connection Failed", error)
        process.exit(1)   //•	Use process.exit(1) to exit the process if an error occurs
    }
}

export default connectDB