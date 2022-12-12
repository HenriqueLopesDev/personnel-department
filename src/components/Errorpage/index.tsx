import { ErrorImageContainer, MainError } from './styles'
import ErrorImage from '../../assets/404img.webp'

export function Errorpage() {
  //   setTimeout(function () {
  //     window.location.href = 'http://localhost:5173/'
  //   }, 5000)
  return (
    <MainError>
      <h1>Oops, parece que você entrou em uma página que não existe!</h1>
      <ErrorImageContainer>
        <img src={ErrorImage} alt="Imagem indicando que página não existe" />
      </ErrorImageContainer>
      <p>Redirecionando para a página principal em 3 segundos...</p>
    </MainError>
  )
}
