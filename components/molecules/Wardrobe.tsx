import HeaderWardrobe from '../atoms/HeaderWardrobe'
import ProductCollections from '../atoms/ProductCollections'
import styles from './wardrobe.module.css'

const Wardrobe = ({
  fullscreen,
  content,
  onClose,
  onClickHeader,
  onClickProduct
  }:{
  fullscreen: boolean,
  content: string, 
  onClose: () => void, 
  onClickHeader: () => void
  onClickProduct: (id: number, name: string) => void
}) => {
  
  return (
    <>
      <div className={fullscreen ? 
        styles.fullContainer : 
        styles.container}>
        <HeaderWardrobe 
         content={content}
         onClose={onClose}
         onClick={onClickHeader} 
         />
        <ProductCollections onClick={onClickProduct} content={content} />
      </div>
      <div className={styles.responsiveContainer} onClick={onClose}>
        <div 
          className={styles.responsiveBox}
          onClick={(e) =>e.stopPropagation()}
        >
            <HeaderWardrobe 
              responsive 
              content={content} 
              onClose={onClose} 
            />
            <ProductCollections onClick={onClickProduct} content={content} />
        </div>
      </div>
    </>
  )
}

export default Wardrobe