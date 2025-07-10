import ProductCard from "../subatomic/ProductCard"
import styles from './productCollections.module.css'

const ProductCollections = ({onClick, content}: {onClick: (id: number, name: string) => void, content: string}) => {
  return (
    <div className={styles.container}>
        {Array.from({ length: 24 }, (_, i) => (
           <ProductCard key={i} name={`Producto ${i + 1}`} onClick={() => onClick(parseInt(content), `Producto ${i + 1}`)} />
        ))}
    </div>
  )
}

export default ProductCollections