import { NavLink } from 'react-router-dom'
import {
  FormEmployerContainer,
  MainEmployer,
  FormEmployerTitle,
  FormEmployerInputContent,
  InlineInputsContainer,
  InlineInput,
  FormEmployerMain,
  FormButtons,
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
            <label htmlFor="employeeName">Nome</label>
            <input
              id="employeeName"
              type="text"
              placeholder="Insira o nome do colaborador"
              required
            />
          </FormEmployerInputContent>
          <InlineInputsContainer>
            <InlineInput>
              <label htmlFor="employeeRole">Cargo</label>
              <input
                id="employeeRole"
                type="text"
                placeholder="Insira o cargo do colaborador"
                required
              />
            </InlineInput>
            <InlineInput>
              <label htmlFor="employeeArea">Setor de atuação</label>
              <input
                id="employeeArea"
                type="text"
                placeholder="Insira o setor de atuação do colaborador"
                required
              />
            </InlineInput>
          </InlineInputsContainer>
          <InlineInputsContainer>
            <InlineInput>
              <label htmlFor="employeePhone">Telefone</label>
              <input
                id="employeePhone"
                type="text"
                placeholder="Insira o telefone do colaborador"
                required
              />
            </InlineInput>
            <InlineInput>
              <label htmlFor="employeeDate">Data de admissão</label>
              <input
                id="employeeDate"
                type="date"
                placeholder="Escolha a data de admissão do colaborador"
                required
              />
            </InlineInput>
          </InlineInputsContainer>
          <FormEmployerInputContent>
            <label htmlFor="employeeEmail">Email</label>
            <input
              id="employeeEmail"
              type="email"
              placeholder="Insira o endereço de e-mail do colaborador"
              required
            />
          </FormEmployerInputContent>
          <InlineInputsContainer contentPosition="space-between">
            <InlineInput>
              <label htmlFor="employeeZipCode">Cep</label>
              <input
                id="employeeZipCode"
                type="text"
                placeholder="Insira o CEP do local de residência do colaborador"
                required
              />
            </InlineInput>
            <InlineInput>
              <label htmlFor="employeeAdress">Logradouro</label>
              <input
                id="employeeAdress"
                type="text"
                placeholder="Insira o endereço do colaborador"
                required
              />
            </InlineInput>
          </InlineInputsContainer>
          <InlineInputsContainer>
            <InlineInput>
              <label htmlFor="employeeAdressNumber">Número</label>
              <input
                id="employeeAdressNumber"
                type="text"
                placeholder="Insira o número da residência do colaborador"
                required
              />
            </InlineInput>
            <InlineInput>
              <label htmlFor="employeeAdressComplement">Complemento</label>
              <input
                id="employeeAdressComplement"
                type="text"
                placeholder="Insira o complemento da residência do colaborador"
                required
              />
            </InlineInput>
          </InlineInputsContainer>
          <InlineInputsContainer contentPosition="space-between">
            <InlineInput inputWidth="12.5">
              <label htmlFor="employeeDistrict">Bairro</label>
              <input
                id="employeeDistrict"
                type="text"
                placeholder="Insira o bairro"
                required
              />
            </InlineInput>
            <InlineInput inputWidth="12.5">
              <label htmlFor="employeeCity">Cidade</label>
              <input
                id="employeeCity"
                type="text"
                placeholder="Insira a cidade"
                required
              />
            </InlineInput>
            <InlineInput inputWidth="12.5">
              <label htmlFor="employeeRegion">Estado</label>
              <input
                id="employeeRegion"
                type="text"
                placeholder="Insira o estado"
                required
              />
            </InlineInput>
          </InlineInputsContainer>
          <FormButtons>
            <NavLink to="/visualizarColaboradores">
              Visualizar Colaboradores
            </NavLink>
            <button type="submit">Cadastrar</button>
          </FormButtons>
        </FormEmployerMain>
      </FormEmployerContainer>
    </MainEmployer>
  )
}
