import React, { Component } from 'react'

class MoodTracker extends Component {

    state = {
        moodPoints: 1
    }

    increaseMood = () =>{
        if (this.state.moodPoints === 10){
            this.setState ({
                moodPoints: 1
            })
        } else {
            this.setState ({
                moodPoints: this.state.moodPoints + 1
            })
        }
    }

    render() {
        return (
            <div>
                {/* when state information is passed through, they become props */}
                <h1>Hello, {this.props.name}</h1>
                <p>You are {this.props.age} years old.</p>
                <p>You love {this.props.animals[0]}</p>
                <p>On a scale of 1-10, you are this happy: {this.state.moodPoints}</p>
                <button onClick={this.increaseMood}>Cheer Up!</button>
            </div>
        )
    }
}

export default MoodTracker
