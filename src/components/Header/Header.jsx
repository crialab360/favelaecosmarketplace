import { useState } from 'react'
import './Header.scss'

const Header = ({ cartCount }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('Todas')

  return (
    <header>
      <div className="hdr-in">
        <a href="#" className="logo-wrap">
          <div className="logo-svg-wrap">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M8 70 Q10 20 60 18 Q90 16 95 55 Q80 30 45 45 Q20 55 18 75 Z" fill="url(#fG1)"/>
              <path d="M18 73 Q45 48 93 53" stroke="rgba(0,80,0,0.35)" strokeWidth="1.5" fill="none"/>
              <path d="M12 78 Q15 35 62 22 Q98 12 100 58 Q85 35 50 52 Q25 63 20 80 Z" fill="url(#fG2)" opacity=".88"/>
              <path d="M78 65 Q82 38 100 30 Q112 26 114 48 Q105 36 90 52 Q83 60 82 68 Z" fill="url(#fG3)"/>
              <ellipse cx="58" cy="90" rx="42" ry="6" fill="rgba(0,0,0,0.25)"/>
              <text x="7" y="98" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="24" fill="white" filter="url(#ts)">FAVELA</text>
              <text x="44" y="115" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="22" fill="url(#eG)">ECOS</text>
              <defs>
                <linearGradient id="fG1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c8f06a"/>
                  <stop offset="50%" stopColor="#8fd42a"/>
                  <stop offset="100%" stopColor="#3a8a0a"/>
                </linearGradient>
                <linearGradient id="fG2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#78d832"/>
                  <stop offset="60%" stopColor="#2d9e2d"/>
                  <stop offset="100%" stopColor="#0e5c0e"/>
                </linearGradient>
                <linearGradient id="fG3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4cbc1a"/>
                  <stop offset="100%" stopColor="#0a4a0a"/>
                </linearGradient>
                <linearGradient id="eG" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#78d832"/>
                  <stop offset="100%" stopColor="#a8e63d"/>
                </linearGradient>
                <filter id="ts" x="-5%" y="-5%" width="110%" height="130%">
                  <feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="rgba(0,0,0,0.6)"/>
                </filter>
              </defs>
            </svg>
          </div>
          <div className="logo-wordmark">
            <span className="logo-favela">FAVELA</span>
            <span className="logo-ecos">ECOS</span>
            <span className="logo-digital">Digital Marketplace</span>
          </div>
        </a>

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <select 
            className="search-cat" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Todas</option>
            <option>Cama & Banho</option>
            <option>Alimentos</option>
            <option>Vestuário</option>
            <option>Acessórios</option>
            <option>Casa & Deco</option>
            <option>Eletrônicos</option>
            <option>Beleza</option>
          </select>
          <input 
            className="search-input" 
            type="text" 
            placeholder="Busque por produto, marca, vendedor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" type="submit">🔍</button>
        </form>

        <div className="hdr-right">
          <a href="#" className="hdr-btn">
            <span className="ico">🔔</span>
            <span>Alertas</span>
            <span className="hdr-badge">3</span>
          </a>
          <a href="#" className="hdr-btn">
            <span className="ico">❤️</span>
            <span>Favoritos</span>
          </a>
          <a href="#" className="hdr-btn">
            <span className="ico">📦</span>
            <span>Pedidos</span>
          </a>
          <button className="hdr-btn" id="cartBtn">
            <span className="ico">🛒</span>
            <span>Carrinho</span>
            <span className="hdr-badge" id="cartCount">{cartCount || 0}</span>
          </button>
          <a href="#vender" className="btn-vender">✨ Quero Vender</a>
        </div>
      </div>
    </header>
  )
}

export default Header