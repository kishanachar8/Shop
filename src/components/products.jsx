import '../styles/products.css'
import { useState, useEffect } from "react";
import { useNavigate,useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
const Products = () => {
    let location=useLocation();
    let navigate=useNavigate();
    let [items, setProducts] = useState([])
    

    
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(`https://dummyjson.com/products`)
            let data = await response.json()
            
            setProducts(data.products)
            
        }

        fetchData()
    })
    let read=(id)=>{
        if(location.pathname=='/products/'){
            navigate(`/products/${id}`) 
        }
        else{
            navigate(`/products/${id}`)
        }
    }
    return (
        <div className="products">
            <h1>Products</h1>
            {
                items.map((data) => (
                    <div className="main">
                        <div className="image">
                            <img id="plot" src={data.thumbnail} alt="" />
                        </div>
                        <div className="details">
                            <h1>Brand Title:{data.title}</h1>
                            <h1>Description:{data.description}</h1>
                            <h1>Stock:{data.stock}</h1>
                            <h1>Rating:{data.rating}</h1>
                            <h1><span style={{color:"red"}}>{data.discountPercentage}%</span>  ₹{Math.round((data.price*80)-(data.price*data.discountPercentage*80/100))}</h1>
                            <h1>MRP:<strike> ₹{(data.price*80)}</strike> </h1> 
                            <Link to="/cart/" >Buy Now</Link>
                            <button onClick={()=>read(data.id)}>View Cart</button>
                        </div>
                    </div>


                ))
            }
        </div>
    );
}

export default Products;