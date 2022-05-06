const Sequelize = require('sequelize')
const database = require('./db')

const Tabela = database.define('tabela',{
    exchange:{
        type: Sequelize.STRING 
    },
    crypto:{
        type: Sequelize.STRING
    },
    cryptoUNT:{
        type: Sequelize.FLOAT
    },
    USDT:{
        type: Sequelize.FLOAT
    }
}) 
module.exports = Tabela