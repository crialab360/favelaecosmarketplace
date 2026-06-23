import './ComoFunciona.scss'

const ComoFunciona = () => {
  const steps = [
    { number: 1, icon: '📝', title: 'Cadastre-se Grátis', desc: 'Crie sua conta em minutos, seja comprador ou vendedor. 100% gratuito e sem burocracia.' },
    { number: 2, icon: '🛍️', title: 'Explore & Compre', desc: 'Navegue por milhares de produtos de vendedores da comunidade com os melhores preços.' },
    { number: 3, icon: '💳', title: 'Pague com Segurança', desc: 'PIX, cartão de crédito, boleto. Seu dinheiro protegido até confirmar o recebimento.' },
    { number: 4, icon: '🚚', title: 'Receba em Casa', desc: 'Entrega rápida no Rio e para todo o Brasil. Rastreie seu pedido em tempo real.' }
  ]

  return (
    <section className="como-sec">
      <div className="como-in">
        <h2 className="como-title">
          Como funciona o <em>Favela Ecos Digital</em>
        </h2>
        <div className="como-grid">
          {steps.map((step) => (
            <div key={step.number} className="como-card">
              <div className="como-n">{step.number}</div>
              <div className="como-ico-l">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona