import React from "react"
import "./DropMenu.scss"
import { Link } from "react-router-dom"

const DropMenu = (props) => {
  const menuCloseHandler = () => {
    alert("menu will be clsoed")
    props.onClose()
  }
  const x = props.DDLP
  const root = document.documentElement
  root.style.setProperty("--left-position", x)
  return (
    <ul className="drop_menu" onClick={menuCloseHandler}>
      {props.items.map((item, index) => (
        <Link key={index} to="products">
          <li> {item}</li>
        </Link>
      ))}
    </ul>
  )
}

export default DropMenu
