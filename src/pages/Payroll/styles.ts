import styled from 'styled-components'
import {
  FormContainer,
  MainUser,
  FormTitle,
  RegisterForm,
  InputContent,
  ButtonOptions,
} from '../AddUser/styles'

interface PayrollMainProps {
  seeResult: boolean
}

export const PayrollMain = styled(MainUser)<PayrollMainProps>`
  height: ${(props) => (!props.seeResult ? '33.8rem' : 'auto')};
  padding: 2rem;
`

export const PayrollContainer = styled(FormContainer)`
  height: auto;
  padding-bottom: 1.5rem;
`

export const PayrollFormTitle = styled(FormTitle)``

export const PayrollForm = styled(RegisterForm)``

export const FormInput = styled(InputContent)``

export const PayrollButton = styled(ButtonOptions)`
  justify-content: right;
`
