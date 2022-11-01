import { Link } from "react-router-dom"
import './NavigationStyle.scss';

const Navigation = () => {
    return (
        <div className="navigation">
            <Link className="navigation__link" to='/game'>Gameboard</Link>
            <Link className="navigation__link" to='/scoreboard'>Scoreboard</Link>
        </div>
    )
}

export default Navigation;