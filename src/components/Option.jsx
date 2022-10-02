import React, {useContext} from "react";
import { QuizContext } from "../context/quiz";
import "./Option.css";

const Option = ({ option, answer, selectOption }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className={`option ${quizState.answerSelected && option === answer ? "greenOption" : ""}
        ${quizState.answerSelected && option !== answer ? "redOption" : ""}`} onClick={() => selectOption()}>
            <p >{option}</p>
        </div>
    )
}

export default Option