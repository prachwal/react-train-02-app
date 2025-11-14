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