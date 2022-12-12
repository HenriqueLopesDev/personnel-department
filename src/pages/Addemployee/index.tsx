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
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

export function Employee() {
  document.title = 'NewGo | Cadastro de colaboradores'
  const { register, handleSubmit, reset, setValue, setFocus, watch } = useForm()

  function handleAddNewEmployee(data: any) {
    console.log(data)
    toast.success('Colaborador cadastrado com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
    reset()
  }

  function getAdress(event: any) {
    const cep = event.target.value.replace(/\D/g, '')
    if (cep) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => {
          if (res.data.erro) {
            setValue('logradouro', '')
            setValue('bairro', '')
            setValue('cidade', '')
            setValue('estado', '')
            setFocus('number')
            setFocus('cep')
            toast.warn('O CEP informado não é válido', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            })
          } else {
            setValue('cep', cep)
            setValue('logradouro', res.data.logradouro)
            setValue('bairro', res.data.bairro)
            setValue('cidade', res.data.localidade)
            setValue('estado', res.data.uf)
            setFocus('number')
          }
        })
        .catch(() => {
          toast.error(
            'Não foi possível localizar o seu CEP, informe os dados manualmente',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            },
          )
        })
    }
  }

  const nameWatch = watch('name')
  const roleWatch = watch('role')
  const areaWatch = watch('area')
  const phoneWatch = watch('phone')
  const startDateWatch = watch('startDate')
  const emailWatch = watch('email')
  const cepWatch = watch('cep')
  const logradouroWatch = watch('logradouro')
  const numberWatch = watch('number')
  const bairroWatch = watch('bairro')
  const cidadeWatch = watch('cidade')
  const estadoWatch = watch('estado')

  const isSubmitDisabled =
    nameWatch &&
    roleWatch &&
    areaWatch &&
    phoneWatch &&
    startDateWatch &&
    emailWatch &&
    cepWatch &&
    logradouroWatch &&
    numberWatch &&
    bairroWatch &&
    cidadeWatch &&
    estadoWatch

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <MainEmployer>
        <FormEmployerContainer>
          <FormEmployerTitle>
            <h1>Cadastro de colaboradores</h1>
          </FormEmployerTitle>
          <FormEmployerMain onSubmit={handleSubmit(handleAddNewEmployee)}>
            <FormEmployerInputContent>
              <label htmlFor="employeeName">Nome</label>
              <input
                id="employeeName"
                type="text"
                placeholder="Insira o nome do colaborador"
                {...register('name')}
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
                  {...register('role')}
                  required
                />
              </InlineInput>
              <InlineInput>
                <label htmlFor="employeeArea">Setor de atuação</label>
                <input
                  id="employeeArea"
                  type="text"
                  placeholder="Insira o setor de atuação do colaborador"
                  {...register('area')}
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
                  {...register('phone')}
                  required
                />
              </InlineInput>
              <InlineInput>
                <label htmlFor="employeeDate">Data de admissão</label>
                <input
                  id="employeeDate"
                  type="date"
                  placeholder="Escolha a data de admissão do colaborador"
                  {...register('startDate')}
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
                {...register('email')}
                required
              />
            </FormEmployerInputContent>
            <InlineInputsContainer contentPosition="space-between">
              <InlineInput>
                <label htmlFor="employeeZipCode">Cep</label>
                <input
                  id="employeeZipCode"
                  type="text"
                  maxLength={8}
                  placeholder="Insira o CEP do local de residência"
                  {...register('cep')}
                  onBlur={getAdress}
                  required
                />
              </InlineInput>
              <InlineInput>
                <label htmlFor="employeeAdress">Logradouro</label>
                <input
                  id="employeeAdress"
                  type="text"
                  placeholder="Insira o endereço"
                  {...register('logradouro')}
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
                  placeholder="Insira o número da residência"
                  {...register('number')}
                  required
                />
              </InlineInput>
              <InlineInput>
                <label htmlFor="employeeAdressComplement">Complemento</label>
                <input
                  id="employeeAdressComplement"
                  type="text"
                  placeholder="Insira o complemento da residência"
                  {...register('complemento')}
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
                  {...register('bairro')}
                  required
                />
              </InlineInput>
              <InlineInput inputWidth="12.5">
                <label htmlFor="employeeCity">Cidade</label>
                <input
                  id="employeeCity"
                  type="text"
                  placeholder="Insira a cidade"
                  {...register('cidade')}
                  required
                />
              </InlineInput>
              <InlineInput inputWidth="12.5">
                <label htmlFor="employeeRegion">Estado</label>
                <input
                  id="employeeRegion"
                  type="text"
                  placeholder="Insira o estado"
                  {...register('estado')}
                  required
                />
              </InlineInput>
            </InlineInputsContainer>
            <FormButtons>
              <button type="submit" disabled={!isSubmitDisabled}>
                Cadastrar
              </button>
            </FormButtons>
          </FormEmployerMain>
        </FormEmployerContainer>
      </MainEmployer>
    </>
  )
}
