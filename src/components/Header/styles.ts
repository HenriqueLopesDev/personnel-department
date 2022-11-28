import { List, X } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
interface MobileMenuProps {
  isOpen: boolean
}

export const HeaderMain = styled.header<MobileMenuProps>`
  padding: 0.5rem 1.25rem;
  background: linear-gradient(
      0deg,
      rgba(0, 22, 136, 0.2),
      rgba(0, 22, 136, 0.2)
    ),
    #000000;
  border-bottom: 3px solid ${(props) => props.theme.white};

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /*Talvez apagar*/
  justify-content: space-between;
`
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const NavLeftSideName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;

  h1 span {
    font-size: 2rem;
    font-weight: 900;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      90deg,
      #0300af 0%,
      #0400cf 15.62%,
      #0085ff 49.8%,
      #0400cf 83.33%,
      #0300af 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }

  h2 {
    font-size: 0.625rem;
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 400;
    letter-spacing: 0.125rem;
  }
`
export const RightSide = styled.div``

export const PcMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
`
export const Astyled = styled(NavLink)`
  color: white;
  font-weight: 500;
  font-size: 1.125rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.3s;

  &.active {
    border-bottom: 3px solid white;
  }

  &:hover {
    border-bottom-color: white;
  }

  @media (max-width: 750px) {
    display: none;
  }
`
export const StyledHamburguer = styled(List)`
  display: none;
  cursor: pointer;

  @media (max-width: 750px) {
    display: flex;
  }
`
export const StyledClose = styled(X)`
  display: none;
  cursor: pointer;

  @media (max-width: 750px) {
    display: flex;
  }
`

export const MobileMenu = styled.ul<MobileMenuProps>`
  display: none;
  list-style: none;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 750px) {
    overflow: hidden;
    display: flex;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.8s ease-in-out;
  }
`
export const MobileLink = styled(NavLink)`
  color: white;
  font-weight: 500;
  font-size: 1.125rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.3s;

  &.active {
    border-bottom: 3px solid white;
  }

  &:hover {
    border-bottom-color: white;
  }
`
export const DropDownMenu = styled.li`
  position: relative;

  ul {
    display: none;
    position: absolute;
    border-radius: 4px;
    width: 180px;
    background-color: #00093a;
    right: 0;
    list-style: none;
  }

  &:hover {
    ul {
      display: block;
    }
  }

  ul li {
    padding: 0.5rem;
    text-align: center;
    border-bottom: 2px solid ${(props) => props.theme['blue-border']};
    transition: background 0.3s;

    &:hover {
      background: #000d55;
    }
  }
  ul li a {
    font-size: 1rem;
    font-weight: 400;
    border: none;
  }
`

export const NavTitleDropDown = styled.span`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 1.125rem;
  border-top: 3px solid transparent;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &.active {
    border-bottom: 3px solid white;
  }

  @media (max-width: 750px) {
    display: none;
  }
`
