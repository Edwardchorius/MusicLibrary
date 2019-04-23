import React, {Fragment, Component} from 'react';
import './index.css';

class MyForm extends Component{

    getEmailRef = (email) => {
        this.email = email;
    }

    getPasswordRef = (password) => {
        this.password = password;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { value: email } = this.email; //the value properties are the DOM element's values and we pass with : x their names
        const { value: password } = this.password;

        const payload = { email, password };

        console.log(JSON.stringify(payload, null, 4));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Email: <input type="email" id="email" ref={this.getEmailRef} />
                <br />
                Password: <input type="password" id="password" ref={this.UNSAFE_componentWillMount.getPasswordRef} />

                <button type='submit'>Log in</button>
            </form>
        );
    }
}