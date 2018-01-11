import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProjectList from './projects/ProjectList';
import linkedin from '../../assets/icon-linkedin.png';
import github from '../../assets/icon-github.png';
import stackOverflow from '../../assets/icon-stack.png';
import portfolio from '../../assets/icon-portfolio.png';


class ProfileInfo extends Component {

    async componentDidMount() {
        await this.props.fetchUser()
        if (this.props.userData._id) {
            this.props.fetchUserProjects(this.props.userData._id)
        }
    }


    render() {

        return (
            <div>
                <div>
                    <div>
                        <div><h5>{this.props.formValues.fullName}</h5></div>
                        <div>{this.props.formValues.headline}</div>
                    </div>
                    <div>
                        <img className="circle responsive-img" src={this.props.formValues.photo} alt="photo" />
                    </div>
                    <div>
                        {this.props.formValues.location}
                    </div>

                    <div>
                        {
                            (this.props.formValues.aboutMe)
                                ? <label>About Me</label>
                                : ''
                        }
                        <div>{this.props.formValues.aboutMe}</div>
                    </div>
                    <div>
                        {
                            (this.props.formValues.skills)
                                ? <label>Skills</label>
                                : ''
                        }
                        <div>{this.props.formValues.skills}</div>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col s12">
                                <a href={this.props.formValues.linkedInProfile} target="_blank"><img src={linkedin} className="icon-site" alt="linkedin" /></a>

                                <a href={this.props.formValues.gitHub} target="_blank"><img src={github} className="icon-site" alt="github" /></a>

                                <a href={this.props.formValues.stackOverflow} target="_blank"><img src={stackOverflow} className="icon-site" alt="stackoverflow" /></a>

                                <a href={this.props.formValues.portfolioSite} target="_blank"><img src={portfolio} className="icon-site" alt="portfolio" /></a>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="blue btn-flat white-text" onClick={this.props.onEditProfile}>
                        Edit Profile
                    </button>
                </div>
                <hr />
                <div>
                    < ProjectList />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //console.log('ALL REDUCERS-STATE', state);
    //console.log('PROFILE REDUCER-STATE', state.profile.skills);
    return {
        userData: state.auth,
        formValues: state.profile
    };
}

export default connect(mapStateToProps, actions)(ProfileInfo);

