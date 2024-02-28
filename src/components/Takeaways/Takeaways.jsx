import './Takeaways.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faKey, faNewspaper, faUsers, faChartBar, faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function Takeaways() {
    return (
        <section className="takeaways my-5 bg-light" id="takeaways">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-md-8 offset-md-2">
                        <h2>Key Takeaways</h2>
                        <p className="lead">
                            Here are some of the takeaways and benefits you can expect from
                            our programs.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 rounded-0 border-0 p-3 bg-white">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faAtom} className='fa-3x text-primary bg-light rounded-circle p-3 my-4' />
                                <h5 className="card-title">Scientific Insights</h5>
                                <p className="card-text">
                                    Explore the latest scientific research and gain valuable
                                    insights into various subjects, from physics to biology.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 rounded-0 border-0 p-3 bg-white">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faKey} className='fa-3x text-primary bg-light rounded-circle p-3 my-4' />
                                <h5 className="card-title">Cybersecurity Awareness</h5>
                                <p className="card-text">
                                    Discover the importance of cybersecurity and learn how to
                                    protect yourself and your digital assets from cyber threats.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 rounded-0 border-0 p-3 bg-white">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faNewspaper} className='fa-3x text-primary bg-light rounded-circle p-3 my-4' />
                                <h5 className="card-title">Industry Updates</h5>
                                <p className="card-text">
                                    Stay informed about the latest news and updates in your
                                    industry, keeping you ahead of the curve and facilitating
                                    professional growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 rounded-0 border-0 p-3 bg-white">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faUsers} className='fa-3x text-primary bg-light rounded-circle p-3 my-4' />
                                <h5 className="card-title">Collaborative Networking</h5>
                                <p className="card-text">
                                    Connect with professionals from diverse backgrounds and
                                    industries to foster collaboration and expand your
                                    professional network.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 rounded-0 border-0 p-3 bg-white">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faHandshake} className='fa-3x text-primary bg-light rounded-circle p-3 my-4' />
                                <h5 className="card-title">Partnership Opportunities</h5>
                                <p className="card-text">
                                    Discover potential partnership opportunities with like-minded
                                    individuals and organizations, opening doors to new
                                    collaborations and ventures.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 rounded-0 border-0 p-3 bg-white">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faChartBar} className='fa-3x text-primary bg-light rounded-circle p-3 my-4' />
                                <h5 className="card-title">Data-driven Insights</h5>
                                <p className="card-text">
                                    Leverage data analytics to gain valuable insights and make
                                    informed decisions, unlocking new possibilities for growth and
                                    success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}