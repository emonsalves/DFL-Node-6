const { Pool } = require("pg");
const { config } = require('../config/configDB.js')

// patron Singleton instance con IFE
// recordar que permite una instancia de lo contrario usar Pool
// al ser un aplicativo basico no hay problema

const Singleton = (() => {
  let instance;
  function createInstance() {
    const classObj = new Pool(config);
    return classObj;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
        console.log(" Nueva conexión a la base de datos establecida");
      } else {
        console.log("Establecida la conexión a la base de datos");
      }
      return instance;
    },
  };
})();

module.exports = Singleton;