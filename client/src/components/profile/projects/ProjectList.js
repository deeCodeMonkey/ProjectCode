import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';


class ProjectList extends Component {
    render() {
        return (
            <div>
                PROJECTS BOOKED  =================================   
  
                {
                    this.props.profile.project ?
                        this.props.profile.project.map((project) => {
                            return <ProjectItem key={project._id} {...project} />
                        })
                        : <p>No Projects Assigned</p>
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    //console.log('PROFILE-PROJECTS======', state.profile);
    //console.log('PROJECTS======', state.profile.project);
    return {
        auth: state.auth,
        profile: state.profile
    };
}

export default connect(mapStateToProps)(ProjectList);

