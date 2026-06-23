import { useState } from 'react'
import './Produtos.scss'

const Produtos = ({ title, id }) => {
  const [favorites, setFavorites] = useState({})

  const produtosData = {
    '🔥 Mais Vendidos Hoje': [
      {
        id: 1,
        icon: '🛏️',
        badge: '-45%',
        badgeClass: 'badge-off',
        store: 'MercadoLivre',
        category: 'Cama, Mesa & Banho',
        name: 'Jogo de Lençol Queen 4 Peças 100% Algodão Premium',
        priceOld: 'R$ 189,90',
        price: 'R$ 104,99',
        parcel: 'em 10x de R$ 10,49 s/ juros',
        stars: '★★★★★',
        rating: '(1.240)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/jogo-de-lencol-queen-4-pecas/s#search_id=all',
        seller: 'Vendedor: Loja da Cida · Rocinha'
      },
      {
        id: 2,
        icon: '👗',
        badge: 'NOVO',
        badgeClass: 'badge-new',
        store: 'Amazon',
        category: 'Vestuário Feminino',
        name: 'Vestido Midi Floral Estampado Tecido Leve Verão',
        priceOld: 'R$ 129,00',
        price: 'R$ 89,90',
        parcel: 'em 6x de R$ 14,98 s/ juros',
        stars: '★★★★☆',
        rating: '(847)',
        frete: '✓ Frete Grátis Prime',
        link: 'https://www.amazon.com.br/s?k=vestido+midi+floral+feminino',
        seller: 'Vendedor: Fashion Rocinha'
      },
      {
        id: 3,
        icon: '🍯',
        badge: 'DESTAQUE',
        badgeClass: 'badge-top',
        store: 'Shopee',
        category: 'Alimentos Artesanais',
        name: 'Kit Cesta Artesanal Mel, Castanhas e Doces Regionais',
        priceOld: 'R$ 79,90',
        price: 'R$ 59,90',
        parcel: 'em 3x de R$ 19,96 s/ juros',
        stars: '★★★★★',
        rating: '(2.130)',
        frete: '✓ Frete Grátis',
        link: 'https://shopee.com.br/search?keyword=cesta+artesanal+mel+doces',
        seller: 'Vendedor: Sabores da Roça'
      },
      {
        id: 4,
        icon: '💍',
        badge: 'ML',
        badgeClass: 'badge-ml',
        store: 'MercadoLivre',
        category: 'Joias & Bijoux',
        name: 'Colar Artesanal Pingente Folha Verde Banhado a Ouro 18K',
        priceOld: 'R$ 68,00',
        price: 'R$ 44,90',
        parcel: 'em 3x de R$ 14,96 s/ juros',
        stars: '★★★★★',
        rating: '(563)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/colar-artesanal-folha-banhado-ouro/s',
        seller: 'Vendedor: Ecos Bijoux · Rocinha'
      },
      {
        id: 5,
        icon: '🏡',
        badge: '-30%',
        badgeClass: 'badge-off',
        store: 'Amazon',
        category: 'Casa & Decoração',
        name: 'Conjunto Vasos Cerâmica Artesanal 3 Peças Decoração',
        priceOld: 'R$ 149,00',
        price: 'R$ 104,30',
        parcel: 'em 6x de R$ 17,38 s/ juros',
        stars: '★★★★☆',
        rating: '(412)',
        frete: '✓ Frete Grátis',
        link: 'https://www.amazon.com.br/s?k=vasos+decorativos+ceramica+artesanal',
        seller: 'Vendedor: Arte & Vida'
      }
    ],
    '🛏️ Cama, Mesa & Banho': [
      {
        id: 6,
        icon: '🛁',
        badge: '-25%',
        badgeClass: 'badge-off',
        store: 'MercadoLivre',
        category: 'Banho',
        name: 'Kit Toalha Banho 70x140cm Extra Macia Algodão Egípcio',
        priceOld: 'R$ 89,00',
        price: 'R$ 66,90',
        parcel: 'em 4x de R$ 16,72 s/ juros',
        stars: '★★★★★',
        rating: '(920)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/toalha-banho-algotao-extra-macia/s',
        seller: 'Casa Aconchego · Rocinha'
      },
      {
        id: 7,
        icon: '🍽️',
        badge: 'ARTESANAL',
        badgeClass: 'badge-new',
        store: 'Amazon',
        category: 'Mesa Posta',
        name: 'Toalha de Mesa Bordada 6 Lugares Renda Artesanal Festa',
        priceOld: '',
        price: 'R$ 79,90',
        parcel: 'em 4x de R$ 19,97 s/ juros',
        stars: '★★★★☆',
        rating: '(380)',
        frete: '✓ Frete Grátis Prime',
        link: 'https://www.amazon.com.br/s?k=toalha+de+mesa+bordada+artesanal',
        seller: 'Rendas & Arte'
      },
      {
        id: 8,
        icon: '😴',
        badge: 'TOP VENDA',
        badgeClass: 'badge-top',
        store: 'Shopee',
        category: 'Dormitório',
        name: 'Travesseiro Ortopédico Viscoelástico Fibra Siliconada 50x70',
        priceOld: 'R$ 120,00',
        price: 'R$ 89,90',
        parcel: 'em 6x de R$ 14,98 s/ juros',
        stars: '★★★★★',
        rating: '(1.440)',
        frete: '✓ Frete Grátis',
        link: 'https://shopee.com.br/search?keyword=travesseiro+ortopedico+viscoelastico',
        seller: 'Sono & Bem-Estar'
      },
      {
        id: 9,
        icon: '🛏️',
        badge: '-40%',
        badgeClass: 'badge-off',
        store: 'MercadoLivre',
        category: 'Roupas de Cama',
        name: 'Jogo de Cama Queen Micropercal 300 Fios 4 Peças Premium',
        priceOld: 'R$ 220,00',
        price: 'R$ 131,90',
        parcel: 'em 10x de R$ 13,19 s/ juros',
        stars: '★★★★★',
        rating: '(2.310)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/jogo-de-cama-queen-micropercal-300-fios/s',
        seller: 'Loja da Cida · Rocinha'
      },
      {
        id: 10,
        icon: '🛋️',
        badge: 'NOVO',
        badgeClass: 'badge-new',
        store: 'Amazon',
        category: 'Decoração',
        name: 'Kit 2 Almofadas Decorativas Veludo Bordado 45x45cm',
        priceOld: 'R$ 88,00',
        price: 'R$ 59,90',
        parcel: 'em 3x de R$ 19,96 s/ juros',
        stars: '★★★★☆',
        rating: '(290)',
        frete: '✓ Frete Grátis Prime',
        link: 'https://www.amazon.com.br/s?k=almofada+decorativa+veludo+estampada',
        seller: 'Costura Ecos'
      }
    ],
    '👗 Moda & Vestuário': [
      {
        id: 11,
        icon: '👟',
        badge: '-35%',
        badgeClass: 'badge-off',
        store: 'MercadoLivre',
        category: 'Calçados Femininos',
        name: 'Tênis Casual Feminino Flatform Plataforma Confortável',
        priceOld: 'R$ 169,00',
        price: 'R$ 109,90',
        parcel: 'em 6x de R$ 18,31 s/ juros',
        stars: '★★★★★',
        rating: '(740)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/tenis-casual-feminino-flatform/s',
        seller: 'Estilo Carioca'
      },
      {
        id: 12,
        icon: '👔',
        badge: 'NOVO',
        badgeClass: 'badge-new',
        store: 'Amazon',
        category: 'Vestuário Masculino',
        name: 'Camisa Social Slim Fit Manga Longa Algodão Premium',
        priceOld: 'R$ 99,00',
        price: 'R$ 69,90',
        parcel: 'em 4x de R$ 17,47 s/ juros',
        stars: '★★★★☆',
        rating: '(330)',
        frete: '✓ Frete Grátis Prime',
        link: 'https://www.amazon.com.br/s?k=camisa+social+slim+fit+masculina',
        seller: 'Moda RJ'
      },
      {
        id: 13,
        icon: '🩱',
        badge: 'TOP',
        badgeClass: 'badge-top',
        store: 'Shopee',
        category: 'Moda Praia & Verão',
        name: 'Body Feminino Manga Longa Estampado Tropical Verão',
        priceOld: '',
        price: 'R$ 44,90',
        parcel: 'em 3x de R$ 14,96 s/ juros',
        stars: '★★★★★',
        rating: '(580)',
        frete: '✓ Frete Grátis',
        link: 'https://shopee.com.br/search?keyword=body+feminino+estampado+moda+praia',
        seller: 'BeachWear Rocinha'
      },
      {
        id: 14,
        icon: '👜',
        badge: '-28%',
        badgeClass: 'badge-off',
        store: 'MercadoLivre',
        category: 'Bolsas & Malas',
        name: 'Bolsa Feminina Tote Bag Couro Sintético Espaçosa Premium',
        priceOld: 'R$ 149,00',
        price: 'R$ 107,00',
        parcel: 'em 6x de R$ 17,83 s/ juros',
        stars: '★★★★★',
        rating: '(970)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/bolsa-feminina-tote-bag-couro/s',
        seller: 'Couro & Arte'
      },
      {
        id: 15,
        icon: '👒',
        badge: 'ARTESANAL',
        badgeClass: 'badge-new',
        store: 'Amazon',
        category: 'Chapéus & Bonés',
        name: 'Chapéu Aba Larga Palha Natural Artesanal Praia Verão',
        priceOld: 'R$ 75,00',
        price: 'R$ 44,90',
        parcel: 'em 2x de R$ 22,45 s/ juros',
        stars: '★★★★☆',
        rating: '(210)',
        frete: '✓ Frete Grátis Prime',
        link: 'https://www.amazon.com.br/s?k=chapeu+aba+larga+palha+artesanal',
        seller: 'Arte Natural'
      }
    ],
    '💎 Acessórios & Joias': [
      {
        id: 16,
        icon: '💛',
        badge: 'POPULAR',
        badgeClass: 'badge-top',
        store: 'Shopee',
        category: 'Pulseiras',
        name: 'Kit 5 Pulseiras Artesanais Miçangas Coloridas Favela',
        priceOld: '',
        price: 'R$ 29,90',
        parcel: 'ou 2x de R$ 14,95 s/ juros',
        stars: '★★★★★',
        rating: '(1.870)',
        frete: '✓ Frete Grátis',
        link: 'https://shopee.com.br/search?keyword=pulseira+artesanal+micangas+colorida',
        seller: 'Ecos Bijoux · Rocinha'
      },
      {
        id: 17,
        icon: '🕶️',
        badge: '-30%',
        badgeClass: 'badge-off',
        store: 'MercadoLivre',
        category: 'Óculos',
        name: 'Óculos de Sol Feminino Polarizado UV400 Gatinho Premium',
        priceOld: 'R$ 89,00',
        price: 'R$ 62,30',
        parcel: 'em 3x de R$ 20,76 s/ juros',
        stars: '★★★★☆',
        rating: '(650)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/oculos-de-sol-feminino-polarizado/s',
        seller: 'Style Ecos'
      },
      {
        id: 18,
        icon: '⌚',
        badge: 'NOVO',
        badgeClass: 'badge-new',
        store: 'Amazon',
        category: 'Relógios',
        name: 'Relógio Feminino Dourado Minimalista Aço Inoxidável',
        priceOld: 'R$ 159,00',
        price: 'R$ 119,90',
        parcel: 'em 6x de R$ 19,98 s/ juros',
        stars: '★★★★★',
        rating: '(430)',
        frete: '✓ Frete Grátis Prime',
        link: 'https://www.amazon.com.br/s?k=relogio+feminino+dourado+minimalista',
        seller: 'Elegância Carioca'
      },
      {
        id: 19,
        icon: '👛',
        badge: '-20%',
        badgeClass: 'badge-off',
        store: 'Shopee',
        category: 'Cintos & Carteiras',
        name: 'Cinto Masculino Couro Legítimo Fivela Dourada 3,5cm',
        priceOld: 'R$ 65,00',
        price: 'R$ 51,90',
        parcel: 'em 3x de R$ 17,30 s/ juros',
        stars: '★★★★☆',
        rating: '(280)',
        frete: '✓ Frete Grátis',
        link: 'https://shopee.com.br/search?keyword=cinto+masculino+couro+legitimo',
        seller: 'Couro & Arte RJ'
      },
      {
        id: 20,
        icon: '💛',
        badge: 'TOP',
        badgeClass: 'badge-top',
        store: 'MercadoLivre',
        category: 'Brincos & Argolas',
        name: 'Par Brinco Argola Grande Banhado Ouro 18K Premium 5cm',
        priceOld: '',
        price: 'R$ 34,90',
        parcel: 'ou 2x de R$ 17,45 s/ juros',
        stars: '★★★★★',
        rating: '(2.190)',
        frete: '✓ Frete Grátis',
        link: 'https://www.mercadolivre.com.br/brinco-argola-banhado-ouro-18k/s',
        seller: 'Ecos Bijoux'
      }
    ]
  }

  const produtos = produtosData[title] || []

  const toggleFavorite = (id, e) => {
    e.preventDefault()
    e.stopPropagation()
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="prods-sec" id={id}>
      <div className="sec-head">
        <h2 className="sec-title">{title}</h2>
        <a href="#" className="sec-link">Ver todos →</a>
      </div>
      <div className="prods-grid">
        {produtos.map((prod) => (
          <div key={prod.id} className="pcard">
            <a className="pcard-img" href={prod.link} target="_blank" rel="noopener noreferrer">
              {prod.icon}
              {prod.badge && <div className={`pcard-badge ${prod.badgeClass}`}>{prod.badge}</div>}
              <span className="store-logo">{prod.store}</span>
            </a>
            <button 
              className="fav-b" 
              onClick={(e) => toggleFavorite(prod.id, e)}
            >
              {favorites[prod.id] ? '❤️' : '🤍'}
            </button>
            <div className="pcard-body">
              <div className="pcat">{prod.category}</div>
              <div className="pname">{prod.name}</div>
              {prod.priceOld && <div className="pde">{prod.priceOld}</div>}
              <div className="ppor">{prod.price}</div>
              {prod.parcel && <div className="pparc">{prod.parcel}</div>}
              <div className="pstars">
                <span className="stars">{prod.stars}</span>
                <span className="prating">{prod.rating}</span>
              </div>
              <div className="pfrete">{prod.frete}</div>
              <a className="btn-comprar" href={prod.link} target="_blank" rel="noopener noreferrer">
                Ver na {prod.store} →
              </a>
              <div className="pvendedor">{prod.seller}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Produtos