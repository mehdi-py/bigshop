import sprite from "../assets/symbol-defs.svg"
// import sprite from "../assets/newSprite.svg"

const Svg = ({ name, color, size }) => {
  return (
    <svg width={size} viewBox="0 0 300 150" fill={color}>
      <use href={`${sprite}#${name}`} />
    </svg>
  )
}
export default Svg
