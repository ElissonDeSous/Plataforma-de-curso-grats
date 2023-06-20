import './home.css'
import Html from './image/html.png'
import Css from './image/css3.png'
import Js from './image/JS.png'
const home = () => {
  return (
  <section>
    <div className='banner'>
    <h1>Seja um Desenvolvedor Web</h1>

    <div className='banner'>
      <div className='Tecnologias'>
        <div className='tec'>
        <img src={Html} className = 'HtmlImage' />
        </div>
        <div className='tec2'>
        <img src={Css} className = 'CssImage' />
        </div>
        <div className='tec3'>
        <img src={Js} className = 'CssImage' />
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default home