import { Routes, Route } from 'react-router-dom';

import { LoginPage } from '../auth/page/LoginPage';
import { HeroesRoutes } from '../hereos';


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login'  element={ <LoginPage/>}/>
        <Route path='/*'  element={ <HeroesRoutes/>}/>   
      </Routes>
    
    </>
  )
}
