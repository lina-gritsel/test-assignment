import { FC } from 'react'

import AccountPage from '../pages/AccountPage'
import Page404 from '../pages/Page404'

import { PATHS } from './patchs'

interface Routes {
  path: string
  component: FC
}

export const routes: Routes[] = [
  {
    path: PATHS.ACCOUNT,
    component: AccountPage,
  },
  {
    path: PATHS.PAGE_404,
    component: Page404,
  },
]
