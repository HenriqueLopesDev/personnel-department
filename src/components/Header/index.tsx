import {
  HeaderApp,
  NavBar,
  NavLeftSide,
  NavLeftSideName,
  NavRightSide,
} from './styles'
import { NavLink } from 'react-router-dom'
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
          <NavLink to="/" title="Página inicial">
            Home
          </NavLink>
          <NavLink to="/sobrenos" title="Sobre nós">
            Quem somos?
          </NavLink>
          <NavLink to="/contatos" title="Contatos">
            Contatos
          </NavLink>
          <NavLink to="/contatos" title="Cadastrar">
            Cadastros
          </NavLink>
          <NavLink to="/contatos" title="Cálculos da administração">
            Cálculos ADM
          </NavLink>
        </NavRightSide>
      </NavBar>
    </HeaderApp>
  )
}
