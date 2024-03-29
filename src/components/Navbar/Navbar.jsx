import './Navbar.scss'

import Logo from '../../images/logo.png'
import { useEffect } from 'react';

export default function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY !== 0) {
                navbar.classList.add('bg-dark');
            } else {
                navbar.classList.remove('bg-dark');
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container">
                <a href="#" className="navbar-brand">
                    <img src={Logo} alt="Logo" width={150} />
                </a>
                <button className="navbar-toggler" type='button'
                    data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Home</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Discover</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Summary</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Takeaways</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link" aria-current='page'>Subscribe</a>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>
    )
}