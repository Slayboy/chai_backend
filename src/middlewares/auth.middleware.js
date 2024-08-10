import { ApiError } from '../utils/apiError.js'
import { asyncHandler } from "../utils/asynchandler.js"
import { Jwt } from 'jsonwebtoken'
import { User } from '../models/user.model.js'

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }

        const decodedToken = Jwt.verifyJWT(token, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select("-password refreshToken")

        if (!user) {
            //NEXT_VIDEO : discuss about frontend
            throw new ApiError(401, 'Invalid access Token')
        }

        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, err?.message || "Invalid access token")
    }


})