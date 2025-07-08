import HeaderWardrobe from '../atoms/HeaderWardrobe'
import styles from './wardrobe.module.css'

const Wardrobe = ({fullscreen ,content,onClose, onClick}:{fullscreen: boolean, content: string | undefined, onClose: () => void, onClick: () => void}) => {
  return (
    <div className={fullscreen ? styles.fullContainer : styles.container}>
        <HeaderWardrobe content={content} onClose={onClose} onClick={onClick} />
    </div>
  )
}

export default Wardrobe