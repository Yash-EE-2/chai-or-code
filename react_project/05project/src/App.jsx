import { useState, useCallback } from "react"


function App() {
  const[length,setLength] = useState(8)
  const[numAllowed,setNum] = useState(false)
  const[charAllowed,setChar] = useState(false)
  const[Password,setPassword] = useState("")

  const passwordGenerator = useCallback( () =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*()_+~{}[]<>?/\|:;'`"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() *str.length + 1)
      pass += str.charAt(char-1)
    }
    setPassword(pass)
  }, [length,numAllowed,charAllowed,setPassword])

  // passwordGenerator() 

  return (
    <>
    <div className="w-full pb-4 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h1 className='p-4 text-center text-white'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={Password}
        className="outline-none w-full py-1 px-3"
        placeholder="password"
        readOnly
      />
      <button className="flex shadow p-1 bg-gray-400">Copy</button>
      </div>

      <div>
        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>length:{length} </label>
        </div>
        <div>
          <input
            type= "checkbox"
            defaultChecked ={numAllowed}
            id="numberInput"
            onChange={()=>{
                setNum((prev) => !(prev))
            }}
         />
         <label>Numbers</label>
        </div>
        <div>
          <input
            type= "checkbox"
            defaultChecked ={charAllowed}
            id="charInput"
            onChange={()=>{
                setChar((prev) => !(prev))
            }}
         />
         <label>Characters</label>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
