import React from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import LayoutWithComponent from './layouts'
import MainLayout from './layouts/MainLayout'
import Care from './pages/Care'
import Find from './pages/Find'
import Login from './pages/Login'
import Map from './pages/Map'
import Search from './pages/Search'
import SignUp from './pages/SignUp'
import Support from './pages/Support'
import Tag from './pages/Tag'
import UserAbout from './pages/user/UserAbout'

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
    <React.Fragment>
      <GlobalStyle />
      <Helmet>
        <title>PetFinder - 잃어버린 실종 반려동물을 위한 펫파인더</title>
        <meta name="description" content="잃어버린 실종 반려동물을 위한 펫파인더" />
      </Helmet>
      <Routes>
        <Route path="/" element={<LayoutWithComponent layout={MainLayout} component={Search} />} />
        <Route
          path="/login"
          element={<LayoutWithComponent layout={MainLayout} component={Login} />}
        />
        <Route
          path="/signup"
          element={<LayoutWithComponent layout={MainLayout} component={SignUp} />}
        />
        <Route
          path="/user/about" // think
          element={<LayoutWithComponent layout={MainLayout} component={UserAbout} />}
        />
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
    </React.Fragment>
  )
}

export default App
