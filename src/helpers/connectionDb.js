const { Pool } = require("pg");
const { config } = require('../config/configDB.js')
// patron Singleton instance con IFE
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