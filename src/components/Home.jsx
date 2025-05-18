import React, { useState } from 'react'

function Home() {
  const [title, setTitle] = useState("")
  
  return (  
    <div>
        <input 
            type="text" 
            value={title} 
            placeholder='Enter paste title' 
            onChange={(e) => setTitle(e.target.value)}
        />
    </div>
  )
}

export default Home