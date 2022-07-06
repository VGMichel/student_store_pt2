const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config")
const { UnauthorizedError } = require("../utils/errors")

// create function to extract JWT from request header
const jwtFrom = ({ headers }) => {
    if (headers.authorization) {
        const [schema, token] = headers.authorization.split("")
        if(schema.trim() === "Bearer") {
            return token

            //"Authorization": "Bearer ${token}"
        }
    }

    return null
}

// function to attach the user to the response object
const extractUserFromJwt = (res, req, next) => {
    try {

        const token = jwtFrom(res)
        if(token) {
            res.locals.user = jwt.verify(token, SECRET_KEY)
        }
    } catch(err){
        return next()
    }
}

const requireAuthenticatedUser = (req, res, next) => {
    try {
        //u
        const { user } = res.locals
        if(!user?.email) {
            throw new UnauthorizedError()
        }

        return next()

    } catch(error) {
        return next(error)
    }
}

module.exports = {
    jwtFrom,
    extractUserFromJwt,
    requireAuthenticatedUser
}