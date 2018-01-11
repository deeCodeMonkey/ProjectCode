import React, { Component } from 'react';
//Field component allows all html form inputs
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ProfileField from './ProfileField';


class ProfileForm extends Component {

    renderFields() {
        return (
            <div>
                <Field label="About Me" type="text" name="aboutme" component={ProfileField} />
                <Field label="Skills, Specialty" type="text" name="skills" component={ProfileField} />
                <Field label="Portfolio site" type="text" name="portfoliosite" component={ProfileField} /> 
                <Field label="GitHub profile site" type="text" name="github" component={ProfileField} />
                <Field label="StackOverflow profile site" type="text" name="stackoverflow" component={ProfileField} />    
            </div>
        );
    }

    onProfilePost = (values) => {
        this.props.submitProfile(values, this.props.auth._id, this.props.onProfileSubmit);
    }

    render() { 
        //handlesubmit from redux-form
        const { handleSubmit } = this.props;
            
        return (
            <div>
                <form onSubmit={
                    handleSubmit(this.onProfilePost)
                }>
                    { this.props.auth ? 
                        this.renderFields() : <p>Loading...</p>}
                    <button type="button" className="red btn-flat white-text" onClick={this.props.onProfileSubmit}>
                        Cancel
                    </button>
                    <button type="submit" className="blue btn-flat right white-text">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default reduxForm({
    form: 'profileForm'
})(
    connect(mapStateToProps, actions)(ProfileForm)
);


