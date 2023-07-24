import React, { useState } from 'react';
import Joi from 'joi-browser';
import { NavLink } from 'react-router-dom';
import { dataBase } from '../app/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Axios from 'axios';
import bcrypt from 'bcryptjs';
import { useForm } from 'react-hook-form'


const  Registration = () => {

  const { register, handleSubmit} = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const reg = await createUserWithEmailAndPassword(dataBase,
        data.name, data.password);
      localStorage.setItem('token', reg.user['accessToken']);
      console.log("user created", reg)
      window.location = '/news';
    } catch (err) {
      alert('There was an unexpected error', err);
    }
  }

  
  return (
    
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Username</label>
    <input {...register('name')} name='name'
    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input {...register('password')} name='password'
    type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
    
  )
};
export default Registration;

// const Registration = () => {
//   // const [account, setAccount] = useState({ username: '', password: '', name: '' });
//   // const [errors, setErrors] = useState({});

//   // const schema = {
//   //   username: Joi.string().required().label('Username'),
//   //   password: Joi.string().required().min(8).max(15).label('Password'),
//   //   name: Joi.string().required().label('Name')
//   // };

//   // const validate = () => {
//   //   const result = Joi.validate(account, schema, { abortEarly: false });
//   //   if (!result.error) return null;
//   //   const errors = {};
//   //   for (let item of result.error.details) errors[item.path[0]] = item.message;
//   //   return errors;
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const errors = validate();
//   //   setErrors(errors || {});
//   //   if (errors) return;

    // try {
    //   const reg = await createUserWithEmailAndPassword(dataBase,
    //     account.username, account.password, account.name);
    //   localStorage.setItem('token', reg.user['accessToken']);
    //   // console.log("auth", reg)
    // } catch (err) {
    //   alert('There was an unexpected error', err);
    // }

//   //   window.location = '/';
//   // };

//   // const validateProperty = ({ name, value }) => {
//   //   const obj = { [name]: value };
//   //   const schema = { [name]: schema[name] };
//   //   const { error } = Joi.validate(obj, schema);
//   //   return error ? error.details[0].message : null;
//   // };

//   // const handleChange = (e) => {
//   //   const errorsCopy = { ...errors };
//   //   const errorMessage = validateProperty(e.currentTarget);
//   //   if (errorMessage) errorsCopy[e.currentTarget.name] = errorMessage;
//   //   else delete errorsCopy[e.currentTarget.name];

//   //   const accountCopy = { ...account };
//   //   accountCopy[e.currentTarget.name] = e.currentTarget.value;
//   //   setAccount(accountCopy);
//   //   setErrors(errorsCopy);
//     // console.log(this.state.account)
//   };

//   return (
//     <div>
//       <small id="emailHelp" className="form-text text-muted">
//         Please register as an admin if you are an executive in Nuesa or Your Dept
//       </small>
//       <div className=''>
//         <h1>Registration</h1>
//         <button className='btn btn-primary m-2'>
//           <NavLink to='/adminReg'>Register As An Admin</NavLink>
//         </button>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor='username'>Email</label>
//           <input
//             type="email"
//             className="form-control" id="username"
//             name='username'
//             value={account.username}
//             onChange={handleChange}
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />

//           {errors.username &&
//             <div className='alert alert-danger'>{errors.username}</div>}
//         </div>

//         <div className="form-group">
//           <label htmlFor='username'>Name</label>
//           <input
//             type="email"
//             className="form-control" id="name"
//             name='name'
//             value={account.name}
//             onChange={handleChange}
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />

//           {errors.name &&
//             <div className='alert alert-danger'>{errors.name}</div>}
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password"
//             className="form-control"
//             onChange={handleChange}
//             id="password"
//             value={account.password}
//             name='password'
//             placeholder="Password"
//           />
//           {errors.password &&
//             <div className='alert alert-danger'>{errors.password}</div>}
//         </div>
//         <button disabled={!account.password}
//           type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
//       </form>

//     </div>
//   );
// };

// export default Registration;




// import React, { Component } from 'react';
// import Joi from 'joi-browser';
// import { NavLink,  } from 'react-router-dom';
// import { dataBase } from '../app/firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import Axios from 'axios';
// import bcrypt from 'bcryptjs';

