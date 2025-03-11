import { useState } from "react"

function App() {
  const [colorsArray,setColorsArray] = useState("pink")

  return (
    //background color chai hamro array ma jun color haldincha tei color lai bana 
     <div className="absolute z-0 w-full h-screen flex justify-center items-center" style={{backgroundColor:colorsArray}}>  
      <MyFunc bgColor={colorsArray} />
      <div className="w-7xl h-13 absolute flex justify-center items-center gap-7 bottom-10 rounded-3xl py-3" style={{backgroundColor:"white"}}>
      
        <button onClick={()=>{setColorsArray("red")}} className="w-18 h-10 text-white rounded-2xl bg-red-500">Red</button>
        <button onClick={()=>{setColorsArray("orange")}} className="w-18 h-10 text-white  rounded-2xl bg-amber-500">Orange</button>
        <button onClick={()=>{setColorsArray("blue")}} className="w-18 h-10 text-white  rounded-2xl bg-blue-600">Blue</button>
        <button onClick={()=>{setColorsArray("yellow")}} className="w-18 h-10 text-white  rounded-2xl bg-yellow-300">Yellow</button>
        <button onClick={()=>{setColorsArray("green")}} className="w-18 h-10 text-white  rounded-2xl bg-green-400">Green</button>
        <button onClick={()=>{setColorsArray("purple")}} className="w-18 h-10 text-white  rounded-2xl bg-purple-300">purple</button>
        <button onClick={()=>{setColorsArray("black")}} className="w-18 h-10 text-white  rounded-2xl bg-black">black</button>
        <button onClick={()=>{setColorsArray("white")}} className="w-18 h-10 text-black text-2xl  rounded-2xl bg-white">white</button>
      </div>
    </div>  
  )
}
export default App

export function MyFunc({bgColor}){
  let textColor = "white";
  if(bgColor==="white"){
    textColor="black";
  }
  return(
    <div className="z-10 relative bg-transparent flex justify-center items-center flex-col">
      <p style={{ fontFamily: 'Big Shoulders Stencil, sans-serif', color: textColor}} className="text-9xl ">Bg - changer</p>
      <p style={{ fontFamily: 'Big Shoulders Stencil, sans-serif', color: textColor}} className="mt-9 text-2xl">you can click below buttons and change background color</p>
    </div>
  )
}
