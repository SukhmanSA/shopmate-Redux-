import "./ProductCard.css";
import { useEffect, useState } from "react"
import { add,remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const [inCart,setInCart] = useState(false)
  const products = useSelector(state=> state.cartState.cartList)
  useEffect(()=>{
    const productInCart = products.find(cartItem=> cartItem.id === product.id);
    if(productInCart){
      setInCart(true)
    }else{
      setInCart(false)
    }
  },[products,product.id])
  const {name, price, image} = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
      {inCart ? <button className="remove" onClick={()=> dispatch(remove(product))}>Remove</button> : <button className='add' onClick={()=> dispatch(add(product))}>Add To Cart</button>}
      </div>
    </div>
  )
}
