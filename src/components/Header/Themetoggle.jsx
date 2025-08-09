import React,{useEffect, useState} from 'react'

import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
const Themetoggle = () => {
    const [currentTheme,setcurrentTheme]=useState(false);
   

  return (
   <button className="cursor-pointer  text-sm m-0 p-0"  onClick={()=>setcurrentTheme(!currentTheme)}
    
   >

    {currentTheme?<Brightness2OutlinedIcon/>  :<LightModeOutlinedIcon/> }
     
    
   </button>
  )
}

export default Themetoggle