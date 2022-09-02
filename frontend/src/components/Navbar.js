import React, { useEffect, useRef, useState } from "react"
import styles from "./Navbar.module.scss"
import SearchSvg from "../assets/SearchSvg"
import menuItems from "../assets/MenuItms"
import Button from "./Button"
import DropMenu from "./DropMenu"

const Navbar = () => {
  // for intersection observation
  const navRef = useRef()
  // to find offsets
  const hotChiocesRef = useRef()
  const categoryRef = useRef()

  const [DDLP, setDDLP] = useState(0)
  const [DDTP, setDDTP] = useState(0)

  const [items, setItems] = useState([])

  // to make second nav fixed
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

  const categoryClickHandler = () => {
    setDDLP(categoryRef.current.offsetLeft)
    setDDTP(categoryRef.current.offsetTop)
    setItems(menuItems.categories)
    setCategoryMenu(true)
  }
  const HotChiocesClickHandler = () => {
    setDDLP(hotChiocesRef.current.offsetLeft)
    setDDTP(hotChiocesRef.current.offsetTop)

    setItems(menuItems.hotChoices)
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
        <div>
          <i>Logo</i>
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
            <SearchSvg />
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
            DDTP={`${DDTP}px`}
            items={items}
          />
        )}
      </div>
    </header>
  )
}

export default Navbar
