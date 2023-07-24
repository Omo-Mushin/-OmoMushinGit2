import React from 'react'
import { useForm } from 'react-hook-form';
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';

// const schema = Joi.objects(
//     {
//         name: Joi.string().required().min(5).label('Email'),
//         id: Joi.string().required().min(2).label('id'),
//         password: Joi.string().required().min(5).label('Password'),
//         text: Joi.string().required().min(5).label('Text'),
//         job: Joi.string().required().min(5).max(15).label('Job'),
//         img: Joi.required().label('Image')
            
//     }
// )
// interface FormData {
//     email: string, password: string, job: string,text: string, image: File
// }
export default function Post() {
    const {register, handleSubmit, formState: {errors}} =  useForm()
    
    const onSubmit = data => {
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Username</label>
    <input {...register('name')} name='name'
    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {errors.name && <p className='text-danger'> {errors.name.message} </p>}
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input {...register('password')} name='password'
    type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    {errors.password && <p className='text-danger'> {errors.password.message} </p>}
  </div>
  <div class="form-group">
    <label htmlFor="Position">Position</label>
    <input {...register('job')} name='job'
    type="text" class="form-control" id="position" placeholder="Leadership position"/>
    {errors.job && <p className='text-danger'> {errors.job.message} </p>}
  </div>
  <div class="form-group">
    <label htmlFor="text">text</label>
    <input {...register('text')}
    type="text" class="form-control" id="text" placeholder="text"/>
    {errors.text && <p className='text-danger'> {errors.text.message} </p>}
  </div>
  
  <div class="form-group">
    <label for="file">Example file input</label>
    <input {...register('file')}
    type="file" class="form-control-file" id="file"/>
    {errors.file && <p className='text-danger'> {errors.name.message} </p>}
  </div>

  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
