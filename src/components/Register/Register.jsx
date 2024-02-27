import './Register.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons'

export default function Register() {
    return (
        <section className="register bg-primary py-6 overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Unlock Your Potential with Engaging Content</h2>
                        <p>
                            Our wide range of training and seminar videos are designed to
                            empower you with valuable knowledge and skills.
                        </p>

                        <ul className="list-unstyled vstack gap-3">
                            <li>
                                <FontAwesomeIcon icon={faSquare} />
                                <strong className='ms-2'>Gain Expertise:</strong> Our videos provide in-depth
                                insights and practical tips to enhance your expertise in various
                                domains.
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faSquare} />
                                <strong className='ms-2'>Stay Updated:</strong> Stay up-to-date with the latest
                                industry trends and advancements through our informative and
                                up-to-date videos.
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faSquare} />
                                <strong className='ms-2'>Expand Your Network:</strong> Connect with like-minded
                                individuals and industry experts, fostering new connections and
                                opportunities.
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6">
                        <form>
                            <div className="my-4">
                                <input type="text" className="form-control from-control-lg rounded-0 border-0" placeholder='Enter Name' />
                            </div>

                            <div className="my-4">
                                <input type="email" className="form-control from-control-lg rounded-0 border-0" placeholder='Enter E-mail' />
                            </div>

                            <div className="my-4">
                                <input type="text" className="form-control from-control-lg rounded-0 border-0" placeholder='Enter Phone' />
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label htmlFor="terms" className="form-check-label">
                                    I agree to the terms and conditions
                                </label>
                            </div>

                            <div className="d-grid mt-4">
                                <button className="btn btn-outline-dark">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}