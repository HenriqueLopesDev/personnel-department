import {
  ContainerVacation,
  MainVacation,
  VacationForm,
  VacationFormInput,
  VacationFormTitle,
  VacationFormButton,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { SalaryResult } from './components/SalaryResult'

const VacationFormValidation = zod.object({
  employeeName: zod.string().min(1, 'Informe o nome do colaborador'),
  employeeSalary: zod.string().min(1, 'Informe o salário do colaborador'),
  monthsAmount: zod
    .string()
    .min(1, 'Informe a média de horas trabalhadas pelo colaborador'),
})

type VacationFormData = zod.infer<typeof VacationFormValidation>

export function SalaryPage() {
  document.title = 'NewGo | Cálculo de 13º salário'
  const [seeResult, setSeeResult] = useState(false)

  const { register, handleSubmit, watch } = useForm<VacationFormData>({
    resolver: zodResolver(VacationFormValidation),
    defaultValues: {
      employeeName: '',
      employeeSalary: '',
      monthsAmount: '',
    },
  })

  function handleGetResult(data: any) {
    console.log(data)
    setSeeResult(true)
  }

  const Name = watch('employeeName')
  const Salary = watch('employeeSalary')
  const Months = watch('monthsAmount')
  const isSubmitDisabled = Name && Salary && Months

  return (
    <MainVacation seeResult={seeResult}>
      <ContainerVacation>
        <VacationFormTitle>
          <h1>Cálculo de 13º salário</h1>
        </VacationFormTitle>
        <VacationForm onSubmit={handleSubmit(handleGetResult)}>
          <VacationFormInput>
            <label htmlFor="employeeName">Nome</label>
            <input
              id="employeeName"
              type="text"
              placeholder="Insira o nome do colaborador"
              {...register('employeeName')}
              onClick={() => setSeeResult(false)}
              required
            />
          </VacationFormInput>
          <VacationFormInput>
            <label htmlFor="employeeSalary">Salário bruto</label>
            <input
              id="employeeSalary"
              type="text"
              placeholder="Insira o salário bruto do colaborador"
              {...register('employeeSalary')}
              onClick={() => setSeeResult(false)}
              required
            />
          </VacationFormInput>
          <VacationFormInput>
            <label htmlFor="monthsAmount">Meses trabalhados no ano</label>
            <input
              id="monthsAmount"
              type="text"
              placeholder="Insira a quantidade de meses"
              {...register('monthsAmount')}
              onClick={() => setSeeResult(false)}
              required
            />
          </VacationFormInput>
          <VacationFormButton>
            <button type="submit" disabled={!isSubmitDisabled}>
              Calcular
            </button>
          </VacationFormButton>
        </VacationForm>
        {seeResult ? (
          <>
            {
              <SalaryResult
                salary={parseInt(Salary)}
                monthsAmount={parseInt(Months)}
              />
            }
          </>
        ) : null}
      </ContainerVacation>
    </MainVacation>
  )
}
