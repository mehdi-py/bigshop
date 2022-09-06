import React from "react"
import Svg from "../utils/Svg"
import styles from "./Carousel.module.scss"
import { useRef, useState } from "react"

const Carousel = () => {
  const slideRef = useRef()
  const [carouselIndex, setCarouselIndex] = useState(0)
  const leftArrowClickHandler = () => {
    console.log("LeftcarouselIndex")
    console.log(carouselIndex)
    if (carouselIndex === 0) {
      setCarouselIndex(2)
    } else {
      setCarouselIndex((prev) => prev - 1)
    }
  }
  const rightArrowClickHandler = () => {
    console.log("Right_carouselIndex")
    console.log(carouselIndex)

    if (carouselIndex === 2) {
      setCarouselIndex(0)
    } else {
      setCarouselIndex((prev) => prev + 1)
    }
  }

  const root = document.documentElement
  const calculation = carouselIndex * -100
  root.style.setProperty("--carousel-index", ` ${calculation}%`)

  return (
    <div className={styles.carousel__container}>
      <button
        className={styles.chevron__left_conatiner}
        onClick={leftArrowClickHandler}
      >
        <div className={styles.chevron}>
          <span>&#8249;</span>
        </div>
      </button>
      <div className={styles.carousel__slider}>
        <img src="https://via.placeholder.com/210/0F0?text=1" />
        <img src="https://via.placeholder.com/220/0F0?text=2" />
        <img src="https://via.placeholder.com/240/0F0?text=3" />
        <img src="https://via.placeholder.com/250/0F0?text=4" />
        <img src="https://via.placeholder.com/260/0F0?text=5" />
        <img src="https://via.placeholder.com/230/0F0?text=6" />
        <img src="https://via.placeholder.com/230/0F0?text=7" />
        <img src="https://via.placeholder.com/230/0F0?text=8" />
        <img src="https://via.placeholder.com/230/0F0?text=9" />
        <img src="https://via.placeholder.com/210/0F0?text=10" />
        <img src="https://via.placeholder.com/220/0F0?text=11" />
        <img src="https://via.placeholder.com/240/0F0?text=12" />
      </div>
      <button
        className={styles.chevron__right_conatiner}
        onClick={rightArrowClickHandler}
      >
        <div className={styles.chevron}>
          <span>&#8250;</span>
        </div>
      </button>
    </div>
  )
}

export default Carousel
