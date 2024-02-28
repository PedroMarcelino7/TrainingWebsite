import './Details2.scss'

import Audience from '../../images/audience.jpg'

export default function Details() {
    return (
        <section className="details py-6 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid rounded-5 mb-4" src={Audience} />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h2>Elevate Your Learning Journey with Expert Seminars</h2>
                        <p>
                            Join our expert-led seminars and unlock new possibilities in your
                            personal and professional development. Our seminars cover a
                            diverse range of topics, from leadership and innovation to
                            personal growth and productivity.
                        </p>
                        <p>
                            Immerse yourself in engaging discussions, interactive workshops,
                            and valuable networking opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}