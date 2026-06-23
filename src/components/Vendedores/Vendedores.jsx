import './Vendedores.scss'

const Vendedores = () => {
  const vendedores = [
    { avatar: '🌿', name: 'Loja da Cida', tipo: 'Cama, Mesa & Banho', rating: '98%' },
    { avatar: '👗', name: 'Fashion Rocinha', tipo: 'Moda & Vestuário', rating: '96%' },
    { avatar: '🍯', name: 'Sabores da Roça', tipo: 'Alimentos & Gourmet', rating: '99%' },
    { avatar: '🎨', name: 'Arte & Vida', tipo: 'Arte & Decoração', rating: '94%' }
  ]

  return (
    <div className="prods-sec">
      <div className="sec-head">
        <h2 className="sec-title">🏪 Vendedores em Destaque</h2>
        <a href="#" className="sec-link">Ver todos →</a>
      </div>
      <div className="vend-grid">
        {vendedores.map((v, index) => (
          <div key={index} className="vend-card">
            <div className="vend-av">{v.avatar}</div>
            <div className="vend-name">{v.name}</div>
            <div className="vend-tipo">{v.tipo}</div>
            <div className="vend-rat">
              <span className="stars">★★★★★</span>
              <span className="prating">{v.rating}</span>
            </div>
            <button className="btn-loja">Ver Loja →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vendedores