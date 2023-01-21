const { jwtSign } = require("../middlewares/jwt")
const { verifyCredentials } = require("../models/sessionModels")

const sessionCheck = async (req, res) => {
    try {
        const { email, password } = req.body
        await verifyCredentials (email, password)
        const token = jwtSign({ email })
        res.status(200).send(token)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
}

module.exports = { sessionCheck }