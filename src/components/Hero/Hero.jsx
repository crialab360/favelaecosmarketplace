import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-in">
        <div>
          <div className="hero-pill">🌿 Marketplace Comunitário da Rocinha</div>
          <h1>
            Compre da <em>Favela Ecos</em><br />
            para o Brasil inteiro
          </h1>
          <p className="hero-p">
            Produtos autênticos de vendedores da comunidade. Qualidade real, 
            preço justo e impacto social positivo em cada compra.
          </p>
          <div className="hero-ctas">
            <a href="#produtos" className="btn-pri">🛍️ Explorar Produtos</a>
            <a href="#vender" className="btn-sec">📦 Quero Vender Aqui</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-n">2.4K+</div>
              <div className="stat-l">Produtos</div>
            </div>
            <div>
              <div className="stat-n">380+</div>
              <div className="stat-l">Vendedores</div>
            </div>
            <div>
              <div className="stat-n">98%</div>
              <div className="stat-l">Satisfação</div>
            </div>
            <div>
              <div className="stat-n">🚀</div>
              <div className="stat-l">Entrega RJ</div>
            </div>
          </div>
        </div>
        <div className="hero-logo-area">
          <svg className="hero-logo-big" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M12 120 Q16 30 100 25 Q155 20 158 88 Q130 48 72 70 Q32 88 28 125 Z" fill="url(#hG1)"/>
            <path d="M18 130 Q22 45 102 28 Q162 12 165 92 Q138 54 78 80 Q36 98 32 132 Z" fill="url(#hG2)" opacity=".9"/>
            <path d="M130 108 Q136 62 165 48 Q185 40 188 78 Q174 58 148 84 Q138 98 136 112 Z" fill="url(#hG3)"/>
            <path d="M30 128 Q75 80 158 88" stroke="rgba(0,60,0,.3)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <ellipse cx="98" cy="155" rx="72" ry="10" fill="rgba(0,0,0,0.3)"/>
            <text x="10" y="158" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="40" fill="white" filter="url(#hts)">FAVELA</text>
            <text x="72" y="188" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="38" fill="url(#heG)">ECOS</text>
            <defs>
              <linearGradient id="hG1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4f57a"/>
                <stop offset="45%" stopColor="#9de030"/>
                <stop offset="100%" stopColor="#3a8a0a"/>
              </linearGradient>
              <linearGradient id="hG2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#82e036"/>
                <stop offset="55%" stopColor="#2d9e2d"/>
                <stop offset="100%" stopColor="#0a4a0a"/>
              </linearGradient>
              <linearGradient id="hG3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#50c820"/>
                <stop offset="100%" stopColor="#0a4a0a"/>
              </linearGradient>
              <linearGradient id="heG" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#78d832"/>
                <stop offset="100%" stopColor="#a8e63d"/>
              </linearGradient>
              <filter id="hts" x="-5%" y="-5%" width="115%" height="130%">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="rgba(0,0,0,0.65)"/>
              </filter>
            </defs>
          </svg>
          <div className="hero-badges">
            <span className="hero-badge">✅ Vendedor Verificado</span>
            <span className="hero-badge">🔒 Compra Segura</span>
            <span className="hero-badge">🚚 Frete Grátis RJ</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero