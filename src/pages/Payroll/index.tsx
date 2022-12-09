import {
  PayrollContainer,
  PayrollMain,
  PayrollFormTitle,
  PayrollForm,
  FormInput,
  PayrollButton,
} from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'
import { PayrollResult } from './components/PayrollResult'

const payrollFormValidation = zod.object({
  employeeInput: zod.string().min(1, 'Informe o nome do colaborador'),
  salaryInput: zod.string().min(1, 'Informe o salário do colaborador'),
})

type PayrollFormData = zod.infer<typeof payrollFormValidation>

export function Payroll() {
  document.title = 'NewGo | Folha de pagamento'
  const [seeResult, setSeeResult] = useState(false)
  const { register, handleSubmit, watch } = useForm<PayrollFormData>({
    resolver: zodResolver(payrollFormValidation),
    defaultValues: {
      employeeInput: '',
    },
  })

  function handleGetPayroll(data: PayrollFormData) {
    setSeeResult(true)
  }

  const employeeName = watch('employeeInput')
  const employeeSalary = watch('salaryInput')
  const isSubmitDisabled = employeeName && employeeSalary

  return (
    <PayrollMain seeResult={seeResult}>
      <PayrollContainer>
        <PayrollFormTitle>
          <h1>Folha de pagamento</h1>
        </PayrollFormTitle>
        <PayrollForm onSubmit={handleSubmit(handleGetPayroll)}>
          <FormInput>
            <label htmlFor="employeeInput">Nome</label>
            <input
              id="employeeInput"
              type="text"
              placeholder="Insira o nome do colaborador"
              {...register('employeeInput')}
              onClick={() => setSeeResult(false)}
              required
            />
          </FormInput>
          <FormInput>
            <label htmlFor="salaryInput">Salário bruto</label>
            <input
              id="salaryInput"
              type="text"
              placeholder="Insira o salário bruto do colaborador"
              {...register('salaryInput')}
              onClick={() => setSeeResult(false)}
              required
            />
          </FormInput>
          <PayrollButton>
            <button type="submit" disabled={!isSubmitDisabled}>
              Calcular
            </button>
          </PayrollButton>
        </PayrollForm>
        {seeResult ? (
          <>
            <PayrollResult salary={parseInt(employeeSalary)} />
          </>
        ) : null}
      </PayrollContainer>
    </PayrollMain>
  )
}
