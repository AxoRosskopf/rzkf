import styles from './select.module.css'

const Select = ({content, onClick, products} : {content : string, onClick: () => void, products: Set<string>}) => {
  return (
    <div className={styles.container} onClick={onClick}>
    {products.size > 0 ? 
      <>
        <span className={styles.productBox}/>
        <span className={styles.productBox}>
          <span className={styles.count}>{products.size}</span>
          <span>{Array.from(products)[products.size - 1]}</span>
        </span>
      </>
      :
        <span>{content}</span>
    }
    </div>
  )
}

export default Select