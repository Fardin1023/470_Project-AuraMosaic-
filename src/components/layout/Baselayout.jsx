import { PageWrapper } from "../../styles/themes/styles";
import Header from "../header/header";
import Footer from "../footer/footer";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";


const Baselayout = () => {
  return (
    <PageWrapper>
      <Header/>
      <Sidebar />
      <div style={{
        minHeight: "calc(100vh - 545px)"
      }}>
        <Outlet/>
      </div>
      <Footer/>
    </PageWrapper>
  )
}

export default Baselayout;