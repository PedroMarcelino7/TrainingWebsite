import { faBacon } from '@fortawesome/free-solid-svg-icons'
import './Footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <footer className="footer mt-4 text-bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Lorem Ipsum</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                            possimus aliquid omnis commodi. Dignissimos, quam obcaecati? Fugit
                            non ex repellendus?
                        </p>
                    </div>

                    <div className="col-md-4 mt-5 mt-md-0"></div>

                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#discover">Discover</a></li>
                            <li><a href="#summary">Summary</a></li>
                            <li><a href="#takeaways">Takeaways</a></li>
                            <li><a href="#subscribe">Subscribe</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}