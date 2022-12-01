import styled from 'styled-components'

export const AboutUsMainContainer = styled.main`
  height: 33.8rem;
  padding: 2rem 1.25rem;
  gap: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 872px) {
    gap: 2rem;
  }

  @media (max-width: 584px) {
    height: 45rem;
  }
  @media (max-width: 378px) {
    height: 50rem;
  }
`

export const AboutUsMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    margin-top: 2rem;
  }

  p {
    text-align: center;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-text']};
    font-size: 1.125rem;
  }

  @media (max-width: 875px) {
    h1 {
      margin-top: 1rem;
      font-size: 1.375rem;
    }
    p {
      font-size: 90%;
    }
  }
`

export const AboutUsValues = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10rem;

  @media (max-width: 1128px) {
    gap: 5rem;
  }

  @media (max-width: 970px) {
    gap: 2rem;
  }
`
export const CompanyValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 16rem;

  h2 {
    font-size: 1.25rem;
    text-align: center;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
    text-align: justify;
    color: ${(props) => props.theme['gray-text']};
  }

  @media (max-width: 875px) {
    h2 {
      font-size: 95%;
    }
    p {
      font-size: 90%;
    }
  }
`
