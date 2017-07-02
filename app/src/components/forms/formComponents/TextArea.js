import React from 'react';

const TextArea = props => (
    <div>
        <label>{props.title}</label>
        <textarea
            style={props.resize ? null : {resize: 'none'}}
            name={props.name}
            rows={props.rows}
            value={props.content}
            onChange={props.controlFunc}
            placeholder={props.placeholder} />
    </div>
);

// TextArea.propTypes = {
//     title: PropTypes.string.isRequired,
//     rows: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     resize: PropTypes.bool,
//     placeholder: PropTypes.string,
//     controlFunc: PropTypes.func.isRequired,
// };

export default TextArea;
