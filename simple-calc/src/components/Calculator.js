import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        result: 0
    }

    setNum = (e, num) => {
        this.setState({ [num]: e.target.value })
    }

    addNum = () => {
        this.setState({
            result: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }

    subtractNum = () => {
        this.setState({
            result: parseInt(this.state.num1) - parseInt(this.state.num2)
        })
    }

    multiplyNum = () => {
        this.setState({
            result: parseInt(this.state.num1) * parseInt(this.state.num2)
        })
    }

    divideNum = () => {
        this.setState({
            result: parseInt(this.state.num1) / parseInt(this.state.num2)
        })
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator!</h1>

                <div className="add">
                    <input className="input" type="number"
                    name="num1"
                    placeholder={this.state.num1}
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input className="input" type="number"
                    name="num2"
                    placeholder={this.state.num2}
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button className="btn" onClick={this.sum}>=</button>
                    <h3>Addition results go here!</h3>
                    <p>Result: {this.state.sum}</p>
                </div>
            </div>
        )
    }
}

export default Calculator
