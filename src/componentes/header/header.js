import { useState } from 'react'
import {Link} from 'react-router-dom'
import './topo.css'


const Header = () => {
  const [menu,setMenu] = useState(false)

  const {} = useState(false)

  const togleMode = () => {
    setMenu(!menu)
  }
  return (
    <header>
    <div  className= {menu ? 'icon iconActive': 'icon' } onClick = {togleMode}>
      <div className='hamburguer hamburguerIcon'>

      </div>
    </div>
    <div className={menu ? 'menu menuOpen': 'menu menuClose'}>
      <div className='list'>
        <ul>
            <li><Link  to='/' >Home</Link></li>
            <li><Link  to='/Cursos' >Cursos</Link></li>
            <li><Link  to='/programação' >Programação</Link></li>
            <li><Link  to='/podcast' >Podcast</Link></li>
        </ul>

        
        </div>
       
        </div>

        <div className='Formularios'>
          <form>
        <input className='Entrar' type='submit' value = 'Entrar' />
        <input className='Cadastrar' type='submit' value = 'Cadastrar' />
        </form>
        </div>

    </header>
  )
}

export default Header