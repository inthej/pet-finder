import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import LayoutWithComponent from './layouts'
import MainLayout from './layouts/MainLayout'
import Care from './pages/Care'
import Find from './pages/Find'
import Map from './pages/Map'
import Search from './pages/Search'
import Support from './pages/Support'
import Tag from './pages/Tag'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    cursor: default;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LayoutWithComponent layout={MainLayout} component={Search} />} />
        <Route path="/map" element={<LayoutWithComponent layout={MainLayout} component={Map} />} />
        <Route
          path="/find"
          element={<LayoutWithComponent layout={MainLayout} component={Find} />}
        />
        <Route
          path="/care"
          element={<LayoutWithComponent layout={MainLayout} component={Care} />}
        />
        <Route
          path="/support"
          element={<LayoutWithComponent layout={MainLayout} component={Support} />}
        />
        <Route path="/tag" element={<LayoutWithComponent layout={MainLayout} component={Tag} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
