import { useState, useContext } from 'react';
import './GameBoardStyle.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTicTac, reset } from '../../redux/cellSlice';
import { changeTurn, defineWinner, resetPlayer } from '../../redux/playerSlice';
import Navigation from '../Navigation';
import { useNavigate } from 'react-router-dom';
import { HistoryContext } from '../../context/historyContext';

const GameBoard = ({ players }) => {
    const newPlayers = players.newPlayers
    const dispatch = useDispatch();
    const boardPrevState = useSelector(state => state.cell);
    const playerPrevState = useSelector(state => state.player);

    const [cells, setCells] = useState(boardPrevState.cells);
    const [turn, setTurn] = useState(playerPrevState.turn === '' ? newPlayers['firstPlayer'] : playerPrevState.turn);
    const [winner, setWinner] = useState(playerPrevState.winner === '' ? '' : playerPrevState.winner);
    
    const navigate = useNavigate();
    const [positions, setPositions] = useState([]);

    const [history, setHistory] = useContext(HistoryContext);

    const handleClick = (num) => {
        let squares = [...cells];
        if (cells[num] === '' && (winner === null || winner === '' || winner === undefined)) {
            if (turn === newPlayers['firstPlayer']) {
                squares[num] = 'X';
                dispatch(addTicTac({ position: num, ticTac: 'X' }));
                setTurn(newPlayers['secondPlayer']);
                dispatch(changeTurn(newPlayers['secondPlayer']))
                setPositions(positions => [...positions, {player: turn, position: num}])
            } else {
                squares[num] = 'O';
                dispatch(addTicTac({ position: num, ticTac: 'O' }));
                setTurn(newPlayers['firstPlayer']);
                dispatch(changeTurn(newPlayers['firstPlayer']))
                setPositions(positions => [...positions, {player: turn, position: num}])
            }
        }
        checkForWinner(squares);
        setCells(squares);
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
                        dispatch(defineWinner(newPlayers['firstPlayer']))
                        setHistory(history => [...history, { players: newPlayers, winner: newPlayers['firstPlayer'] }]);
                    } else if (squares[pattern[0]] === 'O') {
                        setWinner(newPlayers['secondPlayer']);
                        dispatch(defineWinner(newPlayers['secondPlayer']))
                        setHistory(history => [...history, { players: newPlayers, winner: newPlayers['secondPlayer'] }]);
                    }
                }
            });
        }
    };

    const BoardCell = ({ num }) => {
        return <td style={{ color: cells[num] === 'X' ? 'blue' : 'red' }} onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    const restartGame = () => {
        navigate('/', { replace: true });
        dispatch(reset());
        dispatch(resetPlayer());
    }

    return (
        <>
            <div className='board'>
                <Navigation />
                {
                    winner ?
                        <p className='board__player'>Winner: <i>{winner}</i></p>
                        :
                        winner === '' && positions.length === 9 ?
                            <p className='board__player'>Winner: Tie</p>
                            :
                            <p className='board__player'>Player: <span><i>{turn}</i></span></p>
                }
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
                    {winner ? <button onClick={restartGame} className='board__btn'>Restart Game</button> : null}
                </table>
            </div>
        </>
    )
}
export default GameBoard;