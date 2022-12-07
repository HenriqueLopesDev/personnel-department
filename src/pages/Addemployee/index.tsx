import {
  FormEmployerContainer,
  MainEmployer,
  FormEmployerTitle,
  FormEmployerInputContent,
  InlineInputsContainer,
  InlineInput,
  FormEmployerMain,
} from './styles'

export function Employee() {
  return (
    <MainEmployer>
      <FormEmployerContainer>
        <FormEmployerTitle>
          <h1>Cadastro de colaboradores</h1>
        </FormEmployerTitle>
        <FormEmployerMain>
          <FormEmployerInputContent>
            <label htmlFor="employerName">Nome</label>
            <input
              id="employerName"
              type="text"
              placeholder="Insira o nome do colaborador"
              required
            />
          </FormEmployerInputContent>
          <InlineInputsContainer>
            <InlineInput>
              <label htmlFor="employerName">Cargo</label>
              <input
                id="employerName"
                type="text"
                placeholder="Insira o nome do colaborador"
                required
              />
            </InlineInput>
            <InlineInput>
              <label htmlFor="employerName">Setor de atuação</label>
              <input
                id="employerName"
                type="text"
                placeholder="Insira o nome do colaborador"
                required
              />
            </InlineInput>
          </InlineInputsContainer>
          <InlineInputsContainer>
            <InlineInput>
              <label htmlFor="employerName">Telefone</label>
              <input
                id="employerName"
                type="text"
                placeholder="Insira o telefone do colaborador"
                required
              />
            </InlineInput>
            <InlineInput>
              <label htmlFor="employerName">Data de admissão</label>
              <input
                id="employerName"
                type="date"
                placeholder="Escolha a data de admissão do colaborador"
                required
              />
            </InlineInput>
          </InlineInputsContainer>
          <FormEmployerInputContent>
            <label htmlFor="employerEmail">Email</label>
            <input
              id="employerEmail"
              type="email"
              placeholder="Insira o endereço de e-mail do colaborador"
              required
            />
          </FormEmployerInputContent>
        </FormEmployerMain>
      </FormEmployerContainer>
    </MainEmployer>
  )
}
