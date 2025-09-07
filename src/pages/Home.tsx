import { Footer } from '../components/Layout/Footer'
import { Header } from '../components/Layout/Header'
import './Home.css'

function Home() {
  return (
    <main>
      <Header />
      <div className="center-container">
        <p>
          Explorez des idées d'activités, personnalisez vos préférences et créez
          des moments magiques avec votre partenaire.
        </p>
        <a className="start-button" href="/quiz">
          Commencer le quiz
        </a>
        <a className="start-button" href="/game">
          Démarrer les activités
        </a>
      </div>
      <Footer />
    </main>
  )
}

export default Home
