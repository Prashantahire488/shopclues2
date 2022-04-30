import React,{useState,useEffect} from 'react'
import './style/Product.css';
import {Navbar} from "./Navbar";
import {Footer} from "./footer";

function Product() {

  const [user,setUser]=useState([]);

  const fetchData=()=>
  {
    fetch("https://shopcluesdb.herokuapp.com/data").then((res)=>
    {
      return res.json();
    }).then((data)=>
    {

      let data1=data;
      console.log(data);
      //console.log(data1)
      setUser(data1);
    });
  }
  useEffect( ()=>
    {
      fetchData();
    },[]
  )

  
  return (
    <>    <div>
    <Navbar/>
    </div>
        <div className='item-container2'>
            {user.map((product) => (
            <div className='items2'>
                <img src={product.img_url} alt='' />
                <p className='title'>{product.Title}</p>
                <h3 className='price'>{"₹"+product.price}</h3>
                <p className='priceoff'>{product.priceoff}</p>
                <p className='discount'>{product.discount+"%"+"  OFF"}</p>
            </div>          
            ))}
        </div>

        {/* <div className='item-container'>
          {
            user.filter(products =>(products.category).map((product) => (
              <div className='items'>
                  <img src={product.img_url} alt='' />
                  <h3>{product.Title}</h3>
                  <p>{"₹"+product.price}</p>
              </div>  )))
          } */}

        {/* </div> */}
        <div><Footer/></div>
    </>
  ) 
}

export {Product} 
