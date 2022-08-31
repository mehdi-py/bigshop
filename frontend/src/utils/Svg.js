// import sprite from "../assets/svgSprite.svg"
import sprite from "../assets/BigShopSprite.svg"

const Svg = ({ name, color, size }) => {
  return (
    <svg
      style={{ position: "absolute" }}
      width={size}
      viewBox="0 0 1000 500"
      fill={color}
    >
      <use href={`${sprite}#${name}`} />
    </svg>
  )
}
export default Svg
