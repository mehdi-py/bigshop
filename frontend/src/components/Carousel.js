import React from "react"
import Svg from "../utils/Svg"
import styles from "./Carousel.module.scss"
import { useRef, useState } from "react"

const Carousel = () => {
  const slideRef = useRef()
  const [slideShift, setSlideShift] = useState(0)
  const root = document.documentElement
  const calculation = slideShift * 100
  root.style.setProperty("--header-slide", ` ${-1 * calculation}%`)
  const leftArrowClickHandler = () => {
    setSlideShift((prev) => prev + 1)
  }
  const rightArrowClickHandler = () => {
    setSlideShift((prev) => prev - 1)
  }
  return (
    <div className={styles.container}>
      <button className={styles.leftHandle} onClick={leftArrowClickHandler}>
        <Svg name="chevron-left" color="#f1f" size="40" />
      </button>
      <div className={styles.slider} ref={slideRef}>
        <img src="https://via.placeholder.com/210?text=1" />
        <img src="https://via.placeholder.com/220?text=2" />
        <img src="https://via.placeholder.com/230?text=3" />
        <img src="https://via.placeholder.com/240?text=4" />
        <img src="https://via.placeholder.com/250?text=5" />
        <img src="https://via.placeholder.com/260?text=6" />
        <img src="https://via.placeholder.com/270?text=7" />
        <img src="https://via.placeholder.com/280?text=8" />
        <img src="https://via.placeholder.com/290?text=9" />
        <img src="https://via.placeholder.com/290?text=9" />
      </div>
      <button className={styles.rightHandle} onClick={rightArrowClickHandler}>
        <Svg name="chevron-right" color="#f1f" size="40" />
      </button>
    </div>
  )
}

export default Carousel
