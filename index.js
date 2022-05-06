(async()=>{

    const database = require('./db')
    const Tabela = require ('./tabela')
    await database.sync()
    
})()