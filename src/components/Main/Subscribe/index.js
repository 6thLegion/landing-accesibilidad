import React from 'react';
import InputText from '../../InputText';
import InputSelect from '../../InputSelect';
import InputMail from '../../InputMail';

class Subscribe extends React.Component {
  render () {
    return (
      <form>
        <InputText name={"name"} label={"First Name:"} />
        <InputText name={"lastName"} label={"Last Name:"} />
        <InputText name={"companyName"} label={"Company Name:"} />
        <InputSelect name={"interest"} label={"Interest:"} options={['apple', 'oranges', 'bananas', 'grapes']} />
        <InputText name={"phone"} label={"Phone:"} />
        <InputMail name={"mail"} label={"Email:"} />
        <button type="submit">Button</button>
      </form>
    )
  }
}

export default Subscribe;