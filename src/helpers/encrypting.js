const bcrypt = require('bcryptjs')

const encrypt = (key) => {
    try {
        return bcrypt.hashSync(key)
    } catch (error) {
        throw new Error(e)
    }
}

const decrypt = (key, encryptKey) => {
    try {
        return bcrypt.compareSync(key, encryptKey)
    } catch (error) {
        throw new Error(e)
    }
}

module.exports = { encrypt, decrypt }