const bcrypt = require('bcryptjs')

const encrypt = (key) => {
    try {
        return bcrypt.hashSync(key)
    } catch (error) {
        throw { code: 401, message: "Error Encrypt" }
    }
}

const decrypt = (key, encryptKey) => {
    try {
        return bcrypt.compareSync(key, encryptKey)
    } catch (error) {
        throw { code: 401, message: "Error Descrypt" }

    }
}

module.exports = { encrypt, decrypt }