// // const url = 'http://api4.great-site.net/app/new.php'
// class Registration extends Component {
//     state = { account: { username: '' , password:'', name: '' }, 
//             errors : {} } 


//     schema = {
//         username: Joi.string().required().label('Username'),
//         password: Joi.string().required().min(8).max(15).label('Password'),
//         name: Joi.string().required().label('Name')
//     }
//     validate = () => {
//         const result = Joi.validate(this.state.account, this.schema, { abortEarly : false})
//         console.log(result)
//         if (!result.error) return null
//         const errors = {}
//         for ( let item of result.error.details) errors[item.path[0]] = item.message
//         return errors
//     }
//     handleSubmit =  async (e) => {
//         e.preventDefault();
//         const errors = this.validate()
//         this.setState({ errors : errors || {} })
//         if (errors) return 

//         try {
//             const reg = await createUserWithEmailAndPassword(dataBase, 
//             this.state.account.username, this.state.account.password, this.state.account.name)
//             localStorage.setItem('token', reg.user['accessToken'])
//             // console.log("auth", reg)
//         } catch (err) {
//             alert('There was an unexoected error' , err)
//         }
        
//         window.location = '/' 
//         // const account = {...this.state.account};
//         // const hashedpassword = bcrypt.hashSync(account.password, 10)
//         // // console.log(hashedpassword)
//         // account.password = hashedpassword;
//         // this.setState({ account })
//         // console.log(account)
//         // try {
//         //     const reg = await Axios.post(url, {
//         //         username: this.state.account.username, 
//         //         password: this.state.account.password
//         //     },  { headers: { 'Authorization' : btoa('evans'),
//         //     }
//         // }
//         //      ) 
//         //      console.log(reg) }
//         //       catch (err) {
//         //     console.log(err)
//         // }


//     }
//     validateProperty = (input) => {
//         const obj = { [input.name] : input.value}
//         const schema = { [input.name] : this.schema[input.name]}
//         const {error} = Joi.validate(obj, schema)
//         return error ? error.details[0].message : null
//     }
    

//     handleChange = e => {
//         const errors = {...this.state.errors};
//         const errorMessage = this.validateProperty(e.currentTarget)
//         if (errors) errors[e.currentTarget.name] = errorMessage
//         else delete errors[e.currentTarget.name]

//         const account = {...this.state.account};
//         account[e.currentTarget.name] = e.currentTarget.value;
//         this.setState({ account : account, errors: errors })
//         // console.log(this.state.account)
//     }
//     handleCheck = e => {
//         const account = {...this.state.account};
//         account.checked = 'true'
//         this.setState({account})
//     }
//     render() { 
//         return (
//             <div>
//                 <small id="emailHelp" className="form-text text-muted">
//                         Please register as an admin if you are an executive in Nuesa or Your Dept</small>
//                 <div className=''>
//             <h1>
//                  Registration
//             </h1>
//             <button className='btn btn-primary m-2'>
//                 <NavLink to='/adminReg'>Register As An Admin</NavLink>
//             </button> </div>
//             <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                     <label htmlFor='username'>Email</label>
//                     <input 
//                     type="email" 
//                     className="form-control" id="username" 
//                     name='username'
//                     value={this.state.account.username} 
//                     onChange={this.handleChange}
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter email"/>

//                         {this.state.errors.username && 
//                         <div className='alert alert-danger'>{this.state.errors.username}</div>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor='username'>Name</label>
//                     <input 
//                     type="email" 
//                     className="form-control" id="name" 
//                     name='name'
//                     value={this.state.account.name} 
//                     onChange={this.handleChange}
//                     aria-describedby="emailHelp" 
//                     placeholder="Enter email"/>

//                         {this.state.errors.name && 
//                         <div className='alert alert-danger'>{this.state.errors.name}</div>}
//                 </div>

//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input type="password" 
//                     className="form-control"
//                     onChange={this.handleChange} 
//                     id="password" 
//                     value={this.state.account.password}
//                     name='password' 
//                     placeholder="Password"/>
//                     {this.state.errors.password  && 
//                         <div className='alert alert-danger'>{this.state.errors.password}</div>}
//                 </div>
//                 <button disabled={this.state.account.password ? false : true} 
//                 type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
//                 </form>
      
//             </div>
//         );
//     }
// }
 
// export default Registration;