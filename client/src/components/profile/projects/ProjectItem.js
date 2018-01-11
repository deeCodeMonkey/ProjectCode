import React from 'react';
import moment from 'moment';

export default (props) => {

    const dueDate = moment(props.dueDate).format('LL');

    return (
        <div>
            <h6>{props.title}</h6>
            <h6>Deadline: {dueDate}</h6>
        </div>
    );
};