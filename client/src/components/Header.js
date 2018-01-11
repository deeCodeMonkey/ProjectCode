import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import linkedinButton from '../assets/linkedin-button.png';
import "./Header.css";


class Header extends Component {

    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a id="login-button" href="/auth/linkedin"><img src={linkedinButton} className="log-in" alt="linkedin" /></a></li>;
            default:
                return <li><a className="logout-button right btn" href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        
        return (
            <nav>
                <div className="nav-wrapper">
                    {/* <Link
                        to={this.props.auth ? '/main' : '/'}
                        className="brand-logo center"
                    >C&#333;d-Op
                    </Link> */}
                    <h1 className="brand-logo center">C&#333;d-Op</h1>
                    <Link
                        to={this.props.auth ? '/main' : '/'}
                        className="home-button left btn"
                    >Home
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
