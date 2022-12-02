import {
  Options,
  ContactsContainer,
  ContactsTitles,
  Option,
  Icons,
  SocialMedias,
  SocialMediasContainer,
  OtherOptions,
} from './styles'
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  Envelope,
  Phone,
  MapPin,
} from 'phosphor-react'

export function Contacts() {
  document.title = 'NewGo | Contatos'

  return (
    <ContactsContainer>
      <ContactsTitles>
        <h1>Contate-nos</h1>
        <p>Teremos prazer em atendê-lo</p>
      </ContactsTitles>
      <SocialMediasContainer>
        <h2>Acesse nossas redes sociais</h2>
        <SocialMedias>
          <Icons>
            <a
              href="https://www.facebook.com/newgotecnologia/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookLogo size={32} color="#0184fe" weight="fill" />
              <span>Facebook</span>
            </a>
          </Icons>
          <Icons>
            <a
              href="https://www.instagram.com/newgotecnologia/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo size={32} color="#fe9501" weight="fill" />
              <span>Instagram</span>
            </a>
          </Icons>
          <Icons>
            <a
              href="https://www.linkedin.com/company/newgotecnologia"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinLogo size={32} color="#0079d6" weight="fill" />
              <span>LinkedIn</span>
            </a>
          </Icons>
        </SocialMedias>
        <OtherOptions>
          <h2>Ou então</h2>
        </OtherOptions>
      </SocialMediasContainer>
      <Options>
        <Option>
          <Envelope size={32} color="#bebebe" weight="fill" />
          <h3>E-mail</h3>
          <p>Envie-nos uma mensagem a qualquer momento</p>
          <span>
            <a href="mailto:contato@newgo.com.br">contato@newgo.com.br</a>
          </span>
        </Option>
        <Option>
          <MapPin size={32} color="#bebebe" weight="fill" />
          <h3>Mapa</h3>
          <p>Saiba como nos encontrar</p>
          <span>
            <a
              href="https://www.google.com/maps/place/NewGo/@-23.518651,-46.180572,16z/data=!4m5!3m4!1s0x0:0x78923df8c6a0c3f!8m2!3d-23.5186515!4d-46.1805717?hl=pt-BR"
              target="__blank"
            >
              Acessar no Google Maps
            </a>
          </span>
        </Option>
        <Option>
          <Phone size={32} color="#bebebe" weight="fill" />
          <h3>Telefone</h3>
          <p>Disponível em horário comercial das 09:00 às 18:00 </p>
          <span>
            <a href="tel:+5511932989996">+55 (11) 9 3298-9996</a>
          </span>
        </Option>
      </Options>
    </ContactsContainer>
  )
}
