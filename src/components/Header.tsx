import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import DropDown from './DropDown'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      
      <nav>
        <Link className='nav-link' to="/">Home</Link>
        <DropDown text='Coleção'>
          <Link to="#opcao1">Já lidos</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="#opcao3">Quero ler</Link>
        </DropDown>
        <Link className='nav-link' to="/perfil">Perfil</Link>
      </nav>
    </div>
  )
}