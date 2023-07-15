import React, { Component } from 'react';
import Joi from 'joi-browser';
import { NavLink } from 'react-router-dom';

class Registration extends Component {
    state = { account: { username: '' , password:'', checked: 'false',  }, 
            errors : {} } 


    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().min(8).max(15).label('Password'),
    }
    validate = () => {
        const result = Joi.validate(this.state.account, this.schema, { abortEarly : false})
        console.log(result)
        if (!result.error) return null
        const errors = {}
        for ( let item of result.error.details) errors[item.path[0]] = item.message
        return errors
    }
    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({ errors : errors || {} })
        if (errors) return 
        console.log(errors, 'submitted')
    }
    validateProperty = (input) => {
        const obj = { [input.name] : input.value}
        const schema = { [input.name] : this.schema[input.name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null
    }
    

    handleChange = e => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget)
        if (errors) errors[e.currentTarget.name] = errorMessage
        else delete errors[e.currentTarget.name]

        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account : account, errors: errors })
        // console.log(this.state.account)
    }
    handleCheck = e => {
        const account = {...this.state.account};
        account.checked = 'true'
        this.setState({account})
    }
    render() { 
        return (
            <div>
                <small id="emailHelp" className="form-text text-muted">
                        Please register as an admin if you are an executive in Nuesa or Your Dept</small>
                <div className=''>
            <h1>
                 Registration
            </h1>
            <button className='btn btn-primary m-2'>
                <NavLink to='/adminReg'>Register As An Admin</NavLink>
            </button> </div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor='username'>Email</label>
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
                <button disabled={this.state.account.password ? false : true} type="submit" className="btn btn-primary">Login</button>
                </form>
        );
            </div>
        );
    }
}
 
export default Registration;