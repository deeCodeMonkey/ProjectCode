import React, { Component } from 'react';
//import ProfileForm from './ProfileForm'; 
import OptionModal from './OptionModal';
import ProfileInfo from './ProfileInfo';

class ProfileLayout extends Component {

    state = {
        profileDisplay: true,
        selectModal: undefined
    }

    renderContent() {
        if (this.state.profileDisplay) {
            return <ProfileInfo 
                onEditProfile={() => this.setState({profileDisplay: false})}
                />
        }
        return <OptionModal
            onProfileSubmit={() => this.setState({ profileDisplay: true })}
            selectModal={this.state.selectModal}
        />
    }


    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
            );
    }
}

export default ProfileLayout;