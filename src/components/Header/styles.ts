import styled from 'styled-components'

export const HeaderApp = styled.header`
  padding: 0.75rem 1.25rem;
  background: linear-gradient(
      0deg,
      rgba(0, 22, 136, 0.2),
      rgba(0, 22, 136, 0.2)
    ),
    #000000;
  border-bottom: 3px solid ${(props) => props.theme.white};
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: 1.75rem;
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
  }

  h2 {
    font-size: 0.625rem;
    font-family: 'Roboto Mono', sans-serif;
    font-weight: 400;
    letter-spacing: 0.125rem;
  }
`

export const NavLeftSideName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NavRightSide = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${(props) => props.theme.white};
    font-weight: 500;
    font-size: 1.125rem;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: border-bottom 0.3s;
  }

  a:hover {
    border-bottom: 3px solid white;
  }
`
