import { QuizIntro } from '../components/Quiz/Intro'
import { Quiz } from '../components/Quiz/Quiz'
import { Results } from '../components/Quiz/Results'
import {
  QuizContext,
  type AnswerMode,
  type Answers,
} from '../components/Quiz/QuizContext'
import { useEffect, useState } from 'react'

import './Quiz.css'
import { Header } from '../components/Layout/Header'

const CoupleQuiz = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'quiz' | 'results'>(
    'intro'
  ) // intro, quiz, results
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Answers>({
    current: {},
    ideal: {},
  })
  const [answeringMode, setAnsweringMode] = useState<AnswerMode>('current') // current or ideal

  useEffect(() => {
    document.body.classList.add('no-padding')
    document.title = 'Cupion - Quiz'
    return () => {
      document.body.classList.remove('no-padding')
      document.title = 'Cupion'
    }
  }, [])

  return (
    <>
      <Header hideText={true} />
      <QuizContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          currentQuestion,
          setCurrentQuestion,
          answers,
          setAnswers,
          answeringMode,
          setAnsweringMode,
        }}
      >
        {currentStep === 'intro' && <QuizIntro />}
        {currentStep === 'quiz' && <Quiz />}
        {currentStep === 'results' && <Results />}
      </QuizContext.Provider>
    </>
  )
}

export default CoupleQuiz
