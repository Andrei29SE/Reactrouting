import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"

const MainLiayout = () => {
  return <>
  <Menu/>
  <Outlet/>
  </>
  
}

export default MainLiayout