import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"
import menuItems from "../assets/MenuItms"
import Button from "./Button"
import DropMenu from "./DropMenu"
import useWindowResize from "../utils/useWindowResize"
import Svg from "../utils/Svg"

const Navbar = () => {
  // a custom Hook give access to window size change.
  const [size, setSize] = useWindowResize()
  // for intersection observation
  const navRef = useRef()
  // to find offsets of these elements
  const hotChiocesRef = useRef()
  const categoryRef = useRef()

  // DropDown Left Posintion
  const [DDLP, setDDLP] = useState(0)

  // to store selected Menu
  const [selectedMenu, setSelectedMenu] = useState("")

  //Lis of menu items
  const [items, setItems] = useState([])

  // when first nave intersection is happened
  const [navStatus, setNavStatus] = useState()

  // to show/hide dropdown menu
  const [categoryMenu, setCategoryMenu] = useState(false)

  // options for intersection crossing
  const options = { thershold: 1 }

  // performing intercestion observation
  useEffect(() => {
    const navObserver = new IntersectionObserver(function (enteries) {
      const entery = enteries[0]
      if (navRef.current) setNavStatus(entery.isIntersecting)
    }, options)

    navObserver.observe(navRef.current)
    return () => {
      if (navRef.current) navObserver.unobserve(navRef.current)
    }
  }, [])

  // to close menu when outside is clicked
  useEffect(() => {
    const bodyCLickHandler = (e) => {
      if (
        !categoryRef?.current.contains(e.target) &&
        !hotChiocesRef?.current.contains(e.target)
      ) {
        setCategoryMenu(false)
      }
    }
    document.addEventListener("click", bodyCLickHandler)
    return () => {
      document.removeEventListener("click", bodyCLickHandler)
    }
  }, [])

  // to determine menu placement by window size changing
  useEffect(() => {
    if (selectedMenu === "category") {
      setDDLP(categoryRef.current.offsetLeft)
    } else if (selectedMenu === "hotChoices") {
      setDDLP(hotChiocesRef.current.offsetLeft)
    }

    // setDDLP(hotChiocesRef.current.offsetLeft)
  }, [size, selectedMenu])

  const categoryClickHandler = () => {
    setItems(menuItems.categories)
    setSelectedMenu("category")
    setCategoryMenu(true)
  }
  const HotChiocesClickHandler = () => {
    setItems(menuItems.hotChoices)
    setSelectedMenu("hotChoices")

    setCategoryMenu(true)
  }

  const categoryCloseHandler = () => {
    setCategoryMenu(false)
  }
  return (
    <header
      className={`${styles.header} ${
        !navStatus && styles.onFixed_bottomMargin
      }`}
    >
      <nav ref={navRef} className={styles.header__basic}>
        <p> Our Brand Our Pride</p>
        <p>20% Discount</p>
      </nav>
      <nav
        className={`${styles.header__main} ${
          !navStatus && styles.searchBar_fixed
        }`}
      >
        <div className={styles.logo}>
          <Link to="/">
            <Svg name="icon-spoon-knife" color="#818" size="50" />
          </Link>
        </div>
        <div>
          <Button
            text={"Categories"}
            onClick={categoryClickHandler}
            ref={categoryRef}
          />
          <Button
            text={"Hot Choices"}
            onClick={HotChiocesClickHandler}
            ref={hotChiocesRef}
          />
        </div>
        <div className={styles.header__searchBar}>
          <input type="text" placeholder="search anything" />
          <button>
            <Svg name="icons8-suche" color="#456" size="40" />
          </button>
        </div>
        <div>
          <Button text={"Sign In"} />
          <Button text={"Basket"} />
        </div>
      </nav>
      <div className={styles.header__dropdown_container}>
        {categoryMenu && (
          <DropMenu
            onClose={categoryCloseHandler}
            DDLP={`${DDLP}px`}
            items={items}
            class={!navStatus}
          />
        )}
      </div>
    </header>
  )
}

export default Navbar
