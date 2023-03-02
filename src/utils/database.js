const {Sequelize} = require('sequelize')

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "root",
    port: 5432,
    database: "posts",
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true 
    }
})
module.exports = db