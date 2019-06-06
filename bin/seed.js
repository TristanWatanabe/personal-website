#!/usr/bin/env node

const {db, Article, Comment} = require('../server/db')

const articles = [{
  title: 'Bubble Sort Implementation in Javascript',
  summary: 'Implement a bubble sort',
  body: `<div class = "singleArticle">

  <div class = "title">
  Bubble Sort Implementation in Javascript
  </div>
  
  Bubble sort is a simple sorting algorithm that continuously swaps adjacent elements if they are out of order. The general premise of the algorithm is to keep swapping until there are no more swaps to be made. The images below illustrates how the bubble sort algorithm operates:
  <div class = 'diagrams'>
    <img src = "/assets/bubbleSort/1stpass.png" />
    <img src = "/assets/bubbleSort/2ndpass.png" />
    <img src = "/assets/bubbleSort/3rdpass.png" />
    <img src = "/assets/bubbleSort/4thpass.png" />
    <img src = "/assets/bubbleSort/5thpass.png" />
  </div>
  Now that you know how bubble sort is supposed to work, how about you see how it's implemented in javascript: 
  <div class = 'diagrams'> 
    <img src = "/assets/bubbleSort/implementation.jpg" />
  </div>
  </div>`
}, {
  title: 'Breadth-First Search',
  summary: 'This is some more algo',
  body: 'Yelp'
}]

const comments = [{
  comment: 'so helpful omg',
  articleId: 1
}, {
  comment: 'thanks so much!',
  articleId: 1
}]

const seed = async () => {
  await db.sync({force: true})

  await Promise.all(articles.map((article) => {
    return Article.create(article);
  }))

  await Promise.all(comments.map((comment) => {
    return Comment.create(comment);
  }))
  db.close()
  console.log(`

    Seeding successful!
    Time to do stuff!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
