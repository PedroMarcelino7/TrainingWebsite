import './Carousel.scss'

import Slide1 from '../../images/header-slide-1.jpg'
import Slide2 from '../../images/header-slide-2.jpg'
import Slide3 from '../../images/header-slide-3.jpg'

export default function Carousel() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="carousel slide" id="slider"
                    data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button className="active" type="button"
                            data-bs-slide-to="0" data-bs-target='#slider'
                            aria-current='true' aria-label='Slide 1'>
                        </button>

                        <button type="button"
                            data-bs-slide-to="1" data-bs-target='#slider'
                            aria-label='Slide 2'>
                        </button>

                        <button type="button"
                            data-bs-slide-to="2" data-bs-target='#slider'
                            aria-label='Slide 3'>
                        </button>
                    </div>

                    <div className="carousel-inner rounded-5">
                        <div className="carousel-item active">
                            <img className='d-block w-100 rounded-5' src={Slide1} alt="Slide 1" />
                        </div>

                        <div className="carousel-item">
                            <img className='d-block w-100 rounded-5' src={Slide2} alt="Slide 2" />
                        </div>

                        <div className="carousel-item">
                            <img className='d-block w-100 rounded-5' src={Slide3} alt="Slide 3" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type='button'
                        data-bs-slide='prev' data-bs-target='#slider'>
                            <span className="carousel-control-prev-icon"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                    
                    <button className="carousel-control-next" type='button'
                        data-bs-slide='next' data-bs-target='#slider'>
                            <span className="carousel-control-next-icon"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                </div>
            </div>
        </div>
    )
}