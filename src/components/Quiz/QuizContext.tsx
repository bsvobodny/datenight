import { createContext } from 'react'
export type AnswerMode = 'current' | 'ideal'
export type Answers = {
  current: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>
  ideal: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>
}

type QuizContextType = {
  currentStep: 'intro' | 'quiz' | 'results'
  setCurrentStep: React.Dispatch<
    React.SetStateAction<'intro' | 'quiz' | 'results'>
  >
  currentQuestion: number
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>
  answers: Answers
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
  answeringMode: AnswerMode
  setAnsweringMode: React.Dispatch<React.SetStateAction<AnswerMode>>
}

export const QuizContext = createContext<QuizContextType>({
  currentStep: 'intro',
  setCurrentStep: () => {},
  currentQuestion: 0,
  setCurrentQuestion: () => {},
  answers: { current: {}, ideal: {} },
  setAnswers: () => {},
  answeringMode: 'current',
  setAnsweringMode: () => {},
})
