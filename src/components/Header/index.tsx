import { useState } from 'react'
import logo from '../../assets/newgo-logo.svg'
import {
  Astyled,
  HeaderMain,
  LeftSide,
  MainNav,
  MobileLink,
  MobileMenu,
  NavLeftSideName,
  PcMenu,
  RightSide,
  StyledClose,
  StyledHamburguer,
} from './styles'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <HeaderMain isOpen={isOpen}>
      <MainNav>
        <LeftSide>
          <img src={logo} alt="Imagem com a logo da empresa NewGo" />
          <NavLeftSideName>
            <h1>
              New<span>Go</span>
            </h1>
            <h2>Tecnologia</h2>
          </NavLeftSideName>
        </LeftSide>
        <RightSide>
          {isOpen ? (
            <StyledClose
              onClick={() => setIsOpen((state) => !state)}
              size={32}
              color="white"
              weight="bold"
            />
          ) : (
            <StyledHamburguer
              onClick={() => setIsOpen((state) => !state)}
              size={32}
              color="white"
              weight="bold"
            />
          )}
          <PcMenu>
            <li>
              <Astyled to="/">Home</Astyled>
            </li>
            <li>
              <Astyled to="/sobrenos">Quem somos?</Astyled>
            </li>
            <li>
              <Astyled to="/contatos">Contatos</Astyled>
            </li>
            <li>
              <Astyled to="/cadastrar">Cadastros</Astyled>
            </li>
            <li>
              <Astyled to="/calculos">Cálculos ADM</Astyled>
            </li>
          </PcMenu>
        </RightSide>
      </MainNav>
      <MobileMenu isOpen={isOpen}>
        <li>
          <MobileLink to="/">Home</MobileLink>
        </li>
        <li>
          <MobileLink to="/sobrenos">Quem somos?</MobileLink>
        </li>
        <li>
          <MobileLink to="/contatos">Contatos</MobileLink>
        </li>
        <li>
          <MobileLink to="/cadastrar">Cadastros</MobileLink>
        </li>
        <li>
          <MobileLink to="/calculos">Cálculos ADM</MobileLink>
        </li>
      </MobileMenu>
    </HeaderMain>
  )
}
