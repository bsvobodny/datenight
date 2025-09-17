import { useContext } from 'react'
import { LuHeart } from 'react-icons/lu'
import { QuizContext } from './QuizContext'

export const QuizIntro = () => {
  const { setCurrentStep } = useContext(QuizContext)
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <LuHeart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Quiz d'Évaluation de Couple
            </h1>
            <p className="text-xl text-gray-600">Relation Actuelle vs Idéale</p>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Comment ça marche ?
            </h2>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Répondez individuellement
                  </h3>
                  <p className="text-gray-600 text-sm">
                    15 questions sur votre relation
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Double évaluation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Situation actuelle puis idéale
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Analyse personnalisée
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Pistes d'amélioration ciblées
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Ce quiz vous aidera à identifier les forces de votre relation et
              les domaines à améliorer.
            </p>
            <p className="text-sm text-gray-500">
              Durée estimée : 10-15 minutes
            </p>
          </div>

          <button
            onClick={() => setCurrentStep('quiz')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Commencer le Quiz
          </button>
        </div>
      </div>
    </div>
  )
}
