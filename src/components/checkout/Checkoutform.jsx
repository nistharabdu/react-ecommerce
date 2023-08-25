import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { CartContext } from '../../context/CartContext';

export const Checkoutform = () => {
    const { cart } = useContext(CartContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        const combinedData = {
            ...data,
            cartDetails: JSON.stringify(cart),
        };
        emailjs.send('service_upb27ge', 'template_k7q069s', combinedData, 'qgXSk3PXXECX6fpha')
        .then((response) => {
          console.log('Email sent:', response);
        })
        .catch((error) => {
          console.error('Email error:', error);
        });
 
    };
    
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" placeholder="First name" name='firstname' {...register('firstname', { required: true })} />
                    {errors.firstname && <p>Please enter First name</p>}
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Last name</label>
                    <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" name='lastname' {...register('lastname', { required: true })} />
                    {errors.lastname && <p>Please enter Last name</p>}
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="validationDefault01">First name</label>
                    <input type="email" class="form-control" id="validationDefault01" placeholder="Email" name='email' {...register('email', { required: true })} />
                    {errors.email && <p>Please enter email</p>}
                </div>
                <div class="col-md-6 mb-3">
                    <label for="validationDefault02">Phone</label>
                    <input type="tel" class="form-control" id="validationDefault02" placeholder="Phone" name='phone'  {...register('phone', { required: true })}/>
                    {errors.phone && <p>Please enter phone</p>}
                </div>
            </div>
            <div class="row gx-0 mb-3">
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" name='message' {...register('message', { required: true })}/>
               {errors.message && <p>Please add message</p>}
            </div>
            <div class="form-group mb-3">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name='agree' {...register('agree', { required: true })} />
                    <label class="form-check-label" for="invalidCheck2">
                        Agree to terms and conditions
                    </label>
                    {errors.agree && <p>Please accept terms and conditions</p>}
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Request A Quote</button>
        </form>
    </>
  )
}
