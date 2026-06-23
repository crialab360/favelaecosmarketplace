import { useState } from 'react'
import './NavCats.scss'

const NavCats = () => {
  const [activeCat, setActiveCat] = useState('Início')

  const categories = [
    { name: 'Início', icon: '🏠' },
    { name: 'Cama, Mesa & Banho', icon: '🛏️' },
    { name: 'Alimentação', icon: '🍎' },
    { name: 'Vestuário', icon: '👗' },
    { name: 'Acessórios', icon: '💍' },
    { name: 'Casa & Deco', icon: '🏡' },
    { name: 'Eletrônicos', icon: '📱' },
    { name: 'Beleza & Saúde', icon: '💄' },
    { name: 'Sustentável', icon: '🌿' },
    { name: 'Arte Local', icon: '🎨' },
    { name: 'Gourmet', icon: '🍫' },
    { name: 'Ofertas do Dia', icon: '⚡' }
  ]

  return (
    <nav className="navcats">
      <div className="navcats-in">
        {categories.map((cat) => (
          <a 
            key={cat.name}
            href={`#${cat.name.toLowerCase().replace(/ /g, '-')}`}
            className={`ncat ${activeCat === cat.name ? 'active' : ''}`}
            onClick={() => setActiveCat(cat.name)}
          >
            <span className="ncat-ico">{cat.icon}</span>
            {cat.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default NavCats