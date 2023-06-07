import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { FC } from 'react'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
