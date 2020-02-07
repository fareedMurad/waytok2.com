import React from 'react';
import Styles from './styles';
import avatar1 from '../../assets/icons/avatar1.png';
import avatar2 from '../../assets/icons/avatar2.jpg';

const FeedbackCheck = (props) => {
    const { item } = props
    return (
        <div className="row pb-3 pt-3 feedbackperson">
            <div className="col-sm-2">
                <img src={avatar2} alt="" />
            </div>
            <div className="col-sm-8 pl-3 pt-0 overflow-hidden">
                <h2>{item.name}</h2>
                <p>{item.query}</p>
            </div>
            <div className="col-sm-2"></div>
        </div>
    )
}
class Feedback extends React.Component {

    state = {
        name: '',
        email: '',
        phone: '',
        query: '',

        recentFeedback: [
            {
                avatar: avatar1,
                name: 'Jhon Doe',
                query: 'I’m here to support you in case becuase you are doing awesome. But the purpose of give feedback is that your designer is creative minded whome was designed this website.'
            },
            {
                avatar: avatar2,
                name: 'Jhon Doe',
                query: 'I’m here to support you in case becuase you are doing awesome. But the purpose of give feedback is that your designer is creative minded whome was designed this website.'
            },
            {
                avatar: avatar1,
                name: 'Jhon Doe',
                query: 'I’m here to support you in case becuase you are doing awesome. But the purpose of give feedback is that your designer is creative minded whome was designed this website.'
            },
            {
                avatar: avatar2,
                name: 'Jhon Doe',
                query: 'I’m here to support you in case becuase you are doing awesome. But the purpose of give feedback is that your designer is creative minded whome was designed this website.'
            },
        ]
    }
    onSubmit = (e) => {
        e.preventDefault();
        alert(this.state.name + "   " + this.state.email + "   " + this.state.phone + "    " + this.state.query);
        const { name, email, phone, query } = this.state;

        const newData = {
            name,
            email,
            phone,
            query
        }

        this.setState(state => {
            const newArray = [newData, ...state.recentFeedback];
            console.log([...state.recentFeedback, newData])
            // return{
            //     newArray,
            // }
            this.setState({ recentFeedback: newArray })
        })

        // Clear Fields
        this.setState({
            name: '',
            email: '',
            phone: '',
            query: ''
        })
    }


    render() {
        const { name, email, phone, query } = this.state;
        return (
            <Styles>
                <div>
                    <div className="container contact-head">
                        <div className="row ">
                            <div className="container">
                                <div className="col-md-12 content-box mt-5">
                                    <div className="text">
                                        <h1 className="mb-1">Feedback</h1>
                                        <p className="pl-2">We would love to get Feedback from You
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="contact1">
                        <div className=" container container-contact1">
                            <div className="contact1-pic js-tilt" data-tilt style={{ opacity: 0.6 }}>
                                <img src={require("../../assets/icons/feedback.png")} alt="IMG" />
                            </div>

                            <form className="contact1-form validate-form" onSubmit={e => this.onSubmit(e)}>
                                <div className="wrap-input1 validate-input" >
                                    <input
                                        required
                                        className="input1"
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={e => this.setState({ name: e.target.value })}
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
                                        onChange={e => this.setState({ email: e.target.value })}
                                        placeholder="Email" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" >
                                    <input
                                        className="input1"
                                        type="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={e => this.setState({ phone: e.target.value })}
                                        placeholder="Phone" />
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="wrap-input1 validate-input" >
                                    <textarea
                                        required
                                        className="input1"
                                        name="query"
                                        value={query}
                                        onChange={e => this.setState({ query: e.target.value })}
                                        placeholder="Query"></textarea>
                                    <span className="shadow-input1"></span>
                                </div>

                                <div className="container-contact1-form-btn">
                                    <button className="contact1-form-btn">
                                        <span>
                                            Send Feedback
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <section className="recent-feedback">
                        <div className="container">
                            <div className="row pt-5 pb-3">
                                <div className="col-12">
                                    <h1>Recent Feedback</h1>
                                    <p className="sml-heading">"Dont Hasitate during give feedback to someone"</p>
                                    <hr />
                                </div>
                            </div>
                            {this.state.recentFeedback.map(item => <FeedbackCheck item={item} />)}
                            <button className="btn btn-success  mt-3 mb-5">Show More</button>
                        </div>
                    </section>
                </div>
            </Styles>
        )
    }
}

export default Feedback;