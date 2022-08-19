import Content from "../components/Content";
import SideBar from "../components/SideBar";

const MainLayout = props => {
  const { children } = props
  return (
    <>
      <SideBar className="sidebar"/>
      <Content className="content">
        {children}
      </Content>
    </>
  )
}

export default MainLayout