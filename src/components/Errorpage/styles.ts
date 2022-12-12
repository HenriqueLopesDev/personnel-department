import styled from 'styled-components'
import { MainUser } from '../../pages/AddUser/styles'

export const MainError = styled(MainUser)`
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;

  h1 {
    text-align: center;
  }

  @media (max-width: 490px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  p {
    text-align: center;
  }
`

export const ErrorImageContainer = styled.div`
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 8px;
  }

  @media (max-width: 490px) {
    img {
      width: 15rem;
      height: 15rem;
    }
  }
`
