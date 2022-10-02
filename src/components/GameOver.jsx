import React, {useContext} from "react";
import { QuizContext } from "../context/quiz";
import WellDone from "../images/welldone.svg";

export default function GameOver(){
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div>
            <h1> Game Over </h1>
            <p>Você acertou {quizState.acertos} de 5 perguntas!</p>
            <img src={WellDone} />
            <button onClick={() => dispatch({ type: "BACK_TO_WELCOME"})}>Reiniciar</button>
        </div>
    )
}