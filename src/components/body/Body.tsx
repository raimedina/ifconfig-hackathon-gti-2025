import { ReactNode } from 'react'
import './Body.css'

interface BodyProps {
    children?: ReactNode
}

function Body({children}: BodyProps){
    return(
        <div className="body-container">
            {children}
        </div>
    )
}

export default Body