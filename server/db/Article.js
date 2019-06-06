const Sequelize = require('sequelize');
const db = require ('./db')

const Article = db.define('articles', {
    title: Sequelize.STRING,
    summary: Sequelize.STRING,
    body: Sequelize.TEXT
})

module.exports = Article;