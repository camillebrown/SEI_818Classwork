import React, { Component } from 'react'

class Counter extends Component {
    
    state = {
        count: 0
    }

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log('added')
    }

    subtract = () => {
        this.setState({
            count: this.state.count - 1
        })
        console.log('subtracted')
    }

    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
                <p>{this.state.count}</p>
                <button onClick={this.subtract}>-</button>
            </div>
        )
    }
}

export default Counter
