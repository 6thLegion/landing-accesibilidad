import React from 'react';

const InputMail = (props) => {
    return (
      <fieldset>
        <label htmlFor={props.name}>{props.label}</label>
        <input id={props.name} type="email" name={props.name} />
      </fieldset>
    )
}

export default InputMail;