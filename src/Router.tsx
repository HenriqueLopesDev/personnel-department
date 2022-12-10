import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { AboutUs } from './pages/AboutUs'
import { Employee } from './pages/AddEmployee'
import { User } from './pages/AddUser'
import { Contacts } from './pages/Contacts'
import { Home } from './pages/Home'
import { Payroll } from './pages/Payroll'
import { VacationPage } from './pages/Vacation'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<AboutUs />} />
        <Route path="/contatos" element={<Contacts />} />
        <Route path="/cadastrar">
          <Route path="/cadastrar/usuario" element={<User />} />
          <Route path="/cadastrar/colaborador" element={<Employee />} />
        </Route>
        <Route path="/calcular">
          <Route path="/calcular/folhapagamento" element={<Payroll />} />
          <Route path="/calcular/ferias" element={<VacationPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
