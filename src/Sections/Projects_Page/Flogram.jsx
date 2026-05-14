import React from 'react'
import Sidebar from '../Sidebar'

function Flogram() {
  return (
      <div className="flex min-h-screen w-full flex-row">
  
  
  <Sidebar/>
  
          <div className="min-w-0 flex-1 text-black flex justify-center items-center flex-col">
            <p>🎨 This corner of the website is still being painted.</p>
  <p>Try not to touch the wet CSS.</p></div>
  
  
      </div>
    );
}

export default Flogram