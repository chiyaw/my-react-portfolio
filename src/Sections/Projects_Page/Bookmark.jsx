import React from 'react'
import Sidebar from '../Sidebar'

function Bookmark() {
    return (
        <div className="flex min-h-screen w-full flex-row bg-[linear-gradient(to_right,#eea2a2_0%,#bbc1bf_19%,#57c6e1_42%,#b49fda_79%,#7ac5d8_100%)]">

            <Sidebar />

            <div className="min-w-0 flex-1 text-black flex justify-center items-center  flex-col">
          <p>🎨 This corner of the website is still being painted.</p>
<p>Try not to touch the wet CSS.</p></div>



        </div>
    )
}

export default Bookmark