import styled from 'styled-components'

export const AboutUsMainContainer = styled.main`
  height: 33.8rem;
  padding: 2rem 1.25rem;
  gap: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`

export const AboutUsValues = styled.div`
  display: flex;
  justify-content: center;
  gap: 10rem;
`
export const CompanyValues = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  width: 16rem;
  height: 16rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
    color: ${(props) => props.theme['gray-text']};
  }
`
