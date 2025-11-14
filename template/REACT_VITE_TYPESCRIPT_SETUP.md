# Spis Treści

1. [Wymagania wstępne](#wymagania-wstępne)
2. [Inicjalizacja projektu](#inicjalizacja-projektu)
3. [Struktura folderów](#struktura-folderów)
4. [Konfiguracja package.json](#konfiguracja-packagejson)
5. [Konfiguracja TypeScript](#konfiguracja-typescript)
6. [Konfiguracja Vite](#konfiguracja-vite)
7. [Konfiguracja ESLint i Prettier](#konfiguracja-eslint-i-prettier)
8. [Konfiguracja Stylus/SCSS](#konfiguracja-stylusscss)
9. [Podstawowe pliki aplikacji](#podstawowe-pliki-aplikacji)
10. [Testowanie konfiguracji](#testowanie-konfiguracji)

## Wymagania wstępne

### Wymagane oprogramowanie

- **Node.js** (wersja 18.0.0 lub nowsza)
- **npm** (wersja 8.0.0 lub nowsza) lub **yarn**
- **Git** (opcjonalnie)

### Sprawdzenie wersji

```bash
node --version
npm --version
git --version
```

## Inicjalizacja projektu

### Krok 1: Utworzenie folderu projektu

```bash
mkdir react-train-02-app
cd react-train-02-app
```

### Krok 2: Inicjalizacja package.json

```bash
npm init -y
```

## Struktura folderów

Utwórz następującą strukturę folderów:

```text
moja-aplikacja-react/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── common/
│   ├── pages/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   ├── styles/
│   │   ├── base/
│   │   ├── components/
│   │   └── themes/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── lib/
│   ├── test/
│   │   └── setup.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── tests/
├── .editorconfig
├── .eslintignore
├── .gitignore
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

### Tworzenie folderów i plików

```bash
mkdir -p public src/{components/{common,layout,ui},pages,hooks,utils,types,styles/{base,components,themes},assets/{images,icons},lib,test} tests
touch public/vite.svg README.md
```

## Konfiguracja package.json

Zastąp zawartość pliku `package.json`:

```json
{
  "name": "react-train-02-app",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@types/node": "^22.9.3",
    "@types/react": "^19.2.4",
    "@types/react-dom": "^19.2.3",
    "@typescript-eslint/eslint-plugin": "^8.46.4",
    "@typescript-eslint/parser": "^8.46.4",
    "@vitejs/plugin-react": "^5.1.1",
    "@vitest/coverage-v8": "^4.0.9",
    "@vitest/ui": "^4.0.9",
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.9.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.39.1",
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.7",
    "globals": "^16.5.0",
    "jsdom": "^27.2.0",
    "postcss": "^8.5.0",
    "prettier": "^3.6.2",
    "sass": "^1.94.0",
    "typescript": "~5.9.3",
    "vite": "^7.2.2",
    "vitest": "^4.0.9"
  }
}
```

## Konfiguracja TypeScript

### Krok 1: Główny plik tsconfig.json

Utwórz `tsconfig.json`:

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "exclude": ["node_modules"]
}
```

### Krok 2: Konfiguracja aplikacji (tsconfig.app.json)

Utwórz `tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "ignoreDeprecations": "6.0",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "esModuleInterop": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### Krok 3: Konfiguracja Node (tsconfig.node.json)

Utwórz `tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true,
    "resolveJsonModule": true
  },
  "include": ["vite.config.ts", "vitest.config.ts"]
}
```

## Konfiguracja Vite

Utwórz `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
```

## Konfiguracja ESLint i Prettier

### Krok 1: ESLint config (eslint.config.js)

Utwórz `eslint.config.js`:

```javascript
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['dist', 'node_modules', 'eslint.config.js', '.eslintignore', 'postcss.config.js', 'coverage']
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        project: ['./tsconfig.app.json', './tsconfig.node.json']
      }
    },
    settings: { 
      react: { 
        version: 'detect'
      } 
    },
    plugins: {
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint
    },
    rules: {
      // React recommended rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-is-mounted': 'error',
      'react/react-in-jsx-scope': 'error',
      'react/require-render-return': 'error',
      'react/style-prop-object': 'error',
      
      // JSX runtime rules
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      
      ...reactHooks.configs.recommended.rules,
      
      // React specific rules for React 19
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/display-name': 'error',
      'react/no-danger': 'warn',
      'react/no-unstable-nested-components': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      
      // Modern JavaScript/TypeScript rules
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'no-var': 'error',
      
      // React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    // Configuration for TypeScript configuration files
    files: ['**/*.config.{js,ts,mjs}', '**/*.setup.{js,ts,mjs}'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
]
```

### Krok 2: Prettier config

Utwórz `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### Krok 4: .prettierignore

Utwórz `.prettierignore`:

```text
node_modules
dist
coverage
*.config.js
*.config.ts
build
```

### Krok 5: PostCSS config

Utwórz `postcss.config.js`:

```javascript
export default {
  plugins: {
    autoprefixer: {},
  },
}
```

## Konfiguracja Stylus/SCSS

### Główny plik CSS

Utwórz `src/index.css`:

```css
/* CSS Custom Properties dla systemu motywów */
:root {
  /* Dark theme (domyślny) */
  --color-primary: #646cff;
  --color-primary-hover: #535bf2;
  --color-bg: #242424;
  --color-text: rgba(255, 255, 255, 0.87);
  --color-surface: #1a1a1a;
  --color-border: #333;
  --color-button-bg: #1a1a1a;
  --color-button-border: transparent;
  --color-docs: #888;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Typography */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  
  /* Border radius */
  --border-radius-sm: 0.25rem;
  --border-radius: 0.5rem;
  --border-radius-lg: 0.75rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  
  /* Max widths */
  --max-width: 1200px;
}

/* Light theme via media query */
@media (prefers-color-scheme: light) {
  :root:not([data-theme]) {
    --color-primary-hover: #747bff;
    --color-text: #213547;
    --color-bg: #ffffff;
    --color-surface: #f9f9f9;
    --color-border: #d1d5db;
    --color-button-bg: #f9f9f9;
    --color-button-border: #646cff;
    --color-docs: #6b7280;
  }
}

/* Light theme via data attribute */
:root[data-theme="light"] {
  --color-primary-hover: #747bff;
  --color-text: #213547;
  --color-bg: #ffffff;
  --color-surface: #f9f9f9;
  --color-border: #d1d5db;
  --color-button-bg: #f9f9f9;
  --color-button-border: #646cff;
  --color-docs: #6b7280;
}

/* Dark theme via data attribute */
:root[data-theme="dark"] {
  --color-primary-hover: #535bf2;
  --color-text: rgba(255, 255, 255, 0.87);
  --color-bg: #242424;
  --color-surface: #1a1a1a;
  --color-border: #333;
  --color-button-bg: #1a1a1a;
  --color-button-border: transparent;
  --color-docs: #888;
}

/* Reset and base styles */
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  line-height: 1.5;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Uniwersalne klasy */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.container-padded {
  padding: var(--spacing-2xl);
}

.grid {
  display: grid;
  gap: var(--spacing-lg);
}

.grid-auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.grid-columns-2 {
  grid-template-columns: repeat(2, 1fr);
}

.card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background-color: var(--color-surface);
}

.card-padded {
  padding: var(--spacing-2xl);
}

.heading {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
}

.subheading {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.interactive {
  transition: transform 0.2s ease;
  cursor: pointer;
}

.interactive:hover {
  transform: scale(1.05);
}

.button {
  background-color: var(--color-button-bg);
  color: var(--color-text);
  border: 1px solid var(--color-button-border);
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  border-color: var(--color-primary);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.button-primary {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.button-primary:hover {
  background-color: var(--color-primary-hover);
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Responsive typography */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  .grid-columns-2 {
    grid-template-columns: 1fr;
  }
}
```

## Podstawowe pliki aplikacji

### Krok 1: index.html (root folder)

Utwórz `index.html`:

```html
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Nowoczesna aplikacja React z Vite i TypeScript" />
    <title>React Train 02 App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Krok 2: public/vite.svg

Utwórz `public/vite.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="31.88" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
```

### Krok 3: vite-env.d.ts

Utwórz `src/vite-env.d.ts`:

```typescript
/// <reference types="vite/client" />
```

### Krok 4: main.tsx

Utwórz `src/main.tsx`:

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Nie znaleziono elementu #root')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### Krok 5: App.tsx

Utwórz `src/App.tsx`:

```typescript
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
```

### Krok 6: App.css

Utwórz `src/App.css`:

```css
/* Style specyficzne dla komponentu App */
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.read-the-docs {
  color: var(--color-docs);
}

/* Additional styles for App component */
.section-margin-top {
  margin-top: var(--spacing-xl);
}

.button-group {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Konfiguracja testów (Vitest)

### vitest.config.ts

Utwórz `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Setup testów

Utwórz `src/test/setup.ts`:

```typescript
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

// extends Vitest's expect with jest-dom matchers
expect.extend(matchers)

// runs a cleanup after each test case
afterEach(() => {
  cleanup()
})
```

### Przykład testu dla App.tsx

Utwórz `src/App.test.tsx`:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header', () => {
    render(<App />)
    expect(screen.getByText('React 19 + Vite + TypeScript')).toBeInTheDocument()
  })

  it('renders benefits card', () => {
    render(<App />)
    expect(screen.getByText('Zalety konfiguracji')).toBeInTheDocument()
  })

  it('renders next steps card', () => {
    render(<App />)
    expect(screen.getByText('Dalsze kroki')).toBeInTheDocument()
  })

  it('increments counter', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /licznik: 0/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Kliknij mnie (0)')
  })
})
```

## Konfiguracja .gitignore

Utwórz `.gitignore`:

```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Storybook build outputs
.out
.storybook-out

# Temporary folders
tmp/
temp/
```

## Konfiguracja EditorConfig

Utwórz `.editorconfig`:

```editorconfig
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.{js,jsx,ts,tsx,md,yml,yaml,json}]
indent_style = space
indent_size = 2

[*.{css,scss,html}]
indent_style = space
indent_size = 2

[Makefile]
indent_style = tab
indent_size = 4
```

## Testowanie konfiguracji

### Pierwsze uruchomienie

1. **Instalacja zależności:**

```bash
npm install
```

2. **Uruchomienie serwera deweloperskiego:**

```bash
npm run dev
```

3. **Budowanie aplikacji:**

```bash
npm run build
```

4. **Uruchomienie testów:**

```bash
npm test
```

5. **Sprawdzenie typów:**

```bash
npm run type-check
```

6. **Lintowanie kodu:**

```bash
npm run lint
```

### Sprawdzenie w przeglądarce

Po uruchomieniu `npm run dev` aplikacja powinna być dostępna pod adresem:

- **Lokalny:** <http://localhost:3000>

### Weryfikacja konfiguracji

Uruchom wszystkie testy jednocześnie:

```bash
npm run type-check && npm run lint && npm test
```

## 📋 Checklist po instalacji

- [ ] `npm install` zakończone bez błędów
- [ ] `npm run dev` uruchamia serwer na porcie 3000
- [ ] Aplikacja wyświetla się poprawnie w przeglądarce
- [ ] `npm run type-check` nie pokazuje błędów TypeScript
- [ ] `npm run lint` nie pokazuje błędów ESLint
- [ ] `npm test` uruchamia testy bez błędów
- [ ] Hot Module Replacement (HMR) działa poprawnie
- [ ] Motywy dark/light działają

## Dodatkowe wskazówki

### Rozszerzenia VS Code (zalecane)

Zainstaluj następujące rozszerzenia w VS Code:

1. **ESLint** (dbaeumer.vscode-eslint) - lintowanie kodu
2. **Prettier - Code formatter** (esbenp.prettier-vscode) - formatowanie kodu
3. **TypeScript Importer** - automatyczne importy
4. **Auto Rename Tag** - automatyczne zmiany tagów HTML/JSX
5. **Bracket Pair Colorizer 2** - kolorowe nawiasy
6. **GitLens** - rozszerzone funkcje Git
7. **Error Lens** - inline błędy
8. **Path Intellisense** - autouzupełnianie ścieżek

### Konfiguracja VS Code

Utwórz `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

### Skróty klawiszowe VS Code

- `Ctrl+`` (````) - otwórz terminal
- `Ctrl+Shift+P` - paleta poleceń
- `Ctrl+B` - przełącz sidebar
- `F5` - uruchom debug
- `Ctrl+Shift+F` - wyszukaj w plikach
- `Alt+Shift+F` - formatuj dokument

### Dalsze kroki rozwoju

#### 1. Dodanie routingu

```bash
npm install react-router-dom
npm install -D @types/react-router-dom
```

**Przykład użycia:**

```typescript
// src/main.tsx
import { BrowserRouter } from 'react-router-dom'

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

#### 2. Dodanie state management

**Zustand (zalecane dla małych/średnich projektów):**

```bash
npm install zustand
```

**Redux Toolkit (dla dużych projektów):**

```bash
npm install @reduxjs/toolkit react-redux
```

#### 3. Dodanie bibliotek UI

**Headless UI (zalecane z Tailwind):**

```bash
npm install @headlessui/react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Material-UI:**

```bash
npm install @mui/material @emotion/react @emotion/styled
```

**shadcn/ui (komponenty kopiowalne):**

```bash
npx shadcn-ui@latest init
```

#### 4. Dodanie ikon

**Lucide React (nowoczesne, lekkie):**

```bash
npm install lucide-react
```

**Heroicons:**

```bash
npm install @heroicons/react
```

#### 5. Dodanie formularzy

**React Hook Form (zalecane):**

```bash
npm install react-hook-form
npm install @hookform/resolvers zod  # walidacja
```

#### 6. Dodanie zapytań HTTP

**TanStack Query (React Query):**

```bash
npm install @tanstack/react-query
```

**Axios:**

```bash
npm install axios
```

#### 7. Dodanie animacji

**Framer Motion:**

```bash
npm install framer-motion
```

## Rozwiązywanie problemów

### Częste błędy i rozwiązania

#### 1. **Błąd: "Cannot find module"**

**Przyczyna:** Brak zainstalowanych zależności lub błędne ścieżki importów

**Rozwiązanie:**

```bash
# Usuń node_modules i reinstaluj
rm -rf node_modules package-lock.json
npm install

# Sprawdź alias w tsconfig i vite.config
```

#### 2. **Błąd TypeScript: "Property does not exist"**

**Przyczyna:** Nieprawidłowa konfiguracja tsconfig lub brak typów

**Rozwiązanie:**

```bash
# Sprawdź czy wszystkie @types są zainstalowane
npm install -D @types/node @types/react @types/react-dom

# Uruchom sprawdzenie typów
npm run type-check
```

#### 3. **ESLint błędy po instalacji**

**Przyczyna:** Konflikt między starą a nową konfiguracją ESLint

**Rozwiązanie:**

```bash
# Upewnij się że używasz tylko eslint.config.js
# Usuń stare pliki konfiguracyjne jeśli istnieją
rm .eslintrc.js .eslintrc.json .eslintrc.cjs

# Uruchom lint
npm run lint
```

#### 4. **Problemy z CSS/SCSS**

**Przyczyna:** Nieprawidłowe importy lub brak preprocessora

**Rozwiązanie:**

```bash
# Sprawdź czy sass jest zainstalowany
npm install -D sass

# Sprawdź importy w main.tsx
import './index.css'  # ścieżka względna
```

#### 5. **Port 3000 zajęty**

**Rozwiązanie:**

```bash
# Zmień port w vite.config.ts
server: {
  port: 3001,  # lub inny wolny port
}
```

#### 6. **HMR (Hot Module Replacement) nie działa**

**Przyczyna:** Konfiguracja Vite lub problemy z WSL

**Rozwiązanie:**

```typescript
// vite.config.ts
server: {
  watch: {
    usePolling: true,  // dla WSL/Docker
  },
  hmr: {
    overlay: true,
  },
}
```

### Debugowanie

#### 1. **Sprawdzenie konfiguracji Vite:**

```bash
npm run dev -- --debug
```

#### 2. **Sprawdzenie typów TypeScript:**

```bash
npx tsc --noEmit --pretty
```

#### 3. **Debugowanie ESLint:**

```bash
npm run lint -- --debug
```

#### 4. **Sprawdzenie zależności:**

```bash
npm list --depth=0
```

#### 5. **Czyszczenie cache:**

```bash
# Vite cache
rm -rf node_modules/.vite

# Wszystko
rm -rf node_modules dist .cache
npm install
```

## Struktura końcowa projektu

```text
moja-aplikacja-react/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── common/        # Komponenty wielokrotnego użytku
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── ui/            # UI components (Button, Input)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # External library configurations
│   ├── pages/             # Page components
│   ├── styles/
│   │   ├── base/          # Reset, variables, mixins
│   │   ├── components/    # Component-specific styles
│   │   └── themes/        # Theme configurations
│   ├── test/
│   │   └── setup.ts       # Test setup
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tests/                 # Integration tests
├── .editorconfig
├── .eslintignore
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```

## Podsumowanie

Po wykonaniu wszystkich kroków powinieneś mieć w pełni skonfigurowaną aplikację React z:

✅ **React 19.2** - najnowsza wersja z nowymi features  
✅ **Vite 7.2** - ultra szybki bundler i dev server  
✅ **TypeScript 5.9** - pełne typowanie z strict mode  
✅ **ESLint 9** - flat config z najlepszymi praktykami  
✅ **Prettier 3** - spójne formatowanie kodu  
✅ **Vitest 4** - szybkie testy jednostkowe  
✅ **SCSS/Sass** - zaawansowany CSS preprocessing  
✅ **CSS Custom Properties** - system motywów (dark/light)  
✅ **Path aliases** - czyste importy (@/components)  
✅ **Hot Module Replacement** - błyskawiczny dev experience  
✅ **Type-safe** - maksymalne bezpieczeństwo typów  
✅ **Modern patterns** - hooks, functional components, memo  
✅ **Accessibility** - ARIA labels, focus states  
✅ **Responsive** - mobile-first approach  

### Kluczowe różnice od oryginału

🔧 **Poprawiono ESLint flat config** - dodano `jsx-runtime` rules  
🔧 **Naprawiono vite.config.ts** - używa `__dirname` zamiast `process.cwd()`  
🔧 **Dodano @types/node** - wsparcie dla Node.js APIs  
🔧 **Dodano displayName** - lepsze debugowanie React components  
🔧 **Usunięto globalny React** - niepotrzebny w React 19  
🔧 **Dodano provider w vitest** - pełna konfiguracja coverage  
🔧 **Poprawiono strukturę folderów** - usunięto duplikaty  
🔧 **Dodano .prettierignore** - pełna konfiguracja  
🔧 **Dodano disabled styles** - lepszy UX  
🔧 **Dodano responsive grid** - mobile support  
🔧 **Dodano project do ESLint parserOptions** - wsparcie dla TypeScript rules wymagających type info  
🔧 **Dodano postcss.config.js do ESLint ignores** - uniknięcie błędów parsowania  
🔧 **Usunięto .eslintignore** - ESLint 9 używa ignores w config  
🔧 **Dodano przykładowy test App.test.tsx** - podstawowe testy komponentu  
🔧 **Poprawiono test w App.test.tsx** - poprawne wyszukiwanie przycisku  
🔧 **Uproszczono setup.ts** - używa `import '@testing-library/jest-dom/vitest'` dla automatycznego rozszerzenia matchers  

Aplikacja jest **gotowa do produkcji** i można ją uruchomić komendą:

```bash
npm run dev
```

## Dodatkowe zasoby

- [React 19 Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Vitest Documentation](https://vitest.dev)
- [Testing Library](https://testing-library.com/react)

---

**Wersja dokumentu:** 2.1 (Zaktualizowana o poprawki implementacji)  
**Data aktualizacji:** Listopad 2025  
**Zweryfikowane z npm registry**
