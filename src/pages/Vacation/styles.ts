import styled from 'styled-components'
import {
  FormContainer,
  FormTitle,
  MainUser,
  RegisterForm,
  InputContent,
  ButtonOptions,
} from '../AddUser/styles'

interface MainVacationProps {
  seeResult: boolean
}

export const MainVacation = styled(MainUser)<MainVacationProps>`
  height: ${(props) => (!props.seeResult ? '33.8rem' : 'auto')};
  padding: 2rem;
`

export const ContainerVacation = styled(FormContainer)`
  height: auto;
  padding-bottom: 1.5rem;
`

export const VacationFormTitle = styled(FormTitle)``

export const VacationForm = styled(RegisterForm)``

export const VacationFormInput = styled(InputContent)``

export const VacationFormButton = styled(ButtonOptions)`
  justify-content: right;
`
