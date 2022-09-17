import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { MdTask } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.logo}>
        <MdTask /> Ale<span>Tasks</span>
      </Link>
      <ul>
        <Link to="/create">Cadastrar</Link>
        <Link to="/">Listar</Link>
      </ul>
    </nav>
  )
}

export default Navbar
