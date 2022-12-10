import { FormInput } from '../../../Payroll/styles'

interface VacationResultProps {
  salary: number
  monthsAmount: number
}

export function SalaryResult({ salary, monthsAmount }: VacationResultProps) {
  function aliquotaCalc(): number {
    if (salary <= 1212) {
      return salary * 0.075
    } else if (salary <= 2427.35) {
      return (salary - 1212) * 0.09 + 90.9
      //   return 94.01 + 78.38
    } else if (salary <= 3641.03) {
      return (salary - 2427.35) * 0.12 + 200.28
    } else if (salary <= 7087.22) {
      return (salary - 3641.03) * 0.14 + 345.92
    } else {
      return 828.38
    }
  }

  const firstSalary = ((salary / 12) * monthsAmount) / 2
  const secondSalary = firstSalary - aliquotaCalc()

  return (
    <>
      <FormInput>
        <label>Valor da 1º parcela</label>
        <input
          disabled
          value={`R$ ${firstSalary.toFixed(2).replace('.', ',')} `}
        />
      </FormInput>
      <FormInput>
        <label>Valor da 2º parcela</label>
        <input
          disabled
          value={`R$ ${secondSalary.toFixed(2).replace('.', ',')}`}
        />
      </FormInput>
      <FormInput>
        <label>Valor total</label>
        <input
          disabled
          value={`R$ ${(firstSalary + secondSalary)
            .toFixed(2)
            .replace('.', ',')}`}
        />
      </FormInput>
    </>
  )
}
