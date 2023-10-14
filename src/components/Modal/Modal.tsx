import { Link } from "react-router-dom"
import './Modal.css'

interface ModalProps {
    y: number
    x: number
  
    page: {
        title: string
        url: string
    }[]

}

function Modal({ y, x, page,  }: ModalProps) {
    return (
        <div
            style={{ position: 'absolute', top: y, left: x }}
            className="div-modal"
           >
            {page.map(page => {
                return (
                    <Link
                        to={page.url}
                        key={page.title}
                        className="page-modal">
                        <p>{page.title}</p>
                    </Link>
                )
            })}

        </div>
    );
}

export default Modal;