import React from 'react';
import { withRouter } from 'react-router';
import WelcomePage from './WelcomePage';
class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            signinName: '',
            signinPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        var flag = 1;
        e.preventDefault();
        console.log('name is : ' + this.state.name);
        console.log('email is : ' + this.state.email);
        console.log('password is : ' + this.state.password);
        const data = { name: this.state.name, email: this.state.email, password: this.state.password }
        console.log(JSON.stringify(data));
        fetch('http://localhost:4000/createUser', {
            method: 'POST',

            body: JSON.stringify(data), // data can be `string` or {object}!

            headers: { 'Content-Type': 'application/json' }
        })

            .then(res => res.text())

            .then(text => console.log(text))

            .catch(error => console.error('Error:', error))

            .then(response => console.log('Success:', response));
        if (this.state.name == '') { alert("Name cannot be null"); flag = 0 }
        if (this.state.email == '') { alert("Email cannot be null"); flag = 0 }
        if (this.state.password == '') { alert("Password cannot be null"); flag = 0 }
        if (flag) {
            alert('Sign up successfully!');
            this.props.history.push('/welcome');
        }else{
            alert("Register failed")
        }
    }

    HandleSubmit(e) {
        e.preventDefault();
        // console.log('signinName is : '+this.state.signinName);
        // console.log('signinpassword is : '+this.state.signinPassword);

        const data = { name: this.state.signinName, password: this.state.signinPassword }
        const fun = async () => {
            const reponse = await fetch('http://localhost:4000/findUser', {
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: { 'Content-Type': 'application/json' }
            })
            //console.log(reponse);
            const jVal = await reponse.json(); // Get JSON value from the response body
            Promise.resolve(jVal).then((value) => {
                console.log(value)
                if (value.length == 0) {
                    alert('login failed! Name or password incorrect!')
                } else {
                    alert('login successfully!');
                    this.props.history.push('/welcome');
                }
            });
        }
        fun();
    }

    render() {
        return (
            <React.Fragment>
                <div className="welcome-container" >
                    <div >
                        <form onSubmit={this.handleSubmit} class="loginForm">
                            <label htmlFor="name" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className="input" id="name" name="name" type="text" placeholder="Username" onChange={this.handleChange} />
                            <br />
                            <label htmlFor="email">&nbsp;&nbsp;</label>
                            <input className="input" id="email" name="email" type="email" placeholder="Email" onChange={this.handleChange} />
                            <br />
                            <label htmlFor="password">&nbsp;</label>
                            <input className="input" id="password" name="password" type="text" placeholder="password" onChange={this.handleChange} />
                            <br />
                            <button className="button">Sign Up!</button>
                        </form>
                    </div>
                    <br />
                    <br />
                    <div>
                        <form onSubmit={this.HandleSubmit} class="loginForm">
                            <label htmlFor="signinName">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className="input" id="signinName" name="signinName" type="text" placeholder="Username" onChange={this.handleChange} />
                            <br />
                            <label htmlFor="signinPassword"></label>
                            <input className="input" id="signinPassword" name="signinPassword" type="password" placeholder="password" onChange={this.handleChange} />
                            <br />
                            <br />
                            <button className="button">Sign In!</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Login);