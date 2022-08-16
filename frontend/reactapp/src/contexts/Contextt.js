import {React,createContext, useState} from 'react'

export const Sliders=createContext()

const Contextt = ({children}) => {
    const [sliders,setSliders]=useState([])
  return (
    <Sliders.Provider value={{sliders,setSliders}}>
        {children}
    </Sliders.Provider>
  )
}

export default Contextt