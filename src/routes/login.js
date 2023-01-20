const express = require('express')

const router = express.Router()
const { verifyCredentials } = require('../helpers/verifyCredentials')
const { checkRequest } = require('../middlewares/checkRequest')
const { jwtSign } = require('../middlewares/jwt')

router.post('', checkRequest, async (req, res) => {
    try {
        const { email, password } = req.body
        await verifyCredentials(email, password)
        const token = jwtSign({ email })
        res.status(200).send(token)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

module.exports = router