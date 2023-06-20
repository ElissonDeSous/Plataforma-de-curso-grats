import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './paginas/home/home'
import Cursos from './paginas/Cursos/cursos'
import PodCast from './paginas/podcast/podcast'


import Topo from './componentes/header/header'
import Rodape from './componentes/footer/footer'
import Erro from './componentes/erro/erro'

function Router ()
{
  return(
    <div>
   <BrowserRouter>
   <Topo/>
    <Routes>
       <Route path = '/' element = {<Home/>}  />
       <Route path = '/cursos' element = {<Cursos/>}  />
       <Route path = '/podcast' element = {<PodCast/>}  />
       <Route path = '*' element = {<Erro/>}  />
    </Routes>

   </BrowserRouter>
   <Rodape/>
    </div>
  )
}
export default Router;