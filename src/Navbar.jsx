import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from './assets/logo_dizalaga.png';

function Navbar(){
    return(
        <>
        <nav className='navbar-container'>
            <div className="navbar-logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
            <ul className="navbar">
                <li className="nav-item"><Link className="nav-link" to="/">Início</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/relato">Relatos</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/paineis">Paineis</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    </>
    );

}

export default Navbar