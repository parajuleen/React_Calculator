import React, { useState } from 'react';
import  "../Styles.css/Calci.css"
function Buttons({getValue}) {

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ]
    


  return (
    <>
    <div className=" buttonContainer">
     <div className="row mx-4">
     <div className="col">
  {buttons.map((btn)=>{
    return(
        <button className="numberButton" onClick={getValue}>{btn}</button> 
    )
  })}
 </div>
</div>
</div>

    </>
  )
}

export default Buttons
