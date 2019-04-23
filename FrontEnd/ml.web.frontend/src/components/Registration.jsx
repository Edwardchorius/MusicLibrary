import React, {Component} from 'react';
import axios from 'axios';


const camelCase = (myString) => (
    myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
);


export default class RegistrationForm extends Component{
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        errorMessages: [],
    };


handleRegistration = (event) => {
    event.preventDefault();

    const user = {
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password
    }
    
    // var formData = new FormData();
    // formData.append('firstName', user.firstName);
    // console.log(formData);
    // axios({
    //     method: 'post',
    //     url: 'http://localhost:60231/api/values',
    //     data: formData,
    //     headers: {
    //         'content-type': 'application/json',
    //     },
    // });
};


handleFormElementChange = (event) => {
    const { value, id } = event.target;
    const parsedId = camelCase(id);

    this.setState({
        [parsedId]: value
    });
}


checkValidity = (event) => {
    const {target} = event;

    if(!target.checkValidity()){
        this.setState(({errorMessages}) => ({
            errorMessages: [...errorMessages, target.validationMessage]
        })); //we check if element is valid
        console.error(target.validationMessage);
    }
}

render() {

    const 
        { 
            email,
            firstName,
            lastName,
            password,
            errorMessages
        } = this.state;

        return(
        <form onSubmit={this.handleRegistration}>
    
     {
                    errorMessages.length
                    ?
                        <ul>
                            { 
                                errorMessages.map(message => <li>{ message }</li> )    
                            }
                        </ul>
                    : null
                }

                <label htmlFor="email">Email: </label>
                <input 
                type="email"
                name="email" 
                id="email" 
                value={email}
                onChange={this.handleFormElementChange}
                onBlur={this.checkValidity}
                required={ true } 
                />

                <br />

                <label htmlFor="first-name">First Name: </label>
                <input 
                type="text"
                name="firstName" 
                id="first-name" 
                value={firstName}
                onChange={this.handleFormElementChange}
                pattern="[A-Za-z]{1,32}"
                required={true} 
                />

                <br />

                <label htmlFor="last-name">Last Name: </label>
                <input 
                type="text"
                name="lastName" 
                id="last-name" 
                value={lastName}
                onChange={this.handleFormElementChange}
                pattern="[A-Za-z]{1,32}"
                required={true} 
                />

                <br />

                <label htmlFor="password">Password: </label>
                <input 
                type="password"
                name="password" 
                id="password" 
                minLength="8"
                value={password}
                onChange={this.handleFormElementChange}
                required={true} 
                />

                <br />

                <button type="submit">Register</button>
    </form>
        );
    }
}