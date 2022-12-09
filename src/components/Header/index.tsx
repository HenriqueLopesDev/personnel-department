import { CaretDown, CaretUp } from 'phosphor-react'
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
  DropDownMenu,
  NavTitleDropDown,
  MobileSubmenu,
  RegisterDropDownMenu,
  LiDropDownMenu,
  SubMenuMobileLink,
  AdminDropDownMenu,
} from './styles'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRegisterMenuOpen, setRegisterMenuOpen] = useState(false)
  const [isAdmMenuOpen, setAdmMenuOpen] = useState(false)

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
            <DropDownMenu>
              <NavTitleDropDown>
                Cadastros <CaretDown size={18} color="white" weight="bold" />
              </NavTitleDropDown>
              <ul>
                <li>
                  <Astyled to="/cadastrar/usuario">Cadastrar usuário</Astyled>
                </li>
                <li>
                  <Astyled to="/cadastrar/colaborador">
                    Cadastrar colaborador
                  </Astyled>
                </li>
              </ul>
            </DropDownMenu>
            <DropDownMenu>
              <NavTitleDropDown>
                Cálculos ADM
                <CaretDown size={18} color="white" weight="bold" />
              </NavTitleDropDown>
              <ul>
                <li>
                  <Astyled to="/cadastrar">Calcular férias</Astyled>
                </li>
                <li>
                  <Astyled to="/cadastrar">Calcular 13º</Astyled>
                </li>
                <li>
                  <Astyled to="/cadastrar">Calcular folha de pagamento</Astyled>
                </li>
              </ul>
            </DropDownMenu>
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
        <LiDropDownMenu>
          {/* <MobileLink to="/cadastrar">Cadastros</MobileLink> */}
          <MobileSubmenu onClick={() => setRegisterMenuOpen((state) => !state)}>
            {!isRegisterMenuOpen ? (
              <>
                Cadastros <CaretDown size={16} color="white" weight="bold" />
              </>
            ) : (
              <>
                Cadastros <CaretUp size={16} color="white" weight="bold" />{' '}
              </>
            )}
          </MobileSubmenu>
          <RegisterDropDownMenu isRegisterMenuOpen={isRegisterMenuOpen}>
            <li>
              <SubMenuMobileLink to="/cadastrar/usuario">
                Cadastrar usuário
              </SubMenuMobileLink>
            </li>
            <li>
              <SubMenuMobileLink to="/cadastrar/colaborador">
                Cadastrar colaborador
              </SubMenuMobileLink>
            </li>
          </RegisterDropDownMenu>
        </LiDropDownMenu>
        <LiDropDownMenu>
          {/* <MobileLink to="/cadastrar">Cadastros</MobileLink> */}
          <MobileSubmenu onClick={() => setAdmMenuOpen((state) => !state)}>
            {!isAdmMenuOpen ? (
              <>
                Cálculos ADM <CaretDown size={16} color="white" weight="bold" />
              </>
            ) : (
              <>
                Cálculos ADM <CaretUp size={16} color="white" weight="bold" />{' '}
              </>
            )}
          </MobileSubmenu>
          <AdminDropDownMenu isAdminMenuOpen={isAdmMenuOpen}>
            <li>
              <SubMenuMobileLink to="/calcularFerias">
                Calcular férias
              </SubMenuMobileLink>
            </li>
            <li>
              <SubMenuMobileLink to="/Calcular13">
                Calcular 13º
              </SubMenuMobileLink>
            </li>
            <li>
              <SubMenuMobileLink to="/Calcularfolhapgt">
                Calcular folha de pagamento
              </SubMenuMobileLink>
            </li>
          </AdminDropDownMenu>
        </LiDropDownMenu>
      </MobileMenu>
    </HeaderMain>
  )
}
