import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { AboutUs } from './pages/AboutUs'
import { User } from './pages/AddUser'
import { Contacts } from './pages/Contacts'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element={<AboutUs />} />
        <Route path="/contatos" element={<Contacts />} />
        <Route path="/adduser" element={<User />} />
      </Route>
    </Routes>
  )
}
