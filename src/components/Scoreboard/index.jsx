import { Link, useNavigate } from "react-router-dom";

const Scoreboard = () => {

    const navigate = useNavigate();

    const goToBoard = () => {
        navigate('/game', { replace: true });
    }


    return (
        <> 
            <table>
                <Link to='/game'>to board</Link>
                <tbody>
                    <tr>
                        <th>Player 1</th>
                        <th>Tie</th>
                        <th>Player 2</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={goToBoard} className='board__btn'>Go To Board</button>
        </>
    )
}

export default Scoreboard;