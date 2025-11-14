import { useState, memo } from 'react'
import './App.css'

// Nowoczesny komponent z React 19 i najlepszymi praktykami
const Header = memo(() => (
  <header>
    <h1 className="heading">React 19 + Vite + TypeScript</h1>
    <p className="subheading">
      Nowoczesna aplikacja z optymalną konfiguracją
    </p>
  </header>
))

Header.displayName = 'Header'

const BenefitsCard = memo(() => (
  <article className="card card-padded">
    <h3 className="subheading">Zalety konfiguracji</h3>
    <ul>
      <li>✅ React 19 z nowymi features</li>
      <li>✅ TypeScript 5.9 z strict mode</li>
      <li>✅ Vite 7 z optymalizacjami</li>
      <li>✅ ESLint 9 z flat config</li>
      <li>✅ Vitest 4 do testowania</li>
    </ul>
  </article>
))

BenefitsCard.displayName = 'BenefitsCard'

const NextStepsCard = memo(() => (
  <article className="card card-padded">
    <h3 className="subheading">Dalsze kroki</h3>
    <p className="subheading">
      Edytuj <code>src/App.tsx</code> aby rozpocząć tworzenie aplikacji
    </p>
    <div>
      <a 
        href="https://react.dev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="button interactive"
        lang="en"
      >
        React 19 Documentation
      </a>
    </div>
  </article>
))

NextStepsCard.displayName = 'NextStepsCard'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  return (
    <main className="app container card card-padded">
      <Header />
      
      <section className="card card-padded section-margin-top">
        <h2 className="subheading">Demo State Management</h2>
        <div className="button-group">
          <button 
            type="button"
            className="button button-primary interactive"
            onClick={handleIncrement}
            aria-label={`Licznik: ${count}`}
          >
            Kliknij mnie ({count})
          </button>
          
          <button
            type="button"
            className="button"
            onClick={() => setCount(0)}
            disabled={count === 0}
            aria-label="Zresetuj licznik"
            title={count === 0 ? "Licznik jest już 0" : "Zresetuj licznik do 0"}
          >
            Reset
          </button>
        </div>
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          Licznik wynosi {count}
        </div>
      </section>

      <section className="grid grid-columns-2 section-margin-top">
        <BenefitsCard />
        <NextStepsCard />
      </section>
    </main>
  )
}

export default App