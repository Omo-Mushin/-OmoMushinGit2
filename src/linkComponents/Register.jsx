import { object } from 'prop-types';
import React, { Component } from 'react';
import Joi from 'joi-browser';
import reviews, { getReviews } from '../app/data'

export default class Register extends Component{
    state = {   data: this.props.posts,
                account: { name: '', 
                password: '', job: '', 
                text : '', id: '',
                 },
                errors: {}
    }
    
    schema = {
        name: Joi.string().required().min(5).label('Username'),
        id: Joi.string().required().min(2).label('id'),
        password: Joi.string().required().min(5).label('Password'),
        text: Joi.string().required().min(5).label('Text'),
        job: Joi.string().required().min(5).max(15).label('Job'),

    }
    validate = () => {
        const result = Joi.validate( this.state.account, this.schema,  {abortEarly: false})
        // console.log(result)
        if (!result.error) return null
        const errors = {}
        for ( let item of result.error.details) errors[item.path[0]] = item.message
        return errors
    }
    validateProperty =  (input) => {
        const obj = { [input.name] : input.value}
        const schema = { [input.name] : this.schema[input.name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null
    }

    handleSubmit = async  (e) => {
        e.preventDefault();
        const errors = this.validate()
        this.setState({errors : errors || {}})
        if (errors) return 
        
        let account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        //const account = {...this.state.data, [e.currentTarget.name] : e.currentTarget.value }
        // console.log( this.state.data)
        this.setState({account})
        const account1 = [this.state.account, ...this.state.data]
        // console.log(account1)
        // console.log(account)

        for (var [key, value] of Object.entries(account)) {
                        console.log( key );
                        console.log(value)
                        // this.handlePost( 'https://daddygo-cfb28-default-rtdb.firebaseio.com/daddygo.json', account)
                    }   
                     this.props.onPosts( 'https://daddygo-cfb28-default-rtdb.firebaseio.com/daddygo.json', 
                     account )
                }
    handleChange = e => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(e.currentTarget)
        if (errors) errors[e.currentTarget.name] = errorMessage
        else delete errors[e.currentTarget.name]

        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account : account, errors : errors})
    }
    render() {
        
        return(<div>
                <h1>
                    Post Info
                </h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="email" 
                        name='name'
                        onChange={this.handleChange}
                        value={this.state.account.name}
                        className="form-control" 
                         
                        aria-describedby="emailHelp" 
                        placeholder="Username"/>
                        {this.state.errors.name && 
                        <div className='alert alert-danger'>{this.state.errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">id</label>
                        <input type="number" 
                        name='id'
                        onChange={this.handleChange}
                        value={this.state.account.id}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter id"/>
                        {this.state.errors.id && 
                        <div className='alert alert-danger'>{this.state.errors.id}</div>}
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password"
                        name='password'
                        onChange={this.handleChange} 
                        value={this.state.account.password}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password"/>
                        {this.state.errors.password && 
                        <div className='alert alert-danger'>{this.state.errors.password}</div>}
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">
                            Job</label>
                        <input type="text" 
                        className="form-control"
                        name='job'
                        onChange={this.handleChange}
                        value={this.state.account.job} 
                        id="exampleInputPassword1" 
                        placeholder="Job title"/>
                        {this.state.errors.job && 
                        <div className='alert alert-danger'>{this.state.errors.job}</div>}
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">
                            Text</label>
                        <textarea type="text" 
                        className="form-control"
                        name='text'
                        onChange={this.handleChange}
                        value={this.state.account.text} 
                        id="exampleInputPassword1" 
                        placeholder="Enter text"/>
                        {this.state.errors.text && 
                        <div className='alert alert-danger'>{this.state.errors.text}</div>}
                    </div>
                    <div className="form-check">
                        <input type="checkbox" 
                        className="form-check-input" 
                        id="exampleCheck1"/>
                        <label className="form-check-label" 
                        for="exampleCheck1">Prove you're not a robot</label>
                    </div>
                    <button type="submit" disabled={this.validate()}
                     className="btn btn-primary">Submit</button>
                     {/* <button type="submit" onClick={this.handleGet}
                     className="btn btn-primary">Get</button> */}
</form>
                </div>

                
        )
    }}

    // const res = await fetch('https://daddygo-cfb28-default-rtdb.firebaseio.com/daddygo.json',
        // {
        //     method : 'POST',
        //     headers : {
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //         id: account.id,
        //         name: account.name,
        //         job: account.job,
        //         text: account.text,
        //         password: account.password
        //     })
        // })

        // handleGet = async (e) => {
    //     const response = await fetch("https://daddygo-cfb28-default-rtdb.firebaseio.com/daddygo.json");
    //     const fetched = await response.json();
    //     console.log(fetched);
    //     // const fetchedData = this.handleSpread(fetched)
    //     // console.log(fetchedData.value)
    //     for (var [key, value] of Object.entries(fetched)) {
    //         //console.log( key );
    //         // console.log(value.text)
    //         this.state.data.push(value)
    //     } 
    //     console.log(this.state.data)
    // }