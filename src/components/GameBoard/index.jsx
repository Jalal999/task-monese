import { useState } from 'react';
import './GameBoardStyle.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTicTac } from '../../redux/cellSlice';

var currentPositions = new Array;
const GameBoard = ({ players }) => {
    const newPlayers = players.newPlayers
    const [turn, setTurn] = useState(newPlayers['firstPlayer']);

    const dispatch = useDispatch();
    const boardPrevState = useSelector(state=>state.cell);
    const [cells, setCells] = useState(boardPrevState.cells);

    const [winner, setWinner] = useState('');
    const [positions, setPositions] = useState([]);
    const navigate = useNavigate();

    const goToScoreboard = () => {
        navigate('/scoreboard', { replace: true });
    }

    const handleClick = (num) => {
        let squares = [...cells];
        if (cells[num] === '' && (winner === null || winner === '' || winner === undefined)) {
            if (turn === newPlayers['firstPlayer']) {
                squares[num] = 'X';
                dispatch(addTicTac({position: num, ticTac: 'X'}));
                setTurn(newPlayers['secondPlayer']);
                currentPositions.push({ player: turn, position: num })
            } else {
                squares[num] = 'O';
                dispatch(addTicTac({position: num, ticTac: 'O'}));
                setTurn(newPlayers['firstPlayer']);
                currentPositions.push({ player: turn, position: num })
            }
        }
        checkForWinner(squares);
        setCells(squares);
        setPositions(currentPositions)
    }

    const checkForWinner = (squares) => {
        let winningPaths = {
            leftToRight: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            upToDown: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };

        for (let path in winningPaths) {
            winningPaths[path].forEach((pattern) => {
                if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ) {
                    if (squares[pattern[0]] === 'X') {
                        setWinner(newPlayers['firstPlayer']);
                    } else if (squares[pattern[0]] === 'O') {
                        setWinner(newPlayers['secondPlayer']);
                    }
                }
            });
        }
    };

    const BoardCell = ({ num }) => {
        return <td style={{ color: cells[num] === 'X' ? 'blue' : 'red' }} onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    return (
        <>
            <div className='board'>
                {
                    winner ?
                        <>
                            <p className='board__player'>Winner: <i>{winner}</i></p>
                            <button onClick={goToScoreboard} className='board__btn'>Go To Scoreboard</button>
                        </>
                        :
                        winner === '' && positions.length === 9 ? <p className='board__player'>Winner: Tie</p>
                            :
                            <p className='board__player'>Player: <span><i>{turn}</i></span></p>
                }
                <Link to='/scoreboard'>Scoreboard</Link>
                <table>

                    <tbody>
                        <tr>
                            <BoardCell num={0} />
                            <BoardCell num={1} />
                            <BoardCell num={2} />
                        </tr>
                        <tr>
                            <BoardCell num={3} />
                            <BoardCell num={4} />
                            <BoardCell num={5} />
                        </tr>
                        <tr>
                            <BoardCell num={6} />
                            <BoardCell num={7} />
                            <BoardCell num={8} />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GameBoard;