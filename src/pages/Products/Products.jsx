import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './../../component/loader/Loader';
import { Link } from 'react-router-dom';
import './products.css'
function Products() {
  const [loader, setLoader] = useState(true);
const[products,setProducts]=useState([]);
  const getProducts = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/products`);
    console.log(data.products);

    setProducts(data.products);
    setLoader(false);
  }
  useEffect(() => {
    getProducts();
  }, []);
  if (loader) {
    return <Loader/>
  }
  return (
    <>

<div className='row  '>
    {products.map((pro)=>(
        

 <div className="card flex-row mt-4 bgg"  key={pro._id} style={{width: '40rem'}}>
  <img src={pro.mainImage.secure_url} className="card-img-top yy" alt={pro.name} />
  <div className="card-body">
    <h4 className="card-title">{pro.name}</h4>
    <p className="card-text pp">{pro.description}</p>
    <h3 className="card-text">{pro.price} 💲 </h3>
    <Link to={`/ProDetails?id=${pro._id} `}className="btn btn-outline-dark lin">Show details</Link>

  </div>
</div>


     
    ))}
    </div>
    </>
  )
}

export default Products