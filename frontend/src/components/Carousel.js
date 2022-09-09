import React from "react"
import Svg from "../utils/Svg"
import styles from "./Carousel.module.scss"
import { useRef, useState } from "react"

const Carousel = () => {
  const sliderRef = useRef()
  const [carouselIndex, setCarouselIndex] = useState(0)

  const containerUpdate = (sliderNode) => {
    console.log("sliderNode")
    console.log(sliderNode)
    let elements = Array.from(sliderNode.current?.childNodes)
    const extracted = elements.splice(0, 4)
    elements.push(...extracted)

    const toNodeList = function (arrayOfNodes) {
      const fragment = document.createDocumentFragment()
      arrayOfNodes.forEach(function (item) {
        fragment.appendChild(item.cloneNode())
      })
      console.log("fragment")
      console.log(fragment)

      return fragment
    }
    const createdFargment = toNodeList(elements)
    console.log("createdFargment")
    console.log(createdFargment)

    return createdFargment
  }
  const leftArrowClickHandler = () => {
    setCarouselIndex((prev) => prev - 1)
  }
  const rightArrowClickHandler = () => {
    setCarouselIndex((prev) => prev + 1)
    setTimeout(() => {
      // const sliderRef = document.querySelector("#slider")
      const conatinerNode = document.querySelector("#container")

      const updatedNodeList = containerUpdate(sliderRef)
      console.log("updatedNodeList")
      console.log(updatedNodeList)
      while (sliderRef.current.lastChild) {
        sliderRef.current.removeChild(sliderRef.current.lastChild)
      }
      console.log("sliderRef.current after delete")
      console.log(sliderRef.current)

      sliderRef.current.appendChild(updatedNodeList)
      console.log("sliderRef.current after append")
      console.log(sliderRef.current)
      // sliderRef.current.style.transition = "null"

      // setCarouselIndex((prev) => prev - 1)
      // sliderRef.current.style.transition = "transform 2s"

      // console.log("conatinerNode")
      // console.log(conatinerNode)
    }, 2000)
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
      <div className={styles.carousel__slider} ref={sliderRef}>
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
