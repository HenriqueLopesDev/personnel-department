import styled from 'styled-components'
import { Eye, EyeSlash } from 'phosphor-react'

export const MainUser = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33.8rem;
  background-image: none;
  background-color: ${(props) => props.theme['dark-background']};
`

export const FormContainer = styled.div`
  width: 25rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['form-background']};
`

export const FormTitle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['gray-border']};

  h1 {
    padding: 0.75rem 0;
    font-size: 1.375rem;
    text-align: center;
  }
`

export const RegisterForm = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

export const InputContent = styled.div`
  padding: 0 0.75rem;
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

export const ButtonOptions = styled.div`
  padding: 0 0.75rem;
  display: flex;
  justify-content: space-between;

  a,
  button {
    text-decoration: none;
    cursor: pointer;
    background-color: ${(props) => props.theme['blue-form']};
    border-radius: 4px;
    color: ${(props) => props.theme.white};
    border: none;
    outline: none;
    padding: 0.5rem;
    transition: background-color 0.25s ease-in-out;
    transition: opacity 0.25s ease-in-out;
  }

  a:hover,
  button:not(:disabled):hover {
    background-color: ${(props) => props.theme['blue-hover']};
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const EyeOpened = styled(Eye)`
  position: absolute;
  cursor: pointer;
  transform: translate(348px, 38px);
`
export const EyeClosed = styled(EyeSlash)`
  position: absolute;
  cursor: pointer;
  transform: translate(348px, 38px);
`
