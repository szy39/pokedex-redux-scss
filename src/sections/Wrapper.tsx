import React from 'react'


const Wrapper = (Component:React.FC) => () =>{
    return (
            <div className='content'>
               <div><Component/></div>
            </div>
          
    )
}



export default Wrapper