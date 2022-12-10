import { FormInput } from '../../styles'

interface PayrollResultProps {
  salary: number
}

export function PayrollResult({ salary }: PayrollResultProps) {
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
  const vt: number = salary * 0.06
  const adiantamento: number = salary * 0.3
  const aliquota: number = aliquotaCalc()
  const allDiscounts: number = vt + adiantamento + aliquota
  const netSalary: number = salary - allDiscounts
  return (
    <>
      <FormInput>
        <label>Desconto do vale transporte</label>
        <input disabled value={`R$ ${vt.toFixed(2).replace('.', ',')}`} />
      </FormInput>
      <FormInput>
        <label>Desconto de INSS</label>
        <input disabled value={`R$ ${aliquota.toFixed(2).replace('.', ',')}`} />
      </FormInput>
      <FormInput>
        <label>Desconto de adiantamento salarial</label>
        <input
          disabled
          value={`R$ ${adiantamento.toFixed(2).replace('.', ',')}`}
        />
      </FormInput>
      <FormInput>
        <label>Somatório dos descontos</label>
        <input
          disabled
          value={`R$ ${allDiscounts.toFixed(2).replace('.', ',')}`}
        />
      </FormInput>
      <FormInput>
        <label>Salário líquido</label>
        <input
          disabled
          value={`R$ ${netSalary.toFixed(2).replace('.', ',')}`}
        />
      </FormInput>
    </>
  )
}
