import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import TopLink from "../components/TopLink";

const MainLayout = props => {
  const { children } = props
  return (
    <>
      <Sidebar className="sidebar"/>
      <Content className="content">
        <TopLink className='toplink'/>
        {children}
      </Content>
    </>
  )
}

export default MainLayout