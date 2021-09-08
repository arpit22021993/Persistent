import { PageNotFound } from './views'

export default [
  {
    path: '/404',
    name: '404',
    component: PageNotFound,
  },
  {
    path: '*',
    redirect: { name: '404' },
  },
]
