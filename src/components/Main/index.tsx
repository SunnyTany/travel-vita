import { Routes, Route } from "react-router-dom"
import Container from "../common/Container"
import FlexBlock from "../common/FlexBlock"
import SideBar from "../common/SideBar"
import ToursThisMonth from "./ToursThisMonth"
import SeaTours from "./SeaTours"
import Tour from "./Tour"
import Gallery from "./Gallery"
import Contacts from "./Contacts"
import OrderTour from "./OrderTour"
import Cart from "./Cart"
import LoginForm from "../Auth/LoginForm"
import RegisterForm from "../Auth/RegisterForm"
import Profile from "../Auth/Profile"
import AdminPage from "../../pages/AdminPage"
import NotFound from "./NotFound"
import s from "./style.module.css"

const Main = ( ) => {
  return (
    <main className={s.wrapper}>
      <FlexBlock>
        <Container>
          <Routes>
            <Route path="/" element={<ToursThisMonth />} />
            <Route path="/thismonth/:slug" element={<Tour/>} />
            <Route path="/seatours" element={<SeaTours/>}/>
            <Route path="/:country/:slug" element={<Tour/>} />
            <Route path="/announcement/:slug" element={<Tour/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/order" element={<OrderTour/>}/>
            <Route path="/cart" element={<Cart/>}/>
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