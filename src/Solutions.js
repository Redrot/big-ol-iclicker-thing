import React from 'react';

class Solutions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {answerChosen: '0'};
    }

    render() {
        const answer = this.state.answerChosen;

        if(answer === '0') {
            return (
                <div>
                    <p> </p>
                    <button onClick={() => this.setState({answerChosen: 'A'})}>A</button>
                    <button onClick={() => this.setState({answerChosen: 'B'})}>B</button>
                    <button onClick={() => this.setState({answerChosen: 'C'})}>C</button>
                    <button onClick={() => this.setState({answerChosen: 'D'})}>D</button>
                    <button onClick={() => this.setState({answerChosen: 'E'})}>E</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>You have selected {answer}</p>
                    <button onClick={() => this.setState({answerChosen: 'A'})}>A</button>
                    <button onClick={() => this.setState({answerChosen: 'B'})}>B</button>
                    <button onClick={() => this.setState({answerChosen: 'C'})}>C</button>
                    <button onClick={() => this.setState({answerChosen: 'D'})}>D</button>
                    <button onClick={() => this.setState({answerChosen: 'E'})}>E</button>
                </div>
            );
        }
    }


}

export default Solutions;
