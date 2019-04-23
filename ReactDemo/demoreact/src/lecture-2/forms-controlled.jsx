import React, {Component} from 'react';




const camelCase = (myString) => (
    myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
);


class RegistrationForm extends Component{
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        errorMessages: [],
    };


    handleRegistration = (event) => {
        event.preventDefault();
        console.dir(this.state); //here we simulate a POST request, we can put additional logic as well if we want
    }


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
            password
        } = this.state;

        return (
            //here we can put as an attribute to the form action/method as well
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