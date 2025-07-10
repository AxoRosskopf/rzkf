import styles from './model.module.css'
import Select from './molecules/Select'

const Model = ({onClick, stack}:{onClick: (content: string | undefined) => void, stack: Map<number, Set<string>>}) => {
  return (
    <div className={styles.container}>
      {Array.from(stack.entries()).map(([id, products]) => (
        <Select 
          key={id} 
          content={`${id}`} 
          onClick={() => onClick(`${id}`)} 
          products={products}
        />
      ))}
    </div>
  )
}

export default Model