import { FC } from 'react'
import { PATHS } from './patchs'

import AccountPage from '../pages/AccountPage'
import MainPage from '../pages/MainPage'
import Page404 from '../pages/Page404'

interface Routes {
  path: string
  component: FC
}

export const routes: Routes[] = [
  {
    path: PATHS.MAIN,
    component: MainPage,
  },
  {
    path: PATHS.ACCOUNT,
    component: AccountPage,
  },
  {
    path: PATHS.PAGE_404,
    component: Page404,
  },
]
