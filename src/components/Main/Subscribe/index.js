import React from 'react';
import InputText from '../../InputText';
import InputSelect from '../../InputSelect';

class Subscribe extends React.Component {
  render () {
    return (
      <form>
        <InputText
            name={"name"}
            label={"First Name:"}
            required={true}
            type={"text"}
            pattern={"^[a-zA-Z\\s]*$"}
            error={"Llename el form, plis"}/>
        <InputText
            name={"lastName"}
            label={"Last Name:"}
            required={true}
            type={"text"}
            pattern={"^[a-zA-Z\\s]*$"}/>
        <InputText
            name={"companyName"}
            label={"Company Name:"}
            required={true}  type={"text"}
            pattern={"^[a-zA-Z\\s]*$"}/>
        <InputSelect
            name={"interest"}
            label={"Interest:"}
            options={['apple', 'oranges', 'bananas', 'grapes']}/>
        <InputText
            name={"phone"}
            label={"Phone:"}
            required={true}
            type={"text"}
            pattern={"^[0-9]"}/>
        <InputText
          name={"mail"}
          label={"Email:"}
          type={"email"}
          required={true}
          pattern={"^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}/>
          <InputText
              name={"mail"}
              label={"Email:"}
              required={true}
              pattern={"^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}/>
        <button type="submit">Button</button>
      </form>
    )
  }
}

export default Subscribe;