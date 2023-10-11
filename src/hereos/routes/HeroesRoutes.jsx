import { Routes, Route, Navigate} from 'react-router-dom';

import { Navbar } from '../../ui/components/Navbar';
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../';

export const HeroesRoutes = () => {
  return (
    <>
       <Navbar/>
       <div className='container'>
            <Routes>
                    <Route path='marvel'  element={ <MarvelPage/>}/>
                    <Route path='dc'  element={ <DcPage/>}/>
                    <Route path='search'  element={ <SearchPage/>}/>
                    <Route path='hero'  element={ <HeroPage/>}/>

                    <Route path='/'  element={ <Navigate to="/marvel"/>}/>
            </Routes>
       </div>
    </>
  )
}
