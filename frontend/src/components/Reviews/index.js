// import './index.css'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom'
// import { getUserReviews } from '../../store/reviews';

// function Reviews(){

//     const dispatch = useDispatch();
//     const history = useHistory();
//     const sessionUser = useSelector(state=> state.session.user)
//     const allReviews = useSelector(state => state.reviews)
//     //const locations = Object.values(allLocations)
//     // console.log(allReviews, '***** this is what i want')
//     const reviewArr = Object.values(allReviews);
//     console.log(reviewArr)


//     useEffect(()=>{
//         if(sessionUser){
//             const userId = sessionUser.id
//             dispatch(getUserReviews(userId))
//         }
//     }, [dispatch]) //maybe delete alllocations from here



//     function deleteItem(e, reviewId) {
//         e.preventDefault();
//         e.stopPropagation()
//         // return dispatch(deleteUserLocations(reviewId))
//     }
//     return (
//         <>
//             <div>
//                 <h1 className='user-listings-header'>Your Reviews</h1>
//             </div>
//             <div id="main-container">
//                 <div id="locations-layout">
//                  {allReviews? reviewArr.map((review) => {
//                         return (
//                             <div key={`${review.id}`}id="card-container">
//                                 <div className="house-cards">
//                                     <a href={`/locations/${review.id}`} id="a-locations-tag">
//                                         <div className="house-details">
//                                             <h3>{`${review.review}`}</h3>
//                                             <span>{`Review: ${review.rating}`}</span>
//                                         </div>
//                                     </a>
//                                     <div className='user-locations-buttons'>
//                                         {/* <button className='user-listings-edit-button' id={`edit-button-${review.id}`} onClick={(e) => {editButton(e, review.id)}} >Edit Review</button> */}
//                                         <button type="submit" className='user-listings-delete-button' id={`delete-button-${review.id}`}
//                                             onClick={(e) => deleteItem(e, review.id)}>Delete Review</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     }): <h2>Loading</h2>}
//                  </div>
//              </div>
//          </>
//     )
// }

// export default Reviews
