import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function Square(props) {
    return (
        <button className="square" style={{background: props.color}} onClick={() => {props.onClick()}}>
            {props.value}
        </button>
    )
}

class MoveHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reverseOrder: true,
        }
    }

    toggleReverseOrder() {
        this.setState({
                reverseOrder: !this.state.reverseOrder,
            }
        )
    }

    render() {
        const history = this.state.reverseOrder ? this.props.history.slice().reverse() : this.props.history.slice();
        const moves = history.map((step, move) => {
            move = this.state.reverseOrder ? history.length - 1 - move : move;
            const desc = move ?
                "Go to move #" + move + " " + ((move % 2 === 0) ? "O" : "X") + " (" + step.colMov + ", " + step.rowMov + ")":
                "Go to game start";
            if (move === history.length -1) {
                return(
                    <li key={move}>
                        <button onClick={() => this.props.jumpTo(move)}><b>{desc}</b></button>
                    </li>
                )
            }
            return(
                <li key={move}>
                    <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
                </li>
            )
        });

        return (
            <div>
                <button onClick={() => this.toggleReverseOrder()}>Reverse Order</button>
                <ol>{moves}</ol>
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                colMov: null,
                rowMov: null,
            }],
            stepNumber: 0,
            isXNext: true,
        };
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            isXNext: (step % 2 === 0),
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        squares[i] = this.state.isXNext ? "X" : "O";
        this.setState({
            history: history.concat([{
                squares: squares,
                rowMov: 3 - Math.floor(i / 3),
                colMov: (i % 3) + 1,
            }]),
            stepNumber: history.length,
            isXNext: !this.state.isXNext,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status;
        let highlight = [];
        if (winner) {
            status = "Winner: " + winner[0];
            highlight = winner[1]
        } else if (isDraw(current.squares)) {
            status = "Game is a draw!";
        }
        else{
            status = "Current player: " + (this.state.isXNext ? "X" : "O");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        s						onClick={(i)=>this.handleClick(i)}
                        highlight={highlight}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <div><MoveHistory history={history} jumpTo={(step) => this.jumpTo(step)}/></div>
                </div>
            </div>
        );
    }
}

class Board extends React.Component {

    renderSquare(i) {
        const color = this.props.highlight.includes(i) ? "#0DA157" : "#FFFFFF"; // : "#FFFFFF";
        return <Square color={color} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
    }

    renderRow(i) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            row.push(this.renderSquare(((i * 3) + j)));
        }
        return row;
    }

    render() {
        const board = [];
        for (let i = 0; i < 3; i++) {
            board.push(<div> {this.renderRow(i)} </div>);
        }
        return(
            <div>{board}</div>
        )
    }
}

function isDraw(squares) {
    return !calculateWinner(squares) && !squares.includes(null)
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        if (squares[lines[i][0]]
            && squares[lines[i][0]] === squares[lines[i][1]]
            && squares[lines[i][1]] === squares[lines[i][2]]) {
            return ([squares[lines[i][0]], lines[i]]);
        }
    }
    return null;

}

function HomeScreen() {
    return (
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              I like to boogy
            </p>
            <Game />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>

    );
}

const home = () => {
    return (HomeScreen());
}

export default home;