const Sequelize = require('sequelize');
const fs = require("fs");
const path = require("path");

const db = {};

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
// const sequelize = new Sequelize('rorschach-friending', 'postgres', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true
    },
});

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf(".") !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === ".js");
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize)
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;