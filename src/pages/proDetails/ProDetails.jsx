import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Style from './proDetails.module.css'
function ProDetails() {
    const [details, setDetails] =useState([]);
const [reviews, setReviews] = useState([]);
const [images, setImages] = useState([]);
  const getDetails =async()=>{
      const urlParams=new URLSearchParams(window.location.search);//بترجعلي الراميترز الموجودة بالرابط
      const id=urlParams.get("id"); //بتجيب الاي دي 
     // console.log("id=",id);
      const {data}=await axios(`${import.meta.env.VITE_API_URL}/products/${id}`);

        console.log("data",data.product.subImages  );
        await setDetails(data.product);
       // console.log("details",data.product);
        setReviews(data.product.reviews  );
        setImages(data.product.subImages  );
  }
  useEffect(() => {
      getDetails();
    }, []);
  return (
    <>
    <div className={Style.boddy}>
   
    <div className={Style.img}>
  {images.map((img)=>(
    <img  className={Style.img2} key="1"src={img.secure_url}  alt="..." />
  ))}
 
  </div>
{/* <img src={details.mainImage.secure_url}/> */}
<div className={` ${Style.descrip} `}>
<h4>{details.name}</h4>
<p className='card-body'>{details.description}</p>
</div>
  
<div className="d-flex justify-content-center pt-3 pb-2"> <input type="text" name="text" placeholder="+ Add a note" className="form-control addtxt" /> </div>
 {/* card */}
<div className="d-flex flex-wrap   border-left border-right">

{reviews.map((rev)=>(
  <div className= {`d-flex py-2   ${Style.k}`}  key={rev._id}>
  <div className={`second py-2 px-2 ${Style.k2}`}> <span className="text1">Customer opinion : {rev.comment}</span>
      <div className='d-flex '><img src="https://i.imgur.com/AgAC1Is.jpg" width={18} /><span className="text2">  Martha</span></div>
      <div>
        <span className="text3">Customer rating :  {rev.rating}</span>
        </div>
    
  </div>
</div>
  // <div className='reviews btn bg-sucsess' key={rev._id}>
  // <p>Customer opinion:{rev.comment}</p>
  // <p>Customer rating:{rev.rating}</p>
  //   </div>
))}
  </div>



   
  </div>
    </>
  )
}

export default ProDetails