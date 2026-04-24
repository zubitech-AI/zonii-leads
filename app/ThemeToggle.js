"use client"

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check initial preference
    if (document.documentElement.classList.contains('dark') || 
        (!document.documentElement.classList.contains('light') && 
         window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      setTheme('light')
    }
  }

  return (
    <button 
      onClick={toggleTheme} 
      className="btn btn-secondary" 
      style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0.5rem' }}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
