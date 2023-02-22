const Sequelize = require("sequelize");
const sequelize = require("../../src/util/database");

const Competence = sequelize.define("competence", {
    competence_id: {
        type: Sequelize.INTEGER,
           
           
    },
    name: {
        type: Sequelize.STRING,
           
    },
});

module.exports = Competence