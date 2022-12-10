import { FormInput } from '../../../Payroll/styles'

interface VacationResultProps {
  salary: number
  hoursAvg: number
  daysamout: number
}

export function VacationResult({
  salary,
  hoursAvg,
  daysamout,
}: VacationResultProps) {
  const baseValue = ((salary + hoursAvg) / 30) * daysamout
  const oneThirdValue = baseValue / 3
  const Total = baseValue + oneThirdValue

  return (
    <>
      <FormInput>
        <label>Valor base de férias</label>
        <input
          disabled
          value={`R$ ${baseValue.toFixed(2).replace('.', ',')} `}
        />
      </FormInput>
      <FormInput>
        <label>Valor do terço de férias</label>
        <input
          disabled
          value={`R$ ${oneThirdValue.toFixed(2).replace('.', ',')}`}
        />
      </FormInput>
      <FormInput>
        <label>Total a receber</label>
        <input disabled value={`R$ ${Total.toFixed(2).replace('.', ',')}`} />
      </FormInput>
    </>
  )
}
