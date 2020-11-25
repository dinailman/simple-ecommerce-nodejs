const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('simple-ecommerce', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;