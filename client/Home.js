import React from 'react'
import {Navbar} from './Navbar'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        axios.get('/api/articles')
        .then((articles) => this.setState({articles:articles.data}))
        .catch((err) => console.log(err));
    }

    render() {
        const articles = this.state.articles;
        return ( 
            <div>
                <Navbar />
                <div className = "home">
                 {
                    articles.map((article) => {
                        return (
                            <div key = {article.id} className = "summary">
                                <Link to = {`/articles/${article.id}`} ><h2>{article.title}</h2></Link>
                                <h3>{article.summary}</h3>
                            </div>
                        )
                    })
                 }
                 </div>
            </div>
                      
        )
    }
}