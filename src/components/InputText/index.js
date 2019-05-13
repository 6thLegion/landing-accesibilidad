import React from 'react';

const InputText = (props) => {
    return (
      <fieldset>
        <label htmlFor={props.name}>{props.label}</label>
        <input id={props.name} type="text" name={props.name} />
      </fieldset>
    )
}

export default InputText;