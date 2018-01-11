import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import OpenProjectProfile from './OpenProjectProfile';

class OpenProjectModal extends Component {

    onClickHandler = () => {
        this.props.assignProjectToUser(this.props.auth._id, this.props.projectId, this.props.closeModal);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.projectModal}
                ariaHideApp={false}
                contentLabel="Open Project Modal">
                <h1>Project Modal Content</h1>
                <OpenProjectProfile projectId={this.props.projectId}/>
                <button onClick={this.onClickHandler}>Add Project to User</button>
                <button onClick={this.props.closeModal}>Close</button>
               
            </Modal>
        );
    }
};

function mapStateToProps(state) {
    return {
        auth: state.auth,
        openProject: state.openProject
    };
}

export default connect(mapStateToProps, actions)(OpenProjectModal);