import styled from 'styled-components'

export const ContactsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
    text-align: center;
  }
`

export const ContactsTitles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme['gray-text']};
    font-size: 1.125rem;
    font-weight: 400;
  }
`

export const SocialMediasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
`
export const Icons = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-align: none;
    color: ${(props) => props.theme.white};
    transition: transform 0.25s;

    &:hover {
      transform: scale(1.08);
    }
  }

  span {
    font-weight: 400;
  }
`

export const Line = styled.div`
  width: 80%;
  margin-bottom: 1.5rem;
  hr {
    border-radius: 8px;
    background-color: ${(props) => props.theme.white};
    overflow: visible;
    text-align: center;
    height: 3px;

    &:after {
      background: #000;
      content: 'OU';
      font-size: 1.125rem;
      color: ${(props) => props.theme.white};
      padding: 0 1rem;
      position: relative;
      top: -10px;
    }

    @media (max-width: 1400px) {
      display: none;
    }
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 6rem;
`

export const Email = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 19rem;

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
  }
  p {
    color: ${(props) => props.theme['gray-text']};
    text-align: center;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    font-weight: 500;
  }
`
