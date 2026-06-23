import './Especiais.scss'

const Especiais = () => {
  const especiais = [
    { 
      className: 'ec1', 
      dataE: '🌿', 
      title: 'Sustentabilidade Ecos', 
      desc: 'Produtos ecológicos e baixo impacto' 
    },
    { 
      className: 'ec2', 
      dataE: '💪', 
      title: 'Empreendedores Locais', 
      desc: 'Negócios gerenciados por moradores' 
    },
    { 
      className: 'ec3', 
      dataE: '🎨', 
      title: 'Arte Periférica', 
      desc: 'Artesanato, grafite e cultura da favela' 
    },
    { 
      className: 'ec4', 
      dataE: '🔥', 
      title: 'Ofertas Relâmpago', 
      desc: 'Promoções por tempo limitado' 
    }
  ]

  return (
    <div className="prods-sec">
      <h2 className="sec-title" style={{ marginBottom: '14px' }}>⚡ Seções Especiais</h2>
      <div className="esp-grid">
        {especiais.map((esp, index) => (
          <div key={index} className={`esp-card ${esp.className}`} data-e={esp.dataE}>
            <h4>{esp.title}</h4>
            <p>{esp.desc}</p>
            <a href="#" className="esp-link">Explorar →</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Especiais