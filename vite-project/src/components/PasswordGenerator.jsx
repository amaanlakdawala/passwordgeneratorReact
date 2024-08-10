import React from 'react'
import { useCallback, useState , useEffect, useRef } from 'react'

function PasswordGenerator() {
    const [password, setPassword] = useState('')
    const [length, setLength] = useState(8)
    const [numbers , setNumbers] = useState(false)
    const [characters, setCharacters] = useState(false)


    const passwordRef = useRef(null);
    const copypassword = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    },[password])

    const passwordGenerate =useCallback(()=>{ 
        let pass =''
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numbers) {
            str +='0123456789'
        }
        if (characters){
            str +='!@#$%^&*()'
        }
        for (let i = 0; i<length;i++){
            const charPosition = Math.floor(Math.random() * str.length);
            pass += str.charAt(charPosition)   
            console.log(pass)  
                  
        }
        setPassword(pass)
        console.log(password)       
    },[length,numbers,characters,setPassword])

    useEffect(()=>{passwordGenerate()},[length,numbers,characters])

    return(
        <>
        <div>
        <div>
            <label>Password:</label>
            <input type="text" value={password} ref={passwordRef} />
            </div>

            <div>
            <label>Number:</label>
            <input type="checkbox"  value={numbers} onChange={()=>{
                setNumbers(!numbers)
            }} />
            </div>

            <div>
            <label>Characters:</label>
            <input type="checkbox"  value={characters} onChange={()=>{
                setCharacters(!characters)
                
            }} />
            </div>


            <div>
            <label>Length:</label>
            <input type="range" min={6} max={16} value={length} onChange={(e) =>{setLength(e.target.value)}} />
            </div>
            <button onClick={copypassword}>Copy</button>
        </div>
        
        </>
    )
    
  
}

export default PasswordGenerator