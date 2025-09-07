import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { questions, type QuestionOptions } from '../../quizQuestions'
import { useContext } from 'react'
import { QuizContext } from './QuizContext'

export const Quiz = () => {
  const {
    currentQuestion,
    setCurrentQuestion,
    answers,
    setAnswers,
    answeringMode,
    setAnsweringMode,
    setCurrentStep,
  } = useContext(QuizContext)

  const handleAnswer = (questionId: number, option: QuestionOptions) => {
    setAnswers((prev) => ({
      ...prev,
      [answeringMode]: {
        ...prev[answeringMode],
        [questionId]: option,
      },
    }))
  }

  const nextQuestion = () => {
    if (answeringMode === 'current') {
      setAnsweringMode('ideal')
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setAnsweringMode('current')
      } else {
        setCurrentStep('results')
      }
    }
  }

  const prevQuestion = () => {
    if (answeringMode === 'ideal') {
      setAnsweringMode('current')
    } else {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1)
        setAnsweringMode('ideal')
      }
    }
  }

  const question = questions[currentQuestion]
  const progress =
    ((currentQuestion * 2 + (answeringMode === 'ideal' ? 1 : 0)) /
      (questions.length * 2)) *
    100

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% terminé
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-4">
              {question.icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {question.title}
            </h2>
            <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <span
                className={`w-3 h-3 rounded-full ${answeringMode === 'current' ? 'bg-blue-500' : 'bg-gray-300'}`}
              ></span>
              <span
                className={`text-sm font-medium ${answeringMode === 'current' ? 'text-blue-600' : 'text-gray-500'}`}
              >
                Situation actuelle
              </span>
              <span
                className={`w-3 h-3 rounded-full ${answeringMode === 'ideal' ? 'bg-green-500' : 'bg-gray-300'}`}
              ></span>
              <span
                className={`text-sm font-medium ${answeringMode === 'ideal' ? 'text-green-600' : 'text-gray-500'}`}
              >
                Situation idéale
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {Object.entries(question.options).map(([option, text]) => (
              <button
                key={option}
                onClick={() =>
                  handleAnswer(question.id, option as QuestionOptions)
                }
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                  answers[answeringMode][question.id] === option
                    ? answeringMode === 'current'
                      ? 'border-blue-500 bg-blue-50 text-blue-800'
                      : 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                      answers[answeringMode][question.id] === option
                        ? answeringMode === 'current'
                          ? 'border-blue-500 bg-blue-500 text-white'
                          : 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300'
                    }`}
                  >
                    {option}
                  </div>
                  <p>{text}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0 && answeringMode === 'current'}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <LuChevronLeft className="w-4 h-4" />
              <span>Précédent</span>
            </button>

            <button
              onClick={nextQuestion}
              disabled={!answers[answeringMode][question.id]}
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <span>
                {currentQuestion === questions.length - 1 &&
                answeringMode === 'ideal'
                  ? 'Voir les résultats'
                  : 'Suivant'}
              </span>
              <LuChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
