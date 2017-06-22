import React from 'react';

class Solutions extends React.Component{ 
    constructor(props) {
        super(props);
        this.A_hasBeenClicked = this.A_hasBeenClicked.bind(this);
        this.B_hasBeenClicked = this.B_hasBeenClicked.bind(this);
        this.C_hasBeenClicked = this.C_hasBeenClicked.bind(this);
        this.D_hasBeenClicked = this.D_hasBeenClicked.bind(this);
        this.E_hasBeenClicked = this.E_hasBeenClicked.bind(this);
        this.state = {answerChosen: '0'};
    }

    A_hasBeenClicked() {
        this.setState({answerChosen: 'A'});
    }

    B_hasBeenClicked() {
        this.setState({answerChosen: 'B'});
    }

    C_hasBeenClicked() {
        this.setState({answerChosen: 'C'});
    }

    D_hasBeenClicked() {
        this.setState({answerChosen: 'D'});
    }

    E_hasBeenClicked() {
        this.setState({answerChosen: 'E'});
    }

    render() {
        const answer = this.state.answerChosen;

        if(answer === '0') {
            return (
                <div>
                    <p> </p>
                    <button onClick={this.A_hasBeenClicked}>A</button>
                    <button onClick={this.B_hasBeenClicked}>B</button>
                    <button onClick={this.C_hasBeenClicked}>C</button>
                    <button onClick={this.D_hasBeenClicked}>D</button>
                    <button onClick={this.E_hasBeenClicked}>E</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>You have selected {answer}</p>
                    <button onClick={this.A_hasBeenClicked}>A</button>
                    <button onClick={this.B_hasBeenClicked}>B</button>
                    <button onClick={this.C_hasBeenClicked}>C</button>
                    <button onClick={this.D_hasBeenClicked}>D</button>
                    <button onClick={this.E_hasBeenClicked}>E</button>
                </div>
            );
        }
    }


}

export default Solutions;
