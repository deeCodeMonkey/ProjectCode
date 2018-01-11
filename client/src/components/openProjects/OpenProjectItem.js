import 'materialize-css/dist/css/materialize.min.css';
import "./OpenProjectItem.css"
import React, { Component } from 'react';
import moment from 'moment';
import OpenProjectModal from './OpenProjectModal';


class OpenProjectItem extends Component { 

    state = {
        projectModal: undefined,
    }

    handleOnClick = () => {
        this.setState({
            projectModal: true
        });
    }

    closeModalonClick = () => {
        this.setState({
            projectModal: false
        });
        
        window.location.href = "/Main";
    }

    render() {

        const dueDate = moment(this.props.dueDate).format('LL');

        return (
            <div className="col s12 m12 project-item">
                <div className="card-image">
                    <img className="project-img circle responsive-img" src={this.props.image} alt="project image" />
                </div>

                <div className="card-stacked">
                    <div className="card-content">
                        <h6>{this.props.headline}</h6>
                        <h6>From: {this.props.projectOwner}</h6>
                        <h6>Project: {this.props.title}</h6>
                        <h6>Deadline: {dueDate}</h6>
                        <h6>Requirements: {this.props.requirements}</h6>
                        <OpenProjectModal projectModal={this.state.projectModal} closeModal={this.closeModalonClick} projectId={this.props._id}/>
                    </div>
                    
                    <div className="card-action">
                        <button onClick={this.handleOnClick}>View Detail</button>
                    </div>
                </div>
            </div>
            
            

            

        );
    }
};

export default OpenProjectItem;

