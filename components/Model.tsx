import styles from './model.module.css'
import Select from './molecules/Select'

const Model = ({onClick}:{onClick: (content: string | undefined) => void}) => {
  return (
    <div className={styles.container}>
        <Select content="Option 1" onClick={() => onClick("Option 1")} />
        <Select content="Option 2" onClick={() => onClick("Option 2")} />
        <Select content="Option 3" onClick={() => onClick("Option 3")} />
    </div>
  )
}

export default Model