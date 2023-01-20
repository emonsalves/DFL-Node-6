const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET

const jwtSign = (payload) => {
    try {
        return jwt.sign(payload, JWT_SECRET)
    } catch (error) {
        throw { code: 401, message: "Error to Sign JWT" }
    }
}

const jwtValidation = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        const jwtToken = token.split(" ")[1]
        jwt.verify(jwtToken, JWT_SECRET)
        next()
    } catch (error) {
        throw { code: 401, message: "Error Validation Credentials" }

    }
}

const jwtDecode = (token) => {
    try {
        const jwtToken = token.split(" ")[1]
        const tokenDecode = jwt.decode(jwtToken)
        return tokenDecode
    } catch (error) {
        throw { code: 401, message: "Error to Decode JWT" }
    }
}

module.exports = { jwtValidation, jwtSign, jwtDecode }