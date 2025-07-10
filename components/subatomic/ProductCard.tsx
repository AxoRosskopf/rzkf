import styles from './productCard.module.css'

const ProductCard = ({name, onClick}: {name: string, onClick: () => void}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <p>{name}</p>
      <span>$23 00</span>
    </div>
  )
}

export default ProductCard