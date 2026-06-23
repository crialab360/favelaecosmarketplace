import './Topbar.scss'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-in">
        <div className="tlinks">
          <span>📍 Rocinha, Rio de Janeiro – RJ</span>
          <a href="#">Baixe o App</a>
          <a href="#">Central de Ajuda</a>
          <a href="#">Fale Conosco</a>
        </div>
        <div className="tlinks">
          <a href="#">Entrar</a>
          <span>·</span>
          <a href="#">Cadastre-se</a>
          <span>·</span>
          <a href="#">Minhas Compras</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar