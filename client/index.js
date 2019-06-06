import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import { Contact } from './Contact'
import SingleArticle from './SingleArticle'
import {Comments} from './Comments'


const Routes = () => (
  <Router>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/contact' component={Contact} />
    <Route path='/articles/:id' component={SingleArticle} />
    </Switch>
  </Router>
)


ReactDOM.render(
  <Routes />,
  document.getElementById('app')
)
