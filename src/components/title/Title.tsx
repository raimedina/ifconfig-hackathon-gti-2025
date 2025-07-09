import './Title.css'
import { FaSave } from "react-icons/fa";

function Title() {
    return (
        <div className="title-container">
            <span className="title-text">Compras - Licitações</span>
            <FaSave className="title-icon" />
        </div>
    )
}

export default Title