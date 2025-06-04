
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home/Home';
import { About } from '../../pages/about/About';
import { Help } from '../../pages/help/Help';
export const Body = () => {
  return (
    <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/help' element={<Help/>}/>
    </Routes>
  )
}
