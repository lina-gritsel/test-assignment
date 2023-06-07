import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Layout from '../components/Layout'
import MainPage from '../pages/MainPage'

import { routes } from './routes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      {routes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Route>,
  ),
)

export default router
