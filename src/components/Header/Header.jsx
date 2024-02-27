import Carousel from './Carousel'
import './Header.scss'

export default function Header() {
    return (
        <header className="header pt-7 pb-5 h-100">
            <div className="container">
                <div className="row mb-5 text-center">
                    <div className="col-12 text-container">
                        <h1 className="display-2 text-white mt-3">
                            Explore Our Training and Seminar Videos
                        </h1>

                        <p className="lead text-white w-75 m-auto mb-4">
                            Whether you're a beginner or an experienced professional, our
                            carefully curated content will empower you to enhance your skills
                            and expand your knowledge
                        </p>

                        <div className="d-flex justify-content-center gap-4">
                            <a href="#" className="btn btn-primary text-uppercase">Register</a>
                            <a href="#" className="btn btn-outline-light text-uppercase">Discover</a>
                        </div>
                    </div>
                </div>

                <Carousel />
            </div>
        </header>
    )
}