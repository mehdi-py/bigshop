import React from "react"
import styles from "./HomeScreen.module.scss"
import Svg from "../utils/Svg"

const HomeScreen = () => {
  return (
    <main className={styles.container}>
      <section className={styles.category}> categories</section>
      <section className={styles.heroImages}> heroImages</section>
      <section className={styles.products}> products</section>
      <section className={styles.hotChoices}> hotChoices</section>
    </main>
  )
}

export default HomeScreen
