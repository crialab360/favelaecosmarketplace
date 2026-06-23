import './App.scss'
import Topbar from './components/Topbar/Topbar'
import Header from './components/Header/Header'
import NavCats from './components/NavCats/NavCats'
import Hero from './components/Hero/Hero'
import Vantagens from './components/Vantagens/Vantagens'
import PromoBanners from './components/PromoBanners/PromoBanners'
import Categorias from './components/Categorias/Categorias'
import Produtos from './components/Produtos/Produtos'
import MidBanner from './components/MidBanner/MidBanner'
import Especiais from './components/Especiais/Especiais'
import Vendedores from './components/Vendedores/Vendedores'
import ComoFunciona from './components/ComoFunciona/ComoFunciona'
import Footer from './components/Footer/Footer'
import CartFloat from './components/CartFloat/CartFloat'
import Toast from './components/Toast/Toast'
import Container from './components/Container/Container'

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <NavCats />
      <Hero />
      <Vantagens />
      <Container>
        <PromoBanners />
        <Categorias />
        <Produtos title="🔥 Mais Vendidos Hoje" id="produtos" />
        <MidBanner />
        <Produtos title="🛏️ Cama, Mesa & Banho" id="cama" />
        <Especiais />
        <Produtos title="👗 Moda & Vestuário" id="vestuario" />
        <Produtos title="💎 Acessórios & Joias" id="acessorios" />
        <Vendedores />
      </Container>
      <ComoFunciona />
      <Footer />
      <CartFloat />
      <Toast />
    </>
  )
}

export default App