import React from 'react';

class InputMail extends React.Component {

    render() {
        const required = this.props.required ? 'required' : null;
        return (
            <fieldset>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input id={this.props.name} type="email" name={this.props.name} required={required}/>
            </fieldset>
        )
    }
}

export default InputMail;