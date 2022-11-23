import styled from 'styled-components'
import background from '../../assets/programando.png'

export const HomeMainContainer = styled.main`
  background-image: url(${background});
  background-size: cover;
  height: 33.8rem;
  padding-top: 8rem;
  padding-left: 2rem;

  h1 {
    font-weight: 500;
    width: 25rem;
    line-height: 1.5;
  }

  span {
    color: #002abf;
    font-weight: 900;
  }
`
