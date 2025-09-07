import { LuSparkles } from 'react-icons/lu'
import { questions, type Question } from '../../quizQuestions'
import { QuizContext } from './QuizContext'
import { useContext } from 'react'

type Suggestions = {
  category: string
  title: string
  gap: number
  current: string
  ideal: string
  icon: React.ReactNode
}

const scoreMap = { A: 5, B: 4, C: 3, D: 2, E: 1 }

export const Results = () => {
  const {
    answers,
    setCurrentStep,
    setCurrentQuestion,
    setAnswers,
    setAnsweringMode,
  } = useContext(QuizContext)

  const calculateScore = (
    answerSet: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>
  ) => {
    return Object.values(answerSet).reduce(
      (sum, answer) => sum + scoreMap[answer],
      0
    )
  }

  const getScoreInterpretation = (score: number) => {
    if (score >= 60)
      return {
        level: 'Excellent',
        color: 'text-green-600',
        description: 'Relation très épanouie',
      }
    if (score >= 45)
      return {
        level: 'Satisfaisant',
        color: 'text-blue-600',
        description: 'Relation satisfaisante avec des améliorations possibles',
      }
    if (score >= 30)
      return {
        level: 'À améliorer',
        color: 'text-orange-600',
        description: 'Relation fragile nécessitant des changements',
      }
    return {
      level: 'Difficultés',
      color: 'text-red-600',
      description: 'Relation en difficulté majeure',
    }
  }

  const getImprovementSuggestions = () => {
    const currentAnswers = answers.current
    const idealAnswers = answers.ideal
    const suggestions: Suggestions[] = []

    questions.forEach((question) => {
      const currentScore = scoreMap[currentAnswers[question.id]] || 0
      const idealScore = scoreMap[idealAnswers[question.id]] || 0
      const gap = idealScore - currentScore

      if (gap >= 2) {
        suggestions.push({
          category: question.category,
          title: question.title,
          gap: gap,
          current: question.options[currentAnswers[question.id]],
          ideal: question.options[idealAnswers[question.id]],
          icon: question.icon,
        })
      }
    })

    return suggestions.sort((a, b) => b.gap - a.gap).slice(0, 5)
  }

  const reset = () => {
    setCurrentStep('intro')
    setCurrentQuestion(0)
    setAnswers({ current: {}, ideal: {} })
    setAnsweringMode('current')
  }

  const currentScore = calculateScore(answers.current)
  const idealScore = calculateScore(answers.ideal)
  const gap = idealScore - currentScore
  const currentInterpretation = getScoreInterpretation(currentScore)
  const improvements = getImprovementSuggestions()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-4">
            <LuSparkles className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vos Résultats
          </h1>
          <p className="text-xl text-gray-600">
            Analyse de votre relation de couple
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Scores */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Scores Globaux
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {currentScore}/75
                  </div>
                  <div className="text-lg font-medium text-blue-800">
                    Situation Actuelle
                  </div>
                  <div
                    className={`text-sm font-medium ${currentInterpretation.color}`}
                  >
                    {currentInterpretation.level}
                  </div>
                </div>

                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {idealScore}/75
                  </div>
                  <div className="text-lg font-medium text-green-800">
                    Situation Idéale
                  </div>
                  <div className="text-sm text-green-600">Vos aspirations</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">
                    Écart à combler :
                  </span>
                  <span
                    className={`text-xl font-bold ${gap > 20 ? 'text-red-600' : gap > 10 ? 'text-orange-600' : 'text-green-600'}`}
                  >
                    {gap} points
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {gap <= 5 &&
                    'Félicitations ! Votre relation est très proche de vos attentes.'}
                  {gap > 5 &&
                    gap <= 15 &&
                    'Quelques ajustements pourraient améliorer votre épanouissement.'}
                  {gap > 15 &&
                    gap <= 25 &&
                    'Il y a des domaines importants à développer ensemble.'}
                  {gap > 25 &&
                    'Une réflexion approfondie sur vos attentes pourrait être bénéfique.'}
                </div>
              </div>
            </div>

            {/* Priorités d'amélioration */}
            {improvements.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Priorités d'Amélioration
                </h2>

                <div className="space-y-4">
                  {improvements.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">
                            {item.title}
                            <span className="ml-2 text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                              Écart: {item.gap} points
                            </span>
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium text-blue-600">
                                Actuellement :
                              </span>
                              <p className="text-gray-600 mt-1">
                                {item.current}
                              </p>
                            </div>
                            <div>
                              <span className="font-medium text-green-600">
                                Idéalement :
                              </span>
                              <p className="text-gray-600 mt-1">{item.ideal}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Conseils et actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Conseils Personnalisés
              </h3>

              <div className="space-y-4">
                {currentScore >= 60 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">
                      Relation épanouie
                    </h4>
                    <p className="text-green-700 text-sm">
                      Continuez à cultiver cette belle relation ! Pensez à
                      maintenir vos bonnes habitudes.
                    </p>
                  </div>
                )}

                {currentScore >= 45 && currentScore < 60 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">
                      Relation satisfaisante
                    </h4>
                    <p className="text-blue-700 text-sm">
                      Concentrez-vous sur quelques domaines clés pour renforcer
                      votre complicité.
                    </p>
                  </div>
                )}

                {currentScore < 45 && (
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">
                      Relation à développer
                    </h4>
                    <p className="text-orange-700 text-sm">
                      Prenez le temps d'aborder ensemble les domaines
                      prioritaires identifiés.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Prochaines Étapes
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <span className="text-sm text-gray-700">
                    Discutez de vos résultats ensemble
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg">
                  <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <span className="text-sm text-gray-700">
                    Choisissez 2-3 domaines prioritaires
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <span className="text-sm text-gray-700">
                    Définissez des actions concrètes
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <span className="text-sm text-gray-700">
                    Refaites le test dans 3 mois
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                💡 Conseil d'Expert
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Les meilleures relations évoluent constamment. Prenez ce quiz
                comme un point de départ pour des conversations enrichissantes
                plutôt que comme un jugement définitif.
              </p>
            </div>
          </div>
        </div>

        {/* Analyse détaillée par catégorie */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Analyse Détaillée par Domaine
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(
              questions.reduce((acc: Record<string, Question[]>, q) => {
                if (!acc[q.category]) acc[q.category] = []
                acc[q.category].push(q)
                return acc
              }, {})
            ).map(([category, categoryQuestions]) => {
              const categoryCurrentScore = categoryQuestions.reduce(
                (sum, q) => sum + (scoreMap[answers.current[q.id]] || 0),
                0
              )
              const categoryMaxScore = categoryQuestions.length * 5
              const percentage = Math.round(
                (categoryCurrentScore / categoryMaxScore) * 100
              )

              return (
                <div
                  key={category}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    {categoryQuestions[0].icon}
                    <h3 className="font-semibold text-gray-800">{category}</h3>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>
                        {categoryCurrentScore}/{categoryMaxScore}
                      </span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          percentage >= 80
                            ? 'bg-green-500'
                            : percentage >= 60
                              ? 'bg-blue-500'
                              : percentage >= 40
                                ? 'bg-orange-500'
                                : 'bg-red-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600">
                    {categoryQuestions.length} question
                    {categoryQuestions.length > 1 ? 's' : ''} dans cette
                    catégorie
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 text-center">
          <button
            onClick={reset}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg mr-4"
          >
            Refaire le Quiz
          </button>

          <button
            onClick={() => window.print()}
            className="bg-white text-gray-700 font-semibold py-3 px-8 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 shadow-lg"
          >
            Imprimer les Résultats
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Ce quiz est un outil de réflexion et de communication. Pour des
            difficultés relationnelles importantes, n'hésitez pas à consulter un
            thérapeute de couple professionnel. Les résultats sont indicatifs et
            ne remplacent pas un accompagnement personnalisé.
          </p>
        </div>
      </div>
    </div>
  )
}
