import * as React from 'react';
import { Navbar } from "./Navbar";
import { useNavigate } from 'react-router-dom';



export const Payment = () => 
{
    const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div>
        <br />
        <h2>Payment</h2>
        <strong>Credit or Debit Card</strong>
        <br/> <br/>
        <div className="paymentfields">        
         <input placeholder='Enter Name'></input>
         <input placeholder='Card Number'></input>
    
                <button 
                onClick={() =>{
                    alert("Payment Successful..")
                 navigate("/")}}
                >
                    Checkout
                </button>  
        </div>
    </div>
    </>
  );
}