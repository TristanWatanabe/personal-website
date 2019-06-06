const router = require('express').Router();
const {Article, Comment} = require('../db')

router.get('/', (req, res, next) => {
    Article.findAll()
    .then((articles) => res.json(articles))
    .catch((err) => next(err));
})

router.get('/:id', (req, res, next) => {
    Article.findOne({
        where: {
            id: req.params.id
        }, 
        include: [Comment]
    })
    .then((article) => res.json(article))
    .catch((err) => next(err))
})

module.exports = router;