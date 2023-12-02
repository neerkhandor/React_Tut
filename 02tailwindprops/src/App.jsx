import { useState,useCallback, useEffect ,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber]=useState(false);
  const [characters,setCharacters]=useState(false);
  const [password,setPassword]=useState("")

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLOMNOPQRSTUVWXYZabcdefghijklomnopqrstuvwxyz";
    if(number) str+="0123456789";
    if(characters) str+="~`!@#$%^&*()_+{}:<>?";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass);

  },[length,number,characters,setPassword])
// passwordGenerator();i dont have control to run the function it is in hands of react
  // setPassword bhi ek dependency hai and iske basis pe bhi ham chizo ko bhi change kar sakte hai
  const passwordRef=useRef(null);
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
})
  useEffect(()=>{
    passwordGenerator();
  },[length,number,characters,passwordGenerator])
  return (
    <>
    {/* <h1 className='bg-green-500 text-black rounded-xl p-4'>Tailwind Test</h1> */}
    <h1 className='text-4xl text-center'>Password Generator</h1>
    <input
    type="text"
    value={password}
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button onClick={copyPasswordToClipboard}>
      Copy
    </button>
    <div>
      <input 
      type="range"
      min={6}
      max={40}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label>Length : {length}</label>
    </div>
    <div>
      <input
      type="checkbox"
      defaultChecked={number}
      id="numberInput"
      onChange={()=>{
        setNumber((prev)=>!prev);
      }}
      />
      <label htmlFor='numberInput'>Number</label>
      <input
      type="checkbox"
      defaultChecked={characters}
      id="characterInput"
      onChange={()=>{
        setCharacters((prev)=>!prev);
      }}
      />
      <label htmlFor='characterInput'>Character</label>

    </div>
    </>
  )
}

export default App
