import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './configs/tradutor.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error/ErrorPage.tsx'
import ProjetosPage from './pages/Projetos/Projetos.tsx'
import HomePage from './pages/Home/Home.tsx'
import ArtigosPage from './pages/Artigos/ArtigosPage.tsx'
import 'react-tooltip/dist/react-tooltip.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "projetos",
        element: <ProjetosPage/>
      },
      {
        path: "artigos",
        element: <ArtigosPage/>
      }
    ]
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
