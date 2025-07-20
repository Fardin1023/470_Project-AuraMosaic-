import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./screens/home/Homescreen";
import Baselayout from "./components/layout/Baselayout";
import Authlayout from "./components/layout/Authlayout";
import {GLobalStyles} from "./styles/global/GlobalStyles";
import SignIn from "./screens/auth/SignInScreen";
import NotFound from "./screens/error/NotFoundScreen";
function App() {
  
return (
    <>
    <Router>
      <GLobalStyles/>
      <Routes>
        {/*main screens*/}
        <Route path="/" element={<Baselayout/>}>
        <Route index element={<Home/>}/>
        </Route>
        {/*auth screens*/}
        <Route path="/" element={<Authlayout/>}>
          <Route path="sign_in" element={<SignIn/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App;
