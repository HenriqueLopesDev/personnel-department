import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      0deg,
      rgba(0, 22, 136, 0.2),
      rgba(0, 22, 136, 0.2)
    ),
    #000000;
  border-top: 3px solid ${(props) => props.theme.white};
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.75rem 2rem;

  p {
    font-size: 0.875rem;
    width: 20rem;
    line-height: 1.5;
    color: ${(props) => props.theme['gray-text']};
  }
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  a:hover {
    transition: transform 0.2s;
  }

  a:hover {
    transform: scale(1.2);
  }
`

export const CopyrightMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${(props) => props.theme['blue-border']};
  padding: 0.75rem;

  h1 {
    color: ${(props) => props.theme['gray-text']};
    font-size: 1.125rem;
    font-weight: 400;
  }
`
