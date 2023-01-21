const bcrypt = require('bcryptjs')

const encrypt = (key) => {
    try {
        return bcrypt.hashSync(key)
    } catch (error) {
        throw ("Error Encrypt")
        // throw { code: 401, message: "Error Encrypt" }
    }
}

const decrypt = async (key, encryptKey) => {
    try {
        const test = await bcrypt.compareSync(key, encryptKey)
        return test
    } catch (error) {
        throw ("Error Descrypt")
        // throw { code: 401, message: "Error Descrypt" }
    }
}

module.exports = { encrypt, decrypt }