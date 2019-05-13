import React from 'react';

const InputSelect = (props) => {
  return (
    <fieldset>
      <label htmlFor={props.name}>{props.label}</label>
      <select id={props.name} name={props.name}>
        {props.options.map((element, key) => {
          return (<option key={key} value={element}>{element}</option>)
        })}
      </select>
    </fieldset>
  )
}

export default InputSelect;