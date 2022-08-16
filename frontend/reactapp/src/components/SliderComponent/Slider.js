import React,{useContext, useEffect,useState} from 'react';
import axios from 'axios';
import { Sliders } from '../../contexts/Contextt';
import Home from '../../pages/Home/Home';


const url='http://localhost:3001/home';



const Slider = () => {

  const[sliders,setSliders]=useContext(Sliders)
    
    
    useEffect(()=>{
        const getSliders=async()=>{
            const data =await axios.get(url).then(res=>{
                setSliders(res.data.slider)
                console.log("hello");
               
            })
        }
        getSliders();
    },[])
  return (
    <div>
        {
          sliders.map(prod=>(
            <Home prod={prod} key={prod.id} />
          ))
        }
    </div>
  )
}

export default Slider