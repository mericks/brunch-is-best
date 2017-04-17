import React, { PropTypes } from 'react';

const SingleInput = (props) => {
    return (
        <div>
            <label>{props.title}</label>
            <input
                name={props.name}
                type={props.inputType}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder} />
        </div>
    )
}

SingleInput.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['text', 'number', 'password']).isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array
    ]).isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default SingleInput;
