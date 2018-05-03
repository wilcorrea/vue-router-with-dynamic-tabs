import Dashboard from './layouts/Dashboard'
import Mirror from './pages/Mirror'

import Index from './layouts/Index'
import Grid from './layouts/Grid'
import Form from './layouts/Form'

import category from './domains/general/category/routes'
import person from './domains/general/person/routes'

const layouts = {
  index: Index,
  grid: Grid,
  form: Form
}

export default [
  {
    path: '',
    redirect: '/auth/login'
  },
  {
    path: '/auth*',
    component: {
      name: 'Auth',
      template: '<div><router-link to="/dashboard">Entrar</router-link></div>'
    }
  },
  {
    path: '/dashboard',
    component: Dashboard,
    props: {
      base: '/dashboard'
    },
    children: [
      {
        path: ':tab',
        component: Mirror,
        children: [...category(layouts), ...person(layouts)]
      }
    ]
  }
]
