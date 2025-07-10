import './Title.css'
import { FaSave } from "react-icons/fa";

interface TitleProps {
    text: string
}

function Title(props: TitleProps) {
    return (
        <div className="title-container"> 
            <span className="title-text">{ props.text }</span>
            <FaSave className="title-icon" />
        </div>
    )
}

export default Title