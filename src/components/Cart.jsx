import { useEffect, useState } from 'react';
import './style/Cart.css';
import { Navbar } from "./Navbar";
import { Footer } from "./footer";
import { useNavigate } from 'react-router-dom';

export const Cart = () =>
{   
    const data = JSON.parse(localStorage.getItem("mcart"))
    const [value,setValue] = useState({});    
    const navigate = useNavigate();

    var t = 0;
    data.forEach((el) => t += el.price)
    console.log(data);
    const delcart = (product) =>
    {
        data.splice(data.findIndex(a => a.id === product.id) , 1)        
        localStorage.setItem("mcart",JSON.stringify(data));     

        setValue({"msg":"just refresh page"});
    }    

    
    var mt = 0;
    if(t != 0)
    {
        mt = 40+t
        mt = mt.toFixed(2)
    }

    console.log(data);

    return(
    <>
        <Navbar />

        <div className='maincart'>     
            <div className='small-container'>
                <table>
                    <tr>
                        <th className='cartheading'>Product</th>
                        <th className='cartheading'>Quantity</th>
                        <th className='cartheading'>Subtotal</th>
                    </tr>
                    {data.map((product) => (        
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src={product.img_url} />
                                    <div>
                                        <p>{product.Title}</p>                                        
                                        <br />
                                        <button className='delbutton' onClick={() => delcart(product)} >
                                            Delete
                                        </button>                                        
                                    </div>
                                </div>
                                <hr />
                            </td>
                            <td><input type={"text"} value={"1"} /> </td>
                            <td>{"Rs."+product.price}</td>
                        </tr>
                    ))}
                </table>
                <div className='total-price'>
                        <table>
                            <tr>
                                <td>Subtotal</td>
                                <td>{"Rs. "+t }</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>Rs. 40</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{"Rs. "+mt}</td>
                            </tr>
                        </table>
                </div>
            </div>

            <div>
                <h4>Add Your Address To Deliver Product</h4>
                <div>
                    <div className='address'>
               <label>Name:</label><input placeholder="Enter Your Name"></input>
               <label>Email:</label> <input placeholder="Email"></input>
               <label>Address:</label><textarea placeholder='Address'></textarea>
               </div>
    
                <br /><br />                
                <strong>Total Amount is {"Rs. "+mt}</strong>      
                <br /><br />   
                <button className='cbutton'  onClick={() => navigate("/Payment")}>
                    Checkout
                </button>                                        
            </div>
        </div>            
    </div>
        
<div>
    <Footer/>
</div>
        

    </>)
}