import React, { forwardRef, useRef } from "react"
import styles from "./Button.module.scss"

const Button = (props, ref) => {
  return (
    <button
      ref={ref}
      className={styles.Button}
      type="button"
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  )
}

export default forwardRef(Button)
