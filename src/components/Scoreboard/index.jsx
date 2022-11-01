import Navigation from "../Navigation";
import './ScoreboardStyle.scss';

const Scoreboard = ({players}) => {
    const newPlayers = players.newPlayers

    return (
        <>
            <div>
                <Navigation />
                <table className="scoreboard__table">
                    <tbody>
                        <tr>
                            <th>{newPlayers['firstPlayer']}</th>
                            <th>Tie</th>
                            <th>{newPlayers['secondPlayer']}</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Scoreboard;