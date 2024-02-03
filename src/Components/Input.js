import React from 'react';
import '../Styles.css/Calci.css'

function Input({displayValue}) {
  return (
    <>
    < input className="calciinput mx-4" type="text" placeholder="Enter the number" value={displayValue}readOnly/>
    </>
  )
}

export default Input
