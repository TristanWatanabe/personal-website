const db = require('./db')
const Article = require('./Article')
const Comment = require('./Comment')

Article.hasMany(Comment);

module.exports = {
  db,
  Article,
  Comment
}
