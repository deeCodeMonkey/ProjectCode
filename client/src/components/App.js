import 'materialize-css/dist/css/materialize.min.css';
import '../index.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions';
import "./App.css";


import Header from './Header';
import Landing from './Landing';
import Main from './Main';
import ProfileLayout from './profile/ProfileLayout';

class App extends Component {

    async componentDidMount() {
        await this.props.fetchUser()
        if (this.props.auth._id){
            this.props.fetchUserProjects(this.props.auth._id)
        }
    }

    render() {

        return (
            <div>
                    <BrowserRouter>
                    <div>
                            <Header />
                            {
                                (this.props.auth)
                                    ? <Route exact path="/" component={Main} /> 
                                    : <Route exact path="/" component={Landing} /> 
                            }
                            {
                                (this.props.auth)
                                    ? <Route exact path="/main" component={Main} />
                                    : <Route exact path="/main" component={Landing} />
                            }
                            
                            <Route exact path="/profile" component={ProfileLayout} />
                        </div>
                    </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, actions)(App);



