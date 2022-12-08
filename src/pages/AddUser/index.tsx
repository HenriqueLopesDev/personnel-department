import { NavLink } from 'react-router-dom'
import {
  MainUser,
  FormContainer,
  FormTitle,
  RegisterForm,
  InputContent,
  ButtonOptions,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const newUserFormValidation = zod.object({
  userInput: zod.string().min(1, 'Informe o nome do usuário'),
  passInput: zod.string().min(1, 'Informe a senha do usuário'),
})

type UserRegisterFormData = zod.infer<typeof newUserFormValidation>

export function User() {
  document.title = 'NewGo | Cadastro de usuários'

  const { register, handleSubmit, watch, reset } =
    useForm<UserRegisterFormData>({
      resolver: zodResolver(newUserFormValidation),
      defaultValues: {
        userInput: '',
        passInput: '',
      },
    })

  function handleAddNewUser(data: UserRegisterFormData) {
    console.log(data)
    toast.success('Usuário cadastrado com sucesso!', {
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

  const userName = watch('userInput')
  const userPass = watch('passInput')
  const isSubmitDisabled = userName && userPass

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
      <MainUser>
        <FormContainer>
          <FormTitle>
            <h1>Cadastro de usuários</h1>
          </FormTitle>
          <RegisterForm onSubmit={handleSubmit(handleAddNewUser)}>
            <InputContent>
              <label htmlFor="userInput">Usuário</label>
              <input
                id="userInput"
                type="text"
                placeholder="Insira o nome do usuário"
                required
                {...register('userInput')}
              />
            </InputContent>
            <InputContent>
              <label htmlFor="passInput">Senha</label>
              <input
                id="passInput"
                type="password"
                placeholder="Insira a senha do usuário"
                required
                {...register('passInput')}
              />
            </InputContent>
            <ButtonOptions>
              <NavLink to="/visualizarFuncionarios">
                Visualizar usuários
              </NavLink>
              <button type="submit" disabled={!isSubmitDisabled}>
                Cadastrar
              </button>
            </ButtonOptions>
          </RegisterForm>
        </FormContainer>
      </MainUser>
    </>
  )
}
