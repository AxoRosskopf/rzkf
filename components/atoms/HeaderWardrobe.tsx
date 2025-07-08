import style from './headerWardrobe.module.css'
import { VscClose, VscWindow } from "react-icons/vsc";

const ButtonAux = ({onClick, children}: {onClick: () => void, children: React.ReactNode}) => {
  return (
    <button className={style.button} onClick={onClick}>
        {children}
    </button>
  )
}


const HeaderWardrobe = ({content,onClose,onClick}:{content: string | undefined, onClose: () => void, onClick: () => void}) => {
  return (
    <div className={style.container}>
      <h2>{content}</h2>
      <div className={style.boxButtons}>
        <ButtonAux onClick={onClick}>
          <VscWindow size={20} />
        </ButtonAux>
        <ButtonAux onClick={onClose}>
          <VscClose size={20} />
        </ButtonAux>
      </div>
    </div>
  )
}

export default HeaderWardrobe