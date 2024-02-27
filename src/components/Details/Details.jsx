import './Details.scss'

import Instructor from '../../images/instructor.jpg'

export default function Details() {
    return (
        <section className="details py-6 bg-light" id="discover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className='img-fluid rounded-5 mb-4' src={Instructor} alt="" />
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h2>Enhance Your Skills with Engaging Training Videos</h2>
                        <p>
                            Our extensive collection of training videos is designed to help
                            you enhance your skills and excel in your chosen field. Whether
                            you're looking to improve your technical expertise or develop
                            essential soft skills, our videos provide valuable insights and
                            practical knowledge.
                        </p>
                        <p>
                            With expert instructors and comprehensive content, you'll gain the
                            confidence and competence to tackle challenges and achieve
                            success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}