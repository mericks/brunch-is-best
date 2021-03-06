import React from 'react';
import './Forms.css';

const SingleInput = props => (
    <div>
        <label>{props.title}</label>
        <input
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder}
        />
    </div>
);

// SingleInput.propTypes = {
//     title: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     inputType: PropTypes.oneOf(['text', 'number', 'password']).isRequired,
//     content: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.array
//     ]).isRequired,
//     placeholder: PropTypes.string.isRequired,
// }

export default SingleInput;
