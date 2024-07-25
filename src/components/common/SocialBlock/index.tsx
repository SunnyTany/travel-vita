import { Link } from "react-router-dom"
import { BsFacebook } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa6"
import s from "./style.module.css"

const SocialBlock = () => {
  return (
    <div className={s.socialBlock}>
      <Link to="https://www.facebook.com/groups/530653887143674/"><BsFacebook /></Link>
      <Link to="https://web.whatsapp.com/"><FaWhatsapp /></Link>
      <Link to="tel:+420608249731">+420 608 249 731</Link>
    </div>
  )
}

export default SocialBlock