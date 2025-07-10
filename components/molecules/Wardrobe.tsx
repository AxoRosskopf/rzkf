import HeaderWardrobe from '../atoms/HeaderWardrobe'
import styles from './wardrobe.module.css'

const Wardrobe = ({
  fullscreen,
  content,
  onClose,
  onClick
  }:{
  fullscreen: boolean,
  content: string | undefined, 
  onClose: () => void, 
  onClick: () => void
}) => {
  
  return (
    <>
      <div className={fullscreen ? 
        styles.fullCntainer : 
        styles.container}>
        <HeaderWardrobe 
         content={content}
         onClose={onClose}
         onClick={onClick} 
         />
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
              onClick={onClick} 
            />
        </div>
      </div>
    </>
  )
}

export default Wardrobe