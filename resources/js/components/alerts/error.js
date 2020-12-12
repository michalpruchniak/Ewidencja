import React from 'react';

const Error = (props) => (
    <div className="error alert-danger" role="alert">
        {props.alert}
    </div>

)
export default Error;