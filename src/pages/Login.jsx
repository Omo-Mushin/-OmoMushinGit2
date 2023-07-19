import { object } from 'prop-types';
import React, { Component } from 'react';
import Joi from 'joi-browser'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { dataBase } from '../app/firebase';

class LoginForm extends Component {
    state = { account: { username: '' , password:''}, 
            errors : {} } 


    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    validate = () => {
        const result = Joi.validate(this.state.account, this.schema, { abortEarly : false})
        console.log(result)
        if (!result.error) return null
        const errors = {}
        for ( let item of result.error.details) errors[item.path[0]] = item.message
        return errors
        // const errors = {};
        // if (this.state.account.username.trim() === '') {
        //     errors.username = 'Username is required'
        // }
        // if (this.state.account.password.trim() === '') {
        //     errors.password = 'password is required'
        // }
        // return Object.keys(errors).length === 0 ? null : errors
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({ errors : errors || {}})
        if (errors) return 
        console.log(errors, 'submitted')

        const login = await signInWithEmailAndPassword(dataBase,
            this.state.account.username,
            this.state.account.password);
        console.log(login)
        window.location= '/news'
    }
    validateProperty = (input) => {
        const obj = { [input.name] : input.value}
        const schema = { [input.name] : this.schema[input.name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null
        
        // if (input.name === 'username') {
        //     if (input.value.trim() === '') return 'Username is required' 
        // }

        // if (input.name === 'password') {
        //     if (input.value.trim() === '') return 'Password is required' 
        // }
    }
    

    handleChange = e => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget)
        if (errors) errors[e.currentTarget.name] = errorMessage
        else delete errors[e.currentTarget.name]

        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account : account, errors: errors })
    }
    handleCheck = e => {
        const account = {...this.state.account};
        account.checked = 'true'
        this.setState({account})
    }
    render() { 
        return (
        <div className=''>
            <h1>
                Login
            </h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor='username'>Username</label>
                    <input type="email" 
                    className="form-control" id="username" 
                    name='username'
                    value={this.state.account.username} 
                    onChange={this.handleChange}
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"/>
                    
                    {/* <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.</small> */}
                        {this.state.errors.username && 
                        <div className='alert alert-danger'>{this.state.errors.username}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    className="form-control"
                    onChange={this.handleChange} 
                    id="password" 
                    value={this.state.account.password}
                    name='password' 
                    placeholder="Password"/>
                    {this.state.errors.password  && 
                        <div className='alert alert-danger'>{this.state.errors.password}</div>}
                </div>
                
                <button disabled={this.state.account.password ? false : true} 
                type="submit" className="btn btn-primary">Login</button>
                </form>
        </div>);
    }
}
 
export default LoginForm;























// Developing skills, confidence
//  and self-esteem in elementary school
//   student in rural community. This would be carried 
// out effectively and efficiently
//  by organising lectures, seminars 
//  and quizzes to inspire the young students.