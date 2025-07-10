"use client"
import {useState} from 'react'
import Model from './Model'
import Wardrobe from './molecules/Wardrobe'
import styles from './main.module.css'

type SelectActionProps = {
  content: string | undefined,
  openWardrobe: boolean,
  openModel: boolean
}

const Main = () => {
  const [actionWardrobe, setActionWardrobe] = useState<SelectActionProps>(
    {
      content: undefined, 
      openWardrobe: false, 
      openModel: true
    })
  
  const handlerActionModel2Wardrobe = (content: string | undefined) => {
    setActionWardrobe((prev) =>({...prev, openWardrobe: true, content: content}))
  }
  const handlerFullWindowWardrobe = () => {
    setActionWardrobe(prev =>({...prev, openModel: !prev.openModel}))
  }
  const handlerCloseWardrobe = () => {
    setActionWardrobe(prev =>{
      if(!prev.openModel){
        return {...prev, content: undefined, openWardrobe: false, openModel: true}
      }else{
        return {...prev, openWardrobe: false}
      } 
    })
  }

  return (
    <div className={styles.container}>
        <>{actionWardrobe.openModel ? 
            <Model onClick={handlerActionModel2Wardrobe}/>
            : null}
        </>
        <>{actionWardrobe.openWardrobe ? 
            <Wardrobe 
             fullscreen={!actionWardrobe.openModel}
             onClose={handlerCloseWardrobe} 
             content={actionWardrobe.content} 
             onClick={handlerFullWindowWardrobe} 
             /> 
             : 
             null}
        </>
    </div>
  )
}

export default Main