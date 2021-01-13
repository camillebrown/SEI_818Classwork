import React, {Component} from 'react'

class Comment extends Component {
    render(){
        const allComments = this.props.comments.map((comment, i)=>{
            return <li key={i}>{comment}</li>
        })
        return(
            <div>
                <h3>Comments: </h3>
                <ul>{allComments}</ul>
            </div>    
        )
    }
}

export default Comment