const Sequelize = require ('sequelize')
const sequelize = new Sequelize ('sequelize', 'root', '20021976',{
    host: 'localhost',
    dialect:'mysql'   // mesmo usando o mariadb como servidor é possivel usar o dialeto do mysql com o driver mysql2
})

const Moeda = sequelize.define('moedas',{
    exchange:{
       type: Sequelize.STRING 
    },
    crypto:{
        type: Sequelize.STRING
    },
    cryptoUND:{
        type: Sequelize.INTEGER
    },
    USDT: {
        type: Sequelize.FLOAT
    }

})
Moeda.create({
    exchange: "Binance",
    crypto:"BTC",
    cryptoUND:"1",
    USDT:"31399"
})*
Moeda.create({
    exchange: "Binance",
    crypto:"Cardano",
    cryptoUND:"1",
    USDT:"3139970"
})
Moeda.create({
    exchange: "Coinbase",
    crypto:"ETH",
    cryptoUND:"1",
    USDT:"267845"
})
Moeda.create({
    exchange: "Kraken",
    crypto:"SOL",
    cryptoUND:"1",
    USDT:"7631"
})
//Moeda.sync({force:true})