import './home.css'
import Html from './image/html.png'
import Css from './image/css3.png'
import Js from './image/JS.png'
import Php from './image/php.png'
import Node from './image/node.jfif'
import Mysql from './image/Mysql.jfif'
const home = () => {
  return (
  <section>
  

    <div className='banner'>
    <h1>Tecnologia Front end</h1>
      <div className='Tecnologias'>
      <div className='frontend'> 
        <div className='tec'>
        <img src={Html} className = 'HtmlImage' />
        </div>
        
          <p>HTML (Hyper text markeup language)</p>
          <p>Introdução a HTML</p>
          <p>Criação de tebelas</p>
          <p>Criação de formulario</p>
          <p>Esqueleto do Site</p>
          
        
       </div> 
       <div className='frontend'>
        <div className='tec2'>
        <img src={Css} className = 'CssImage' />
        </div>
        <p>CSS (Cascading Style Sheets)</p>
          <p>Introdução a CSS</p>
          <p>Animaçoes</p>
          <p>Site Responsivo </p>
          <p>Flexbox e Grid Layout</p>
    
        </div>
        <div className='frontend'>
        <div className='tec3'>
        <img src={Js} className = 'JSImage' />
        </div>
        <p>JS (Java Script)</p>
          <p>Logica de Programação</p>
          <p>DOM</p>
          <p>Java Script Assincrono</p>
          <p>React JS</p>
        </div>
      </div>
    </div>


    <div className='banner'>
    <h1>Tecnologia Back End</h1>
      <div className='Tecnologias'>
      <div className='BackEnd'> 
        <div className='tec4'>
        <img src={Php} className = 'PhpImage' />
        </div>
        
          <p>PHP (PHP Hypertext Preprocessor
)</p>
          <p>Introdução a php</p>
          <p>fundamentos back end</p>
          <p>Interação com front end</p>
          <p>Programação orientada a objeto</p>
          
        
       </div> 
       <div className='BackEnd'>
        <div className='tec5'>
        <img src={Node} className = 'NodeImage' />
        </div>
        <p>NodeJS (Java Script no back end)</p>
          <p>Requisições HTTP</p>
          <p>Context API</p>
          <p>Integração com front end</p>
          <p>Express para criar rotas</p>
    
        </div>
        <div className='BackEnd'>
        <div className='tec6'>
        <img src={Mysql} className = 'MysqlImage' />
        </div>
        <p>Mysql</p>
          <p>Banco de dados</p>
          <p>Criar tabelas de banco de dados</p>
          <p>Inserir dados no banco</p>
          <p>Buscar dados no banco</p>
        </div>
      </div>
    </div>
    
  </section>
  )
}

export default home