import React, { Component } from 'react';
import LandingModal from './LandingModal';
import "./Landing.css"


class Landing extends Component {

    state = {
        modalStatus: false
    }

    modalOpen = () => {
        this.setState({
            modalStatus: true
        });
    }

    modalClose = () => {
        this.setState({
            modalStatus: false
        });
    }

    render() {

        return (
            <div>
                <div className="row" id="full-screen">
                    <h3 className="center-align">Code. Create. Network.</h3>

                    {/* open LandingModal here */}
                    <button className="learn-more modal-trigger" onClick={this.modalOpen}>Learn More</button>
                    <LandingModal closeModal={this.modalClose} selectModal={this.state.modalStatus} />
                </div>

            </div>

        );
    }
};

export default Landing;