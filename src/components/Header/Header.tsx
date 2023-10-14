import { useState } from 'react';
import './Header.css'
import { ChevronDown } from 'lucide-react';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const openModal = (e: any) => {
        setIsOpen(true);
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <header className="header" onMouseLeave={closeModal}>
            <button className="logo" />

            <nav>

                <div className='nav-item'>
                    <Link to='/'>
                        <a>Página inicial</a>
                    </Link>
                </div>
                <div className='nav-item'
                    onMouseEnter={(e) => openModal(e)}
                >
                    <a>Graduação</a>
                    <ChevronDown color='#445285' />
                </div>
                <div className='nav-item'

                >
                    <a href='https://www.faeterj-rio.edu.br/central/'>Central de atendimento</a>
                    
                </div>

            </nav>
            {
                isOpen &&
                <Modal x={position.x} y={position.y}
                    page={[{
                        title: 'Ementário',
                        url: '/ementario'
                    }, {
                        title: 'TCC',
                        url: '/tcc'
                    }

                    ]} />
            }
        </header>
    );
}

export default Header;