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

  const [productStack, setProductStack] = useState<Map<number,Set<string>>>(
    new Map().set(0, new Set()).set(1, new Set()).set(2, new Set())
  )

  const [productView, setProductView] = useState<boolean>(false); // see all products in the stack

  console.log('productStack', productStack) // debugging

const handlerActionModel2Wardrobe = (content: string | undefined) => {
  setActionWardrobe((prev) => {
    if (
      prev.openWardrobe &&
      prev.content === content &&
      (productStack.get(Number(content))?.size ?? 0) > 0
    ) {
      setProductView(true); // active view of products of the stack
    }
    return { ...prev, openWardrobe: true, content };
  });
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

  const handlerAddProduct = (id: number, name: string) => {
    setProductStack(prev => {
      const newStack = new Map(prev);
      newStack.get(id)?.add(name);
      return newStack;
    });
  }

  return (
    <div className={styles.container}>
      <>{productView ?
        <Wardrobe 
          fullscreen={!actionWardrobe.openModel}
          onClose={handlerCloseWardrobe} 
          content={actionWardrobe.content ? actionWardrobe.content : ''} 
          onClickHeader={handlerFullWindowWardrobe} 
          onClickProduct={handlerAddProduct}
        /> 
      :
      <>
        <>{actionWardrobe.openModel ? 
            <Model
              onClick={handlerActionModel2Wardrobe}
              stack={productStack}
            />
            : null}
        </>
        <>{actionWardrobe.openWardrobe ? 
            <Wardrobe 
             fullscreen={!actionWardrobe.openModel}
             onClose={handlerCloseWardrobe} 
             content={actionWardrobe.content ? actionWardrobe.content : ''} 
             onClickHeader={handlerFullWindowWardrobe} 
             onClickProduct={handlerAddProduct}
             /> 
             : 
             null}
        </>
      </>
      }
      </>
    </div>
  )
}

export default Main