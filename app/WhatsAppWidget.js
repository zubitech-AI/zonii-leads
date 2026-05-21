"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function WhatsAppWidget() {
  const [showBubble, setShowBubble] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const pathname = usePathname()

  const isDevServices = pathname === '/developer-services'

  useEffect(() => {
    // Check if user previously closed the greeting bubble in this session
    const dismissed = sessionStorage.getItem('whatsapp_bubble_dismissed')
    if (dismissed) {
      setIsDismissed(true)
      return
    }

    // Show greeting bubble after a short delay (3 seconds) to let page load first
    const timer = setTimeout(() => {
      setShowBubble(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleCloseBubble = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowBubble(false)
    setIsDismissed(true)
    sessionStorage.setItem('whatsapp_bubble_dismissed', 'true')
  }

  const whatsappNumber = '447458979941'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  const avatarLetter = isDevServices ? 'Z' : 'S'
  const nameLabel = isDevServices ? 'Zonii Leads' : 'Saqlain (Zonii Leads)'
  const greetingText = isDevServices
    ? "Hey! 👋 Let's build your next web/mobile app, automate DevOps, or deploy Agentic AI. Chat with us directly!"
    : "Hey! 👋 Looking to boost your search authority with tier-1 backlinks? Chat with me directly for a custom strategy proposal."

  return (
    <>
      {/* Automated Greeting Chat Bubble */}
      <div className={`whatsapp-chat-bubble ${showBubble && !isDismissed ? 'show' : ''}`}>
        <div className="whatsapp-chat-header">
          <div className="whatsapp-chat-avatar">
            {avatarLetter}
            <span className="whatsapp-chat-status-dot"></span>
          </div>
          <div className="whatsapp-chat-info">
            <span className="whatsapp-chat-name">{nameLabel}</span>
            <span className="whatsapp-chat-status">Online</span>
          </div>
          <button 
            onClick={handleCloseBubble} 
            className="whatsapp-chat-close" 
            aria-label="Close message"
          >
            ✕
          </button>
        </div>
        <div className="whatsapp-chat-body">
          {greetingText}
        </div>
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-chat-btn"
          onClick={() => {
            setShowBubble(false)
            sessionStorage.setItem('whatsapp_bubble_dismissed', 'true')
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
          </svg>
          Start Chat
        </a>
      </div>

      {/* Floating Action Button (FAB) */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`whatsapp-float ${!showBubble ? 'whatsapp-pulse-active' : ''}`}
        aria-label="Chat on WhatsApp"
        onClick={() => {
          setShowBubble(false)
          sessionStorage.setItem('whatsapp_bubble_dismissed', 'true')
        }}
      >
        <span className="whatsapp-float-icon">
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.766 0 1.267.407 2.454 1.134 3.424l-.741 2.709 2.78-.728c.937.609 2.046.961 3.238.961 3.18 0 5.766-2.586 5.766-5.766s-2.586-5.766-5.766-5.766zm3.326 8.21c-.137.387-.704.707-1.014.757-.272.043-.618.069-1.02-.061-.252-.08-.57-.2-.969-.371-1.698-.732-2.772-2.479-2.857-2.593-.085-.114-.69-.918-.69-1.75 0-.832.435-1.242.59-1.41.15-.168.33-.21.44-.21.11 0 .22 0 .31.004.1.005.23-.039.36.27.135.322.46 1.12.5 1.21.04.09.07.195.01.31-.06.115-.09.185-.18.29-.09.105-.19.235-.27.315-.09.09-.185.19-.08.37.105.18.47.775 1.01 1.258.697.62 1.284.812 1.464.9.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.4-.09.165.06 1.045.495 1.225.585.18.09.3.135.345.21.045.075.045.435-.092.822zM12 2C6.477 2 2 6.477 2 12c0 1.954.562 3.778 1.53 5.32L2.03 22l4.83-.1.1.03C8.42 22.86 10.15 23.3 12 23.3c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 19.3c-1.66 0-3.2-.45-4.52-1.24l-.32-.2-2.85.07.76-2.78-.22-.35A8.25 8.25 0 013.7 12c0-4.58 3.72-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"/>
          </svg>
        </span>
        <span className="whatsapp-float-text">Chat on WhatsApp</span>
      </a>
    </>
  )
}
