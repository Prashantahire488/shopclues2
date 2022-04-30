import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style/Men.css';
import {Navbar} from "./Navbar";
import {Footer} from "./footer";


import {
  getDataError,
  getDataLoading,
  getDataSuccess,
} from "../redux/Action";




 

const Men=()=> {

   const [user,setUser]=useState([]);
  const [value,setValue] = useState([]);
   const [val,setVal] = useState("");
   const[sorting,setSort]=useState("");
   const [count,setCount] = useState(0);
 //const dispatch = useDispatch();

 const dispatch = useDispatch();
    
    const { todos} = useSelector((state) => ({
      todos: state.todos,
    })
    );

    console.log(todos)       
   

    useEffect(() => {
        showData()        
    },[])


    const showData = async() => {
      try{
          dispatch(getDataLoading());
          const showdata = await fetch(`https://shopcluesdb.herokuapp.com/Men`)
          .then((d) => d.json());            
          dispatch(getDataSuccess(showdata));
          
      } catch (err) {
          dispatch(getDataError(err));
    }
  }


 

  
  
// let cart=[];
//   if(localStorage.getItem("cart")===null)
//   {
//     localStorage.setItem("cart",JSON.stringify([]));
//   }
//   console.log(localStorage.getItem("cart")===null);

//   const addcart=(Men)=>
//   {
//     let cartData=JSON.parse(localStorage.getItem("cart"));
//     cart=[...cartData,Men];
//     console.log(cart)

//     localStorage.setItem("cart",JSON.stringify(cart))
//     alert("Product Added into the cart")
//   }


const addcart = (product) =>
    {   
        var cartdata = JSON.parse(localStorage.getItem("mcart") || "[]");        
        var c = 0;
        for(var i=0;i<cartdata.length;i++)
        {
            if(product.id == cartdata[i].id)
            {
                alert("Product is already in cart");
                c++;
            }
        }
        if(c == 0)
        {
            cartdata.push(product);
            localStorage.setItem("mcart",JSON.stringify(cartdata));
            alert("Product Added in Cart...")
        }
              
        console.log(cartdata)
        // navigate("/cart");
    }
    
  const sortBylow =(x) => {
    setSort(x)

    
    }


    
    
   // console.log(data)

  return (
    <>    
    
    <Navbar/>
<div id="mainsection">
    
            <div id="leftsection">

            <h4>FILTER</h4>
            <button onClick= {() => {sortBylow("l")} }>Low To High</button>
            <button onClick= {() => {sortBylow("h")} } >High To Low</button>
                <h4>CATEGORY</h4>
            <button onClick={() => {setVal("T-shirt")}}>T-Shirt</button>
            <button onClick={() => {setVal("Jeans")}}>Jeans</button>
            <button onClick={() => {setVal("Casual-shirt")}}>Casual Shirt</button>
            <button onClick={() => {setVal("Formal-shirt")}}>Formal Shirt</button>
          
        
           
            </div>
          
            <div id="rightsection">
    
   
                <h6></h6>
        <div className='item-container1'>
        {todos.filter((el) => {

                if(el.category === val)
                {
                  return el.category ===val
                }
                else if(val === "")
                {
                    return el
                }
    
              })
              .sort((a,b) => 
              {
                  if(sorting == "l")
                  {
                    return a.price - b.price;
                  }
                  else if(sorting == "h")
                  {
                    return b.price - a.price;
                  }

              })
           .map((Men) => (
            <div className='items'>
                <img src={Men.img_url} alt='' />
                <p>{Men.Title}</p>
                <h3 className='price'>{"₹"+Men.price}</h3>
                <p className='priceoff'>{Men.priceoff}</p>
                <p className='discount'>{Men.discount+"%"+" OFF"}</p>
                <br/>
                 <button className='btn_shop'onClick={() => addcart(Men)}>Add To Cart</button>
            </div>          
            ))}
        </div>
        </div>
     </div>
       <Footer/>

    </>
  ) 
}

export {Men} 
