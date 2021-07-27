import React, { useState } from 'react'

function Contact() {
    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    })
   const InputEvent = (event)=>{
       const {name, value} = event.target;
       setData((preval)=>{
           return{
               ...preval,
               [name]: value,
           };
       });
   };
    function fromSubmit(e){
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone number is ${data.phone} and my Email is ${data.email}.I want to give message is ${data.msg}`)
    }

    
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={fromSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" 
                            name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" 
                            name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Phone Number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" 
                            name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1"
                            name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}
export default Contact;