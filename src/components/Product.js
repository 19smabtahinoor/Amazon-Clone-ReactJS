// import Image from 'next/image';
// import React, { useState } from 'react';
// import Currency from 'react-currency-formatter'

// const MAX_RATING = 5
// const MIN_RITING = 1

// function Product({id,title,price,description,category,image }) {
//     const[rating] = useState(
//         Math.floor(Math.random() * (MAX_RATING - MIN_RITING + 1)) + MIN_RITING
//     )
//     // const [hasPrime] = useState(Math.random() < 0.5)
//     const [hasPrime] = useState("Prime")
//     return (
//         <div className="relative flex flex-col m-5 bg-white p-8 z-30 rounded-lg">
//             <p className="absolute top-2 right-2 p-1 rounded text-xs text-gray-600 bg-yellow-400  z-30">{category}</p>
//             <Image src={image} width={200} height={200} objectFit="contain"/>
//             <h4 className="font-bold my-2 line-clamp-1">{title}</h4>

//             <div className="flex">
//             {Array(rating).fill().map((_,i) => (

//                 <svg className="w-4 h-4" fill="#FBBF24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
//             ))}
//             </div>

//              <p className="text-xs text-gray-500 my-4 line-clamp-2">{description}</p>
//              <div className="font-extrabold">
//                  <Currency quantity={price} />
//              </div>


//              {hasPrime && (
//                  <div className="flex space-x-2 items-center">
//                      <img className="w-12 h-12" src="https://links.papareact.com/fdw" alt="primeimage"/>
//                      <p className="text-sm font-semibold text-gray-500">FREE Next-day Delivery</p>
//                  </div>
//              )}

//              <button className="button mt-3">ADD TO BUSKETS</button>
//         </div>
//     );
// }

// export default Product;


// {"id":"recZkNf2kwmdBcqd0","name":"accent chair","price":25999,"image":"https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160","colors":["#ff0000","#00ff00","#0000ff"],"company":"marcos","description":"Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge","category":"office","shipping":true}

import React, { useState } from 'react';
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';


const MAX_RATING = 5
const MIN_RITING = 1

function Product({ id, title, price, description, category, image }) {
    const dispatch = useDispatch()

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RITING + 1)) + MIN_RITING
    )
    const [hasPrime] = useState(Math.random() < 0.5)
    // const [hasPrime] = useState("Prime")

    const addItemToBusket = () => {
        const product = {
            id, title, price, description, category, image
        }

        //Sending the product as an action to the REDUX store..the basket slice
        dispatch(addToBasket(product))
    }


    return (
        <div className="relative flex flex-col m-5 bg-white p-8 z-30 rounded-lg">
            <p className="absolute top-2 right-2 p-1 rounded text-xs text-gray-600 bg-yellow-400  z-30">{category}</p>
            <div className="productImagewrapper rounded-lg mt-3">
            <img src={image} className="productImage rounded-lg" />
            </div>
            <h4 className="font-bold my-2 line-clamp-1">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (

                    <svg className="w-4 h-4" fill="#FBBF24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
            </div>

            <p className="text-xs text-gray-500 my-4 line-clamp-3">{description}</p>
            <div className="font-extrabold">
                <Currency quantity={price} />
            </div>


            {hasPrime && (
                <div className="flex space-x-2 items-center">
                    <img className="w-12 h-12" src="https://links.papareact.com/fdw" alt="primeimage" />
                    <p className="text-sm font-semibold text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button className="button mt-3" onClick={addItemToBusket}>ADD TO BUSKETS</button>
        </div>
    );
}

export default Product;