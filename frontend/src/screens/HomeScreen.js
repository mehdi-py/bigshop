import React from "react"
import styles from "./HomeScreen.module.scss"
import Carousel from "../components/Carousel"

const HomeScreen = () => {
  return (
    <main className={styles.container}>
      <section className={styles.category}>
        <Carousel />
      </section>
      <section className={styles.heroImages}> heroImages</section>
      <section className={styles.products}> products</section>
      <section className={styles.hotChoices}> hotChoices</section>
    </main>
  )
}

export default HomeScreen
