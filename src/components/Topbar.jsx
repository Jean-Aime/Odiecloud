import { useState, useEffect } from 'react'

const Topbar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  const desktopMessages = [
    "ODIECLOUD²π is now onboarding founding members across Africa, the Caribbean, and the global diaspora.",
    "Apply for ecosystem membership to access business, technology, trade, and investment opportunities.",
    "Developers, entrepreneurs, and strategic partners are invited to join the ODIECLOUD²π Tech Hub.",
    "Explore the Unified Marketplace connecting businesses, investors, and innovators."
  ]

  const tabletMessages = [
    "Onboarding founding members across Africa and the Caribbean.",
    "Access business, tech, trade, and investment opportunities.",
    "Join ODIECLOUD²π Tech Hub for developers and entrepreneurs.",
    "Explore our Unified Marketplace today."
  ]

  const smallPhoneMessages = [
    "Onboarding founders across Africa.",
    "Access business, tech, and trade.",
    "Join ODIECLOUD²π Tech Hub.",
    "Explore our Marketplace."
  ]

  const getMessages = () => {
    if (screenSize < 640) return smallPhoneMessages
    if (screenSize < 768) return tabletMessages
    return desktopMessages
  }

  const displayMessages = getMessages()

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayMessages.length)
    }, 4200)
    return () => clearInterval(interval)
  }, [displayMessages.length])

  return (
    <div className="bg-linear-to-r from-[#0d2438] to-[#081827] text-white text-sm overflow-hidden border-b border-transparent hover:border-b-white/10 transition-colors duration-300">
      <div className="container flex items-center justify-center min-h-10.5">
        <div className="flex-1 relative h-6 overflow-hidden text-center">
          {displayMessages.map((msg, index) => (
            <div
              key={index}
              className={`absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap font-semibold transition-all duration-700 ease-in-out ${
                index === activeIndex
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-full pointer-events-none'
              }`}
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topbar
