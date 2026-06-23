import './PromoBanners.scss'

const PromoBanners = () => {
  const banners = [
    {
      className: 'pbanner pb-main',
      dataE: '🛏️',
      tag: '⚡ Oferta da Semana',
      title: 'Cama, Mesa & Banho<br>até 50% OFF',
      desc: 'Lençóis, toalhas e muito mais'
    },
    {
      className: 'pbanner pb-b',
      dataE: '🍎',
      tag: '🌱 Orgânico',
      title: 'Alimentos Naturais',
      desc: 'Direto do produtor'
    },
    {
      className: 'pbanner pb-c',
      dataE: '👗',
      tag: '🔥 Tendência',
      title: 'Moda Periférica',
      desc: 'Estilo da comunidade'
    }
  ]

  return (
    <div className="promo-sec">
      <div className="promo-grid">
        {banners.map((banner, index) => (
          <div key={index} className={banner.className} data-e={banner.dataE}>
            <div className="pb-content">
              <div className="pb-tag">{banner.tag}</div>
              <h3 dangerouslySetInnerHTML={{ __html: banner.title }} />
              <p>{banner.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PromoBanners