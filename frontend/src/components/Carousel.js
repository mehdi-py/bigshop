import React from "react"
import Svg from "../utils/Svg"
import styles from "./Carousel.module.scss"
import { useRef, useState } from "react"

const Carousel = () => {
  const slideRef = useRef()
  const [slideShift, setSlideShift] = useState(0)
  const root = document.documentElement
  const calculation = slideShift * 25
  root.style.setProperty("--header-slide", ` ${-1 * calculation}%`)
  const leftArrowClickHandler = () => {
    setSlideShift((prev) => prev + 1)
  }
  const rightArrowClickHandler = () => {
    setSlideShift((prev) => prev - 1)
  }
  return (
    <div className={styles.carousel__container}>
      <div className={styles.slider}>
        <div className={styles.slider__group}>
          <button className={styles.leftHandle} onClick={leftArrowClickHandler}>
            <Svg name="chevron-left" color="#f1f" size="30" />
          </button>
          <img src="https://via.placeholder.com/210?text=1" />
          <img src="https://via.placeholder.com/220?text=2" />
          <img src="https://via.placeholder.com/230?text=3" />
          <img src="https://via.placeholder.com/230?text=4" />
          <img src="https://via.placeholder.com/230?text=5" />
          <button
            className={styles.rightHandle}
            onClick={rightArrowClickHandler}
          >
            <Svg name="chevron-right" color="#f1f" size="30" />
          </button>
        </div>
        <div className={styles.slider__group}>
          <button className={styles.leftHandle} onClick={leftArrowClickHandler}>
            <Svg name="chevron-left" color="#f1f" size="30" />
          </button>
          <img src="https://via.placeholder.com/240?text=6" />
          <img src="https://via.placeholder.com/250?text=7" />
          <img src="https://via.placeholder.com/210?text=8" />
          <img src="https://via.placeholder.com/210?text=9" />
          <img src="https://via.placeholder.com/210?text=10" />
          <button
            className={styles.rightHandle}
            onClick={rightArrowClickHandler}
          >
            <Svg name="chevron-right" color="#f1f" size="30" />
          </button>
        </div>
        <div className={styles.slider__group}>
          <button className={styles.leftHandle} onClick={leftArrowClickHandler}>
            <Svg name="chevron-left" color="#f1f" size="30" />
          </button>
          <img src="https://via.placeholder.com/220?text=11" />
          <img src="https://via.placeholder.com/230?text=12" />
          <img src="https://via.placeholder.com/240?text=13" />
          <img src="https://via.placeholder.com/240?text=14" />
          <img src="https://via.placeholder.com/240?text=15" />
          <button
            className={styles.rightHandle}
            onClick={rightArrowClickHandler}
          >
            <Svg name="chevron-right" color="#f1f" size="30" />
          </button>
        </div>
        <div className={styles.slider__group}>
          <button className={styles.leftHandle} onClick={leftArrowClickHandler}>
            <Svg name="chevron-left" color="#f1f" size="30" />
          </button>
          <img src="https://via.placeholder.com/220?text=11" />
          <img src="https://via.placeholder.com/230?text=12" />
          <img src="https://via.placeholder.com/240?text=13" />
          <img src="https://via.placeholder.com/240?text=14" />
          <img src="https://via.placeholder.com/240?text=15" />
          <button
            className={styles.rightHandle}
            onClick={rightArrowClickHandler}
          >
            <Svg name="chevron-right" color="#f1f" size="30" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
