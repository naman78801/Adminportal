// // import React, { useState, useEffect } from 'react'
// // import ProductCard from './ProductCard'
// // const url = 'https://dummyjson.com/products'


// import axios from 'axios';
// // Define the new product data
// const newProduct = {
//   "id": 31,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 1549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   "images": [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//   ]
// };


// const Home = () => {



//   // ----------fetch data----------
//   // const [product, setProductData] = useState([]);

//   // const fetchData = async () => {
//   //     try {
//   //         const response = await fetch("https://dummyjson.com/products");
//   //         const data = await response.json();
//   //         setProductData(data.products);
//   //     } catch (error) {

//   //     }
//   // }

//   // useEffect(() => {
//   //     fetchData();
//   // }, [])


//   ///----------Post Data-----------
//   //  async function postJSON(data) 


//   //  const postJSON=async()=>{

//   //   console.log(newProduct);

//   //   try {
//   //     const response = await fetch("https://dummyjson.com/products", {
//   //       method: "POST", // or 'PUT'
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(newProduct),
//   //     });

//   //     const result = await response.json();
//   //     console.log("Success:", result);
//   //   } catch (error) {
//   //     console.error(" Error:", error);
//   //   }
//   // } 

//   // const handleSubmit = async () => {
//   //   try {
//   //     const response = await axios.post('https://dummyjson.com/products',  newProduct);
//   //     console.log(response);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const handleSubmit = async() => {
//    await axios
//       .post("https://dummyjson.com/products", newProduct)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         if (error.response) {
//           console.log(error.response);
//           console.log("server responded");
//         } else if (error.request) {
//           console.log("network error");
//         } else {
//           console.log(error);
//         }
//       });
//   }



//   return (
//     <>
//       <button onClick={handleSubmit}  >add new</button>

//     </>
//   )
// }

// export default Home















  

 
import ProductCard from "../ProductCard";


import axios from "axios";
import React, { useState } from "react";
import  Record from '../Records'
import  Pagination  from "../Pagination";

const baseURL = "https://013d-49-205-211-7.ngrok-free.app/clients";
// const baseURL= "https://jsonplaceholder.typicode.com/users"

export default function Home1() {


  // const newProduct = { 
  //   "id": 11,
  //   "name": "Leccccccanne Graham",
  //   "username": "Breccccct",
  //   "email": "Sincercccccccce@april.biz",
  //   "address": {
  //     "street": "Kulas Light",
  //     "suite": "Apt. 556",
  //     "city": "Gwesssssssnborough",
  //     "zipcode": "929344444498-3874",
  //     "geo": {
  //       "lat": "-37.3159",
  //       "lng": "81.1496"
  //     }
  //   },
  //   "phone": "1-770-736-8031 x56442",
  //   "website": "hildegard.org",
  //   "company": {
  //     "name": "Romaguera-Crona",
  //     "catchPhrase": "Multi-layered client-server neural-net",
  //     "bs": "harness real-time e-markets"
  //   }
  // };

  const [data, setPost] = React.useState();

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(response.data)
      setPost(response.data);
    });

    
  }, []);



  // console.log(data);


  // function createPost() {
  //   axios
  //     .post(baseURL, newProduct)
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // function updatePost(){
  //   axios.put(`${baseURL}/2`,newProduct).then((response)=>{
  //     setPost(response.data)
  //   })
  // }

  // function deletePost(){
  //   axios.delete(`${baseURL}/1`).then((response)=>{
  //      console.log(data)
  //   })
  // }

   //-------Pagination--------------


   const [currentPage,setCurrentPage]=useState(1);
   const [recordsPerPage]=useState(10);

   const indexOfLastRecord=currentPage*recordsPerPage;
   const indexOfFirstRecord=indexOfLastRecord-recordsPerPage;

   const currentRecord= data.slice(indexOfFirstRecord,indexOfLastRecord);

   const nPages=Math.ceil(data.length/recordsPerPage);


  return (
    <>  

          
       

       {/* <Record data={currentRecord}/> */}
       {/* <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}




      {/* <h1>{post.name}</h1> */}
      {/* <p>{post.body}</p> */}
      {/* <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>

      <button onClick={ deletePost}>delete Post</button> */}
    </>
  );
}