import Quiz from "../images/quiz.svg";
import "./Welcome.css";
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

export default function Welcome() {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <div id="welcome">
            <h2>Seja bem vindo</h2>
            <p>Clique no botão para começar</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
            <img src={Quiz} />
        </div>
    )
}