import './Vantagens.scss'

const Vantagens = () => {
  const vantagens = [
    { icon: '🚚', title: 'Frete Grátis', desc: 'Pedidos acima de R$59 no RJ' },
    { icon: '🔒', title: 'Compra 100% Segura', desc: 'Pagamento protegido' },
    { icon: '🔄', title: 'Troca sem Burocracia', desc: '7 dias garantidos' },
    { icon: '💚', title: 'Impacto Social Real', desc: 'Cada compra apoia a Rocinha' },
    { icon: '⭐', title: 'Vendedores Verificados', desc: 'Qualidade garantida' },
    { icon: '💳', title: 'PIX, Cartão, Boleto', desc: 'Pague como preferir' }
  ]

  return (
    <div className="vbar">
      <div className="vbar-in">
        {vantagens.map((v, index) => (
          <div key={index} className="vant">
            <span className="vant-ico">{v.icon}</span>
            <div>
              <strong>{v.title}</strong>
              <span>{v.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vantagens