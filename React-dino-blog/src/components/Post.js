import React, {Component} from 'react'
import Comment from './Comment.js'

class Post extends Component {
    render(){
        const comments = this.props.comments.map((c, i)=>{
            return <Comment comment={c}/>
        })
        return (
            <>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
                <p>-{this.props.author}</p>
                {comments}
            </>
        )
    }
}

export default Post