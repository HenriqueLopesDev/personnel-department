import {
  CopyrightMessage,
  FooterContainer,
  FooterContent,
  IconsContainer,
} from './styles'
import {
  Envelope,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
} from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          O que nos motiva é criar um mundo melhor para o negócio dos nossos
          clientes e para as pessoas com tecnologia.
        </p>
        <IconsContainer>
          <a href="mailto:contanto@newgo.com.br">
            <Envelope size={24} color="#bebebe" weight="fill" />
          </a>
          <a
            href="https://www.instagram.com/newgotecnologia/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={24} color="#bebebe" weight="fill" />
          </a>
          <a
            href="https://www.facebook.com/newgotecnologia/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookLogo size={24} color="#bebebe" weight="fill" />
          </a>
          <a
            href="https://www.linkedin.com/company/newgotecnologia"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={24} color="#bebebe" weight="fill" />
          </a>
        </IconsContainer>
        <p>
          R. Vitório Partênio, 142 - Vila Partênio, Mogi das Cruzes - SP -
          Brasil, CEP 08780-410
        </p>
      </FooterContent>
      <CopyrightMessage>
        <h1>2022 © NewGo Tecnologia. Todos os direitos reservados.</h1>
      </CopyrightMessage>
    </FooterContainer>
  )
}
