import styles from './select.module.css'

const Select = ({content, onClick} : {content : string, onClick: () => void}) => {
  return (
    <div className={styles.container} onClick={onClick}>{content}</div>
  )
}

export default Select