import { createContext, useReducer } from "react";
import questions from '../data/questions';

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    acertos: 0,
    answerSelected: false,
}

const quizReducer = (state, action) => {
    console.log(state, action)

    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
                currentQuestion: 0
            }
        case "BACK_TO_WELCOME":
            return {
                ...state,
                gameStage: STAGES[0],
                currentQuestion: 0,
                acertos: 0
            }
        case "REORDER_QUESTIONS":
                const questionsReorder = questions.sort(() => {
                    return Math.random() - 0.5;
                });
                return{
                    ...state,
                    questions: questionsReorder
                } 
         case "ADVANCE_QUESTION":
            const nextQuestion = state.currentQuestion + 1
            // const nextStage = state.currentQuestion > 4 ? state.gameStage = STAGES[2] : state.gameStage = STAGES[1]
             return {
                 ...state,
                 currentQuestion: nextQuestion,
                 gameStage: !questions[nextQuestion] ? STAGES[2] : STAGES[1],
                 answerSelected: false,
             }
              case "SELECT_ANSWER":
              if (state.answerSelected) return state;

                 const answer = action.payload.answer;
                 const option = action.payload.option;
                 let correctAnswers = 0

                 if (answer===option) {
                    correctAnswers = 1
                 }

                 return {
                    ...state,
                    acertos: state.gameStage === "Playing" ? state.acertos + correctAnswers : 0,
                    answerSelected: option,
                 }
                 

            default:
                return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => 
{
    const value = useReducer(quizReducer, initialState);

    return (
    <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
    )
}