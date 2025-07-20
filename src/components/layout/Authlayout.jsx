import { PageWrapper } from "../../styles/themes/styles"
import Authheader from "../header/Authheader";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const Authlayout = () => {
  return (
    <PageWrapper>
      <Authheader/>
      <main>
        <Outlet/>
      </main>
      <Footer />
    </PageWrapper>
  )
}

export default Authlayout;