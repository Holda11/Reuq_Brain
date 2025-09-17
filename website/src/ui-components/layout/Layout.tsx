import { useEffect, useState } from 'react'
import './Layout.scss'

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    const storedTheme = window.localStorage.getItem('theme')

    if (storedTheme === 'light') {
      return false
    }

    if (storedTheme === 'dark') {
      return true
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light'
    const root = document.documentElement

    root.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [isDarkMode])

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  const modeLabel = isDarkMode
    ? 'Přepnout na světlý režim'
    : 'Přepnout na tmavý režim'

  return (
    <header className="layout-header">
      <div className="layout-header__titles">
        <h1 className="layout-header__title">Dashboard</h1>
        <p className="layout-header__subtitle">
          Přehled všech senzorů a jejich aktuálního stavu
        </p>
      </div>
      <div className="layout-header__actions">
        <div className="layout-header__status" aria-live="polite">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-label="Wi‑Fi signal" role="img">
            <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 8.5a15.5 15.5 0 0 1 19 0"/>
                <path d="M5.5 11.5a11 11 0 0 1 13 0"/>
                <path d="M8.5 14.5a6.5 6.5 0 0 1 7 0"/>
                <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none"/>
            </g>
            </svg>

          <span className="layout-header__status-text">Online</span>
        </div>
        <button
          className="layout-header__button layout-header__button--notifications"
          type="button"
        >
          <svg
            className="layout-header__icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2zm7-6v-4.5c0-3.07-1.64-5.64-4.5-6.32V4a2.5 2.5 0 0 0-5 0v1.18C6.64 5.86 5 8.43 5 11.5V16l-2 2v1h18v-1l-2-2z"
              fill="currentColor"
            />
          </svg>
          <span className="layout-header__badge" aria-label="2 nová upozornění">
            2
          </span>
        </button>
        <button
          className="layout-header__button layout-header__button--mode"
          type="button"
          onClick={toggleMode}
          aria-label={modeLabel}
          aria-pressed={isDarkMode}
          title={modeLabel}
        >
          {isDarkMode ? (
            <svg
              className="layout-header__icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              className="layout-header__icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M6.76 4.84 5.03 3.11 6.45 1.7l1.73 1.72-1.42 1.42zM1 13h3v-2H1v2zm9-9h2V1h-2v3zm8.55-2.3 1.42 1.41-1.73 1.73-1.41-1.42 1.72-1.72zM17.24 19.16l1.41 1.42-1.72 1.72-1.41-1.41 1.72-1.73zM20 11v2h3v-2h-3zm-8 8h2v3h-2v-3zm-7.55 2.3-1.42-1.41 1.73-1.73 1.41 1.42-1.72 1.72zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default Layout
