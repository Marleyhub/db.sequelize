const Sequelize = require ('sequelize')
const sequelize = new Sequelize('sequelize', 'root', '20021976',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize
