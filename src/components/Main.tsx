import React, { useState } from "react"


const Main: React.FC = () => {
    const [originalLink, setOriginalLink] = useState("")

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOriginalLink(e.target.value)
        
        console.log(e.target.value);      
        
    }
  return (
    <div>
      <header>
        <h1>GitFlicks 👌</h1>
        <p>A simple, free-to-use URL shortener.</p>
      </header>
      <form>
        <label>Paste a URL to shorten</label>
        <br />
        <input type="text" value={originalLink} onChange={handleInputChange}/>
        <br />        
      <button type="submit" >Shorten</button>
      </form>
    </div>
  )
}

export default Main
