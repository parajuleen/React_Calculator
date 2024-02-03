import { useState } from 'react';
import Buttons from './Components/Buttons';
import Input from './Components/Input';

function App() {

const[value,setValue]=useState("");

const getValues =(e)=>{
  let x= e.target.firstChild.data;
  if(x=== 'C'){
    setValue('');
  }
  else if(x === '='){
  const result= eval(value);
  setValue(result);
  }
  else{
    setValue((value) => value+ x);
  }
}
  return (
    <>
    <div className="calculator ">
    <Input displayValue={value}/>
    <Buttons getValue={getValues}/>
    </div>
    </>
  );
}

export default App;
