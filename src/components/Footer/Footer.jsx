import './Footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="foot-in">
        <div className="foot-brand">
          <a href="#" className="logo-wrap" style={{ display: 'inline-flex', marginBottom: '4px' }}>
            <div className="logo-svg-wrap" style={{ width: '44px', height: '44px' }}>
              <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M8 70 Q10 20 60 18 Q90 16 95 55 Q80 30 45 45 Q20 55 18 75 Z" fill="url(#ffG1)"/>
                <path d="M12 78 Q15 35 62 22 Q98 12 100 58 Q85 35 50 52 Q25 63 20 80 Z" fill="url(#ffG2)" opacity=".88"/>
                <path d="M78 65 Q82 38 100 30 Q112 26 114 48 Q105 36 90 52 Q83 60 82 68 Z" fill="url(#ffG3)"/>
                <ellipse cx="58" cy="90" rx="42" ry="6" fill="rgba(0,0,0,0.25)"/>
                <text x="7" y="98" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="24" fill="white" filter="url(#fts2)">FAVELA</text>
                <text x="44" y="115" fontFamily="Arial Black,sans-serif" fontWeight="900" fontSize="22" fill="url(#feG)">ECOS</text>
                <defs>
                  <linearGradient id="ffG1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c8f06a"/><stop offset="50%" stopColor="#8fd42a"/><stop offset="100%" stopColor="#3a8a0a"/></linearGradient>
                  <linearGradient id="ffG2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#78d832"/><stop offset="60%" stopColor="#2d9e2d"/><stop offset="100%" stopColor="#0e5c0e"/></linearGradient>
                  <linearGradient id="ffG3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4cbc1a"/><stop offset="100%" stopColor="#0a4a0a"/></linearGradient>
                  <linearGradient id="feG" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#78d832"/><stop offset="100%" stopColor="#a8e63d"/></linearGradient>
                  <filter id="fts2" x="-5%" y="-5%" width="110%" height="130%"><feDropShadow dx="1.5" dy="1.5" stdDeviation="1" floodColor="rgba(0,0,0,0.6)"/></filter>
                </defs>
              </svg>
            </div>
            <div className="logo-wordmark">
              <span className="logo-favela" style={{ fontSize: '16px' }}>FAVELA</span>
              <span className="logo-ecos" style={{ fontSize: '16px' }}>ECOS</span>
              <span className="logo-digital">Digital</span>
            </div>
          </a>
          <p>
            O marketplace comunitário da Rocinha, conectando vendedores locais ao Brasil inteiro. 
            Cada compra fortalece a economia da nossa comunidade.
            <br /><br />
            CNPJ: 43.065.146/0001-28 · Rocinha, Rio de Janeiro – RJ
          </p>
          <div className="socials">
            <a href="#" className="soc-btn">📘</a>
            <a href="#" className="soc-btn">📸</a>
            <a href="#" className="soc-btn">🐦</a>
            <a href="#" className="soc-btn">▶️</a>
            <a href="#" className="soc-btn">💬</a>
          </div>
        </div>
        <div className="foot-col">
          <h5>Categorias</h5>
          <ul>
            <li><a href="#cama">Cama, Mesa & Banho</a></li>
            <li><a href="#alimentos">Alimentos & Bebidas</a></li>
            <li><a href="#vestuario">Vestuário Feminino</a></li>
            <li><a href="#vestuario">Vestuário Masculino</a></li>
            <li><a href="#acessorios">Joias & Bijoux</a></li>
            <li><a href="#casa">Casa & Decoração</a></li>
            <li><a href="#">Beleza & Cuidados</a></li>
            <li><a href="#">Arte & Artesanato</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Para Compradores</h5>
          <ul>
            <li><a href="#">Como Comprar</a></li>
            <li><a href="#">Formas de Pagamento</a></li>
            <li><a href="#">Rastrear Pedido</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
            <li><a href="#">Central de Ajuda</a></li>
            <li><a href="#">Frete e Entrega</a></li>
            <li><a href="#">Avaliações</a></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Para Vendedores</h5>
          <ul>
            <li><a href="#">Quero Vender</a></li>
            <li><a href="#">Como Cadastrar</a></li>
            <li><a href="#">Taxas & Comissões</a></li>
            <li><a href="#">Painel do Vendedor</a></li>
            <li><a href="#">Suporte Vendedor</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Privacidade</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <p>© 2026 Favela Ecos Participações · Todos os direitos reservados · Rocinha, Rio de Janeiro</p>
        <div className="foot-badges">
          <span className="fbadge">🔒 SSL</span>
          <span className="fbadge">✅ Verificado</span>
          <span className="fbadge">💚 Impacto Social</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer