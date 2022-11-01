import Navigation from "../Navigation";
import './ScoreboardStyle.scss';
import { HistoryContext } from "../../context/historyContext";
import { useContext } from "react";

const Scoreboard = () => {
    const [history, setHistory] = useContext(HistoryContext);
    console.log(history)
    const firstPlayer = history[history.length - 1].players['firstPlayer'];
    const secondPlayer = history[history.length - 1].players['secondPlayer'];

    var firstPlayerWins = 0;
    var secondPlayerWins = 0;

    history.map(game=>{
        if((game.players['firstPlayer'] === firstPlayer && game.players['secondPlayer'] === secondPlayer) || (game.players['secondPlayer'] === firstPlayer && game.players['firstPlayer'] === secondPlayer)) {
            if(game.winner === firstPlayer) {
                firstPlayerWins++;
            } else if(game.winner === secondPlayer) {
                secondPlayerWins++;
            }
        }
    })

    return (
        <>
            <div>
                <Navigation />
                <table className="scoreboard__table">
                    <tbody>
                        <tr>
                            <th>{firstPlayer}</th>
                            <th>{secondPlayer}</th>
                        </tr>
                        <tr>
                            <td>{firstPlayerWins}</td>
                            <td>{secondPlayerWins}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Scoreboard;