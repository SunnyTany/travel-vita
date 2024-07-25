import { Routes, Route } from "react-router-dom"
import Container from "../Container"
import FlexBlock from "../FlexBlock"
import SideBar from "../SideBar"
import ToursThisMonth from "../../ToursThisMonth"
import SeaTours from "../../sea/SeaTours"
import SeaTour from "../../sea/SeaTour"
import Gallery from "../../Gallery"
import Contacts from "../../Contacts"
import OrderTour from "../../OrderTour"
import LoginForm from "../../Auth/LoginForm"
import RegisterForm from "../../Auth/RegisterForm"
import Profile from "../../Auth/Profile"
import AdminPage from "../../pages/AdminPage"
import NotFound from "../../NotFound"
import s from "./style.module.css"

const Main = ( ) => {
  return (
    <main className={s.wrapper}>
      <FlexBlock>
        <Container>
          <Routes>
            <Route path="/" element={<ToursThisMonth />} />
            <Route path="/seatours" element={<SeaTours/>}/>
            <Route path="/seatours:id" element={<SeaTour />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/order" element={<OrderTour/>}/>
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/admin" element={<AdminPage/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Container>
        <SideBar/>
      </FlexBlock>
    </main>
)
}

export default Main