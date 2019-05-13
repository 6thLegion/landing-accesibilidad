import React from 'react';
import "./index.css";
import PropTypes from 'prop-types';

class InputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isValid: false,
            value: '',
            validationClass: '',
            showError: false
        }
    }

    handleOnChange = (e) => {
        this.setState({
            value: e.target.value,
            isValid: e.target.checkValidity()
        })
    };

    handleOnBlur = (e) => {

        const isValid = this.state.isValid;

        this.setState({
            validationClass: isValid ? '' : 'input-error',
            showError: !isValid
        })
    };

    render() {
        const required = this.props.required ? 'required' : null;
        const pattern = this.props.pattern ? this.props.pattern : null;
        //  const className = !this.state.isValid ? 'input-error' : null;
        return (
            <fieldset className={this.state.validationClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    id={this.props.name}
                    type={this.props.type}
                    name={this.props.name}
                    required={required}
                    pattern={pattern}
                    onChange={this.handleOnChange}
                    onBlur={this.handleOnBlur}
                />
                {this.state.showError &&
                    <span>{this.props.error}</span>
                }
            </fieldset>

        )
    }

}

InputText.propTypes = {
    type: PropTypes.string,
    error:PropTypes.string
};

InputText.defaultProps = {
    type: 'text',
    pattern: '',
    error: 'Por favor, llene el formulario'

};


export default InputText;