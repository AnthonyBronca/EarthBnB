// import React from 'react'
// import { FaStar } from 'react-icons/fa';
// import {useState} from 'react'

// function StarRating() {

//     const [rating, setRating] = useState(null)
//     const [hover, setHover] = useState(null)

//     return <div>
//         {[...Array(5)].map((star, i) => {
//             const ratingValue = i + 1;
//             return (
//                 <label>
//                     <input type="radio" name='rating' value={ratingValue} onClick={(e)=> setRating(ratingValue)} />
//                     <FaStar
//                     className="star"
//                     color={ratingValue <= (hover ||rating) ? "#ffc107" : "grey"}
//                     size={30}
//                     onMouseEnter= {()=> setHover(ratingValue)}
//                     onMouseLeave={()=> setHover(null)} />
//                 </label>
//             )
//         })}
//     </div>

// }

// export default StarRating
