import {
  AboutUsMainContainer,
  AboutUsMainContent,
  AboutUsValues,
  CompanyValues,
} from './styles'

export function AboutUs() {
  return (
    <AboutUsMainContainer>
      <AboutUsMainContent>
        <h1>Sobre nós</h1>
        <p>
          Somos uma empresa apaixonada em transformar o mundo através da
          tecnologia e a inovação. A NewGO Tecnologia surgiu em 2019 com o
          objetivo de trazer o melhor para os nossos clientes e pessoas
          envolvidas, tratando cada cliente como único e entregando uma
          experiência incrível. Além de impactar com nossa excelência e serviços
          de TIC. Atualmente a NewGo presta serviços de criação de software,
          terceirização, treinamento e consultoria.
        </p>
      </AboutUsMainContent>
      <AboutUsValues>
        <CompanyValues>
          <h2>MISSÃO</h2>
          <p>
            Ser um time obstinado em prever e atender as necessidades de nossos
            clientes e consumidores sempre agregando valores.
          </p>
        </CompanyValues>
        <CompanyValues>
          <h2>VISÃO</h2>
          <p>
            Disponibilizar às pessoas software de excelente qualidade – a
            qualquer momento, em qualquer local e em qualquer dispositivo.
          </p>
        </CompanyValues>
        <CompanyValues>
          <h2>VALORES</h2>
          <p>
            Apaixonados; autênticos; comprometidos; honestos; inovadores e
            inspiradores.
          </p>
        </CompanyValues>
      </AboutUsValues>
    </AboutUsMainContainer>
  )
}
