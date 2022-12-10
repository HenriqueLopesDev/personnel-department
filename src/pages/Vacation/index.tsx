import {
  ContainerVacation,
  MainVacation,
  VacationForm,
  VacationFormInput,
  VacationFormTitle,
  VacationFormButton,
} from './styles'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { VacationResult } from './components/VacationResult'

export function VacationPage() {
  document.title = 'NewGo | Cálculo de férias'
  const [seeResult, setSeeResult] = useState(false)

  const { register, handleSubmit, watch } = useForm()

  function handleGetResult(data: any) {
    console.log(data)
    setSeeResult(true)
  }

  const Name = watch('employeeName')
  const Salary = watch('employeeSalary')
  const HoursAvg = watch('employeeAvg')
  const Days = watch('daysAmount')
  const isSubmitDisabled = Name && Salary && HoursAvg && Days

  return (
    <MainVacation seeResult={seeResult}>
      <ContainerVacation>
        <VacationFormTitle>
          <h1>Cálculo de férias</h1>
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
            <label htmlFor="employeeAvg">Média de horas extras</label>
            <input
              id="employeeAvg"
              type="text"
              placeholder="Insira a média de horas extras"
              {...register('employeeAvg')}
              onClick={() => setSeeResult(false)}
              required
            />
          </VacationFormInput>
          <VacationFormInput>
            <label htmlFor="daysAmount">Quantidade de dias</label>
            <input
              id="daysAmount"
              type="text"
              placeholder="Insira a quantidade de dias de férias"
              {...register('daysAmount')}
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
              <VacationResult
                salary={parseInt(Salary)}
                hoursAvg={parseInt(HoursAvg)}
                daysamout={parseInt(Days)}
              />
            }
          </>
        ) : null}
      </ContainerVacation>
    </MainVacation>
  )
}
