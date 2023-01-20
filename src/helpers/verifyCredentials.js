const pool = require("./connectionDb").getInstance();
const { decrypt } = require("./encrypting");

const verifyCredentials = async (email, password) => {
    try {
        sqlQuery = {
            text: "SELECT * FROM usuarios WHERE email = $1",
            values: [email]
        }
        const { rows: [usuario], rowCount } = await pool.query(sqlQuery)
        const correctKey = decrypt(password, usuario.password)

        if (!rowCount || !correctKey)
            throw { code: 404, message: "No se encontro ningun usuario con estas credenciales" }
        return true
    } catch (error) {
        throw "Error Veryfication Credentials"

    }
}

module.exports = { verifyCredentials }