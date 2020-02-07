import React from 'react';
import Styles from './styles';

class ContactUs extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    onSubmit = () => {
        alert(this.state.name +"   "  +this.state.email +"   "+ this.state.subject +"    "+ this.state.message)
    }


    render() {
        const { name, email, subject, message } = this.state;
        console.log(this.state)
        return (
            <Styles>
                <div>
                    <div className="container contact-head">
                        <div className="row ">
                            <div className="container">
                                <div className="col-md-12 content-box mt-5">
                                    <div className="text">
                                        <h1 className="mb-1">Contact Us</h1>
                                        <p className="pl-2">We would love to know from You
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="contact1">
                        <div className=" container container-contact1">
                            <div className="contact1-pic js-tilt" data-tilt>
                                <img src={require("./images/img-01.png")} alt="IMG" />
                            </div>

                            <form className="contact1-form validate-form" onSubmit={() => this.onSubmit()}>
                                <div className="wrap-input1 validate-input" >
                                    <input 
                                    required
                                    className="input1" 
                                    type="text" 
                                    name="name" 
                                    value={name} 
                                    onChange={e => this.setState({name:e.target.value})}
                                    placeholder="Name" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" >
                                    <input 
                                    required
                                    className="input1" 
                                    type="email" 
                                    name="email" 
                                    value={email} 
                                    onChange={e => this.setState({email:e.target.value})}
                                    placeholder="Email" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" >
                                    <input 
                                    className="input1" 
                                    type="text" 
                                    name="subject" value={subject} 
                                    onChange={e => this.setState({subject:e.target.value})}
                                    placeholder="Subject" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" >
                                    <textarea 
                                    required
                                    className="input1" 
                                    name="message" 
                                    value={message} 
                                    onChange={e => this.setState({message:e.target.value})}
                                    placeholder="Message"></textarea>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="container-contact1-form-btn">
                                    <button className="contact1-form-btn">
                                        <span>
                                            Send Email
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <section className="keep-in-touch-with-us">
                        <div className="container text-center">
                            <div className="row pt-5 pb-3">
                                <div className="col-12">
                                    <h1>KEEP IN TOUCH WITH US</h1>
                                    <p className="sml-heading">WE WOULD LOVE TO KNOW FROM YOU</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="row pb-5 pt-3">
                                <div className="col-md-6">
                                    <div className="row mb-3">
                                        <div className="col-4">
                                            <i className="fa fa-facebook"></i>
                                            <h4>FACEBOOK</h4>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-twitter"></i>
                                            <h4>TWITTER</h4>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-google-plus"></i>
                                            <h4>GOOGLE +</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row mb-3">
                                        <div className="col-4">
                                            <i className="fa fa-youtube"></i>
                                            <h4>YOUTUBE</h4>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-pinterest"></i>
                                            <h4>PINTEREST</h4>
                                        </div>
                                        <div className="col-4">
                                            <i className="fa fa-instagram"></i>
                                            <h4>INSTAGRAM</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Styles>
        )
    }
}

export default ContactUs;