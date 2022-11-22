import {
  HeaderApp,
  NavBar,
  NavLeftSide,
  NavLeftSideName,
  NavRightSide,
} from './styles'
import logo from '../../assets/newgo-logo.svg'

export function Header() {
  return (
    <HeaderApp>
      <NavBar>
        <NavLeftSide>
          <img src={logo} alt="Imagem com a logo da empresa NewGo" />
          <NavLeftSideName>
            <h1>
              New<span>Go</span>
            </h1>
            <h2>Tecnologia</h2>
          </NavLeftSideName>
        </NavLeftSide>
        <NavRightSide>
          <a href="#">Home</a>
          <a href="#">Quem somos?</a>
          <a href="#">Contatos</a>
          <a href="#">Cadastros</a>
          <a href="#">Cálculos ADM</a>
        </NavRightSide>
      </NavBar>
    </HeaderApp>
  )
}
