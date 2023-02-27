import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

const Cart = () => {

    
    let[items,setProducts]=useState([])
    
    let params=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`https://dummyjson.com/products/${params.id}`)
            let data =await response.json()
          
            setProducts(data.products)
        }
        
        fetchData()
    },[items])
    return ( 
        
            <div className="cart">
            {
                items.map((data)=>( 
                <div  className="main">
                    <div className="image">
                    <img  id="plot" src={data.thumbnail} alt="" />
                    </div>
                    <div className="details">
                    <h1>Brand Title:{data.title}</h1>
                    <h1>Description:{data.description}</h1>
                    <h1>Stock:{data.stock}</h1>
                    <h1>Rating:{data.rating}</h1> 
                    <h1>Price:{data.price}</h1> 
                    <h1>Discount:{data.discountPercentage} %</h1> 
                    

                    </div> 
                </div>
                    

                ))
            }
        </div>
        
     );
}
 
export default Cart;