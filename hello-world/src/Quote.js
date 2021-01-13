// import the React ultimate parent component
import React, {Component} from 'react'
import './Quote.css'

class Quote extends Component {
    render(){
        return(
            <p>
                "There are two means of refuge from the miseries of life: music and cats." <span> -Albert Schweitzer</span>
            </p>
        )
    }
}

export default Quote