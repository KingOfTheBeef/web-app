import React from 'react';
import logo from './logo.svg';
import './App.css';

function Square(props) {
	return (
	<button className="square" onClick={() => {props.onClick()  }}>
		{props.value}
	</button>
	)
}

class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			xIsNext: true,
			squares: Array(9).fill(null),
		}
	}
	
	handleClick(i) {
		if (this.state.squares[i] || calculateWinner(this.state.squares)) {
			return;
		}
		const squares = this.state.squares.slice();
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
		});
	}
	
	renderSquare(i) {
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
	}
	
	render() {
		const winner = calculateWinner(this.state.squares);
		let status;
		if (winner) {
			status = "Winner: " + winner;
		} else {
			status = "Next player: " + (this.state.xIsNext ? "X" : "O");
		}
		return(
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
	}
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
		return squares[lines[i][0]];
	  }
  }
  return null;

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I like to boogy
        </p>
		<Board />
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

export default App;
