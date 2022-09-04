import React from "react"
import styles from "./DropMenu.module.scss"
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
    <>
      <ul
        className={`${styles.drop_menu} ${props.class && styles.menuFixed}`}
        onClick={menuCloseHandler}
      >
        {props.items.map((item, index) => (
          <Link key={index} to={item.url}>
            <li> {item.name}</li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export default DropMenu
