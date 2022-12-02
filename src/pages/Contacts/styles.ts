import styled from 'styled-components'

export const ContactsContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 33.8rem;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;

  @media (max-width: 785px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    height: 37rem;
  }

  @media (max-width: 544px) {
    height: 50rem;
  }

  @media (max-width: 440px) {
    height: 55rem;
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

  @media (max-width: 850px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 0;
    }

    p {
      font-size: 1rem;
    }
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

  @media (max-width: 850px) {
    gap: 1.5rem;
    h2 {
      font-size: 1.125rem;
    }
  }
`

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8rem;

  @media (max-width: 850px) {
    gap: 4rem;
  }

  @media (max-width: 500px) {
    gap: 2rem;
  }

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 1rem;
  }
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

  @media (max-width: 440px) {
    span {
      font-size: 0.875rem;
    }
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 1055px) {
    gap: 0rem;
  }

  @media (max-width: 990px) {
    gap: 2rem;
  }

  @media (max-width: 849px) {
    gap: 0;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 544px) {
    gap: 2rem;
  }
`

export const Option = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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

  @media (max-width: 990px) {
    width: 15rem;
  }

  @media (max-width: 850px) {
    h3 {
      font-size: 1rem;
    }
  }
  @media (max-width: 847px) {
    gap: 0.5rem;
    width: 15rem;
  }
`
export const OtherOptions = styled.div`
  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 11px;
  }
`
