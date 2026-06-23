import './MidBanner.scss'

const MidBanner = () => {
  return (
    <div className="midbanner" id="vender">
      <div>
        <h2>
          Venda seus produtos<br />
          para o <em>Brasil inteiro</em>
        </h2>
        <p>Cadastro gratuito. Seu negócio da Rocinha no mundo digital.</p>
      </div>
      <div className="mb-steps">
        <div className="mb-step">
          <div className="mb-ico">📝</div>
          Cadastro grátis
        </div>
        <div className="mb-step">
          <div className="mb-ico">📸</div>
          Publique produtos
        </div>
        <div className="mb-step">
          <div className="mb-ico">💰</div>
          Receba vendas
        </div>
        <div className="mb-step">
          <div className="mb-ico">🚀</div>
          Cresça com a gente
        </div>
      </div>
      <a href="#" className="btn-pri" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
        Quero Vender Agora →
      </a>
    </div>
  )
}

export default MidBanner