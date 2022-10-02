import React, {useContext} from "react";
import { QuizContext } from "../context/quiz";
import "./Question.css";
import Option from "./Option";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    let perguntaAtual = quizState.questions[quizState.currentQuestion].question;
    let opcoesAtuais = quizState.questions[quizState.currentQuestion].options;
    const respostaAtual = quizState.questions[quizState.currentQuestion].answer;

    const selectOption = (option) => {
        dispatch({ type: "SELECT_ANSWER", payload: {answer: respostaAtual, option}})
    }

    console.log(quizState)
    return (
        <div id="question">
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
        <h2>{perguntaAtual}</h2>
        <ul id="options-container">
            {opcoesAtuais.map((option) =>(
                    <Option option={option} key={option} answer={respostaAtual} selectOption={() => selectOption(option)}/>
            ))}
        </ul>
            <button className="continuar" disabled={!quizState.answerSelected} onClick={() => dispatch({ type: "ADVANCE_QUESTION"})}>Continuar</button>
            <button onClick={() => dispatch({ type: "BACK_TO_WELCOME" })}>Voltar</button>
        </div>
    )
}

export default Question