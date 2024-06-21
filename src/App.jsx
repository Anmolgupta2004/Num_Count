import './App.css'
import React,{useState} from 'react'

function App() {
  const [num,setNum]=useState(100)
  const [history,setHistory]=useState([])
  const [undonehistory,setUndonehistory]=useState([])
  const maxNumber=150

 
const handleClickDecrement=()=>{
  if(num>0){
    setNum(prev=>{
      setHistory([...history,num])
    setUndonehistory([])
    const newNumber=prev-1;
      return newNumber
    })
  }
}
const handleClickIncrement=()=>{
  if(num<maxNumber){
setNum(prev=>{
  setHistory([...history,num])
  setUndonehistory([])
  const newNumber=prev+1;
  return newNumber
})
  }
}
const handleUndo=()=>{
  if(history.length>0){
    const lastNumber=history[history.length-1]
    setNum(lastNumber)
    setHistory(history.slice(0,-1))
    console.log(setNum);
    // setUndonehistory(...undonehistory, num)
    setUndonehistory(undoneHistory => [...undoneHistory, num]);
    console.log(history.length);
  }
}
const handleRedo=()=>{
if(undonehistory.length>0){
  const nextnumber=undonehistory[undonehistory.length-1]
  setNum(nextnumber)
  setUndonehistory(undonehistory.slice(0,-1))
  console.log(setNum);
  setHistory(history=> [...history,num]);
  console.log(history.length)
}
}

  return (
    <>
    <div className='app'>
     <h1>Number Counter</h1>  
      <p className='message'>Click on Add Button to add 1 and Subtract button to subtract 1</p>
      <p>Number will only be between 0 to 150 </p>
      <h1> <span>{num}</span></h1>
      <div className='counter'>
       <button onClick={handleClickIncrement} className=' add btn btn-success'>Add</button>
        <button onClick={handleClickDecrement} className=' add btn btn-success'>Subtract</button>
      </div>
      <div className='progress-bar'>
        <div className='progress'>
          <input type='range' min={0} max={150} value={num}
           className='input'/>
        </div>
        <div className='undo-redo'>
          <button onClick={handleUndo} disabled={history.length===0} className='btn btn-success add'>Undo</button>
          <button onClick={handleRedo} disabled={undonehistory.length===0} className='btn btn-success add'>Redo</button>
           </div>
      </div>
      <div className='note'>NOTE :- Undo  reverse the last action performed, while Redo repeats the last action that was undone </div>
     </div>
      
    </>
  )
}

export default App
