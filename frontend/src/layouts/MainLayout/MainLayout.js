import React from 'react'
import Content from '../components/Content'
import SideBar from '../components/SideBar'
import TopLink from '../components/TopLink'

const MainLayout = (props) => {
  const { children } = props
  return (
    <>
      <SideBar className="sidebar" />
      <Content className="content">
        <TopLink className="toplink" />
        {children}
      </Content>
    </>
  )
}

export default MainLayout
