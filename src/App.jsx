import Sidebar from './Sections/Sidebar'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'
import { Route, Routes } from 'react-router-dom'
import Lita from './Sections/Projects_Page/Lita'
import Bookmark from './Sections/Projects_Page/Bookmark'
import Detail from './Sections/Detail'

function App() {

  return (
   <Routes>
    <Route path='/' element={
       <div className="flex min-h-screen w-full bg-white">
      <Sidebar />
      <main className="min-w-0 flex-1">
        <Hero />
        <Projects/>
        <Detail/>
      </main>
    </div>
    }/>
    <Route path='/lita' element={<Lita/>}/>
    <Route path='/bookmark-app' element={<Bookmark/>}/>
   </Routes>
  )
}

export default App
