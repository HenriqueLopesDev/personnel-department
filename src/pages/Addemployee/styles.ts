import styled from 'styled-components'
import {
  MainUser,
  FormContainer,
  FormTitle,
  InputContent,
} from '../AddUser/styles'

export const MainEmployer = styled(MainUser)``

export const FormEmployerContainer = styled(FormContainer)`
  width: 50rem;
  padding-bottom: 1rem;
  height: auto;
`

export const FormEmployerTitle = styled(FormTitle)``

export const FormEmployerMain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormEmployerInputContent = styled(InputContent)`
  padding: 0 1rem;
`
export const InlineInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`

export const InlineInput = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  label {
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-text']};
    font-weight: 500;
  }

  input {
    height: 2rem;
    width: 21.875rem;
    padding-left: 0.5rem;
    border-radius: 4px;
    outline: none;
    color: white;
    border: none;
    background-color: ${(props) => props.theme['input-background']};
  }

  input::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-placeholder']};
  }

  input:focus {
    outline: 2px solid ${(props) => props.theme['blue-form']};
  }
`
