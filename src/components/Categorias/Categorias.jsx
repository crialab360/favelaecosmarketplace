import './Categorias.scss'

const Categorias = () => {
  const categories = [
    { name: 'Cama, Mesa & Banho', icon: '🛏️', qty: '480 itens', href: '#cama' },
    { name: 'Alimentos & Bebidas', icon: '🍎', qty: '320 itens', href: '#alimentos' },
    { name: 'Vestuário Feminino', icon: '👗', qty: '420 itens', href: '#vestuario' },
    { name: 'Vestuário Masculino', icon: '👔', qty: '280 itens', href: '#vestuario' },
    { name: 'Joias & Bijoux', icon: '💍', qty: '210 itens', href: '#acessorios' },
    { name: 'Bolsas & Malas', icon: '👜', qty: '150 itens', href: '#acessorios' },
    { name: 'Casa & Decoração', icon: '🏡', qty: '340 itens', href: '#casa' },
    { name: 'Beleza & Cuidados', icon: '💄', qty: '260 itens', href: '#' },
    { name: 'Produtos Naturais', icon: '🌿', qty: '180 itens', href: '#' },
    { name: 'Arte & Artesanato', icon: '🎨', qty: '130 itens', href: '#' },
    { name: 'Eletrônicos', icon: '📱', qty: '220 itens', href: '#' },
    { name: 'Gourmet & Doces', icon: '🍫', qty: '95 itens', href: '#' },
    { name: 'Limpeza & Organização', icon: '🧹', qty: '140 itens', href: '#' },
    { name: 'Infantil & Bebês', icon: '👶', qty: '190 itens', href: '#' },
    { name: 'Esporte & Fitness', icon: '💪', qty: '170 itens', href: '#' },
    { name: 'Ofertas Relâmpago', icon: '🔥', qty: '88 itens', href: '#' }
  ]

  return (
    <div className="cat-sec">
      <div className="sec-head">
        <h2 className="sec-title">🗂️ Todas as Categorias</h2>
        <a href="#" className="sec-link">Ver todas →</a>
      </div>
      <div className="cats-grid">
        {categories.map((cat, index) => (
          <a key={index} href={cat.href} className="cat-card">
            <div className="cat-ico-wrap">{cat.icon}</div>
            <div className="cat-name">{cat.name}</div>
            <div className="cat-qty">{cat.qty}</div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Categorias