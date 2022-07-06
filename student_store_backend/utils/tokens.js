const jwt = require("jsonwebtoken");
const SECRET_KEY = "supersecretkey";

const generateToken = (data) => jwt.sign(data, SECRET_KEY, { expiresIn: "24h" })

const createUserJwt = (user) => {
    const payload = {
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin || false
    }
}
const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    } catch(err) {
        return {}
    }
}

module.exports = {
    generateToken,
    createUserJwt,
    validateToken,
}