import './Button.css'
import { Link } from 'react-router-dom';

function Button(){
    return(
        <div className="logo-button-container">
            <Link to="/relato" className="logo-button">
                Enviar Relato
            </Link>
        </div>
    )
}

export default Button