import React from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import {Navbar} from './Navbar'
import {Comments} from './Comments'
import {Route, Link} from 'react-router-dom'

export default class SingleArticle extends React.Component {
    constructor(){
        super();
        this.state = {
            article: {}        }
    }

    componentDidMount() {
    
        const id = this.props.match.params.id
        console.log("HERE: ", id)
        axios.get(`/api/articles/${id}`)
        .then((article) => this.setState({article:article.data}))
        .catch((err) => console.log(err))
    }

    render() {
        const body = this.state.article.body;
        const comments = this.state.article.comments;
        const id = this.state.article.id;
        return body ? (
            <div>
                <Navbar />
                <div className = 'home'> 
                    {ReactHtmlParser(body)}
                   <Link to = {`/articles/${id}/comments`} ><button type = 'button'> Show All Comments</button></Link>
                   <Route path = {`/articles/${id}/comments`} component={() => <Comments comments = {comments} />} />
                </div>
            </div>
        ) : (
            <div>
                 <Navbar />
                 <h1> Loading </h1>
            </div>
        )
            
        
    }
}