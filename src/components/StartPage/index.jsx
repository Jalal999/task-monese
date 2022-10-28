import { useForm } from "react-hook-form";
import "./StartPageStyle.scss";
import { useNavigate } from 'react-router-dom';


const StartPage = ({setPlayers}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        const firstPlayer = data.firstPlayer;
        const secondPlayer = data.secondPlayer;
        const newPlayers = {"firstPlayer": firstPlayer, "secondPlayer": secondPlayer};
        setPlayers(() => ( { newPlayers } ));
        navigate('/game', { replace: true });
    }

    return (
        <div className="initialPage">
            <form className="initialPage__form" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="initialPage__form__title">Tic-tac-toe created by Jalal Mammadli</h3>
                <div className="initialPage__form__inputField">
                    <label>Player 1:</label>
                    <input className="initialPage__form__playerName" {...register("firstPlayer", {
                        required: "*This field is required!"
                    })}></input>
                </div>
                {errors.firstPlayer && <span className="initialPage__form__playerName__errMsg">{errors.firstPlayer.message}</span>}

                <div className="initialPage__form__inputField">
                    <label>Player 2:</label>
                    <input className="initialPage__form__playerName" {...register("secondPlayer", {
                        required: "*This field is required!"
                    })}></input>
                </div>
                {errors.secondPlayer && <span className="initialPage__form__playerName__errMsg">{errors.secondPlayer.message}</span>}

                <button type="submit" className="initialPage__form__submitBtn">Start Game</button>
            </form>
        </div >
    )
}

export default StartPage;