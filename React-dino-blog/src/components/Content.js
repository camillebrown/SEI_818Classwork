import React, {Component} from 'react'

class Content extends Component {

    state = {
        comments: []
    }

    changeContent = () => {
        let answer = prompt("What would you like to update the text to?")
        this.setState({
            comments: [...this.state.comments, answer] //spread opearator (...) creates a copy of the comments array and adds 'answer' to that array copy
        })
        console.log(this.state.comments)
    }
    
    render(){
        return(
            <>
                {this.state.comments.map((comment, i) => (
                    <p key={i}>{comment}</p>
                ))}
                <button onClick={this.changeContent}>Click to edit!</button>
            </>
        )
    }
}

export default Content