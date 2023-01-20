const express = require('express')
const router = express.Router()

const { createUsers, getUsers } = require('../controllers/usersControllers')
const { jwtValidation } = require('../middlewares/jwt')

router.post('/usuarios', createUsers)
router.get('/usuarios',jwtValidation ,getUsers)

module.exports = router