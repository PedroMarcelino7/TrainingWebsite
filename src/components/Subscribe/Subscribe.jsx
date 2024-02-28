import './Subscribe.scss'

export default function Subscribe() {
    return (
        <section className="subscribe my-5" id="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h2>Subscribe to our email list and get updates from the experts</h2>

                        <form>
                            <div className="my-4">
                                <input type="email" className="form-control form-control-lg" placeholder='Enter email' />
                                <h5 className="form-text">
                                    We will never share your email address
                                </h5>
                            </div>

                            <div className="d-grid">
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}